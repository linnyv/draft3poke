import React, { useState } from "react";
import Pokemon from "../components/PokemonName&Pic";
import PokemonInfo from "../components/PokemonInfo";
import styles from "../components/style/favorite.module.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #e67383;
  }
`;

export default function Favorite() {
  const [hoveredPokemon, setHoveredPokemon] = useState(null);
  const [pokemonList] = useState([
    "jigglypuff",
    "haunter",
    "slowbro",
    "chansey",
    "psyduck", 
    "drifblim",
    "gothitelle"
  ]);

  const handleMouseEnter = (index) => {
    setHoveredPokemon(index);
  };

  const handleMouseLeave = () => {
    setHoveredPokemon(null);
  };

  return (
    <>
      <GlobalStyle />
      <div className={styles.gallery}>
        <h1> My Favorite Pokemon {"\u2764"}</h1>
        <div className={styles.pokemonList}>
          {pokemonList.map((pokemonName, index) => (
            <div
              key={pokemonName}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className={styles.card} 
            >
              <Pokemon pokemonName={pokemonName} />
              {hoveredPokemon === index && (
                <PokemonInfo pokemonName={pokemonName} />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}