"use client";

import Island from "./Island";

function IslandList({ islands, islandHandler }) {
  const islandCards = islands.map((island) => (
    <Island key={island.id} island={island} islandHandler={islandHandler} />
  ));

  return <div className="islandList">{islandCards}</div>;
}

export default IslandList;
