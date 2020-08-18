import React, { useState } from "react";

export default function Search(props) {
  const [searchQuery, setSearchQuery] = useState(25);

  return (
    <div className="Search">
      <input
        id="searchInput"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        id="searchButton"
        onClick={() => {
          props.searchPokemon(searchQuery);
          setSearchQuery("");
        }}
      >
        Search
      </button>
    </div>
  );
}
