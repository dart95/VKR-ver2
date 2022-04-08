import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function Navibar() {
  const history = useHistory();

  function redirecthome() {
    history.push("/");
  }

  function redirectactual() {
    history.push("/actual");
  }

  function redirectsports() {
    history.push("/sports");
  }
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand path="/">News</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link onClick={redirecthome}>Home</Nav.Link>
            <Nav.Link onClick={redirectactual}>Actual News</Nav.Link>
            <Nav.Link onClick={redirectsports}>Sports News</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
