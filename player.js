class Player {
    constructor(name, hp, deck) {
        this.name = name;
        this.hp = hp;
        this.deck = deck;
        this.hand = [];
        this.battlefield = new Battleground();
        this.graveyard = new Graveyard();
    }

    attacked(damage) {
        this.hp -= damage;
        return this.hp;
    }

    selectHeroFromHand(card) {
        return this.hand.find(card);
    }

    placeHero(index) {
        // console.log(`${this.name} placed ${this.hand[index].name}`);
        this.battlefield.addCardToBattle(this.hand[index]);
        this.hand.splice(index, 1);
    }

    attack(heroIndex, enemyPlayer, enemyHeroIndex) {
        this.battlefield.attack(heroIndex, enemyPlayer, enemyHeroIndex);
    }

    dealCards(count) {
        return this.deck.heroes.splice(0, count);
    }

    drawCard() {
        return this.deck.drawCard();
    }
}
