import React, { useState } from "react";
import Pokemon from "../PokemonName&Pic";
import PokemonInfo from "../PokemonInfo";

export default function Unova(props) {
  const [hoveredPokemon, setHoveredPokemon] = useState(null);

  const handleMouseEnter = (pokemonName) => {
    setHoveredPokemon(pokemonName);
  };

  const handleMouseLeave = () => {
    setHoveredPokemon(null);
  };

  const unovaList = [
    "conkeldurr",
    "sawk",
    "scolipede",
    "sandile",
    "krokorok",
    "krookodile",
    "maractus",
    "sigilyph",
    "tirtouga",
    "carracosta",
    "archeops",
    "zoroark",
    "cinccino",
    "reuniclus",
    "escavalier",
    "klinklang",
    "chandelure",
    "beartic",
    "mienshao",
    "golurk",
    "larvesta",
    "volcarona",
    "cobalion",
    "terrakion",
    "virizion",
    "tornadus",
    "thundurus",
    "reshiram",
    "zekrom",
    "landorus",
    "keldeo"
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
      {unovaList.map((pokemonName) => (
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
