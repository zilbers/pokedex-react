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
      alert("Pokemon doesnt exist!");
    }
  }

  return (
    <div className="App">
      <Header />
      <Search
        searchPokemon={(pokemonIdOrName) => searchPokemon(pokemonIdOrName)}
      />
      {pokemonData ? <PokeBox pokemonData={pokemonData} /> : ""}
    </div>
  );
}

export default App;
