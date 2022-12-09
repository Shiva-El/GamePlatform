//Utility Imports
import { React, useState } from "react";
import { buildSnakeSpaces, buildNeighbours } from "../../utils";
import produce from 'immer';
import UsernameContext from "../../context/UsernameContext";
//Image Imports
import snek from "../../images/SnekB.png";
import gotNug from "../../images/GotNug.png";
import flag from "../../images/Flag.png";
//Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
//Component Imports
import UserDashButton from "./UserDashButton";
import Logout from "./Logout";

function UserNav(){
    return(
        <Container style={{width: "98%", display: "flex", justifyContent: "center"}}>
            <Col>
                <Row>
                    <UserDashButton />
                </Row>
            </Col>
            <Col>
                <Row>
                    <Logout />
                </Row>
            </Col>
        </Container>
    )
}

export default UserNav;