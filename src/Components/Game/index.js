import React, { useState, useEffect } from 'react';
import './index.css'
import { Input, Space, Button, Card, notification, message } from 'antd';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';
import CardSVG from './CardSVG'
import CardSuit from './CardSuit'
import SVGIcon from './SVGIcon'


const { Title, Text } = Typography;
function Game() {

  const [joined, setJoined] = useState(false)
  const [scores, setScores] = useState(false)
  const [started, setStarted] = useState(false)
  const [nickname, setNickname] = useState()
  const [players, setPlayers] = useState([])
  const [player, setPlayer] = useState([])
  const [hand, setHand] = useState([])
  const [turn, setTurn] = useState([])
  const [currentPlayer, setCurrentPlayer] = useState([])
  const [rounds, setRounds] = useState([])
  const [puxado, setPuxado] = useState([])
  const [team, setTeam] = useState([])
  const [trump, setTrump] = useState([])
  const [otherPlayers, setOtherPlayers] = useState([])
  const [currentPlayedCard, setCurrentPlayedCard] = useState()
  const [playerLayout, setPlayerLayout] = useState({})
  const [ws, setWs] = useState()
  const [serverState, setServerState] = useState('offline')
  const [api, contextHolder] = notification.useNotification();
  const [messageApi, contextHolderMessages] = message.useMessage();

  useEffect(() => {
    // Create a new WebSocket connection
    const newWs = new WebSocket('wss://suecawebsocketserver.joaoguedes01.repl.co');

    newWs.onopen = () => {
      console.log('Websocket connection created')
      setServerState('online')
    }

    newWs.onclose = () => {
      console.log('Websocket connection closed')
    }

    // Handle incoming messages
    newWs.onmessage = (event) => {
      console.log('Received message:', event.data);
      const data = JSON.parse(event.data)
      handleMessage(data)
    };

    // Set the WebSocket object in state
    setWs(newWs);


  }, []);

  const getCurrentPlayer = (players) => {
    players.map((player) => {
      if (player.turn) {
        setCurrentPlayer(player.player)
      }
    })
  }

  const handleMessage = (data) => {
    switch (data.type) {
      case 'updatePlayers':
        console.log('Updating all players')
        console.log(data.players)
        setPlayers(data.players)
        getCurrentPlayer(data.players)
        break
      case 'maxCap':
        messageApi.open({
          type: 'error',
          content: data.msg,
        });
        break
      case 'join-acc':
        messageApi.open({
          type: 'success',
          content: `Connected to game server`,
        });
        setJoined(true)
        setPlayer(data.player)
        break
      case 'startGame':
        setStarted(true)
        setPlayers(data.players)
        getCurrentPlayer(data.players)
        break
      case 'dealCards':
        console.log(data)
        setHand(data.cards)
        break
      case 'updateGame':
        console.log(data)
        setHand(data.cards)
        setOtherPlayers(data.players)
        setTurn(data.turn)
        setRounds(data.rounds)
        setCurrentPlayedCard(data.played_card)
        setPuxado(data.puxado)
        setScores(data.scores)
        setTrump(data.trump)
        setTeam(data.team)
        ArrangePlayers(data)

        console.log(data)
        break
      case 'announceWinner':
        openNotification('top', `${data.winner.nick} won this round with ${data.winner.played_card.value} of ${data.winner.played_card.suit}`)
        break
      case 'announceWinnerTeam':
        console.log(data.game_results)
        openNotification('top', `Team ${data.game_results.winning_team} won!`)
        break
      case 'playerExists':
        messageApi.open({
          type: 'error',
          content: data.msg,
        });
        break
    }
  }


  const ArrangePlayers = (data) => {
    let playerPositions = {}
    console.log('PLAYERS')
    console.log(data.players)
    console.log('PLAYER')
    console.log(data.nick)

    data.players.map((player_loop, player_index) => {
      if (player_loop.nick === data.nick) {
        let curr_player = player_loop
        let next_player = player_index + 1
        let previous_player = player_index - 1

        if (next_player === data.players.length) { next_player = 0 }
        if (previous_player < 0) { previous_player = 3 }


        let front_player = {}

        data.players.map((player_loop_2) => {
          if (player_loop_2.nick !== curr_player.nick) {
            if (player_loop_2.team === curr_player.team) {
              front_player = player_loop_2
            }
          }
        })

        playerPositions['left_pos'] = data.players[next_player]
        playerPositions['right_pos'] = data.players[previous_player]
        playerPositions['front_pos'] = front_player
        playerPositions['back_pos'] = curr_player
      }

    })

    console.log('PLAYER POS')
    console.log(playerPositions)

    setPlayerLayout(playerPositions)
  }
  const handleInputChange = (event) => {
    setNickname(event.target.value);
  }

  const submitNickname = () => {
    if (nickname === '' || nickname === undefined) {
      messageApi.open({
        type: 'error',
        content: `Please don't leave username empty!`,
      });
    } else {
      const submitData = {
        type: 'join',
        nick: nickname
      }
      ws.send(JSON.stringify(submitData))
    }
  }

  const joinTeam = (team_number) => {
    let counter = 0
    players.map((player) => {
      if (player.team === team_number) { counter += 1 }
    })

    if (counter === 2) {
      messageApi.open({
        type: 'error',
        content: `Team ${team_number} is already full`,
      });
    } else {
      const submitData = {
        type: 'join_team',
        team: team_number,
        nick: nickname
      }
      ws.send(JSON.stringify(submitData))
    }
  }

  const StartGame = () => {
    const submitData = {
      type: 'start_game'
    }
    ws.send(JSON.stringify(submitData))
  }

  const PlayCard = (card) => {
    if (card.suit !== puxado && hasPuxado()) {
      messageApi.open({
        type: 'warning',
        content: 'Play the mandatory suit please',
      });
    } else {
      const submitData = {
        type: 'play_card',
        nick: nickname,
        card: card
      }
      ws.send(JSON.stringify(submitData))
    }
  }

  const hasPuxado = () => {
    let haspuxado = false
    hand.map((card) => {
      if (card.suit === puxado) {
        haspuxado = true
        return
      }
    })

    return haspuxado
  }

  const openNotification = (placement, msg) => {
    api.info({
      message: `Notification ${placement}`,
      description: msg,
      placement,
    });
  };


  return (
    <>
      {contextHolder}
      {contextHolderMessages}
      {
        joined && !started &&
        <div className='teams-select-container'>
          <div className='teams-select-container-wrapper'>
            <Title>{player.nick}</Title>
            <div>
              <Title level={3}>Teamless Players</Title>

              <div className='team-members-container'>

                {
                  players.map((player_item) => {
                    if (player_item.team === 0) {
                      if (player_item.player == player.nick) {
                        return <Card style={{ borderColor: '#74C041' }}>{player_item.player}</Card>
                      } else {
                        return <Card>{player_item.player}</Card>
                      }
                    }
                  })
                }
              </div>
            </div>

            <div>
              <div className='team-title-container'>
                <Title className='team-title' level={3} style={{ margin: 0 }}>Team 1</Title>
                <Button onClick={() => joinTeam(1)} shape="circle" icon={<PlusOutlined />} />
              </div>

              <div className='team-members-container'>

                {
                  players.map((player_item) => {
                    if (player_item.team === 1) {
                      if (player_item.player == player.nick) {
                        return <Card style={{ borderColor: '#74C041' }}>{player_item.player}</Card>
                      } else {
                        return <Card>{player_item.player}</Card>
                      }
                    }
                  })
                }
              </div>
            </div>
            <div>
              <div className='team-title-container'>
                <Title className='team-title' level={3} style={{ margin: 0 }}>Team 2</Title>
                <Button onClick={() => joinTeam(2)} shape="circle" icon={<PlusOutlined />} />
              </div>

              <div className='team-members-container'>

                {
                  players.map((player_item) => {
                    if (player_item.team === 2) {
                      if (player_item.player == player.nick) {
                        return <Card style={{ borderColor: '#74C041' }}>{player_item.player}</Card>
                      } else {
                        return <Card>{player_item.player}</Card>
                      }
                    }
                  })
                }
              </div>
            </div>
            {player.owner && players.length === 4 && <Button type='primary' onClick={StartGame} className='join-game-btn'>Start Game </Button>}
            <Button type='primary' onClick={() => window.location.reload()} className='cancel-btn'> Cancel</Button>

          </div>
        </div>
      }

      {!joined &&
        <>
          <div className='join-game-container'>
            <Space className='join-game-container-space' direction='vertical' size='middle' align='center'>
              <Title style={{ border: 'solid', padding: '1rem', borderRadius: '6px' }} >Join Game</Title>
              <Text>There can only be 4 players playing at a time</Text>
              <Text>Players with the same nicknames are not allowed</Text>
              <Text>You must wait until the server state turns green as the server might be sleeping</Text>
              <Input placeholder='username' onChange={handleInputChange} />
              <Button type='primary' onClick={submitNickname} className='join-game-btn'>Join Game </Button>
              <Link to="/" style={{ width: '100%' }}><Button type='primary' className='cancel-btn' >Cancel </Button></Link>
              <div className='server-state-container'>
                <Text level={5}>Server State - </Text>
                <SVGIcon type={serverState} />
              </div>
            </Space>
          </div>
        </>
      }

      {started &&
        <div className='game-page-back-color'>
          <div className='game-page-container'>
            <div className='score-container'>
              <Title level={3} style={{ margin: 0, color: '#ffffff' }}>Team 1 - {scores.team1}</Title>
              <Title level={3} style={{ margin: 0, color: '#ffffff' }}>Team 2 - {scores.team2}</Title>
            </div>
            <div className='game-metadata'>
              <Title level={5} style={{ margin: 0, color: '#ffffff' }}>Rounds - {rounds.length}</Title>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Title level={5} style={{ margin: 0, color: '#ffffff' }}>Mandatory - </Title>
                <CardSuit type={puxado} />
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Title level={5} style={{ margin: 0, color: '#ffffff' }}>Trump - </Title>
                <CardSuit type={trump} />
              </div>
            </div>

            <div className='player-game-container'>
              <Card title={`${playerLayout.front_pos.nick}`} align='center' headStyle={{ color: '#ffffff' }} style={playerLayout.front_pos.turn ? { border: 'solid 3px #0084FF', backgroundColor: '#777777', color: 'white' } : { backgroundColor: '#777777', color: 'white' }}>
                <div className='played-card' >
                  {
                    playerLayout.front_pos.played_card.suit === 'none' ? (
                      <div>waiting</div>
                    ) : <CardSVG value={playerLayout.front_pos.played_card.value} suit={playerLayout.front_pos.played_card.suit} />
                  }
                </div>
              </Card>

              <div className='left-right-players'>
                <Card title={`${playerLayout.left_pos.nick}`} align='center' headStyle={{ color: '#ffffff' }} style={playerLayout.left_pos.turn ? { border: 'solid 2px #0084FF', margin: 0, backgroundColor: '#777777', color: 'white' } : { backgroundColor: '#777777', color: 'white' }}>
                  <div className='played-card' >
                    {
                      playerLayout.left_pos.played_card.suit === 'none' ? (
                        <div>waiting</div>
                      ) : <CardSVG value={playerLayout.left_pos.played_card.value} suit={playerLayout.left_pos.played_card.suit} />
                    }

                  </div>
                </Card>

                <Card title={`${playerLayout.right_pos.nick}`} align='center' headStyle={{ color: '#ffffff' }} style={playerLayout.right_pos.turn ? { border: 'solid 2px #0084FF', backgroundColor: '#777777', color: 'white' } : { backgroundColor: '#777777', color: 'white' }}>
                  <div className='played-card' >
                    {
                      playerLayout.right_pos.played_card.suit === 'none' ? (
                        <div>waiting</div>
                      ) : <CardSVG value={playerLayout.right_pos.played_card.value} suit={playerLayout.right_pos.played_card.suit} />
                    }
                  </div>
                </Card>
              </div>
            </div>

            {
              currentPlayedCard.suit !== 'none' &&
              <CardSVG value={currentPlayedCard.value} suit={currentPlayedCard.suit} />
            }

            {
              turn &&
              <div style={{ border: 'solid 3px #0084FF', padding: '0.5rem', borderRadius: '8px' }}>
                <Text style={{ color: '#ffffff' }} strong={true}>{player.nick}</Text>
              </div>
            }

            <Space size='small' wrap={true}>
              {hand.map((card) => (
                <div onClick={() => { PlayCard(card) }} style={turn ? { cursor: 'pointer' } : { opacity: 0.6, pointerEvents: 'none' }}>
                  <CardSVG value={card.value} suit={card.suit} highlight={card.suit === puxado} />
                </div>
              ))}
            </Space>
            <Button onClick={() => window.location.reload()} className='cancel-btn' style={{ maxWidth: '20rem', marginTop: '2rem', border: 'none', color: '#ffffff' }}>Leave Game</Button>

          </div>
        </div>
      }
    </>
  );
}

export default Game;
