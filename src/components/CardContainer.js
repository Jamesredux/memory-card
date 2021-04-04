import React, { useEffect, useState } from 'react';

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

  const checkCard = (pickedCard) => {
    console.log('check cards');
    // just a method to end game if picked already
    cards.map((card) => {
      if (card.id === pickedCard && card.picked) {
        console.log(card);
        console.log(card.id);
        console.log('picked already');
        // props
        // end game
        return true;
      } else {
        return false;
      }
    });
  };

  useEffect(() => {
    const cardDivs = document.querySelectorAll('.card-box');

    const shuffleCards = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    };

    const handleClick = (e) => {
      console.log('handle click');
      const pickedCard = e.target.dataset.key;
      const cardsCopy = [...cards];
      if (checkCard(pickedCard)) {
        // end game
      } else {
        updateCards(pickedCard, cardsCopy);
        shuffleCards(cardsCopy);
      }

      console.log(cardsCopy);

      setCard([...cardsCopy]);
      console.log('cards cards');
      console.log(cards);

      //check if picked
      //update pick
      //update score
      //shuffle pack
    };

    const updateCards = (pickedCard, cardsCopy) => {
      console.log('update cards');
      cardsCopy.map((card) => {
        if (card.id === pickedCard) {
          card.picked = true;
        }
      });
    };

    cardDivs.forEach((card) => {
      card.addEventListener('click', (e) => {
        handleClick(e);
      });
    });

    return () => {
      cardDivs.forEach((card) => {
        console.log('removing listener');
        card.removeEventListener('click', (e) => {
          handleClick(e);
        });
      });
    };
  }, []);

  return (
    <div>
      <div className='card-wrapper'>
        {console.log('+++++++++++++++++')}
        {console.log(cards)}
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
