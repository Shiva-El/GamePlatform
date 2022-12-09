//Utility Imports
import React from "react";
import { Link } from "react-router-dom";
import UsernameContext from "../context/UsernameContext";
//Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Header(){
    return(
        <div style={{width: "100%", display: "flex", justifyContent: "left"}}>
            <Link to="/">
                <Button style={{color: "white", border: "2px solid #EDC28F", borderRadius: "5px", boxShadow: "2px 2px 15px 5px #EDC28F, 0px 0px 25px 8px sienna inset", padding: "20%", fontWeight: "bold", fontSize: "150%"}}>
                    Home
                </Button>
            </Link>
        </div>
    )
}

export default Header;