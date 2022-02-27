import React from "react";
import "../styles/roadmap.css";
import { Container, Row, Col, Card } from "react-bootstrap";

const Roadmap = () => {
  return (
    <div className="roadmapComponent">
      <Container>
        <Row>
          <Col xs={12} className="title d-flex justify-content-center">
            NFT Roadmap
          </Col>
          <Col xs={12} className="para d-flex justify-content-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            soluta quas beatae tenetur iure ea. Libero est dicta minima vitae
            velit perferendis, dolorum dolorem esse harum laboriosam iusto
            facilis possimus?
          </Col>
          {/* first col group */}
          <Col className="d-flex justify-content-center">
            <Col xs={12} sm={6} className="roadmapImgCol">
              <img src="" alt="" className="roadmapImg" />
            </Col>
            <Col className="roadmapCard" xs={12} sm={6}>
              <Col className="cardTitle title">Lorem Ipsum</Col>
              <Col className="cardPara para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium exercitationem perferendis nulla numquam repellendus
                dicta ex, rerum aperiam, aliquid ducimus accusamus nihil unde
                tenetur qui? Totam consequuntur dolore suscipit libero.
              </Col>
            </Col>
          </Col>
          {/* second col group */}

          {/* third col group */}

          {/* fourth col group */}
        </Row>
      </Container>
    </div>
  );
};

export default Roadmap;
