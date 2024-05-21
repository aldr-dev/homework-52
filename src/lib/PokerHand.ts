import Card from './Card';

interface RankCounts {
  [rank: string]: number;
}

class PokerHand {
  public cards: Card[];

  constructor(cards: Card[]) {
    this.cards = cards;
  }

  getOutcome() {
    const rankCounts: RankCounts = {};
    let isFlush = true;

    this.cards.forEach((card, index) => {
      rankCounts[card.rank] = (rankCounts[card.rank] || 0) + 1;
      if (index > 0 && card.suit !== this.cards[0].suit) isFlush = false;
    });

    const counts = Object.values(rankCounts);
    const hasThreeOfAKind = counts.includes(3);
    const pairCount = counts.filter(count => count === 2).length;

    if (isFlush) return 'Флэш';
    if (hasThreeOfAKind) return 'Тройка';
    if (pairCount === 2) return 'Две пары';
    if (pairCount === 1) return 'Одна пара';
    return 'Старшая карта';
  }
}

export default PokerHand;