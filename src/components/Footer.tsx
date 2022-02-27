import React from "react";
import "../styles/footer.css";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footerComponent">
      <Container>
        <Row>
          <Col className="para footerPara">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
            doloremque possimus ipsum mollitia vero illo labore aliquam porro a
            distinctio, ab officia eum error maiores. Distinctio alias fugit
            tenetur ipsum?
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
