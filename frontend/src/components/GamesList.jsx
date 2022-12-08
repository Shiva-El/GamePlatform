import React from 'react';
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


import flag from "../images/Flag.png";
import nug from "../images/Gold Nug.png";
import gotNug from "../images/GotNug.png";

function GamesList(){
return(
    <div>
        
        <Container style={{width: "96%", margin: "2%"}}>
            <Row>
                <Col>
                    <h1 style={{color: "white", textShadow: "0px 0px 25px #EDC28F, 0 0 5px LightGoldenRodYellow", fontSize: "250%",
                    background: "linear-gradient(to right, black, #EDC28F, black)"}}> 
                        Our Games
                    </h1>
                </Col>
                <Col style={{color: "white", textAlign: "center", border: "2px solid red", borderRadius: "5px", boxShadow: "2px 2px 15px 5px red, 2px 2px 15px 5px red inset", marginBottom: "8px"}}>
                    <table style={{width: "100%"}}>
                        <tr>
                            <td style={{width: "49%", padding: "1%"}}>
                            <h2 style={{textAlign: "left", textDecorationLine: "underline"}}>Finish the Lyrics</h2><Link to="/lyrics">Play!</Link>
                                <p style={{textAlign: "left", marginLeft: "2%"}}>
                                    Description
                                </p>
                            </td>
                            <td style={{width: "49%", padding: "1%"}}>
                                <img src="" alt="Screenshot" />
                            </td>
                        </tr>
                    </table>
                </Col>
                <Col style={{color: "white", textAlign: "center", border: "2px solid yellow", borderRadius: "5px", boxShadow: "2px 2px 15px 5px yellow, 2px 2px 15px 5px yellow inset", marginBottom: "8px"}}>
                    <table style={{width: "100%"}}>
                        <tr>
                            <td style={{width: "49%", padding: "1%"}}>
                                <h2 style={{textAlign: "left", textDecorationLine: "underline"}}>Sand Sweeper</h2><Link to="/minesweeper">Play!</Link>
                                <p style={{textAlign: "left", marginLeft: "2%"}}>
                                    Left click spaces to dig for treasure! <br />
                                    Be careful not to click on any snake spaces, or it's game over. <br />
                                    Spaces with a <img src={gotNug} alt=" check mark " style={{width: "4%", verticalAlign: "middle"}}/> mark a collected gold nugget ( <img src={nug} style={{width: "4%", verticalAlign: "middle"}} /> ), and have no snakes around them. <br />
                                    Spaces with a number on them show how many snakes are surrounding that space, and also grant 1 gold nugget when clicked. <br />
                                    Place a flag ( <img src={flag} alt=" check mark " style={{width: "4%", verticalAlign: "middle"}}/> ) by right-clicking a space to mark where you think there are snakes.
                                    Can you clear the whole board?
                                </p>
                            </td>
                            <td style={{width: "49%", padding: "1%"}}>
                                <img src="" alt="Screenshot" />
                            </td>
                        </tr>
                    </table>
                </Col>
                <Col style={{color: "white", textAlign: "center", border: "2px solid #EDC28F", borderRadius: "5px", boxShadow: "2px 2px 15px 5px #EDC28F, 2px 2px 15px 5px #EDC28F inset", marginBottom: "8px"}}>
                    <table style={{width: "100%"}}>
                        <tr>
                            <td style={{width: "49%", padding: "1%"}}>
                                <h2 style={{textAlign: "left", textDecoration: "underline"}}> Flying Bean </h2>
                                <p style={{textAlign: "left", marginLeft: "2%"}}>
                                    Description
                                </p>
                            </td>
                            <td style={{width: "49%", padding: "1%"}}>
                                <img src="" alt="Screenshot" />
                            </td>
                        </tr>
                    </table>
                </Col>
                <Col style={{color: "white", textAlign: "center", border: "2px solid #bc13fe", borderRadius: "5px", boxShadow: "2px 2px 15px 5px #bc13fe, 2px 2px 15px 5px #bc13fe inset", marginBottom: "8px"}}>
                    <table style={{width: "100%"}}>
                        <tr>
                            <td style={{width: "49%", padding: "1%"}}>
                                <h2 style={{textAlign: "left", textDecoration: "underline"}}> Memory Game </h2>
                                <p style={{textAlign: "left", marginLeft: "2%"}}>
                                    Description
                                </p>
                            </td>
                            <td style={{width: "49%", padding: "1%"}}>
                                <img src="" alt="Screenshot" />
                            </td>
                        </tr>
                    </table>
                </Col>
            </Row>
        </Container>


{/*Alternative horizontal orientation for game boxes
         <table style={{width: "96%", margin: "2%"}}>
            <tr>
                <td style={{color: "yellow", textAlign: "center", border: "2px solid yellow", boxShadow: "2px 2px 15px 5px yellow, 2px 2px 15px 5px yellow inset", width: "25%"}}>
                    
                </td>
                <td style={{color: "white", textAlign: "center", border: "2px solid white", boxShadow: "2px 2px 15px 5px white, 2px 2px 15px 5px white inset", width: "25%"}}>
                    
                </td>
                <td style={{color: "white", textAlign: "center", border: "2px solid white", boxShadow: "2px 2px 15px 5px white, 2px 2px 15px 5px white inset", width: "25%"}}>
                    
                </td>
                <td style={{color: "white", textAlign: "center", border: "2px solid white", boxShadow: "2px 2px 15px 5px white, 2px 2px 15px 5px white inset", width: "25%"}}>
                     
                </td>
            </tr>
        </table>
*/}
    </div>
                   
                
                    
)
}

export default GamesList;