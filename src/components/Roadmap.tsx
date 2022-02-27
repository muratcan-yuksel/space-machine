import React from "react";
import "../styles/roadmap.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import firstImg from "../assets/Cohete-2016.svg";
import secondImg from "../assets/fireball.svg";
import thirdImg from "../assets/moon-half.svg";
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
          <Col xs={12} className="roadmapCol d-flex justify-content-center">
            <div className="roadmapCol">
              <Row>
                {" "}
                <Col xs={12} sm={6} className="roadmapImgCol">
                  <img src={secondImg} alt="" className="roadmapImg" />
                </Col>
                <Col xs={12} sm={6} className="roadmapCard ">
                  <Col className="cardTitle title d-flex justify-content-center">
                    LOREM IPSUM
                  </Col>
                  <Col className="cardPara para d-flex justify-content-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita adipisci nobis quos rem soluta dolorum aperiam
                    deserunt dolores similique at sint culpa deleniti a
                    provident, reprehenderit ducimus iste officia saepe?
                  </Col>
                </Col>
              </Row>
            </div>
          </Col>
          {/* second col group */}
          <Col xs={12} className="roadmapCol d-flex justify-content-center">
            <div className="roadmapCol">
              <Row>
                {" "}
                <Col xs={12} sm={6} className="roadmapCard ">
                  <Col className="cardTitle title d-flex justify-content-center">
                    LOREM IPSUM
                  </Col>
                  <Col className="cardPara para d-flex justify-content-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita adipisci nobis quos rem soluta dolorum aperiam
                    deserunt dolores similique at sint culpa deleniti a
                    provident, reprehenderit ducimus iste officia saepe?
                  </Col>
                </Col>
                <Col xs={12} sm={6} className="roadmapImgCol">
                  <img src={secondImg} alt="" className="roadmapImg" />
                </Col>
              </Row>{" "}
            </div>
          </Col>
          {/* third col group */}

          {/* fourth col group */}
        </Row>
      </Container>
    </div>
  );
};

export default Roadmap;
