import React, { useState } from "react";
import Pokemon from "../components/PokemonName&Pic";
import PokemonInfo from "../components/PokemonInfo";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #de5239;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  text-align: center;
  justify-content: center;
  align-items: center;
  justify-items: center; 
`;

const FlippablePokemon = styled.div`
  text-align: center;
  perspective: 1000px;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  background-color: pink;
  border: 1px dotted black;

  &:hover {
    transform: scale(1.1);
  }

  &.flipped {
    transform: rotateX(180deg);
  }
  
  @font-face {
    font-family: 'VT323';
    src: url('../fonts/VT323.ttf') format('truetype');
  }
  h3 {
    margin: 0;
    font-family: "VT323", monospace;
    color: #00ffffff;
  }
`;

const CenteredContainer = styled.div`
  grid-column: 1 / span 3;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
@font-face {
  font-family: 'PokemonSolid';
  src: url('../fonts/PokemonSolid.ttf') format('truetype');
}
  font-size: 40px;
  color: #3b4cca;
  font-family: "PokemonSolid", sans-serif;
  text-align: center;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
@font-face {
  font-family: 'VT323';
  src: url('../fonts/VT323.ttf') format('truetype');
}
  font-size: 24px;
  color: #393939;
  font-family: "VT323", monospace;
  text-align: center;
  margin-bottom: 20px;
`;

const PokemonInfoContainer = styled.div`
  display: ${(props) => (props.isVisible ? "block" : "none")};
`;

export default function Trouble(props) {
  const [selectedPokemon, setSelectedPokemon] = useState("ditto");

  const handleClick = () => {
    const currentIndex = pokemonList.findIndex(
      (pokemon) => pokemon.pokemonName === selectedPokemon
    );
    const nextIndex = (currentIndex + 1) % pokemonList.length;
    setSelectedPokemon(pokemonList[nextIndex].pokemonName);
  };

  const pokemonList = [
    { pokemonName: "ditto", id: 1 },
    { pokemonName: "mr-rime", id: 2 },
    { pokemonName: "oranguru", id: 3 },
    { pokemonName: "milotic", id: 4 },
    { pokemonName: "poliwrath", id: 5 },
    { pokemonName: "delphox", id: 6 },
    { pokemonName: "primarina", id: 7 },
    { pokemonName: "regice", id: 8 },
    { pokemonName: "registeel", id: 9 },
    { pokemonName: "lugia", id: 10 }
  ];

  const FlippablePokemonWrapper = ({ pokemonName }) => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    const handleClick = () => {
      const currentIndex = pokemonList.findIndex(
        (pokemon) => pokemon.pokemonName === pokemonName
      );
      const nextIndex = (currentIndex + 1) % pokemonList.length;
      setSelectedPokemon(pokemonList[nextIndex].pokemonName);
    };

    return (
      <FlippablePokemon
        className={pokemonName !== selectedPokemon ? "flipped" : ""}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <Pokemon pokemonName={pokemonName} />
        <PokemonInfoContainer isVisible={isHovering}>
          <PokemonInfo pokemonName={pokemonName} />
        </PokemonInfoContainer>
      </FlippablePokemon>
    );
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <CenteredContainer>
          <Title>Trouble Pokemon</Title>
          <Subtitle>
            These pokemon gave me issues when trying to catch them!
          </Subtitle>
        </CenteredContainer>
        <FlippablePokemonWrapper pokemonName={selectedPokemon} />
      </Container>
    </>
  );
}
