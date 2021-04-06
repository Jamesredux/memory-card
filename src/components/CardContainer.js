import React, { useEffect, useState } from 'react';
import Card from './Card';

const CardContainer = (props) => {
  const startCards = [
    {
      id: 1,
      month: 'January',
      thai: 'มกราคม',
    },
    {
      id: 2,
      month: 'February',
      thai: 'กุมภาพันธ์',
    },
    {
      id: 3,
      month: 'March',
      thai: 'มีนาคม',
    },
    {
      id: 4,
      month: 'April',
      thai: 'เมษายน',
    },
    {
      id: 5,
      month: 'May',
      thai: 'พฤษภาคม',
    },
    {
      id: 6,
      month: 'June',
      thai: 'มิถุนายน',
    },
    {
      id: 7,
      month: 'July',
      thai: 'กรกฎาคม',
    },
    {
      id: 8,
      month: 'August',
      thai: 'สิงหาคม',
    },
    {
      id: 9,
      month: 'September',
      thai: 'กันยายน',
    },
    {
      id: 10,
      month: 'October',
      thai: 'ตุลาคม',
    },
    {
      id: 11,
      month: 'November',
      thai: 'พฤศจิกายน',
    },
    {
      id: 12,
      month: 'December',
      thai: 'ธันวาคม',
    },
  ];

  const [cards, setCard] = useState([
    {
      id: 1,
      month: 'January',
      thai: 'มกราคม',
    },
    {
      id: 2,
      month: 'February',
      thai: 'กุมภาพันธ์',
    },
    {
      id: 3,
      month: 'March',
      thai: 'มีนาคม',
    },
    {
      id: 4,
      month: 'April',
      thai: 'เมษายน',
    },
    {
      id: 5,
      month: 'May',
      thai: 'พฤษภาคม',
    },
    {
      id: 6,
      month: 'June',
      thai: 'มิถุนายน',
    },
    {
      id: 7,
      month: 'July',
      thai: 'กรกฎาคม',
    },
    {
      id: 8,
      month: 'August',
      thai: 'สิงหาคม',
    },
    {
      id: 9,
      month: 'September',
      thai: 'กันยายน',
    },
    {
      id: 10,
      month: 'October',
      thai: 'ตุลาคม',
    },
    {
      id: 11,
      month: 'November',
      thai: 'พฤศจิกายน',
    },
    {
      id: 12,
      month: 'December',
      thai: 'ธันวาคม',
    },
  ]);
  const [reset, setReset] = useState(false);

  // const handleClick = (e) => {
  //   console.log('cards');
  //   console.log(cards);
  //   console.log('selected');
  //   console.log(selected);
  //   const picked_card = parseInt(e.target.dataset.key);
  //   const cardsCopy = [...cards];
  //   if (checkCard(picked_card) === true) {
  //     resetCards();
  //     props.gameOver();
  //   } else {
  //     setSelected((selected) => [...selected, picked_card]);

  //     shuffleCards(cardsCopy);
  //     setCard([...cardsCopy]);
  //   }
  // };

  const handleClick = (gameOver) => {
    setReset(false);
    console.log('card container handle click');
    console.log(gameOver);
    const newArray = shuffleCards(cards);
    console.log(newArray);
    if (gameOver === true) {
      setCard((cards) => [...newArray]);
      setReset(true);
      props.gameOver();
    } else {
      props.addScore();
      setCard((cards) => [...newArray]);
      // shuffleCards(cards);
      // setCard([...cardsCopy]);
    }
  };

  const shuffleCards = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const resetCards = () => {
    console.log('reset in useeffect');
    setCard([...startCards]);
    //  setSelected((selected) => []);
  };

  return (
    <div>
      <div className='card-wrapper'>
        {console.log('reset in container')}
        {console.log(reset)}
        {cards.map(function (card) {
          return (
            <div key={card.id}>
              <Card handleClick={handleClick} card={card} reset={reset} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardContainer;
