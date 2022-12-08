import Home from "./components/Home.jsx";
import Board from "./components/Minesweeper/Board.jsx";
import LyricsGame from "./components/lyrics/LyricsGame.js";
import React, { useState } from "react";
import {Route, Routes} from "react-router-dom";
import LoginForm from "./components/LoginForm";
import LoggedInContext from "./context/LoggedInContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loggedInValueAndSetterToProvide = [isLoggedIn, setIsLoggedIn]; // So we can pass down both value and setter

  return (
    <div style={{border: "8px double #EDC28F", borderRadius: "3px", textAlign: "center", boxShadow: "2px 2px 15px 5px #EDC28F, 2px 2px 15px 5px #EDC28F inset"}}>
      <LoggedInContext.Provider value={loggedInValueAndSetterToProvide}>
    <Routes>
      <Route path="/" element={<Home />}>
        if(!isLoggedIn){<Route index element={<LoginForm />} />}
        {/*}
        <Route path="signup" element={<Signup />} />
        <Route path="userDash" element={<UserDash />} />
        <Route path="adminDash" element={<AdminDash />} />*/}
      </Route>
      <Route path="/minesweeper" element={<Board />} />
      <Route path="/lyrics" element={<LyricsGame />} />
    </Routes>
      </LoggedInContext.Provider>
    </div>
  );
}
export default App;
