import React from "react";

export default function Type(props) {
  const pokemonData = props.pokemonData;
  return (
    <div id="pokeType" className="typesContainer">
      {pokemonData.types.map((element) => {
        return (
          <span
            key={element.type.name}
            className={`typeBox ${element.type.name}`}
          >
            {element.type.name.charAt(0).toUpperCase() +
              element.type.name.slice(1)}
          </span>
        );
      })}
    </div>
  );
}
