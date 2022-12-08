import Button from "@mui/material/Button";
import Cards from "./components/Cards";
import React from "react";

function MemoryGame() {
  return (
    <div>
      <div id="nav">
        <Button variant="outlined">Home</Button>
        <Button variant="outlined">Logout</Button>
      </div>

      <h1>Memory Game</h1>
      <Cards />
    </div>
  );
}

export default MemoryGame;