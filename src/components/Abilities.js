import React from "react";

export default function Abilities(props) {
  const pokemonData = props.pokemonData;
  return (
    <span id="abilities">
      {pokemonData.abilities.map((element) => {
        return (
          <span key={element.ability.name} className="abilityItem">
            {element.ability.name}
          </span>
        );
      })}
    </span>
  );
}
