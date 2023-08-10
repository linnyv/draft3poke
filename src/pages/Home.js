import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Berries from "../components/Berries";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #ffde00;
  }
`;

const StyleCasa = styled.div`
  text-align: center;
  padding: 15px;

  @font-face {
    font-family: 'PokemonSolid';
    src: url('../fonts/PokemonSolid.ttf') format('truetype');
  }
  
  h1 {
    font-size: 40px;
    color: #3b4cca;
    font-family: "PokemonSolid", sans-serif;
    margin-bottom: 10px;
  }

  @font-face {
    font-family: 'VT323';
    src: url('../fonts/VT323.ttf') format('truetype');
  }

  p {
    font-size: 24px;
    color: #ff0000;
    font-family: "VT323", monospace;
    margin-bottom: 20px;
  }
`;

export default function Home(props) {
  return (
    <>
      <GlobalStyle />
      <StyleCasa>
        <h1>Home</h1>
        <p>Yup, it's a Pokemon-themed React App!</p>
        <Berries />
      </StyleCasa>
    </>
  );
}
