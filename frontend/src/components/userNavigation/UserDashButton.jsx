import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Account(){
    return(
        <div>
            <Link to="/userDash">
                <Button style={{color: "white", textAlign: "center", border: "2px solid #EDC28F", borderRadius: "5px", boxShadow: "2px 2px 15px 5px #EDC28F, 0px 0px 25px 8px sienna inset", padding: "10px", fontWeight: "bold", fontSize: "130%"}}>
                    Your Account
                </Button>
            </Link>
        </div>
    )
}
export default Account;