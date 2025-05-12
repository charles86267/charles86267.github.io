//APT Fetch

(async () => {
    const container = document.querySelector('.pokemon-ctr');

    const getRandomPokemon = async () => {
        const url = 'https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 150);
        const response = await fetch(url);
        const pokemonObj = await response.json();
        return pokemonObj;
    };

    const renderPokemon = (pokemonObj) => {
        const img = document.createElement('img');
        img.src = pokemonObj.sprites.front_default;
        img.alt = pokemonObj.name;
        container.append(img);
        return pokemonObj;
    };

    const pokemon = await getRandomPokemon();
    renderPokemon(pokemon);
})();