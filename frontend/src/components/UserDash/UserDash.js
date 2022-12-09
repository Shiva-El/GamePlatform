//Utility
import React from "react";
//Components
import ChangeUsername from "./ChangeUsername";
import ChangePassword from "./ChangePassword";
import Header from "../Header";
//Styling
import "./UserDash.css";
import { Button } from "@mui/material";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function UserDash() {

  return (
    <div className="App">
    <Header />
    <Container fluid style={{width: "98%", display: "flex", justifyContent: "center"}}>
      <Col>
        <Row>
          <h1 className="text">User Dashboard</h1>
        </Row>
        <Row>
          <h1 className="text">Profile Picture</h1>
          <label className="label" style={{color: "white"}}>Upload Profile Picture: &emsp;</label>
          <Button className="button" variant="outlined">
            <input accept="image/*" multiple type="file" />
          </Button>
        </Row>
        <Container>{/*}
          <Col>
            <Row>
              <ChangeUsername />
            </Row>
  </Col>*/}
          <Col>
            <Row>
              &emsp;
            </Row>
          </Col>
          <Col>
            <Row>
              <ChangePassword />
            </Row>
          </Col>
        </Container>
      </Col>
    </Container>
    </div>
          
  );
}

export default UserDash;
