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
import Footer from './Footer';
import UsernameContext from "../context/UsernameContext";


function Home() {
    const [username, setUsername] = React.useContext(UsernameContext);

    return(
        <Container>
            <Row>
                <Col>
                    <Header />
                    <HomeLogo />
                </Col>
            </Row>
            <Row>
                <Col style={{color: "white"}}>
                    <Outlet />
                    <p>{username ? "Welcome " + username + "!" : "Please login!"}</p>
                </Col>
            </Row>
            <Row>
                <GamesList />
            </Row>
        </Container>
    )
}

export default Home;
