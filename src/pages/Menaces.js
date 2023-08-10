import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Pokemon from "../components/PokemonName&Pic";
import PokemonInfo from "../components/PokemonInfo";
import styles from "../components/style/menaces.module.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #317b52;
  }
;`;

export default function Menace(props) {
  const [hoveredPokemon, setHoveredPokemon] = useState(null);
  const [pokemonList, setPokemonList] = useState([
    "dugtrio",
    "sunflora",
    "audino",
    "simisear",
    "simisage",
    "simipour",
    "teddiursa",
    "wobbuffet",
    "makuhita",
    "igglybuff"
  ]);

  const handleMouseEnter = (pokemonName) => {
    setHoveredPokemon(pokemonName);
  };

  const handleMouseLeave = () => {
    setHoveredPokemon(null);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = Array.from(pokemonList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setPokemonList(items);
  };

  return (
    <>
      <GlobalStyle />
      <div className={styles.container}>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="menace-pokemon">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <h1 className={styles.title}>Menacing Pokemon</h1>
                <p className={styles.subtitle}>Rank them below:</p>
                <ol className={styles.pokemonList}>
                  {pokemonList.map((pokemonName, index) => (
                    <li key={pokemonName}>
                      <Draggable draggableId={pokemonName} index={index}>
                        {(provided, snapshot) => (
                          <div
                            className={`${styles.draggablePokemon} ${
                              snapshot.isDragging ? styles.isDragging : ""
                            }`}
                            onMouseEnter={() => handleMouseEnter(pokemonName)}
                            onMouseLeave={handleMouseLeave}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                          >
                            <Pokemon pokemonName={pokemonName} />
                            {hoveredPokemon === pokemonName && (
                              <PokemonInfo pokemonName={pokemonName} />
                            )}
                          </div>
                        )}
                      </Draggable>
                    </li>
                  ))}
                </ol>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </>
  );
}
