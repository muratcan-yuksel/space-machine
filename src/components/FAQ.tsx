import React from "react";
import "../styles/FAQ.css";
import { Container, Row, Col } from "react-bootstrap";

const FAQ = () => {
  return (
    <div className="faqComponent">
      <Container>
        <Row>
          <Col
            xs={12}
            className="title faqTitle d-flex justify-content-center j"
          >
            FAQS
          </Col>
          <Col
            xs={12}
            className="questionTitle d-flex justify-content-md-center justify-conent-xs-start title"
          >
            Q) When to Mint?
          </Col>
          <Col
            xs={12}
            className="questionPara d-flex justify-content-md-center justify-conent-xs-start para"
          >
            Mid-Late March. Exact Date TBD.
          </Col>{" "}
          <Col
            xs={12}
            className="questionTitle d-flex justify-content-md-center justify-conent-xs-start title"
          >
            Q) What's the Mint Price?
          </Col>
          <Col
            xs={12}
            className="questionPara d-flex justify-content-md-center justify-conent-xs-start para"
          >
            TBD
          </Col>{" "}
          <Col
            xs={12}
            className="questionTitle d-flex justify-content-md-center justify-conent-xs-start title"
          >
            Q) What's the Total Supply?
          </Col>
          <Col
            xs={12}
            className="questionPara d-flex justify-content-md-center justify-conent-xs-start para"
          >
            2222
          </Col>{" "}
          <Col
            xs={12}
            className="questionTitle d-flex justify-content-md-center justify-conent-xs-start title"
          >
            Q) Secondayr Market?
          </Col>
          <Col
            xs={12}
            className="questionPara d-flex justify-content-md-center justify-conent-xs-start para"
          >
            We are only planning to be list on MagicEden.
          </Col>{" "}
          <Col
            xs={12}
            className="questionTitle d-flex justify-content-md-center justify-conent-xs-start title"
          >
            Q) How WL?
          </Col>
          <Col
            xs={12}
            className="questionPara d-flex justify-content-md-center justify-conent-xs-start para"
          >
            {" "}
            Check our Discord for further information regarding whitelist
            requirements.
          </Col>{" "}
          <Col
            xs={12}
            className="questionTitle d-flex justify-content-md-center justify-conent-xs-start title"
          >
            Q) Are you looking for more staff?
          </Col>
          <Col
            xs={12}
            className="questionPara d-flex justify-content-md-center justify-conent-xs-start para"
          >
            Yes! Please check our Discord for further information regarding
            staff applications
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FAQ;
