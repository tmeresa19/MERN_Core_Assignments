import React, { useState } from 'react';
import axios from 'axios';

const Pokemon = () => {
  // State to store the list of Pokemon names
  const [pokemons, setPokemons] = useState([]);

  // Function to fetch the list of Pokemon names from the API
  const fetchPokemon = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807') 
      .then(response => { 
        setPokemons(response.data.results.map(pokemon => pokemon.name));
      })
      .catch(error => { 
        console.log(error);
      });
  }


  return (
    <div>
      <button onClick={fetchPokemon}>Fetch Pokemon</button> {/* Button to fetch the Pokemon */}
      <ul>
        {pokemons.map(pokemon => ( 
          <li key={pokemon}>{pokemon}</li>
        ))}
      </ul>
    </div>
  );
}

export default Pokemon;
