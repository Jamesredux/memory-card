import React from 'react';

const Header = (props) => {
  const toggleEnglish = () => {
    props.toggleEnglish();
  };
  return (
    <div className='header'>
      <div className='logo'>Thai Months Memory Game</div>
      <div className='score-box'>
        <div>Score: {props.score}</div>
        <div>Best Score: {props.bestScore}</div>
        <div>
          Hide English:
          <input
            type='checkbox'
            name='hideEnglish'
            id=''
            onClick={toggleEnglish}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

// maybe put this in a folder
