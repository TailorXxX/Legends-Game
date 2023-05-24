class Deck {
    constructor(heroesSpecification) {
        this.heroes = this.createDeck(heroesSpecification);
    }

    getHeroes(heroesDetailsList) {
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

    createDeck(heroesList) {
        const heroes = this.getHeroes(heroesList);
        this.shuffle(heroes);
        return heroes;
    }

    shuffle(array) {
        let currentIndex = array.length;
        let randomIndex;

        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    drawCard() {
        return this.heroes.pop();
    }
}
