import { useEffect } from "react";
import "../styles/FAQ.css";
import { Container, Row, Col } from "react-bootstrap";
// aos library
import Aos from "aos";
import "aos/dist/aos.css";
const FAQ = () => {
  //this aos is for the transition animations
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="faqComponent">
      <Container>
        <Row>
          <Col
            xs={12}
            className="title faqTitle d-flex justify-content-center j"
          >
            FAQS
          </Col>
          <Col
            data-aos="fade-up"
            xs={12}
            className="questionTitle d-flex justify-content-md-center justify-conent-xs-start title"
          >
            Q) When to Mint?
          </Col>
          <Col
            data-aos="fade-up"
            xs={12}
            className="questionPara d-flex justify-content-md-center justify-conent-xs-start para"
          >
            Mid-Late March. Exact Date TBD.
          </Col>{" "}
          <Col
            data-aos="fade-up"
            xs={12}
            className="questionTitle d-flex justify-content-md-center justify-conent-xs-start title"
          >
            Q) What's the Mint Price?
          </Col>
          <Col
            data-aos="fade-up"
            xs={12}
            className="questionPara d-flex justify-content-md-center justify-conent-xs-start para"
          >
            TBD
          </Col>{" "}
          <Col
            data-aos="fade-up"
            xs={12}
            className="questionTitle d-flex justify-content-md-center justify-conent-xs-start title"
          >
            Q) What's the Total Supply?
          </Col>
          <Col
            data-aos="fade-up"
            xs={12}
            className="questionPara d-flex justify-content-md-center justify-conent-xs-start para"
          >
            2222
          </Col>{" "}
          <Col
            data-aos="fade-up"
            xs={12}
            className="questionTitle d-flex justify-content-md-center justify-conent-xs-start title"
          >
            Q) Secondayr Market?
          </Col>
          <Col
            data-aos="fade-up"
            xs={12}
            className="questionPara d-flex justify-content-md-center justify-conent-xs-start para"
          >
            We are only planning to be list on MagicEden.
          </Col>{" "}
          <Col
            data-aos="fade-up"
            xs={12}
            className="questionTitle d-flex justify-content-md-center justify-conent-xs-start title"
          >
            Q) How WL?
          </Col>
          <Col
            data-aos="fade-up"
            xs={12}
            className="questionPara d-flex justify-content-md-center justify-conent-xs-start para"
          >
            {" "}
            Check our Discord for further information regarding whitelist
            requirements.
          </Col>{" "}
          <Col
            data-aos="fade-up"
            xs={12}
            className="questionTitle d-flex justify-content-md-center justify-conent-xs-start title"
          >
            Q) Are you looking for more staff?
          </Col>
          <Col
            data-aos="fade-up"
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
