import "./App.css";
import React from "react";
import ChangeUsername from "../components/UserDash/ChangeUsername";
import ChangePassword from "../components/UserDash/ChangePassword";
import { Button } from "@mui/material";

function UserDash() {

  return (
    <>
      <div className="App">
        <div id="nav">
          <Button variant="outlined">Home</Button>
          <Button variant="outlined">Logout</Button>
        </div>
        <div>
          <h1>User Dashboard</h1>

          <h1>Profile Picture</h1>
          <label>Upload Profile Picture: </label>
          <Button variant="outlined">
            <input accept="image/*" multiple type="file" />
          </Button>
          <br></br>
          <br></br>
          <div id="user">
            <ChangeUsername />
          </div>
          <div id="pass">
            <ChangePassword />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDash;