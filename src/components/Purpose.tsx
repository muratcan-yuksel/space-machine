import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/purpose.css";

const Purpose = () => {
  return (
    <div className="purposeComponent">
      <Container>
        <Row className=" ">
          <Col sm={12} className="title    d-flex justify-content-center">
            <div className="title purposeTitle"> Our Purpose</div>
          </Col>
          <Col sm={12} className="para d-flex justify-content-center">
            lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
            dolor sit amet lorem ipsum dolor sit amet{" "}
          </Col>{" "}
          <Col sm={12} className="para d-flex justify-content-center">
            lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
            dolor sit amet lorem ipsum dolor sit amet{" "}
          </Col>{" "}
          <Col sm={12} className="para d-flex justify-content-center">
            lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
            dolor sit amet lorem ipsum dolor sit amet{" "}
          </Col>{" "}
          <Col sm={12} className="para d-flex justify-content-center">
            lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
            dolor sit amet lorem ipsum dolor sit amet{" "}
          </Col>{" "}
          <Col sm={12} className="para d-flex justify-content-center">
            lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
            dolor sit amet lorem ipsum dolor sit amet{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Purpose;
