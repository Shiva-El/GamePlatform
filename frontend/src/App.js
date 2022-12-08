import "./App.css";
import Home from "./pages/Home";
import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import LoggedInContext from "./context/LoggedInContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loggedInValueAndSetterToProvide = [isLoggedIn, setIsLoggedIn]; // So we can pass down both value and setter

  return (
    <div>
      <LoggedInContext.Provider value={loggedInValueAndSetterToProvide}>
        {isLoggedIn ? <Home /> : <LoginForm />}
      </LoggedInContext.Provider>
    </div>
  );
}
export default App;
