import React, { useState } from 'react';
import cyberjob from '../assets/cyberjob.png';

const CardContainer = () => {
  return (
    <div>
      <div>This is where the cards will go</div>;
      <img src={cyberjob} alt='job' />
    </div>
  );
};

export default CardContainer;
