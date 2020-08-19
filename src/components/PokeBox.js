import React from "react";
import InfoBox from "./InfoBox";
import Type from "./Type";
import "./css/PokeBox.css";
import "./css/Types.css";

export default function PokeBox(props) {
  const pokemonData = props.pokemonData;
  return (
    <div className="pokeball">
      <div id="pokeBox" className={pokemonData.types[0].type.name}>
        <span id="pokeName" className="personalInfo">
          {pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}
        </span>
        <Type
          pokemonData={pokemonData}
          getPokemonsOfType={(type) => props.getPokemonsOfType(type)}
        />
        <img
          src={pokemonData.sprites.front_default}
          id="pokePic"
          alt={`${pokemonData.name}_pic`}
        />
        <InfoBox pokemonData={pokemonData} />
      </div>
    </div>
  );
}
