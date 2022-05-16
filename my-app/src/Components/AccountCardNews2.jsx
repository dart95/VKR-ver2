import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

export default function AccountCardNews2() {
  //Unit on Past Periods
  const lettankPast = {
    persentCTR: 0,
    iconms: "m",
    reading: 0,
  };

  const variablesPast = {
    AMviews: Math.floor(Math.random() * 1000 + 1),
    PMviews: Math.floor(Math.random() * 100 + 1),
    minreading: Math.floor(Math.random() * (10 - 120) + 120),
    maxreading: Math.floor(Math.random() * (120 - 300) + 300),
  };

  const MathvariablesPast = {
    allvuews: variablesPast.AMviews + variablesPast.PMviews,
    AMjump: Math.ceil(variablesPast.AMviews / 3),
    PMjump: Math.ceil(variablesPast.PMviews / 5),
  };

  const sumvariablesPast = {
    allvuews: variablesPast.AMviews + variablesPast.PMviews,
    alljump: MathvariablesPast.AMjump + MathvariablesPast.PMjump,
  };

  //Unit on Current Periods
  const lettankCur = { persentCTR: 0, iconms: "m", reading: 0 };

  const variablesCur = {
    AMviews: Math.floor(Math.random() * 1000 + 1),
    PMviews: Math.floor(Math.random() * 100 + 1),
    minreading: Math.floor(Math.random() * (10 - 120) + 120),
    maxreading: Math.floor(Math.random() * (120 - 300) + 300),
  };

  const MathvariablesCur = {
    allvuews: variablesCur.AMviews + variablesCur.PMviews,
    AMjump: Math.ceil(variablesCur.AMviews / 3),
    PMjump: Math.ceil(variablesCur.PMviews / 5),
  };

  const sumvariablesCur = {
    allvuews: variablesCur.AMviews + variablesCur.PMviews,
    alljump: MathvariablesCur.AMjump + MathvariablesCur.PMjump,
  };

  //conditions for Past Period
  if (MathvariablesPast.allvuews >= 200 && MathvariablesPast.allvuews <= 500) {
    lettankPast.persentCTR = Math.floor(Math.random() * (25 - 0) + 0);
  } else if (
    MathvariablesPast.allvuews >= 500 &&
    MathvariablesPast.allvuews <= 800
  ) {
    lettankPast.persentCTR = Math.floor(Math.random() * (35 - 25) + 25);
  } else if (
    MathvariablesPast.allvuews >= 800 &&
    MathvariablesPast.allvuews <= 1500
  ) {
    lettankPast.persentCTR = Math.floor(Math.random() * (35 - 50) + 50);
  }
  if (variablesPast.minreading < 60) {
    lettankPast.reading = variablesPast.minreading;
    lettankPast.iconms = "s";
  } else {
    lettankPast.reading = Math.floor(variablesPast.minreading / 60);
    lettankPast.iconms = "m";
  }
  variablesPast.maxreading = Math.floor(variablesPast.maxreading / 60);
  //end conditions for Past Period

  //conditions for Current Period
  if (MathvariablesCur.allvuews >= 200 && MathvariablesCur.allvuews <= 500) {
    lettankCur.persentCTR = Math.floor(Math.random() * (25 - 0) + 0);
  } else if (
    MathvariablesCur.allvuews >= 500 &&
    MathvariablesCur.allvuews <= 800
  ) {
    lettankCur.persentCTR = Math.floor(Math.random() * (35 - 25) + 25);
  } else if (
    MathvariablesCur.allvuews >= 800 &&
    MathvariablesCur.allvuews <= 1500
  ) {
    lettankCur.persentCTR = Math.floor(Math.random() * (35 - 50) + 50);
  }
  if (variablesCur.minreading < 60) {
    lettankCur.reading = variablesCur.minreading;
    lettankCur.iconms = "s";
  } else {
    lettankCur.reading = Math.floor(variablesCur.minreading / 60);
    lettankCur.iconms = "m";
  }
  variablesCur.maxreading = Math.floor(variablesCur.maxreading / 60);
  //end conditions for Current Period

  const compareval = {
    allvuewsPast: "",
    allvuewsCur: "",
    alljumpPast: "",
    alljumpCur: "",
    AMjumpPast: "",
    AMjumpCur: "",
    PMjumpPast: "",
    PMjumpCur: "",
    AMviewsPast: "",
    AMviewsCur: "",
    PMviewsPast: "",
    PMviewsCur: "",
    persentCTRPast: "",
    persentCTRCur: "",
    readingPast: "",
    readingCur: "",
    maxreadingPast: "",
    maxreadingCur: "",
  };

  //conditions for color vision difference
  if (sumvariablesPast.allvuews > sumvariablesCur.allvuews) {
    compareval.allvuewsPast = "green";
    compareval.allvuewsCur = "red";
  } else {
    compareval.allvuewsPast = "red";
    compareval.allvuewsCur = "green";
  }
  if (sumvariablesPast.alljump > sumvariablesCur.alljump) {
    compareval.alljumpPast = "green";
    compareval.alljumpCur = "red";
  } else {
    compareval.alljumpPast = "red";
    compareval.alljumpCur = "green";
  }
  if (MathvariablesPast.AMjump > MathvariablesCur.AMjump) {
    compareval.AMjumpPast = "green";
    compareval.AMjumpCur = "red";
  } else {
    compareval.AMjumpPast = "red";
    compareval.AMjumpCur = "green";
  }
  if (MathvariablesPast.PMjump > MathvariablesCur.PMjump) {
    compareval.PMjumpPast = "green";
    compareval.PMjumpCur = "red";
  } else {
    compareval.PMjumpPast = "red";
    compareval.PMjumpCur = "green";
  }
  if (variablesPast.AMviews > variablesCur.AMviews) {
    compareval.AMviewsPast = "green";
    compareval.AMviewsCur = "red";
  } else {
    compareval.AMviewsPast = "red";
    compareval.AMviewsCur = "green";
  }
  if (variablesPast.PMviews > variablesCur.PMviews) {
    compareval.PMviewsPast = "green";
    compareval.PMviewsCur = "red";
  } else {
    compareval.PMviewsPast = "red";
    compareval.PMviewsCur = "green";
  }
  if (lettankPast.persentCTR > lettankCur.persentCTR) {
    compareval.persentCTRPast = "green";
    compareval.persentCTRCur = "red";
  } else {
    compareval.persentCTRPast = "red";
    compareval.persentCTRCur = "green";
  }
  if (variablesPast.minreading > variablesCur.minreading) {
    compareval.readingPast = "green";
    compareval.readingCur = "red";
  } else {
    compareval.readingPast = "red";
    compareval.readingCur = "green";
  }
  if (variablesPast.maxreading > variablesCur.maxreading) {
    compareval.maxreadingPast = "green";
    compareval.maxreadingCur = "red";
  } else {
    compareval.maxreadingPast = "red";
    compareval.maxreadingCur = "green";
  }
  return (
    <>
      <Col>
        <Container style={{}}>
          <h1 className="stat_past_per">Past Period</h1>
          <Row xs={5} md={1} className="g-3">
            <Col style={{ color: compareval.alljumpPast }}>
              <Card.Title>
                Общее Число просмотров: {sumvariablesPast.allvuews}
              </Card.Title>
            </Col>
            <Col style={{ color: compareval.alljumpPast }}>
              <Card.Title>
                Переход по ссылке Общее: {sumvariablesPast.alljump}
              </Card.Title>
            </Col>
            <Col style={{ color: compareval.AMjumpPast }}>
              <Card.Title>
                Переход по ссылке Первая половина дня:
                {MathvariablesPast.AMjump}
              </Card.Title>
            </Col>
            <Col style={{ color: compareval.PMjumpPast }}>
              <Card.Title>
                Переход по ссылке Вторая половина дня:
                {MathvariablesPast.PMjump}
              </Card.Title>
            </Col>
            <Col style={{ color: compareval.AMviewsPast }}>
              <Card.Title>
                Просмотры Первой половины дня: {variablesPast.AMviews}
              </Card.Title>
            </Col>
            <Col style={{ color: compareval.PMviewsPast }}>
              <Card.Title>
                Просмотры Второй половины дня: {variablesPast.PMviews}
              </Card.Title>
            </Col>
            <Col style={{ color: compareval.persentCTRPast }}>
              <Card.Title>
                Соответствие селектору: {lettankPast.persentCTR}%
              </Card.Title>
            </Col>
            <Col style={{ color: compareval.readingPast }}>
              <Card.Title>
                Минимальное время чтения: {lettankPast.reading}
                {lettankPast.iconms}
              </Card.Title>
            </Col>
            <Col style={{ color: compareval.maxreadingPast }}>
              <Card.Title>
                Максимальное время чтения: {variablesPast.maxreading}m
              </Card.Title>
            </Col>
          </Row>
        </Container>
      </Col>
      <Col style={{ backgroundColor: "grey" }}>
        <Card className="Cards_tank" style={{ marginTop: 50 }}>
          <Card.Img
            className="Card_img"
            variant="top"
            src="https://upload.wikimedia.org/wikipedia/ru/thumb/5/5a/%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%8F_%D0%98%D0%BA%D1%81.jpg/274px-%D0%90%D0%BC%D0%B5%D1%80%D0%B8%D0%BA%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%8F_%D0%98%D0%BA%D1%81.jpg"
            alt="IMG"
          />
          <Card.Body className="Card_body">
            <Card.Title className="Card_title">Some title</Card.Title>
            <Card.Text>Some Text</Card.Text>
            <Card.Footer>
              <small className="text-muted">Last updated ago</small>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Container>
          <h1 className="stat_past_per">Current Period</h1>
          <Row xs={5} md={1} className="g-3">
            <Col style={{ color: compareval.allvuewsCur }}>
              <Card.Title>
                Общее Число просмотров: {sumvariablesCur.allvuews}
              </Card.Title>
            </Col>
            <Col style={{ color: compareval.alljumpCur }}>
              <Card.Title>
                Переход по ссылке Общее: {sumvariablesCur.alljump}
              </Card.Title>
            </Col>
            <Col style={{ color: compareval.AMjumpCur }}>
              <Card.Title>
                Переход по ссылке Первая половина дня: {MathvariablesCur.AMjump}
              </Card.Title>
            </Col>
            <Col style={{ color: compareval.PMjumpCur }}>
              <Card.Title>
                Переход по ссылке Вторая половина дня: {MathvariablesCur.PMjump}
              </Card.Title>
            </Col>
            <Col style={{ color: compareval.AMviewsCur }}>
              <Card.Title>
                Просмотры Первой половины дня: {variablesCur.AMviews}
              </Card.Title>
            </Col>
            <Col style={{ color: compareval.PMviewsCur }}>
              <Card.Title>
                Просмотры Второй половины дня: {variablesCur.PMviews}
              </Card.Title>
            </Col>
            <Col style={{ color: compareval.persentCTRCur }}>
              <Card.Title>
                Соответствие селектору: {lettankCur.persentCTR}%
              </Card.Title>
            </Col>
            <Col style={{ color: compareval.readingCur }}>
              <Card.Title>
                Минимальное время чтения: {lettankCur.reading}
                {lettankCur.iconms}
              </Card.Title>
            </Col>
            <Col style={{ color: compareval.maxreadingCur }}>
              <Card.Title>
                Максимальное время чтения: {variablesCur.maxreading}m
              </Card.Title>
            </Col>
          </Row>
        </Container>
      </Col>
    </>
  );
}
