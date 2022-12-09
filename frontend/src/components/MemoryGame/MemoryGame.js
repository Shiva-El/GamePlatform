//utility
import React from "react";
//Components
import Cards from "./Cards";
import Header from "../Header.jsx";
import Leaderboard from "./LeaderboardMemory";
//Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div>
      <Header/>
      <Container fluid style={{width: "98%", display: "flex", justifyContent: "center"}}>
        <Col>
          <Row>
            <h1 className="text">Memory Game</h1>
          </Row>
          <Row>
            <Cards />
          </Row>
        </Col>
      </Container>
      {/*<Leaderboard style={{margin: "40px"}}/>*/}
    </div>
  );
}


export default App;