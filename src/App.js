import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import CardContainer from './components/CardContainer';

function App() {
  const [score, setScore] = useState(77);
  const [bestScore, setbestScore] = useState(0);

  return (
    <div className='App'>
      <Header score={score} bestScore={bestScore} />
      <CardContainer />
    </div>
  );
}

export default App;
