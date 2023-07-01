import React from "react";
import { useState } from "react";
import "./login.css";
import { Modal, Form } from "react-bootstrap";

const Login = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // Perform login logic here
    login(email, password);
  };

  return (
    <>
      <button className="custom-button" onClick={handleShow}>
        Login
      </button>

      <Modal show={show} onHide={handleClose} className="modal-container">
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "black" }}>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/*error && <div className="error">{error}</div>*/}
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="email">
              <Form.Label style={{ color: "black" }}>Email:</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label style={{ color: "black" }}>Password:</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className="custom-button mt-1" type="submit">
            Login
          </button>
          <button className="custom-button" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;
