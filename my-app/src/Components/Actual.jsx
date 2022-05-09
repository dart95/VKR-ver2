import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
export default function Actual() {
  const [ntitle, setNtitle] = useState();
  const [news, setNews] = useState({});

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
  });
  const nw = news.title;
  const tt = news.userId;
  return (
    <Card.Body className="Card_body" style={{ width: "25%", marginTop: 10 }}>
      <Card.Title className="Card_title">{}</Card.Title>
      <Card.Text>{}</Card.Text>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card.Body>
  );
}
