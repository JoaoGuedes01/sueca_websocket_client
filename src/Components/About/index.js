import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const About = () => {
  return (
    <div>
      <div>é tipo so jogar :l</div>
      <Link to="/" style={{ width: '100%', textDecoration: 'none' }}><Button type='primary' className='cancel-btn' >Go Back </Button></Link>
    </div>

  )
}

export default About