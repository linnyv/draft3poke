import React, { useState } from "react";
import PokedexClosed from "../components/icons/Pokedex.png";
import PokedexOpen from "../components/icons/PokedexOpen.png";
import styles from "../components/style/about.module.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #945a7b;
  }
;`;

export default function About(props) {
  const [isPokedexOpen, setIsPokedexOpen] = useState(false);

  function togglePokedex() {
    setIsPokedexOpen(!isPokedexOpen);
  }

  return (
    <>
      <GlobalStyle />
      <div className={styles.DeQue}>
        <h1>About</h1>
        <p>
          Thank you for stopping by to see my React app! Going to be briefly(not
          really) talking about Pokemons:
          <ul>
            <li>My favorite Pokemon</li>
            <li>Ones missing from my Pokemon Go Index</li>
            <li>Pokemon that gave me grief catching them in Pokemon Go</li>
            <li>Pokemon that help me take over Gyms in Pokemon Go</li>
            <li>Pokemon that are absolute meance</li>
          </ul>
        </p>
        <div
          className={styles.pokedex}
          onClick={togglePokedex}
          onMouseLeave={() => setIsPokedexOpen(false)}
        >
          <img
            src={isPokedexOpen ? PokedexOpen : PokedexClosed}
            alt="Pokedex"
            style={{ width: "200px", height: "200px" }}
          />
        </div>
      </div>
    </>
  );
}
