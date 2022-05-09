//import React, { useEffect } from "react";
import { Nav, Navbar, Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Modal } from "react-bootstrap";

export default function Navibar() {
  const history = useHistory();

  function redirectactual() {
    history.push("/actual");
  }

  function redirecthome() {
    history.push("/");
  }

  function redirectsports() {
    history.push("/sports");
  }
  function redirectaccount() {
    history.push("/account");
  }
  function redirectregistration() {
    history.push("/registration");
  }

  function test(setBtntext, color) {
    if (emailtrue === email && passwordtrue === password) {
      redirectaccount();
    } else {
      alert("kozel");
      handleClose();
    }
  }

  const emailtrue = "";
  const passwordtrue = "";

  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand onClick={redirecthome} role="button">
          News
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr  -auto">
            <Nav.Link onClick={redirecthome} className="Nav-link">
              Home Page
            </Nav.Link>
            <Nav.Link onClick={redirectactual} className="Nav-link">
              Actual News
            </Nav.Link>
            <Nav.Link onClick={redirectsports} className="Nav-link">
              Sports News
            </Nav.Link>
            <Nav.Link onClick={redirectsports} className="Nav-link">
              Ria News
            </Nav.Link>
            <Nav.Link onClick={redirectsports} className="Nav-link">
              Komsomol True
            </Nav.Link>
            <Nav.Link onClick={redirectsports} className="Nav-link">
              Tass News
            </Nav.Link>
            <Nav.Link onClick={redirectsports} className="Nav-link">
              Spas News
            </Nav.Link>
            <Nav.Link onClick={redirectsports} className="Nav-link">
              Cyber sport News
            </Nav.Link>
          </Nav>
          <Nav className="float-end">
            <Button
              variant="dark"
              className="btn-log"
              onClick={handleShow}
              style={{}}
            >
              Log In
            </Button>
            <Button
              variant="dark"
              className="btn-reg"
              onClick={redirectregistration}
              style={{}}
            >
              Sign up
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="fromBasicmail">
              <Form.Label> Email Adress</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email "
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Form.Text className="text-muted">
                We`ll never share your email with anyone else
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="fromBasicPassword">
              <Form.Label> Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password "
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group controlId="fromBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>
            <Form.Group className="d-flex justify-content-end">
              <Button onClick={test}> Yes</Button>
              <Button variant="dark" onClick={handleClose}>
                Close
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
