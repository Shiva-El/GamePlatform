import styled from "styled-components";
import remote from "../images/remote.png";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Header from './Header';

function About() {
  return (
    <div>
      <Header />
    <Container fluid style={{color: "white", display: "flex", justifyContent: "center", width: "98%", marginLeft: "1%"}}>
      <Col>
        <Row>
          <h1 style={{backgroundImage: 'url(' + require('../images/remote.png') + ')', backgroundPosition: "center", backgroundSize: "80%", backgroundRepeat: "no-repeat", height: "200px"}}><span style={{backgroundColor: "rgba(0, 0, 0, 0.5)", borderRadius: "5px", padding: "10px"}}>About Us</span></h1>  
        </Row>
        <Row>
          <p style={{textShadow: "1px 1px 5px white"}}>Hi there, from an indie video game studio 👋</p>
          <p style={{backgroundColor: "rgba(255, 255, 255, 0.25)", borderRadius: "10px", padding: "10px"}}> We're a small project group focused on building a virtual arcade! 
          <br/>
          We want to bring old games back to life for a new generation, so play to you heart's content!
          </p>
          <h2 style={{textShadow: "1px 1px 5px white", textAlign: "left"}}> Our Team: </h2>
        </Row>
        <Row style={{border: "1px solid white", boxShadow: "1px 1px 10px white, 1px 1px 10px white inset", borderRadius: "10px", padding: "5px", margin: "5px"}}>
          <h3 style={{textShadow: "1px 1px 25px white", textAlign: "left", textDecoration: "underline"}}> Heindy Louissaint-Laurore</h3>
          <p style={{textAlign: "left", textShadow: "1px 1px 25px white"}}> The team leader and an expert graphic design, Heindy is our MVP!
          <br/>
          He came up with the FlyingBean game, inspired by one of his favourite phone classics, Flappy Bird!
          <br/>
          He remembered how simple yet addicting the game was, and wanted some insight into how to make his own mobile masterpiece!
          </p>
          <br/>
        </Row>
        <Row style={{border: "1px solid red", boxShadow: "1px 1px 10px red, 1px 1px 10px red inset", borderRadius: "10px", padding: "5px", margin: "5px"}}>
          <h3 style={{textShadow: "1px 1px 25px red", textAlign: "left", textDecoration: "underline"}}> Shiva Elhamian</h3>
          <p style={{textAlign: "left", textShadow: "1px 1px 25px red"}}> Shiva was looking for something more unique than the average online store, so she 
          <br/> decided to break the mould with a more interesting project that appealed to her love of music.
          <br/> Her Finish the Lyrics game tests people's music and pop culture knowledge in an experience and reminds us of
          <br/> the party games we played in our student days.
          </p>
          <br/>
        </Row>
        <Row style={{border: "1px solid #bc13fe", boxShadow: "1px 1px 10px #bc13fe, 1px 1px 10px #bc13fe inset", borderRadius: "10px", padding: "5px", margin: "5px"}}>
          <h3 style={{textShadow: "1px 1px 15px #bc13fe", textAlign: "left", textDecoration: "underline"}}> Nathaniel Kwok</h3>
          <p style={{textAlign: "left", textShadow: "1px 1px 15px #bc13fe"}}> Looking to challenge himself to create a full stack project that was interactive for the user, 
          <br/> Nathaniel knew that an arcade would be the most fun and challenging both for him and our users!
          <br/> His Memory Game is a good example of practising basic memory skills in an efficient way, and a bit of healthy competition never hurt!</p>
          <br/>
        </Row>
        <Row style={{border: "1px solid yellow", boxShadow: "1px 1px 10px yellow, 1px 1px 10px yellow inset", borderRadius: "10px", padding: "5px", margin: "5px"}}>
          <h3 style={{textShadow: "1px 1px 35px yellow", textAlign: "left", textDecoration: "underline"}}> Matthew Lewis-Richmond</h3>
          <p style={{textAlign: "left", textShadow: "1px 1px 35px yellow"}}> Our resident pixel artist and a lover of retro games! 
          <br/>
          He came up with the Sand Sweeper game based on his love for strategy and Indiana Jones.
          </p>
          <br/>
        </Row>
      </Col>
    </Container>
    </div>
  );
}

const about = styled.div`
  width: 100%;
  padding: 78px 0px;
  & img {
    height: auto;
    width: 420px;
  }
`;

const aboutText = styled.div`
  width: 550px;
  &h1 {
    color: white;
    font-size: 80px;
    text-transform: capitalize;
    margin-bottom: 20px;
  }

  &p {
    color: white;
    letter-spacing: 1px;
    line-height: 28px;
    font-size: 18px;
    margin-bottom: 45px;
  }
`;

const mainP = styled.div`
  width: 1130px;
  max-width: 95%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export default About;
