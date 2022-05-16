import React, { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { FloatingLabel } from "react-bootstrap";
import Card from "react-bootstrap/Card";

<Row xs={1} md={4} className="g-4">
  <Col>
    <Card className="Cards_tank" style={{ marginTop: 50 }}>
      <Card.Img className="Card_img" variant="top" src={img} alt="IMG" />
      <Card.Body className="Card_body">
        <Card.Title className="Card_title">{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Card.Footer>
          <small className="text-muted">Last updated {s} mins ago</small>
        </Card.Footer>
      </Card.Body>
    </Card>
  </Col>
</Row>;
