import React from 'react';

const Header = (props) => {
  return (
    <div className='header'>
      <div className='logo'>Thai Months Memory Game</div>
      <div className='score-box'>
        <div>Score: {props.score}</div>
        <div>Best Score: {props.bestScore}</div>
      </div>
    </div>
  );
};

export default Header;

// maybe put this in a folder
