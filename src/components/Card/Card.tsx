import React from 'react';

interface Props {
  rank: string;
  suit: string;
}

const rankSymbols: { [key: string]: string } = {
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  10: '10',
  J: 'J',
  Q: 'Q',
  K: 'K',
  A: 'A',
};

const suitSymbols: { [key: string]: string } = {
  diams: '♦',
  hearts: '♥',
  clubs: '♣',
  spades: '♠',
};

const Card: React.FC<Props> = ({rank, suit}) => {
  return (
    <span className={`card rank-${rank.toLowerCase()} ${suit}`}>
      <span className="rank">{rankSymbols[rank]}</span>
      <span className="suit">{suitSymbols[suit]}</span>
    </span>
  );
};

export default Card;