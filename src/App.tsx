import './App.css';
import Card from './components/Card/Card.tsx';
import {useState} from 'react';
import CardDeck from './lib/CardDeck.ts';
import PokerHand from './lib/PokerHand.ts';

const App = () => {
  interface IDeck {
    rank: string;
    suit: string;
  }

  const [cards, setCards] = useState<IDeck[]>([]);
  const [deck, setDeck] = useState(new CardDeck());
  const [combination, setCombination] = useState('');

  const resetGame = () => {
    const cards = new CardDeck();
    const newDeck = cards.getCards(0);
    setDeck(cards);
    setCards(newDeck);
    setCombination('');
  };

  const dealTheCards = () => {
    let dealtCards;
    if (deck.cards.length < 5) {
      dealtCards = deck.getCards(2);
    } else  {
      dealtCards = deck.getCards(5);
    }
    setCards(dealtCards);
    setDeck(deck);

    const pokerHand = new PokerHand(dealtCards);
    const result = pokerHand.getOutcome();
    setCombination(result);
  };

  return (
    <div className="wrapper">
      <div>Количество кард в колоде: {deck.cards.length}</div>
      <div>Результат раунда: {combination}</div>
      <button type="button" onClick={dealTheCards} disabled={deck.cards.length === 0}>Раздать карты</button>
      <button type="button" onClick={resetGame}>Перезапустить игру</button>
      {cards.length > 0 ? (
        <div className="playingCards faceImages">
          {cards.map((card, index) => (
            <Card key={index} suit={card.suit} rank={card.rank}/>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default App;