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

  function redirectDev() {
    history.push("/IT");
  }
  function redirectaccount() {
    history.push("/account");
  }
  function redirectregistration() {
    history.push("/registration");
  }

  function test() {
    setRem(true);
    if (emailtrue === email && passwordtrue === password) {
      redirectaccount();
    } else {
      alert("Пароль или логин не верные");
      handleClose();
    }
  }

  const emailtrue = "";
  const passwordtrue = "";

  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rem, setRem] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand
          onClick={redirecthome}
          role="button"
          style={{
            paddingLeft: 30,
          }}
        >
          <img
            src="https://whoiswho.obs.ru-moscow-1.hc.sbercloud.ru/images/company/3234556/f356b238-bf3c-4ab3-8403-cf74bee46d9b.jpg"
            alt=""
            style={{ width: 100, height: 100 }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={redirecthome} className="Nav-link">
              Home
            </Nav.Link>
            <Nav.Link onClick={redirectactual} className="Nav-link">
              Actual
            </Nav.Link>
            <Nav.Link onClick={redirectDev} className="Nav-link">
              Dev
            </Nav.Link>
            <Nav.Link onClick={redirectDev} className="Nav-link">
              DB
            </Nav.Link>
            <Nav.Link onClick={redirectDev} className="Nav-link">
              Statistic
            </Nav.Link>
          </Nav>
          <Nav className="float-end">
            <Button variant="dark" onClick={handleShow}>
              Log In
            </Button>
            <Button variant="dark" onClick={redirectregistration}>
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
              <Form.Check type="checkbox" label="Remember me" value={rem} />
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
