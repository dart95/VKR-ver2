import React from "react";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
function Home(props) {
  return (
    <Row xs={1} md={4} className="g-4">
      <Col>
        <Card className="Cards_tank">
          <Card.Img
            className="Card_img"
            variant="top"
            src="https://i.scdn.co/image/ab67616d0000b273166e4a5884f336f5769df3fd"
          />
          <Card.Body className="Card_body">
            <Card.Title className="Card_title">Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="Cards_tank">
          <Card.Img
            className="Card_img"
            variant="top"
            src="https://i.scdn.co/image/ab67616d0000b273166e4a5884f336f5769df3fd"
          />
          <Card.Body className="Card_body">
            <Card.Title className="Card_title">Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="Cards_tank">
          <Card.Img
            className="Card_img"
            variant="top"
            src="https://i.scdn.co/image/ab67616d0000b273166e4a5884f336f5769df3fd"
          />
          <Card.Body className="Card_body">
            <Card.Title className="Card_title">Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="Cards_tank">
          <Card.Img
            className="Card_img"
            variant="top"
            src="https://i.scdn.co/image/ab67616d0000b273166e4a5884f336f5769df3fd"
          />
          <Card.Body className="Card_body">
            <Card.Title className="Card_title">Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Home;
