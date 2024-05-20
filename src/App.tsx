import './App.css';
import Card from './components/Card/Card.tsx';
import {useState} from 'react';
import CardDeck from './lib/CardDeck.ts';

const App = () => {
  interface IDeck {
    rank: string;
    suit: string;
  }

  const [cards, setCards] = useState<IDeck[]>([]);
  const [deck, setDeck] = useState(new CardDeck());

  const dealTheCards = () => {
    const dealtCards = deck.getCards(5);
    setCards(dealtCards);
    setDeck(deck);
  };

  return (
    <>
      <button type="button" onClick={dealTheCards}>Раздать карты</button>
      {cards.length > 0 ? (
        <div className="playingCards faceImages">
          {cards.map((card, index) => (
            <Card key={index} suit={card.suit} rank={card.rank}/>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default App;