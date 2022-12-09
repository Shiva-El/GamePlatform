import "./Retro.css";
import Home from "./components/Home.jsx";
import Board from "./components/Minesweeper/Board.jsx";
import LyricsGame from "./components/lyrics/LyricsGame.js";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import UsernameContext from "./context/UsernameContext";
import MemoryGame from "./components/MemoryGame/MemoryGame.js";
import FlyingBean from "./components/FlyingBean/FlyingBean";
import { convertLength } from "@mui/material/styles/cssUtils";

function App() {
  const [username, setUsername] = useState(null);
  const usernameValueAndSetterToProvide = [username, setUsername]; // So we can pass down both value and setter

  return (
    <UsernameContext.Provider value={usernameValueAndSetterToProvide}>
      <Routes>
        <Route path="/" element={<Home />}>
          {username ? <></> : <Route index element={<LoginForm />} />}
          {/*
          <Route path="signup" element={<Signup />} />
          <Route path="userDash" element={<UserDash />} />
          <Route path="adminDash" element={<AdminDash />} />*/}
        </Route>
        <Route path="/minesweeper" element={<Board />} />
        <Route path="/lyrics" element={<LyricsGame />} />
        <Route path="/memorygame" element={<MemoryGame />} />
        <Route path="/flyingbean" element={<FlyingBean />} />
      </Routes>
    </UsernameContext.Provider>
  );
}
export default App;
