import fetch from "isomorphic-fetch";
import {createWriteStream} from "fs";


async function fetchPokemon()
{
    const res = await fetch(
        "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
    );
    const arrayBuffer = await res.arrayBuffer();                    //promise returns arrayBuffer
    const buffer = Buffer.from (arrayBuffer);                       //pass in the promise from the arrayBuffer

    const writeStream = createWriteStream ("./empty.json");         //will create the emplty.json file for us will pass in strings and buffer
    writeStream.write(buffer);

}

fetchPokemon();

