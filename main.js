const playerDeck = new Deck(heroesList);
const computerDeck = new Deck(heroesList);

const player = new Player("Player1", 8000, playerDeck);
const computer = new Player("Computer", 8000, computerDeck);
const game = new Game(player, computer);

console.log(player.deck);
console.log(computer.deck);

game.start();
game.test();
