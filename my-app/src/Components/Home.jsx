import React from "react";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";

function Home(props) {
  const tank = {
    link1: "https://ria.ru/20220519/kurs-1789389723.html",
    link2: "https://ria.ru/20220519/nft-token-1789405506.html",
    link3: "https://ria.ru/20220519/eksport-1789372919.html",
    link4: "https://ria.ru/20220519/protest-1789405098.html",
  };
  return (
    <div className="Tank_container">
      <Row xs={1} md={3} lg={3} className="g-3">
        <Col>
          <Card className="Cards_tank">
            <Card.Img
              className="Card_img"
              variant="top"
              src="https://phototass2.cdnvideo.ru/width/1200_4ce85301/tass/m2/uploads/i/20220513/6745003.png"
            />
            <Card.Body className="Card_body">
              <a href={tank.link1} className="renews">
                <Card.Title className="Card_title">
                  Укрепление Рубля до уровня 2017 года
                </Card.Title>
              </a>
              <Card.Text>
                Так, европейская валюта в моменте опускалась до 61,11 рубля —
                впервые с апреля 2017 года, американская торговалась на уровне
                63,22. Таким образом, пара евро/рубль уходила ниже стоимости
                пары доллар/рубль.
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
              src="https://logincasino.com/uploads/gallery/75236/thumbs/m_832a772ca16c3621539ea25253668a52.jpg"
            />
            <Card.Body className="Card_body">
              <a href={tank.link2} className="renews">
                <Card.Title className="Card_title">
                  В Госдуме рассматривают закон о NFT-Токен
                </Card.Title>
              </a>
              <Card.Text>
                Изменения вносятся изменения в статью Гражданского кодекса в
                части расширения перечня охраняемых результатов интеллектуальной
                деятельности в виде невзаимозаменяемых токенов.
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
              src="https://im.kommersant.ru/Issues.photo/CORP/2015/07/21/KMO_135235_01150_1_t218_110057.jpg"
            />
            <Card.Body className="Card_body">
              <a href={tank.link3} className="renews">
                <Card.Title className="Card_title">
                  Импорт из России в Японию резко вырос
                </Card.Title>
              </a>
              <Card.Text>
                В абсолютных цифрах показатель составил 187,1 миллиарда иен
                (1,45 миллиарда долларов). Между тем экспорт в том же месяце
                сократился на 69,3 процента — 23,77 миллиарда иен (184,2
                миллиона долларов).
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
              src="https://upload.wikimedia.org/wikipedia/commons/6/65/MD.C.Chi%C8%99in%C4%83u_-_Protest_Platforma_%E2%80%9EDemnitate_%C8%99i_Adev%C4%83r%E2%80%9D_%28people%29_-_jan_16%2C_2016.jpg"
            />
            <Card.Body className="Card_body">
              <a href={tank.link4} className="renews">
                <Card.Title className="Card_title">
                  Молдавская оппозиция провела протест
                </Card.Title>
              </a>
              <Card.Text>
                "Блок коммунистов и социалистов" объявил о серии протестов в
                стране. Блок призвал остальные партии и организации
                присоединиться к Оппозиционной платформе.
              </Card.Text>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
