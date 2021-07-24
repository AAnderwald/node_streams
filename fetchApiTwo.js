import fetch from "isomorphic-fetch";
import {createWriteStream} from "fs";


async function fetchZipcode()
{
    const res = await fetch(
      "http://api.zippopotam.us/us/90210"

    );
    const arrayBuffer = await res.arrayBuffer();                    //promise returns arrayBuffer
    const buffer = Buffer.from (arrayBuffer);                       //pass in the promise from the arrayBuffer

    const writeStream = createWriteStream ("./zipcode.json");         //will create the emplty.json file for us will pass in strings and buffer
    writeStream.write(buffer);

}

fetchZipcode();

