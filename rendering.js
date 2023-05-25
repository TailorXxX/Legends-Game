const createHeroElement = (hero) =>
    `
		<div id="${hero.name}" class="hero" onclick="console.log(${hero.name})">
			<p>${hero.name}</p>
			<img src="./assets/${hero.image}" width="200" >
      <p>${hero.description}</p>
			<p>Attack: ${hero.attack} <span>Level: ${hero.level}</span></p>

		</div>
	`;

function displayHeroes(heroesList, elementId) {
    for (let hero of heroesList) {
        const heroElement = createHeroElement(hero);
        document.getElementById(elementId).insertAdjacentHTML("beforeend", heroElement);
    }
}

function displayCards(heroesList, targetElementId, isPlayer) {
    for (let hero of heroesList) {
        const heroElement = createHeroElement(hero, isPlayer);
        document.getElementById(targetElementId).insertAdjacentHTML("beforeend", heroElement);
    }
}
