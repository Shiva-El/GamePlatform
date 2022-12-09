//Utility Imports
import React from "react";
import {Outlet, Link} from "react-router-dom";
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
import LoginForm from './LoginForm';


function Home() {
    const [username, setUsername] = React.useContext(UsernameContext);

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
                    <p>{username ? "Welcome " + username + "!" : "Please login!"}</p>
                    {username ? 
                    <Link to="/userDash">
                        <Button style={buttonStyle}>
                            Your Account
                        </Button>
                    </Link> : <></>}

                    {username ? 
                        <Button style={buttonStyle} onClick={ExitSession}>
                            Logout
                        </Button> : <></>
                    }

                    {username ? <></> : 
                    <LoginForm />
                    }
                   
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
