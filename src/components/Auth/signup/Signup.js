import React from "react";
import { useState } from "react";
import "./signup.css";
import { Modal, Form } from "react-bootstrap";

const Signup = () => {
const [user,setUser]=useState({
   email:'', username:'', first_name:'', last_name:'', password:'',confirmPassword:''
  })
  // const [error, setError] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  const handleSignup = (event) => {
    event.preventDefault();
   
  };

  return (
    <>
      <button className="custom-button" onClick={handleShow}>
       Get Started
      </button>

      <Modal show={show} onHide={handleClose} className="modal-container">
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "black" }}></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/*error && <div className="error">{error}</div>*/}
          <Form onSubmit={handleSignup}>
            <Form.Group controlId="email">
              <Form.Label style={{ color: "black" }}>Email:</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setUser({...user,'email':e.target.value})}
              />
            </Form.Group>
            <Form.Group controlId="first_name">
              <Form.Label style={{ color: "black" }}>First Name:</Form.Label>
              <Form.Control
                type="text"
                value={first_name}
                onChange={(e) => setUser({...user,'first_name':e.target.value})}
              />
            </Form.Group>
            <Form.Group controlId="last_name">
              <Form.Label style={{ color: "black" }}>Last Name:</Form.Label>
              <Form.Control
                type="text"
                value={last_name}
                onChange={(e) => setUser({...user,'last_name':e.target.value})}
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label style={{ color: "black" }}>Password:</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setUser({...user,'password':e.target.value})}
              />
            </Form.Group>
            <Form.Group controlId="new_password">
              <Form.Label style={{ color: "black" }}>Confirm Password:</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setUser({...user,'new_password':e.target.value})}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className="custom-button mt-1" type="submit">
            Sign Up
          </button>
          <button className="custom-button" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Signup;
