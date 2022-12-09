import React, { useRef } from "react";
import Button from "@mui/material/Button";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ChangePassword() {
  const username = JSON.parse(localStorage.getItem("username"));
  const passwordRef = useRef();
  const newpasswordRef = useRef();
  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page reload

    if (newpasswordRef.current.value === passwordRef.current.value) {
      fetch(
        "http://localhost:3001/leaderboard/" +
          { username }.username +
          "/password",
        {
          method: "PATCH",
          body: JSON.stringify({
            password: newpasswordRef.current.value,
          }),
          headers: {
            "Content-type": "application/json;charset=UTF-8",
          },
        }
      )
        .then((data) => data.json())
        .then((json) => {
          alert("Password changed to " + newpasswordRef.current.value );
        });
    } 
    else {
      alert("Passwords don't match!");
    }
  };
  return (
    <div>
      <h3 className="text">Change Password</h3>
      <Container
        style={{
          color: "white",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Col>
            <Row>
              <label className="label" htmlFor="password">
                New Password:{" "}
              </label>
              <input id="newpassword" type="password" ref={newpasswordRef} />
            </Row>
          </Col>
          <Col>
            <Row>
              <label className="label" htmlFor="password">
                Verify Password:{" "}
              </label>
              <input id="password" type="password" ref={passwordRef} />
            </Row>
          </Col>
          <br />
          <Button className="button" type="submit" variant="outlined">
            Change Password
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default ChangePassword;
