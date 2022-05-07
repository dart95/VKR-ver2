import React, { Component } from "react";
import { Nav, Button, Form } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Divider } from "@material-ui/core";

export default class Regbtn extends Component() {
  constructor(props) {
    super(props);
    this.state = {
      emailtrue: "YuriHoi",
      passwordtrue: "Voronezh",
      show: false,
    };
  }

  render() {
    function dart() {
      alert("dart");
    }

    return (
      <Nav className="float-end">
        <Button
          variant="dark"
          className="btn-log"
          style={{}}
          onClick={() => this.setState({ show: true })}
        >
          Log In
        </Button>
        <Button
          variant="dark"
          className="btn-reg"
          onClick={this.state.redirectregistration}
        >
          Sign up
        </Button>
      </Nav>
    );
  }
}
