import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
export default function Actual() {
  const [parsenews, setParsenews] = useState({});
  const [parseimg, setParseimg] = useState({});
  const [parseauthor, setParseautho] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((json) => setParsenews(json));

    fetch("https://jsonplaceholder.typicode.com/photos/3")
      .then((response) => response.json())
      .then((json) => setParseimg(json));

    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((json) => setParseautho(json));
  });

  const nw = parsenews.body;
  const tt = parsenews.title;
  const img = parseimg.url;
  const altimg = parseimg.alt;
  const author = parseauthor.name;

  return (
    <Row xs={1} md={4} className="g-4">
      <Col>
        <Card className="Cards_tank">
          <Card.Img className="Card_img" variant="top" src={img} alt={altimg} />
          <Card.Body className="Card_body">
            <Card.Title className="Card_title">{tt}</Card.Title>
            <Card.Text>{nw}</Card.Text>
            <Card.Footer>
              <small className="text-muted">
                {author} Last updated 3 mins ago
              </small>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
