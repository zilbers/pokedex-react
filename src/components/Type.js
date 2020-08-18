import React from "react";

export default function Type(props) {
  const pokemonData = props.pokemonData;
  return (
    <span id="pokeType">
      Type:
      {pokemonData.types.map((element) => {
        return (
          <span
            key={element.type.name}
            className={`typeBox ${element.type.name} personalInfo`}
          >
            {element.type.name}
          </span>
        );
      })}
    </span>
  );
}
