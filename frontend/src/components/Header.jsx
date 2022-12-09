//Utility Imports
import React from "react";
import { Link } from "react-router-dom";
//Bootstrap Imports
import Button from 'react-bootstrap/Button';

const buttonStyle={
    color: "white", 
    border: "2px solid #EDC28F", 
    borderRadius: "5px", 
    boxShadow: "2px 2px 15px 5px #EDC28F, 0px 0px 25px 8px sienna inset", 
    padding: "20%", 
    fontWeight: "bold", 
    fontSize: "150%"
}

function Header(){
    return(
        <div>
            <div style={{display: "flex", justifyContent: "left"}}>
            <Link to="/">
                <Button style={buttonStyle}>
                    Home
                </Button>
            </Link>
            <Link to="/about" style={{marginLeft: "8%"}}>
                <Button style={buttonStyle}>
                    About
                </Button>
            </Link>
            </div>
        </div>
        
    )
}

export default Header;