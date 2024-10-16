"use client";

import { useState } from "react";

import IslandForm from "./IslandForm";
import IslandList from "./IslandList";
import Search from "./Search";

function IslandsContainer({ islands }) {
  const [query, setQuery] = useState("");
  const [currentIsland, setCurrentIsland] = useState(islands[0]);
  const [visitors, setVisitors] = useState(islands);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  function islandHandler(selectedIsland) {
    setCurrentIsland(selectedIsland);
  }

  function handleVisitors(selectedIsland) {
    setVisitors((prevData) =>
      prevData.map((island) => {
        if (island.id === selectedIsland.id) {
          return { ...island, visitors: island.visitors + 1 };
        }
        return island;
      })
    );
  }

  const filteredIslands = visitors.filter((island) =>
    island.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="islands-container">
      <div>
        <Search handleChange={handleChange} />
        <IslandList islands={filteredIslands} islandHandler={islandHandler} />
      </div>
      <IslandForm island={currentIsland} handleVisitors={handleVisitors} />
    </div>
  );
}

export default IslandsContainer;
