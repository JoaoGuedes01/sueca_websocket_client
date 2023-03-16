import React from 'react'
import { Link } from 'react-router-dom';
import './index.css'
import { Button, Space } from 'antd';

import SVG from './svg'
const Home = () => {
    return (
        <>
            <div className='menu-container'>
                <div className='menu-wrapper'>
                    <div className='menu-logo'>
                        <SVG type='logo' />
                    </div>

                    <Space direction='vertical' style={{ width: '100%' }}>
                        <Link to="/game"><Button type='primary' style={{ width: '100%' }} className='play-game-btn'>Play Game</Button></Link>
                        <Link to="/past-games"><Button type='primary' style={{ width: '100%' }} className='past-games-btn'>Past Games</Button></Link>
                        <Link to="/about"><Button type='primary' style={{ width: '100%' }} className='about-btn'>How to Play</Button></Link>
                    </Space>

                    <div className='menu-footer'>
                        <div>João Guedes 2023</div>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href=''><SVG type='github' /></a>
                            <a href='https://www.figma.com/file/UV8toO0O0stU5jmJbB8azu/Untitled?node-id=1%3A3&t=PywfrpNVIykawniS-1'><SVG type='figma' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home