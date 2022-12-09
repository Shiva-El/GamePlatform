import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Logout(){
    function ExitSession(){
        localStorage.setItem('username', null);
    }
    return(
        <div>
            <Link to="/">
                <Button onClick={ExitSession()} style={{color: "white", textAlign: "center", border: "2px solid #EDC28F", borderRadius: "5px", boxShadow: "2px 2px 15px 5px #EDC28F, 0px 0px 25px 8px sienna inset", padding: "10px", fontWeight: "bold", fontSize: "130%"}}>
                    Logout
                </Button>
            </Link>
        </div>
    )
}

export default Logout;