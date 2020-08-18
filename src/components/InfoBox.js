import React from "react";
import Abilities from "./Abilities";

export default function InfoBox(props) {
  const pokemonData = props.pokemonData;
  return (
    <div id="infoBox">
      <span id="pokeHeight" className="infoContainer">
        Height: <span className="personalInfo">{pokemonData.height}</span>
      </span>
      <span id="pokeWeight" className="infoContainer">
        Weight: <span className="personalInfo">{pokemonData.weight}</span>
      </span>
      <span id="abilitiesContainer">
        Abilities: <Abilities pokemonData={pokemonData}/>
      </span>
    </div>
  );
}
