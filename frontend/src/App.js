import Home from "./components/Home.jsx";
import Board from "./components/Minesweeper/Board.jsx";
import LyricsGame from "./components/lyrics/LyricsGame.js";
import React, { useState } from "react";
import {Route, Routes} from "react-router-dom";
import LoginForm from "./components/LoginForm";
import UsernameContext from "./context/UsernameContext";
import MemoryGame from "./components/MemoryGame/MemoryGame.js";
import UserDash from "./components/UserDash/UserDash";
import Logout from "./components/userNavigation/Logout";
import UserNav from "./components/userNavigation/UserNav";

function App() {
  const [username, setUsername] = useState(null);
  const usernameValueAndSetterToProvide = [username, setUsername]; // So we can pass down both value and setter

  return (
    <div>
      <UsernameContext.Provider value={usernameValueAndSetterToProvide}>
        <Routes>
          <Route path="/" element={<Home />}>
          {username ? <Route index element={<UserNav />} /> : <Route index element={<LoginForm />} />}
          
          {/*
          <Route path="signup" element={<Signup />} />
          <Route path="adminDash" element={<AdminDash />} />
          */}
          </Route>
          <Route path="/userDash" element={<UserDash />} />
          <Route path="/minesweeper" element={<Board />} />
          <Route path="/lyrics" element={<LyricsGame />} />
          <Route path="/memorygame" element={<MemoryGame />} />
        </Routes>
      </UsernameContext.Provider>
    </div>
  );
}
export default App;
