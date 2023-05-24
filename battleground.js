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

    attack(index, enemyPlayer, enemyHeroIndex) {
        if (index >= this.slots.length) return;
        let damage = this.slots[index].attack;

        console.log(
            this.slots[index].name + " attacked " + enemyPlayer.battlefield.getCardByIndex(enemyHeroIndex).name
        );

        const enemyCard = enemyPlayer.battlefield.slots[enemyHeroIndex];

        if (!enemyCard || damage < enemyCard.attack) {
            console.log("but it failed");
            return;
        }

        if (damage >= enemyCard.attack) {
            console.log("and it's sucessfull");
            enemyPlayer.battlefield.slots.splice(enemyHeroIndex, 1);
            enemyPlayer.graveyard.addCard(enemyCard);
        } else {
            enemyPlayer.attacked(damage);
        }
    }
}
