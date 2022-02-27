import React from "react";
import "../styles/FAQ.css";
import { Container, Row, Col } from "react-bootstrap";

const FAQ = () => {
  return (
    <div className="faqComponent">
      <Container>
        <Row>
          <Col xs={12} className="title">
            FAQS
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FAQ;
