class Battleground {
    constructor() {
        this.slots = [];
    }

    addCardToBattle(card) {
        this.slots.push(card);
        return this.slots;
    }

    getCardByIndex(index) {
        return this.slots[index];
    }

    removeCard(card) {
        const cardIndex = this.getIndexByCard(card);
        this.slots.splice(cardIndex, 1);
    }

    getIndexByCard(card) {
        return this.slots.findIndex((slotCard) => slotCard == card);
    }

    attackEnemyIndexWithCardIndexReturningStatus(index, enemyPlayer, enemyHeroIndex) {
        if (index >= this.slots.length) return false;
        let damage = this.slots[index]?.attack;

        // const myCard = this.getCardByIndex(index)

        console.log(
            this.slots[index]?.name + " attacked " + enemyPlayer.battlefield.getCardByIndex(enemyHeroIndex)?.name
        );

        const enemyCard = enemyPlayer.battlefield.getCardByIndex(enemyHeroIndex);

        if (!enemyCard) {
            console.log("no card to attack, attacking player");
            enemyPlayer.attacked(damage);
            return true;
        }

        if (damage < enemyCard.attack) {
            console.log("but it failed");
            return false;
        }

        if (damage > enemyCard?.attack) {
            console.log("and it's sucessfull");

            enemyPlayer.battlefield.slots.splice(enemyHeroIndex, 1);
            console.log("Adding " + enemyCard.name + " to Graveyard");
            enemyPlayer.graveyard.addCard(enemyCard);

            return true;
        }

        if (damage == enemyCard?.attack) {
            console.log("equal attacks");

            enemyPlayer.battlefield.slots.splice(enemyHeroIndex, 1);
            console.log("Adding " + enemyCard.name + " to Graveyard");
            enemyPlayer.graveyard.addCard(enemyCard);

            return false;
        }
    }
}
