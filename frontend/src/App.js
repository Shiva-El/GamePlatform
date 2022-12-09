//Utility
import React, { useState } from "react";
import {Route, Routes} from "react-router-dom";
import UsernameContext from "./context/UsernameContext";
//Style
//Components
import Home from "./components/Home.jsx";
import Board from "./components/Minesweeper/Board.jsx";
import LyricsGame from "./components/lyrics/LyricsGame.js";
import MemoryGame from "./components/MemoryGame/MemoryGame.js";
import UserDash from "./components/UserDash/UserDash";
import Signup from "./components/Signup";
import FlyingBean  from "./components/FlyingBean/FlyingBean.js";
import About from "./components/About";

function App() {
  const [username, setUsername] = useState(null);
  const usernameValueAndSetterToProvide = [username, setUsername]; // So we can pass down both value and setter

  return (
    <div>
      <UsernameContext.Provider value={usernameValueAndSetterToProvide}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/userDash" element={<UserDash />} />
          <Route path="/sandsweeper" element={<Board />} />
          <Route path="/lyrics" element={<LyricsGame />} />
          <Route path="/memorygame" element={<MemoryGame />} />
          <Route path="/flyingBean" element={<FlyingBean />} />
          <Route path="/about" element={<About />} />
          {/*
          <Route path="adminDash" element={<AdminDash />} />
          */}
        </Routes>
      </UsernameContext.Provider>
    </div>
  );
}
export default App;
