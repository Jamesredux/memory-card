import React, { useEffect, useState } from 'react';

function updateCard(key) {
  console.log(key);
}

const CardContainer = () => {
  const [cards, setCard] = useState([
    {
      id: '1',
      month: 'January',
      thai: 'มกราคม',
      picked: false,
    },
    {
      id: '2',
      month: 'February',
      thai: 'กุมภาพันธ์',
      picked: false,
    },
    {
      id: '3',
      month: 'March',
      thai: 'มีนาคม',
      picked: false,
    },
    {
      id: '4',
      month: 'April',
      thai: 'เมษายน',
      picked: false,
    },
    {
      id: '5',
      month: 'May',
      thai: 'พฤษภาคม',
      picked: false,
    },
    {
      id: '6',
      month: 'June',
      thai: 'มิถุนายน',
      picked: false,
    },
    {
      id: '7',
      month: 'July',
      thai: 'กรกฎาคม',
      picked: false,
    },
    {
      id: '8',
      month: 'August',
      thai: 'สิงหาคม',
      picked: false,
    },
    {
      id: '9',
      month: 'September',
      thai: 'กันยายน',
      picked: false,
    },
    {
      id: '10',
      month: 'October',
      thai: 'ตุลาคม',
      picked: false,
    },
    {
      id: '11',
      month: 'November',
      thai: 'พฤศจิกายน',
      picked: false,
    },
    {
      id: '12',
      month: 'December',
      thai: 'ธันวาคม',
      picked: false,
    },
  ]);

  useEffect(() => {
    console.log('use effect');
    console.log(cards);

    const shuffleCards = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    };

    const newOrder = shuffleCards(cards);

    console.log(newOrder);
    setCard(newOrder);
    console.log('***************');
    console.log(cards);
    const cardDivs = document.querySelectorAll('.card-box');
    cardDivs.forEach((card) => {
      card.addEventListener('click', (e) => {
        console.log(e);
        updateCard(e.target.dataset.key);
      });
    });

    return () => {
      cardDivs.forEach((card) => {
        card.removeEventListener('click', (e) => {
          console.log(e);
          updateCard(e.target.dataset.key);
        });
      });
    };
  }, [cards]);

  return (
    <div>
      <div className='card-wrapper'>
        {cards.map(function (card) {
          return (
            <button className='card-box' data-key={card.id} key={card.id}>
              <div>{card.thai}</div>
              <div>{card.month}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CardContainer;
