"use client";

import Image from "next/image";
import { useState } from "react";

function IslandForm({ island, handleVisitors }) {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function submitHandler(e) {
    e.preventDefault();

    const confirmation = window.confirm(
      `Are you sure you want to book ${island.name}`
    );

    if (!confirmation) {
      return;
    }

    setFullName("");
    setPhoneNumber("");
    handleVisitors(island);
  }

  return (
    <div className="form">
      <h2>{island.name}</h2>
      <Image src={island.img} alt={island.name} width="300" height="300" />
      <h3>Book a trip to {island.name} island</h3>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Type Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Type Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button type="submit" className="book">
          Book for today!
        </button>
      </form>
    </div>
  );
}

export default IslandForm;
