import React, { useState } from 'react';

const Card = (props) => {
  const [picked, setPicked] = useState(false);

  const resetPicked = () => {
    if (picked === true) {
      setPicked(false);
    }
  };

  if (props.reset === true) {
    resetPicked();
  }

  const updateCard = (e) => {
    picked ? props.handleClick(true) : props.handleClick(false);

    setPicked(true);
  };

  return (
    <button className='card-box' onClick={updateCard} data-key={props.card.id}>
      <div className='thai-month'>{props.card.thai}</div>
      {props.showenglish && <div>{props.card.month}</div>}
    </button>
  );
};

export default Card;
