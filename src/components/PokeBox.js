import React from "react";
import InfoBox from "./InfoBox"; 
import "./css/pokeBox.css";
import "./css/types.css";

export default function PokeBox(props) {
  const pokemonData = props.pokemonData;
  return (
    <div id="pokeBox" className={pokemonData.types[0].type.name}>
      <span id="pokeName">
        <span className="personalInfo">{pokemonData.name}</span>
      </span>
      <img
        src={pokemonData.sprites.front_default}
        alt={`${pokemonData.name}_pic`}
      />
      <InfoBox pokemonData={pokemonData}/>
    </div>
  );
}
