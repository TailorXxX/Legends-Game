import { Hero } from "./hero.js";
let hero1 = new Hero();

class Hero {
  constructor(name, mana, photo, description, attack) {
    this.name = name;
    this.mana = mana;
    this.photo = photo;
    this.description = description;
    this.attack = attack;
  }
}

function createDeck() {
  // Add your 30 unique heroes here.
  // You can replace the photo URL with the path to your local images.
  const heroes = [
    new Hero("Hero1", 1, "/assets/", "Hero1 description", 10),
    new Hero("Hero2", 2, "path/to/hero2.jpg", "Hero2 description", 20),
    // ...
  ];

  return heroes;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function dealCards(deck, count) {
  return deck.splice(0, count);
}

const playerDeck = createDeck();
const computerDeck = createDeck();

shuffle(playerDeck);
shuffle(computerDeck);

const playerHand = dealCards(playerDeck, 3);
const computerHand = dealCards(computerDeck, 3);

console.log("Player Hand:", playerHand);
console.log("Computer Hand:", computerHand);
