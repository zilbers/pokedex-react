import React, { useState } from "react";
import InfoBox from "./InfoBox";
import Type from "./Type";
import "./css/PokeBox.css";
import "./css/Types.css";

export default function PokeBox(props) {
  const pokemonData = props.pokemonData;
  const [imgSrc, setImgSrc] = useState(pokemonData.sprites.front_default);

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
          src={imgSrc ? imgSrc : "./css/no-image.jpg"}
          id="pokePic"
          alt={`${pokemonData.name}_pic`}
          onMouseEnter={() => {
            if (pokemonData.sprites.back_default)
              setImgSrc(pokemonData.sprites.back_default);
          }}
          onMouseLeave={() => setImgSrc(pokemonData.sprites.front_default)}
        />
        <InfoBox pokemonData={pokemonData} />
      </div>
    </div>
  );
}
