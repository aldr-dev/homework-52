import Card from './Card.ts';

class CardDeck {
  public cards: Card[];

  constructor() {
    this.cards = [];
    const rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suit = ['diams', 'hearts', 'clubs', 'spades'];

    rank.forEach((rank) => {
      suit.forEach((suit) => {
        this.cards.push(new Card(rank, suit));
      });
    });
  }

  getCard(): Card {
    return this.cards.splice(Math.floor(Math.random() * this.cards.length), 1)[0];
  }

  getCards(howMany: number): Card[] {
    const amountCards: Card[] = [];
    for (let i = 0; i < howMany; i++) {
      amountCards.push(this.getCard());
    }
    return amountCards;
  }
}

export default CardDeck;