import React from "react";
import "./css/AllFromType.css";

export default function AllFromType(props) {
  const pokemonFromType = props.pokemonFromType;
  return (
    <>
      <h3 id="typesHeader" className={pokemonFromType.name}>
        {pokemonFromType.name.charAt(0).toUpperCase() +
          pokemonFromType.name.slice(1)}
      </h3>
      <div id="allFromType">
        {pokemonFromType.pokemon.map((element) => {
          return (
            <span
              onClick={() => {
                props.searchPokemon(element.pokemon.name);
              }}
              key={element.pokemon.name}
              className="pokeTypeList"
            >
              {element.pokemon.name.charAt(0).toUpperCase() +
                element.pokemon.name.slice(1)}
            </span>
          );
        })}
      </div>
    </>
  );
}
