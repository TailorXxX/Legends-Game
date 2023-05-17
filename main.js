import { heroesList } from "./variables.js";

class Hero {
  constructor(name, image, description, attack, level) {
    this.name = name;
    this.image = image;
    this.description = description;
    this.attack = attack;
    this.level = level;
  }
}

class Player {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
    this.hand = [];
  }

  attacked(damage) {
    this.hp -= damage;
    return this.hp;
  }
}

class Battleground {
  constructor(player, card) {
    this.player = player;
    this.card = card;
    this.slots = [];
  }

  addCardToBattle(card) {
    this.slots.push(card);
    return this.slots;
  }

  attack(otherCard) {
    let damage = this.card.attack;
    otherCard.attacked(damage);
  }
}

class Graveyard {
  constructor(player, card) {
    this.player = player;
    this.card = card;
    this.grave = [];
  }

  addCard(card) {
    this.grave.push(card);
    return this.grave;
  }

  count() {
    for (let i of this.grave) {
      i += i[i];
      return i;
    }
  }
}

function getHeroes(heroesDetailsList) {
  const heroesList = [];

  for (let heroDetails of heroesDetailsList) {
    const hero = new Hero(
      heroDetails.name,
      heroDetails.image,
      heroDetails.description,
      heroDetails.attack,
      heroDetails.level
    );

    heroesList.push(hero);
  }

  return heroesList;
}

function createDeck() {
  const heroes = getHeroes(heroesList);
  shuffle(heroes);
  return heroes;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = getRndInteger(0, 30);
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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

const createHeroElement = (hero) =>
  `
		<div>
			<p>${hero.name}</p>
			<img src="./assets/${hero.image}" width="200"> 
      <p>${hero.description}</p>
			<p>Attack: ${hero.attack} <span>Level: ${hero.level}</span></p>
			
		</div>
	`;

function displayHeroes(heroesJson) {
  const heroesList = getHeroes(heroesJson);
  for (let hero of heroesList) {
    const heroElement = createHeroElement(hero);
    document
      .getElementById("deck-placeholder")
      .insertAdjacentHTML("beforeend", heroElement);
  }
}

displayHeroes(playerFirstDraw);
console.log(playerDeck.length);
