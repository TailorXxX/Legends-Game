class Player {
    constructor(name, hp, deck) {
        this.name = name;
        this.hp = hp;
        this.deck = deck;
        this.hand = [];
        this.battlefield = new Battleground();
        this.graveyard = new Graveyard();
        this.selectedCard = null;
    }

    attacked(damage) {
        this.hp -= damage;
        return this.hp;
    }

    selectHeroFromHand(card) {
        return this.hand.find(card);
    }

    handleCardClickByHeroName(heroName) {
        const heroIndex = this.hand.findIndex((hero) => hero.name === heroName);

        if (hero !== undefined) {
            // Select the card to be placed on the battlefield
            this.selectedCard = hero;
        }
        console.log("Added " + heroName + " to battlefield");

        this.battlefield.addCardToBattle(this.hand[heroIndex]);

        this.hand.splice(heroIndex, 1);
    }

    addCardToBattleByIndexInHand(index) {
        console.log(`${this.name} placed ${this.hand[index]?.name}`);

        this.battlefield.addCardToBattle(this.hand[index]);

        this.hand.splice(index, 1);
    }

    // handleBattlefieldClick() {
    //     // Check if a card is selected
    //     if (this.selectedCard !== null) {
    //         // FIXME: REPLACE WITH INDEX ACCESS FROM HAND
    //         this.addCardToBattleByIndexInHand(this.selectedCard);

    //         // Remove the hero card from player's hand in UI
    //         // const hero = this.battlefield[this.battlefield.slots.length - 1];
    //         document.getElementById(hero.name)?.remove();

    //         // Add the hero card to player's battlefield in UI
    //         displayCards([hero], "player-battlefield", true);

    //         // Reset selected card
    //         this.selectedCard = null;
    //     }
    // }

    dealCards(count) {
        return this.deck.heroes.splice(0, count);
    }

    drawCard() {
        return this.deck.drawCard();
    }

    addCardToGraveyard(card) {
        this.battlefield.removeCard(card);
        this.graveyard.addCard(card);
    }
}
