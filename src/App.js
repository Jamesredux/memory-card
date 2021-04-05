import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import CardContainer from './components/CardContainer';

function App() {
  const [score, setScore] = useState(12);
  const [bestScore, setbestScore] = useState(0);

  const endGame = () => {
    console.log('called this fucker');
    setScore(0);
  };

  useEffect(() => {});

  return (
    <div className='App'>
      <Header score={score} bestScore={bestScore} />
      <CardContainer gameOver={endGame} score={score} />
    </div>
  );
}

export default App;
