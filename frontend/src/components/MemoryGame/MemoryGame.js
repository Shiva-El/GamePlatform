import Button from "@mui/material/Button";
import "../../App.css";
import Cards from "./Cards";
import React from "react";
import Header from "../Header.jsx";

import { BrowserRouter as Router, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <h1 className="text">Memory Game</h1>
      <Cards />
    </div>
  );
}


export default App;