//Utility Imports
import React from "react";
import {Outlet} from "react-router-dom";
//Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
//Component Imports
import Header from './Header';
import HomeLogo from './HomeLogo';
import GamesList from './GamesList';
import UsernameContext from "../context/UsernameContext";


function Home() {
    const [username, setUsername] = React.useContext(UsernameContext);

    return(
        <Container fluid style={{width: "100%"}}>
            <Col style={{width: "100%"}}>
                <Row style={{width: "100%"}}>
                    <Header />
                </Row>
                <Row style={{width: "100%"}}>
                    <HomeLogo />
                </Row>
                <Row style={{width: "100%", color: "white"}}>
                    <p>{username ? "Welcome " + username + "!" : "Please login!"}</p>
                    <Outlet />
                </Row>
                <Row style={{width: "100%"}}>
                    <GamesList />
                </Row>
            </Col>
        </Container>
    )
}

export default Home;
