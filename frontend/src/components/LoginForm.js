import React, { useRef, useState} from 'react';
import { useNavigate } from "react-router-dom";
import { makeStyles} from '@mui/styles';
import UsernameContext from "../context/UsernameContext";
import Header from "./Header.jsx";
import Signup from "./Signup.jsx";
import HomeLogo from "./HomeLogo.jsx";

//Bootstrap Imports
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const useStyles = makeStyles({
  div: {display: "inline-block", padding: "10em"},
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // padding: theme.spacing(2),
  },
  label: {color: "white", textAlign: "center", padding: "10px", fontWeight: "bold", fontSize: "130%"},
  input: {padding: "10px", margin:"10px", fontSize: "130%"},
  button: {color: "white", margin:"40px", textAlign: "center", border: "2px solid #EDC28F", borderRadius: "5px", boxShadow: "2px 2px 15px 5px #EDC28F, 0px 0px 25px 8px sienna inset", width: "150px", padding: "10px", fontWeight: "bold", fontSize: "130%"}
});

const LoginForm = ({ handleClose }) => {
  const navigate = useNavigate();

  const usernameSigninRef = useRef();
  const passwordSigninRef = useRef();
  const usernameSignupRef = useRef();
  const passwordSignupRef = useRef();

  const [loginError, setLoginError] = useState(false);
  const [registerError, setRegisterError] = useState(false);

  const [username, setUsername] = React.useContext(UsernameContext);

  const handleLogin = (event) => {
    event.preventDefault();

    const username = usernameSigninRef.current.value;
    const password = passwordSigninRef.current.value;

    fetch("http://localhost:3001/users/login", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
    })
      .then((data) => data.json())
      .then((json) => {
        if (json.success) {
          setUsername(username);
          localStorage.setItem('username', JSON.stringify(username));
          navigate("/");
        } else {
          setUsername(null);
          setLoginError(true);
        }
      });
  };

  const handleRegister = (event) => {
    event.preventDefault();

    const username = usernameSignupRef.current.value;
    const password = passwordSignupRef.current.value;

    fetch("http://localhost:3001/users/register", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
        minesweeperScore: 0,
        lyricsScore: 0,
        memoryScore: 0,
        flyingBeanScore: 0
      }),
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
    })
      .then((data) => data.json())
      .then((json) => {
        if (json.success) {
          setUsername(username);
          localStorage.setItem('username', JSON.stringify(username));
          navigate("/");
        } else {
          setUsername(null);
          setRegisterError(true);
        }
      });
  };


  const classes = useStyles();

  return (
    <div>
    <Header />
    <Container fluid style={{width: "100%"}} >
      <Col style={{width: "100%"}}>
        <Row>
          <HomeLogo/>
            <form className={classes.form} onSubmit={handleLogin}>
              <label className={classes.label} htmlFor="username" style={{textShadow: "1px 1px 10px white"}}>Username</label>
              <input className={classes.input} id="username" ref={usernameSigninRef} required/>
              <label className={classes.label} htmlFor="password" style={{textShadow: "1px 1px 10px white"}}>Password</label>
              <input className={classes.input} id="password" type="password" ref={passwordSigninRef} required/>
              <label className={classes.label} style={{color:"red"}}>{loginError ? "Error! please try again.": ""}</label>
              <Button className={classes.button} type="submit">
                Login
              </Button>
            </form>
        </Row>
      </Col>
      <p style={{textShadow: "1px 1px 5px white", color: "white"}}> Don't have an account? Sign up below!</p>
      <hr style={{color: "white"}} />
      <Col style={{width: "100%"}}>
        <Row>
            <form className={classes.form} onSubmit={handleRegister}>
              <label className={classes.label} htmlFor="username">Username</label>
              <input className={classes.input} id="username" ref={usernameSignupRef} required/>
              <label className={classes.label} htmlFor="password">Password</label>
              <input className={classes.input} id="password" type="password" ref={passwordSignupRef} required/>
              <label className={classes.label} style={{color:"red"}}>{registerError ? "Error! please try again.": ""}</label>
              <Button className={classes.button} type="submit">
                Register
              </Button>
            </form>
        </Row>
      </Col>
    </Container>
    </div>
  );
};

export default LoginForm;