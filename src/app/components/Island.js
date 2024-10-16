import Image from "next/image";
import React from "react";

function Island({ island, islandHandler }) {
  console.log(`${island.name} visitors : ${island.visitors}`);
  return (
    <div className="Island" onClick={() => islandHandler(island)}>
      <h3>{island.name}</h3>
      {/* YOU HAVE TO CHANGE THE VISITORS COUNT */}
      <p>Visitors: {island.visitors}</p>
      <Image src={island.img} alt={island.name} width="300" height="300" />
    </div>
  );
}

export default Island;
