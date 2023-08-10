import React, { useState } from "react";
import Pokemon from "../PokemonName&Pic";
import PokemonInfo from "../PokemonInfo";

export default function Sinnoh(props) {
  const [hoveredPokemon, setHoveredPokemon] = useState(null);

  const handleMouseEnter = (pokemonName) => {
    setHoveredPokemon(pokemonName);
  };

  const handleMouseLeave = () => {
    setHoveredPokemon(null);
  };

  const sinnohList = [
    "torterra",
    "wormadam",
    "vespiquen",
    "pachirisu",
    "chatot",
    "spiritomb",
    "garchomp",
    "lucario",
    "carnivine",
    "mantyke",
    "weavile",
    "magnezone",
    "lickilicky",
    "rhyperior",
    "magmortar",
    "gliscor",
    "porygon-z",
    "gallade",
    "probopass",
    "rotom",
    "uxie",
    "mesprit",
    "azelf",
    "dialga",
    "palkia",
    "heatran",
    "regigigas",
    "giratina",
    "cresselia",
    "phione",
    "manaphy",
    "darkrai"
  ];

  return (
    <div>
      {props.pokemonList &&
        props.pokemonList.map((pokemon) => (
          <div key={pokemon.pokemonName}>
            <Pokemon
              pokemonName={pokemon.pokemonName}
              onMouseEnter={() => handleMouseEnter(pokemon.pokemonName)}
              onMouseLeave={handleMouseLeave}
            />
            {hoveredPokemon === pokemon.pokemonName && (
              <PokemonInfo pokemonName={pokemon.pokemonName} />
            )}
            <h3>{pokemon.pokemonName}</h3>
          </div>
        ))}
      {sinnohList.map((pokemonName) => (
        <div key={pokemonName}>
          <Pokemon
            pokemonName={pokemonName}
            onMouseEnter={() => handleMouseEnter(pokemonName)}
            onMouseLeave={handleMouseLeave}
          />
          {hoveredPokemon === pokemonName && (
            <PokemonInfo pokemonName={pokemonName} />
          )}
        </div>
      ))}
    </div>
  );
}
