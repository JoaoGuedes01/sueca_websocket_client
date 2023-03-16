import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home/index';
import Game from './Components/Game/index';
import PastGames from './Components/PastGames/index';
import About from './Components/About/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/past-games" element={<PastGames />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;