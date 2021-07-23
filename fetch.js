const fetch = require("isomorphic-fetch");
const {createWriteStream} = require("fs");

function fetchPokemon() {
    const res = await fetch
    (                                                                                     //In a new file, fetch data from a source of your choosing (e.g. “https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json”)
        `https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`
    );
}

const writeStream = createWriteStream("/empty.js");
writeStream.write(JSON.stringify(data));
