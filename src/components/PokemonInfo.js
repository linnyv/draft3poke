import axios from "axios";
import React, { useState, useEffect } from "react";

export default function PokemonInfo(props) {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${props.pokemonName}`
      );
      setPokemonData(response.data);
    }

    fetchData();
  }, [props.pokemonName]);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>Type: {pokemonData.types[0].type.name}</h3>
      <h3>Ability: {pokemonData.abilities[0].ability.name}</h3>
      <h3>Stats:</h3>
      <ul>
        {pokemonData.stats.map((stat) => (
          <li key={stat.stat.name}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
      <h3>Moves:</h3>
      <ul>
        {pokemonData.moves.slice(0, 5).map((move) => (
          <li key={move.move.name}>{move.move.name}</li>
        ))}
      </ul>
    </div>
  );
}
