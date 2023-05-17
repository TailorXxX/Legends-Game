// Declar variable si fac manipularea DOM.
// let variabile = document.getElementsByClassName("DOM");

class Deck {
  constructor(cards, total) {
    this.cards = cards;
    this.total = total;
  }

  showCard() {}

  firstDraw() {}

  draw() {}

  count() {}

  shuffle() {}
}

class Player {
  constructor(deck, hand, life, battleField, grave) {
    this.deck = deck;
    this.hand = hand;
    this.life = life;
    this.battleField = battleField;
    this.grave = grave;
  }

  firstDraw() {}

  draw() {}

  inspect() {}

  placeCard() {}

  attack() {}

  endTurn() {}
}

class Hero {
  constructor(name, image, description, attack, mana) {
    this.name = name;
    this.image = image;
    this.description = description;
    this.attack = attack;
    this.mana = mana;
  }

  faceDown() {}

  faceUp() {}

  ability() {}

  destroy() {}

  attack() {}
}

class Battlefield {
  constructor(player, card, slot) {
    this.player = player;
    this.card = card;
    this.slot = slot;
  }

  addCard() {}

  removeCard() {}

  battle() {}
}

class Graveyard {
  constructor(player, cards, total) {
    this.player = player;
    this.cards = cards;
    this.total = total;
  }

  addCard() {}

  removeCard() {}

  count() {}
}

function startGame() {}
function endGame() {}
function resolve() {}

function displayHero(hero) {
  const heroDisplay = `<div>
  ${hero.name} 
  <img src = ${hero.image}>
  </div>`;
  document.getElementById("hero").insertAdjacentHTML("afterbegin", heroDisplay);
}
displayHero(karina);
