//Utility Imports
import React from "react";
import {Outlet, Link} from "react-router-dom";
//Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { makeStyles} from '@mui/styles';
//Component Imports
import Header from './Header';
import HomeLogo from './HomeLogo';
import GamesList from './GamesList';
import UsernameContext from "../context/UsernameContext";
import LoginForm from './LoginForm';
import LoginButton from "./LoginButton";

const useStyles = makeStyles({
    label: {color: "white", textAlign: "center", padding: "10px", fontWeight: "bold", fontSize: "130%"},
  });

function Home() {
    const [username, setUsername] = React.useContext(UsernameContext);

    const classes = useStyles();
    
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

    function ExitSession(){
        localStorage.removeItem("username");
        setUsername(null);
        
    }
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
                <Col>
                    <label className={classes.label}>{username ? "Welcome " + username + "!" : "Please login!"}</label>
                    <LoginButton />
                </Col>
                </Row>
                <Row style={{width: "100%"}}>
                    <GamesList />
                </Row>
            </Col>
        </Container>
    )
}

export default Home;
