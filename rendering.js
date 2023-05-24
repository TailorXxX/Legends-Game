const createHeroElement = (hero) =>
    `
		<div id="${hero.name}">
			<p>${hero.name}</p>
			<img src="./assets/${hero.image}" width="200" >
      <p>${hero.description}</p>
			<p>Attack: ${hero.attack} <span>Level: ${hero.level}</span></p>

		</div>
	`;

function displayHeroes(heroesList) {
    for (let hero of heroesList) {
        const heroElement = createHeroElement(hero);
        document.getElementById("deck-placeholder").insertAdjacentHTML("beforeend", heroElement);
    }
}
