import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import AccountCardNews2 from "./AccountCardNews2";

export default function AccountCardNews() {
  //Unit on Past Periods
  const lettankPast = {
    persentCTR: 0,
    iconms: "m",
    reading: 0,
  };

  const variablesPast = {
    AMviews: 800,
    PMviews: 700,
    minreading: 90,
    maxreading: 258,
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
    AMviews: 800,
    PMviews: 500,
    minreading: 60,
    maxreading: 120,
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
    lettankPast.persentCTR = 20;
  } else if (
    MathvariablesPast.allvuews >= 500 &&
    MathvariablesPast.allvuews <= 800
  ) {
    lettankPast.persentCTR = 29;
  } else if (
    MathvariablesPast.allvuews >= 800 &&
    MathvariablesPast.allvuews <= 1500
  ) {
    lettankPast.persentCTR = 45;
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
    lettankCur.persentCTR = 25;
  } else if (
    MathvariablesCur.allvuews >= 500 &&
    MathvariablesCur.allvuews <= 800
  ) {
    lettankCur.persentCTR = 35;
  } else if (
    MathvariablesCur.allvuews >= 800 &&
    MathvariablesCur.allvuews <= 1500
  ) {
    lettankCur.persentCTR = 39;
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
      <Col className="statcontainer">
        <Container>
          <h1 className="stat_past_per">Past Period</h1>
          <Row xs={1} md={1} className="g-4">
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
      <Col>
        <Card className="Cards_tank" style={{ marginTop: 50 }}>
          <Card.Img
            className="Card_img"
            variant="top"
            src="https://ot39.ru/images/Otpusk_2.jpeg"
            alt="IMG"
          />
          <Card.Body className="Card_body">
            <Card.Title className="Card_title">
              Колленги, насчёт отпусков{" "}
            </Card.Title>
            <Card.Text>
              На данный момент в связи с отпуском бухгалтера, прозьба обращаться
              с данными вопросами к заместителю отдела{" "}
            </Card.Text>
            <Card.Footer>
              <small className="text-muted">
                {" "}
                Irina Lasar Last updated 3min ago
              </small>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Col>
      <Col className="statcontainer">
        <Container>
          <h1 className="stat_past_per">Current Period</h1>
          <Row xs={1} md={1} className="g-4">
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
      <AccountCardNews2 />
    </>
  );
}
