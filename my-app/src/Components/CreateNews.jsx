import React from "react";
import { Form, Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { FloatingLabel } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export default function CreateNews() {
  /*const [news_text, setText_text] = useState("");
  const [news_title, setNews_title] = useState("");*/

  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [selector, setSelector] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <Button variant="primary" className="news_btn" onClick={handleShow}>
          Create News
        </Button>
        <Modal show={show} onHide={handleClose} style={{ marginTop: 100 }}>
          <Modal.Header closeButton>
            <Modal.Title>Create News</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row className="g2">
                <Col md>
                  <Form.Group controlId="fromBasicnewstitle">
                    <Form.Label> News Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Title "
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col md>
                  <Form.Label> Selector </Form.Label>
                  <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="Selector News "
                  >
                    <Form.Select
                      aria-label="Choose selector"
                      value={selector}
                      onChange={(e) => {
                        setSelector(e.target.value);
                      }}
                    >
                      <option value="1">Politics</option>
                      <option value="2">Geo Politics</option>
                      <option value="3">Economyc</option>
                      <option value="4">Sports</option>
                      <option value="5">Cyber Sports</option>
                      <option value="6">Agriculture</option>
                      <option value="7">exchange</option>
                      <option value="8">Space</option>
                    </Form.Select>
                  </FloatingLabel>
                </Col>
              </Row>
              <Form.Group controlId="fromBasicPassword">
                <Form.Label>Write Text</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={text}
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>upload image</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <Form.Group
                className="d-flex justify-content-end"
                style={{ marginTop: 5 }}
              >
                <Button>Yes</Button>
                <Button variant="dark" onClick={handleClose}>
                  Close
                </Button>
              </Form.Group>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
      <Row xs={1} md={4} className="g-4">
        <Col>
          <Card className="Cards_tank" style={{ marginTop: 50 }}>
            <Card.Img
              className="Card_img"
              variant="top"
              src="https://i.scdn.co/image/ab67616d0000b273166e4a5884f336f5769df3fd"
            />
            <Card.Body className="Card_body">
              <Card.Title className="Card_title">{title}</Card.Title>
              <Card.Text>{text}</Card.Text>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
