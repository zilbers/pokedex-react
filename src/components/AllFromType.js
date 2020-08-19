import React from "react";
import "./css/AllFromType.css";

export default function AllFromType(props) {
  return (
    <div id="allFromType">
      {props.pokemonFromType.pokemon.map((element) => {
        return (
          <span
            onClick={() => {
              props.searchPokemon(element.pokemon.name);
            }}
            key={element.pokemon.name}
            className="pokeTypeList"
          >
            {element.pokemon.name}
          </span>
        );
      })}
    </div>
  );
}
