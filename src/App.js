import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CardContainer from './components/CardContainer';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setbestScore] = useState(0);

  const addScore = () => {
    setScore(score + 1);
  };

  const endGame = () => {
    setScore(0);
  };

  useEffect(() => {
    if (score > bestScore) {
      setbestScore(score);
    }
  }, [score, bestScore]);

  return (
    <div className='App'>
      <Header score={score} bestScore={bestScore} />
      <CardContainer gameOver={endGame} addScore={addScore} score={score} />
      <Footer />
    </div>
  );
}

export default App;
