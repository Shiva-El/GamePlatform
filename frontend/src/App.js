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
import FlyingBean  from "./components/FlyingBean/FlyingBean.js";
import About from "./components/About";
import RequireAuth from "./components/RequireAuth";
import Logout from "./components/Logout";
import LoginButton from "./components/LoginButton";
import LoginForm from "./components/LoginForm";
import Signup from "./components/Signup";

function App() {
  const [username, setUsername] = useState(null);
  const usernameValueAndSetterToProvide = [username, setUsername]; // So we can pass down both value and setter

  return (
    <div>
      <UsernameContext.Provider value={usernameValueAndSetterToProvide}>
        <Routes>
        <Route path="/" element={<Home />}>
            {username ? <Route index element={<Logout />} /> : <Route index element={<LoginButton />} />}
            <Route path="/userDash" element={<UserDash />} />
            
            {/* <Route path="/adminDash" element={<AdminDash />} />*/}
          </Route>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/sandsweeper" element={<RequireAuth><Board /></RequireAuth>} />
          <Route path="/lyrics" element={<RequireAuth><LyricsGame /></RequireAuth>} />
          <Route path="/memorygame" element={<RequireAuth><MemoryGame /></RequireAuth>} />
          <Route path="/flyingBean" element={<RequireAuth><FlyingBean /></RequireAuth>} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </UsernameContext.Provider>
    </div>
  );
}
export default App;
