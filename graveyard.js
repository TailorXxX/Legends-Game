class Graveyard {
    constructor() {
        this.grave = [];
    }

    addCard(card) {
        this.grave.push(card);
        return this.grave;
    }

    count() {
        return this.grave.length;
    }
}
