import React, {useRef} from 'react';
import UsernameContext from "../context/UsernameContext";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function LoginForm() {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const [username, setUsername] = React.useContext(UsernameContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

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
        alert(JSON.stringify(json));
        json.success ? setUsername(username) : setUsername(null);
        localStorage.setItem('username', JSON.stringify(username));
      });
  };

  return (
    <form onSubmit={handleSubmit}>
    <Container fluid>
      <Col>
        <Row>
          <label htmlFor="username">Username&emsp;</label>
          <input id="username" type="text" ref={usernameRef} required />
        </Row>
        <br />
        <Row>
        <label htmlFor="password">Password&emsp;</label>
        <input id="password" type="password" ref={passwordRef} required />
        </Row>
        <Row style={{textAlign: "center", paddingTop: "5px"}}>
          <button type="submit">Login</button>
        </Row>
      </Col>
    </Container>
    </form>
    
      
      
      
    
  );
}

export default LoginForm;
