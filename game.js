class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.currentPlayer = player1;
        this.enemyPlayer = player2;
        this.currentTurn = 0;
    }

    switchTurn() {
        this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;

        this.currentTurn++;

        // echivalent cu:
        // if (this.currentPlayer === this.player1) {
        //   this.currentPlayer = this.player2
        // } else {
        //   this.currentPlayer = this.player1
        // }
    }

    start() {
        this.player1.hand = this.player1.dealCards(3);
        this.player2.hand = this.player2.dealCards(3);
    }

    test() {
        for (let index = 0; index < 6; index++) {
            this.mainPhase();
            this.endTurn();
        }

        console.log(this.player1);
        console.log(this.player2);
    }

    // This method can be called when the player ends their turn
    endTurn() {
        console.log(`${this.currentPlayer.name}'s turn ended-----------`);
        this.drawPhase();
        this.switchTurn();

        console.log("");
    }

    drawPhase() {
        this.currentPlayer.hand.push(this.currentPlayer.drawCard());
        console.log(`${this.currentPlayer.name}'s hand after draw: ${this.player1.hand.map((it) => it.name)}`);
    }

    mainPhase() {
        console.log("");
        console.log(`---------Is ${this.currentPlayer.name}'s turn`);
        console.log(
            `${this.player1.name}'s hand in round ${this.currentTurn}: ${this.player1.hand.map((it) => it.name)}`
        );

        console.log(
            `${this.player2.name}'s hand in round ${this.currentTurn}: ${this.player2.hand.map((it) => it.name)}`
        );

        const selectedCard = this.currentPlayer.hand.reduce(function (prev, current) {
            return prev.attack > current.attack ? prev : current;
        });

        const selectedHeroIndex = this.currentPlayer.hand.findIndex((card) => card.name == selectedCard.name);

        displayHeroes([selectedCard]);

        this.currentPlayer.addCardToBattleByIndexInHand(selectedHeroIndex);
        console.log("Highest attack: " + selectedCard.name + " with " + selectedCard.attack);

        // PLAYER ATTACKS FIST CARD IN ENEMY

        if (this.currentTurn != 0) {
            this.currentPlayer.battlefield.attackWithCardIndex(
                selectedHeroIndex,
                this.currentPlayer === this.player1 ? this.player2 : this.player1,
                0
            );
        }
    }

    mainComputerPhase(player) {
        if (player.hand.length > 0) {
            // Select the hero with the highest attack
            const selectedHeroIndex = player.hand.reduce(
                (maxIndex, hero, i, arr) => (hero.attack > arr[maxIndex].attack ? i : maxIndex),
                0
            );
            const selectedHero = player.hand.splice(selectedHeroIndex, 1)[0];
            player.placeHero(selectedHero);
            // TODO: Update UI to remove the card from player's hand and place it on the battlefield
        }
    }

    battlePhase(player, opponent) {
        if (player.battlefield.length > 0 && opponent.battlefield.length > 0) {
            const attackerIndex = player.battlefield.reduce(
                (maxIndex, hero, i, arr) => (hero.attack > arr[maxIndex].attack ? i : maxIndex),
                0
            );
            const attacker = player.battlefield[attackerIndex];
            const targetIndex = opponent.battlefield.findIndex((hero) => hero.attack < attacker.attack);

            if (targetIndex !== -1) {
                const target = opponent.battlefield.splice(targetIndex, 1)[0];

                if (attacker.attack > target.attack) {
                    opponent.graveyard.addCard(target);
                    // TODO: Update UI to move target card to the graveyard
                } else if (attacker.attack < target.attack) {
                    player.graveyard.addCard(attacker);
                    player.battlefield.splice(attackerIndex, 1);
                    // TODO: Update UI to move attacker card to the graveyard
                } else {
                    player.graveyard.addCard(attacker);
                    opponent.graveyard.addCard(target);
                    player.battlefield.splice(attackerIndex, 1);
                    // TODO: Update UI to move both cards to the graveyard
                }
            }
        } else if (player.battlefield.length > 0) {
            const attacker = player.battlefield.shift();
            opponent.attacked(attacker.attack);
            // TODO: Update UI to show that opponent's hp has decreased
        }
    }
}
