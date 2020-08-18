import React, { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import PokeBox from "./components/PokeBox";
import axios from "axios";
import "./App.css";

const HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": true,
  "Access-Control-Allow-Headers": "Content-Type,Authorization",
};

const TYPES_URL = "https://pokeapi.co/api/v2/type/";

function App() {
  const [pokemonData, setPokemonData] = useState();

  async function searchPokemon(pokemonIdOrName = 25) {
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonIdOrName}`,
        {
          headers: HEADERS,
        }
      );
      console.log(data);
      setPokemonData(data);
    } catch {
      alert("Pokemon doesn't exist!");
    }
  }

  async function getPokemonsOfType(type) {
    try {
      const { data } = await axios.get(`${TYPES_URL}${type}`);
      console.log(data);
      setPokemonData();
      return data;
    } catch {
      alert(`Looking for ${type} didn't work`);
    }
  }

  return (
    <div className="App">
      <Header />
      <Search
        searchPokemon={(pokemonIdOrName) => searchPokemon(pokemonIdOrName)}
      />
      {pokemonData ? (
        <PokeBox
          getPokemonsOfType={(type) => getPokemonsOfType(type)}
          pokemonData={pokemonData}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
