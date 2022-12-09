import React, { useRef } from "react";
import Button from "@mui/material/Button";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ChangeUsername() {
  const username = JSON.parse(localStorage.getItem("username"));
  const userRef = useRef();
  const newuserRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page reload

    if (newuserRef.current.value === userRef.current.value) {
      fetch("http://localhost:3001/leaderboard/"+{username}.username+"/username", {
        method: "PATCH",
        body: JSON.stringify({
          username: newuserRef.current.value,
        }),
        headers: {
          "Content-type": "application/json;charset=UTF-8",
        },
      })
        .then((data) => data.json())
        .then((json) => {
          alert("Username changed to " + newuserRef.current.value);
        });
    }
    else {
      alert("Usernames don't match!");
    }
   
  };
  return (
    <div>
      <h3 className="text">Change Username</h3>
      <Container style={{color: "white", width: "100%", display: "flex", justifyContent: "center"}}>
        <form onSubmit={handleSubmit}>
        <Col>
          <Row>
            <label className="label" htmlFor="username">New Username:&emsp;&nbsp;&nbsp;</label>
            <input id="newusername" type="text" ref={newuserRef} />
          </Row>
        </Col>
        <Col>
          <Row>
            <label  className="label" htmlFor="username">Verify Username:&emsp;</label>
            <input id="username" type="text" ref={userRef} />
          </Row>
        </Col>
        <br />
        <Button className="button" type="submit" variant="outlined">
          Change Username
        </Button> 
        </form>
      </Container>
    </div>
  );
}

export default ChangeUsername;
