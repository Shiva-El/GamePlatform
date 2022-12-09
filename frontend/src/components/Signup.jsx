import React, {useRef} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Header from "./Header";
import HomeLogo from "./HomeLogo";

function Signup() {
  const uRef = useRef();
  const pRef = useRef();
  const miRef = useRef();
  const meRef = useRef();
  const lyRef = useRef();
  const fbRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = uRef.current.value;
    const password = pRef.current.value;

    fetch("http://localhost:3001/leaderboard", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
        minesweeperScore: 0,
        lyricsScore: 0,
        memoryScore: 0,
        flyingBeanScore: 0
      }),
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
    })
      .then((data) => data.json())
      .then((json) => {
        alert(JSON.stringify("Thank you for registering! " + json));
      });
  };

  const buttonStyle = {
    color: "white", 
    textAlign: "center", 
    border: "2px solid #EDC28F", 
    borderRadius: "5px", 
    boxShadow: "2px 2px 15px 5px #EDC28F, 0px 0px 25px 8px sienna inset", 
    padding: "10px", 
    fontWeight: "bold", 
    fontSize: "130%"
}

  return (
    <form onSubmit={handleSubmit}>
    <Container fluid style={{color: "white", width: "96%", display: "flex", paddingLeft: "2%"}}>
      <Col>
        <Row style={{width: "100%", justifyContent: "left"}}>
            <Header />
        </Row>
        <Row>
            <HomeLogo />
            <h2> signup </h2>
        </Row>
    </Col>
    <Col style={{color: "white", position: "relative", margin: "auto" }}>
        <Row>
          <label htmlFor="username">What will your username be?&emsp;</label>
          <input id="username" type="text" ref={uRef} required />
        </Row>
        <br />
        <Row>
        <label htmlFor="password">What is your password?&emsp;</label>
        <input id="password" type="password" ref={pRef} required />
        </Row>
        <Row style={{textAlign: "center", paddingTop: "20px"}}>
          <button type="submit" style={buttonStyle}>Sign up</button>
        </Row>
      </Col>
    </Container>
    </form>
  );
}

export default Signup;
