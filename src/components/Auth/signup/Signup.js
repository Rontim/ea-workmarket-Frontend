import React from "react";
import { useState } from "react";
import "./signup.css";
import { Modal, Form } from "react-bootstrap";

const Signup = () => {
  const [user, setUser] = useState({
    email: "",
    username: "",
    first_name: "",
    last_name: "",
    password: "",
    re_password: "",
  });

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
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <button className="custom-button" onClick={handleShow}>
        Get Started
      </button>

      <Modal show={show} onHide={handleClose} className="modal-container">
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "black" }}>Create An Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/*error && <div className="error">{error}</div>*/}
          <Form onSubmit={handleSignup}>
            <Form.Group controlId="email">
              <Form.Label style={{ color: "black" }}>Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={user.email}
                onChange={
                  handleChange
                }
              />
            </Form.Group>
            <Form.Group controlId="first_name">
              <Form.Label style={{ color: "black" }}>First Name:</Form.Label>
              <Form.Control
                type="text"
                name="first_name"
                value={user.first_name}
                onChange={
                  handleChange
                }
              />
            </Form.Group>
            <Form.Group controlId="last_name">
              <Form.Label style={{ color: "black" }}>Last Name:</Form.Label>
              <Form.Control
                type="text"
                name="last_name"
                value={user.last_name}
                onChange={
                  handleChange
                }
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label style={{ color: "black" }}>Password:</Form.Label>
              <Form.Control
                type="password"
                value={user.password}
                onChange={
                  handleChange
                }
              />
            </Form.Group>
            <Form.Group controlId="new_password">
              <Form.Label style={{ color: "black" }}>
                Confirm Password:
              </Form.Label>
              <Form.Control
                type="password"
                name="re_password"
                value={user.re_password}
                onChange={
                  handleChange
                }
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
