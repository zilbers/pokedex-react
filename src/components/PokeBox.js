import React from "react";
import "./css/pokeBox.css";

function PokeBox(props) {
  const pokemonData = props.pokemonData;
  return (
    <div id="pokeBox">
      <img
        src={pokemonData.sprites.front_default}
        alt={`${pokemonData.name}_pic`}
      />
      <div id="infoBox">
        <span id="pokeName">
          Name: <span className="personalInfo">{pokemonData.name}</span>
        </span>
        <span id="pokeHeight">
          Height: <span className="personalInfo">{pokemonData.height}</span>
        </span>
        <span id="pokeWeight">
          Weight: <span className="personalInfo">{pokemonData.weight}</span>
        </span>
      </div>
    </div>
  );
}

export default PokeBox;
