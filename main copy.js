import { heroesList } from "./variables.js";

function dealCards(deck, count) {
    return deck.splice(0, count);
}

const playerDeck = createDeck();
console.log(playerDeck);
const computerDeck = createDeck();
console.log(computerDeck);

const playerFirstDraw = dealCards(playerDeck, 3);
const computerFirstDraw = dealCards(computerDeck, 3);
const playerDraw = dealCards(playerDeck, 1);
const computerDraw = dealCards(computerDeck, 1);

console.log("Player Hand:", playerFirstDraw);
console.log("Computer Hand:", computerDraw);
console.log("Computer Hand:", computerFirstDraw);
console.log("Player Hand:", playerDraw);

// const createHeroElement = (hero) =>
//   `
// 		<div id="${hero.name}">
// 			<p>${hero.name}</p>
// 			<img src="./assets/${hero.image}" width="200" >
//       <p>${hero.description}</p>
// 			<p>Attack: ${hero.attack} <span>Level: ${hero.level}</span></p>

// 		</div>
// 	`;

// function displayHeroes(heroesJson) {
//   const heroesList = getHeroes(heroesJson);
//   for (let hero of heroesList) {
//     const heroElement = createHeroElement(hero);
//     document
//       .getElementById("deck-placeholder")
//       .insertAdjacentHTML("beforeend", heroElement);
//   }
// }

// displayHeroes(playerFirstDraw);
// console.log(playerDeck.length);

let player = new Player("Player1", 8000, createDeck());
let computer = new Player("Computer", 8000, createDeck());
const game = new Game((player, computer));

const createCardElement = (hero, isPlayer) =>
    `
    <div id="${hero.name}" class="card" ${isPlayer ? `onclick= "handleCardClick('${hero.name}')"` : ""}>
      <p>${hero.name}</p>
      <img src="./assets/${hero.image}" width="200">
      <p>${hero.description}</p>
      <p>Attack: ${hero.attack} <span>Level: ${hero.level}</span></p>
    </div>
  `;

function displayCards(heroesList, targetElementId, isPlayer) {
    for (let hero of heroesList) {
        const heroElement = createCardElement(hero, isPlayer);
        document.getElementById("player-cards").insertAdjacentHTML("beforeend", heroElement);
    }
}

function handleCardClick(heroName) {
    // Find the hero in player's hand
    const heroIndex = player.hand.findIndex((hero) => hero.name === heroName);

    if (heroIndex !== -1) {
        // Place the hero on the battlefield
        player.addCardToBattleByIndexInHand(heroIndex);

        // Move the card to the battlefield in the UI
        moveCardToBattlefield(heroName, "player-hand", "player-battlefield");
    }
}

displayCards(playerDeck, document.getElementById("player-cards"), player);

game.start();

// displayHeroes(game.currentPlayer.hand);
// //Vreau sa selectez un erou
// const selectedCard = game.currentPlayer.selectHeroFromHand(this.hero);
// // adaug in battleField.
// game.currentPlayer.battlefield.addCardToBattle(selectedCard);

// while (game.player1.hp > 0 && game.player2.hp > 0) {
//   // Here you should implement the UI for the player to choose their action
//   // For example, the player might want to do something like:

//   // game.currentPlayer.placeHero(0);

//   // After all actions are done for the turn
//   game.endTurn();
// }

// document.addEventListener("click", )

let mainPhase = true;

const cards = document.getElementsByClassName("card");

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
        if (mainPhase) {
            game.mainPhase(i);
            this.style.display = "none"; // hide the card from the hand
        }
    });
}

document.getElementById("endMainPhaseButton").addEventListener("click", function () {
    mainPhase = false;
});

let selectedHeroIndex;
let battlePhase = false;

const battlegroundCards = document.getElementsByClassName("battleground-card");

for (let i = 0; i < battlegroundCards.length; i++) {
    battlegroundCards[i].addEventListener("click", function () {
        if (!battlePhase) {
            selectedHeroIndex = i;
        } else {
            game.battlePhase(selectedHeroIndex, game.player2, i);
            this.style.display = "none"; // hide the card from the battleground
        }
    });
}

document.getElementById("endBattlePhaseButton").addEventListener("click", function () {
    battlePhase = !battlePhase;
});
