import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { Button, Form } from "react-bootstrap";

export default class Loginbtns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      email: "",
      password: "",
      show: false,
      setShow: false,
      emailtrue: "YuriHoi",
      passwordtrue: "Voronezh",
    };
  }
  render() {
    function test() {
      if (
        this.state.emailtrue === this.state.email &&
        this.state.password === this.state.passwordtrue
      ) {
        this.props.first.redirect();
      } else {
        alert("kozel");
        handleClose();
      }
    }

    const handleClose = () => this.state.setShow;

    return (
      <>
        <Button variant="dark" className="btn-reg" onClick={this.state.show}>
          Log In
        </Button>
        <Modal show={this.state.show} onHide={handleClose}>
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
                  value={this.state.email}
                  onChange={(e) => {
                    this.state.email(e.target.value);
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
                  value={this.state.password}
                  onChange={(e) => {
                    this.state.password(e.target.value);
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
}
