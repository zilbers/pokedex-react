import React from "react";
import Type from "./Type";

export default function InfoBox(props) {
  const pokemonData = props.pokemonData;
  return (
    <div id="infoBox">
      <span id="pokeHeight">
        Height: <span className="personalInfo">{pokemonData.height}</span>
      </span>
      <span id="pokeWeight">
        Weight: <span className="personalInfo">{pokemonData.weight}</span>
      </span>
      <Type pokemonData={pokemonData} />
    </div>
  );
}
