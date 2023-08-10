import React, { useState } from "react";
import Pokemon from "../components/PokemonName&Pic";
import PokemonInfo from "../components/PokemonInfo";
import styles from "../components/style/gym.module.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #0873cd;
  }
`;

export default function Gym(props) {
  const [hoveredPokemon, setHoveredPokemon] = useState(null);
  const [pokemonList] = useState([
    { pokemonName: "mamoswine", id: 1 },
    { pokemonName: "ursaluna", id: 2 },
    { pokemonName: "slaking", id: 3 },
    { pokemonName: "dragonite", id: 4 },
    { pokemonName: "gyarados", id: 5 },
    { pokemonName: "gigalith", id: 6 }
  ]);

  const handleMouseEnter = (pokemonName) => {
    setHoveredPokemon(pokemonName);
  };

  const handleMouseLeave = () => {
    setHoveredPokemon(null);
  };

  return (
    <>
      <GlobalStyle />
      <div className={styles.galleryContainer}>
        {pokemonList.map((pokemon) => (
          <div key={pokemon.id} className={`${styles.galleryItem} ${hoveredPokemon === pokemon.pokemonName ? styles.rotate : ''}`}>
            <Pokemon
              pokemonName={pokemon.pokemonName}
              onMouseEnter={() => handleMouseEnter(pokemon.pokemonName)}
              onMouseLeave={handleMouseLeave}
            />
            {hoveredPokemon === pokemon.pokemonName && (
              <PokemonInfo pokemonName={pokemon.pokemonName} />
            )}
          </div>
        ))}
      </div>
      <h1> Gym Pokemon </h1>
    </>
  );
}