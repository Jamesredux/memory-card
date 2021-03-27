import React from 'react';

const Header = (props) => {
  return (
    <div className='header'>
      <div>Score: {props.score}</div>
      <did>Best Score: {props.bestScore}</did>
    </div>
  );
};

export default Header;

// maybe put this in a folder
