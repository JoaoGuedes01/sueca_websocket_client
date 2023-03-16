import React, { useState, useEffect } from 'react';
import './index.css'
import { Typography, List, Card, Button } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
const { Title } = Typography;


const PastGames = () => {
  const [matches, setMatches] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://suecawebsocketserver.joaoguedes01.repl.co/past-matches");
      console.log(response.data)
      setMatches(response.data);
    };

    fetchData();
  }, []);

  return (
    <div className='past-games-container'>
      <div className='past-games-container-wrapper'>
        <Title level={2} style={{ border: 'solid', padding: '1rem', borderRadius: '6px', margin: 0 }}>Past Games</Title>

        <List
          size="large"
          bordered
          dataSource={matches}
          style={{ width: '100%' }}
          renderItem={(item) =>
            <List.Item>
              <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <Card title={`Team ${item.teams[0].team} | ${item.teams[0].score}`} style={item.winning_team === item.teams[0].team ? { border: 'green solid' } : {}}><div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{item.teams[0].members[0].nick} | {item.teams[0].members[1].nick}</div></Card>
                <Card title={`Team ${item.teams[1].team} | ${item.teams[1].score}`} style={item.winning_team === item.teams[1].team ? { border: 'green solid' } : {}}><div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{item.teams[1].members[0].nick} | {item.teams[1].members[1].nick}</div></Card>
              </div>
            </List.Item>}
        />
        <Link to="/" style={{ width: '100%', textDecoration:'none' }}><Button type='primary' className='cancel-btn' >Go Back </Button></Link>

      </div>
    </div>
  )
}

export default PastGames