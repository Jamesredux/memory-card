import React from 'react';

const Header = (props) => {
  return (
    <div className='header'>
      <div>Score: {props.score}</div>
      <div>Best Score: {props.bestScore}</div>
    </div>
  );
};

export default Header;

// maybe put this in a folder
