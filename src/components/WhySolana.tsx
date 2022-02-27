import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/whySolana.css";

const WhySolana = () => {
  return (
    <div id="whySolanaComponent">
      <Container>
        <Row>
          <Col className="d-flex justify-content-center title" xs={12}>
            WHY NFTS AND SOLANA
          </Col>
          {/* second column */}
          <Col xs={12} md={6}>
            <Col xs={12} className="d-flex justify-content-center para">
              NFTS?
            </Col>
            <Col xs={12} className="d-flex justify-content-center para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              illo esse quisquam ducimus possimus cumque sint enim animi minus
              tenetur numquam sequi error omnis aperiam, ex facilis corrupti,
              corporis soluta.
            </Col>
            <Col xs={12} className="d-flex justify-content-center para">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos sequi ducimus, impedit saepe id placeat nostrum? Ut
              repellendus maiores, soluta saepe molestias quam nam, iure nobis
              doloremque corporis officiis aliquam!
            </Col>
          </Col>
          {/* third column */}
          <Col xs={12} md={6}>
            {" "}
            <Col xs={12} className="d-flex justify-content-center para">
              SOLANA?
            </Col>
            <Col xs={12} className="d-flex justify-content-center para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              illo esse quisquam ducimus possimus cumque sint enim animi minus
              tenetur numquam sequi error omnis aperiam, ex facilis corrupti,
              corporis soluta.
            </Col>
            <Col xs={12} className="d-flex justify-content-center para">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos sequi ducimus, impedit saepe id placeat nostrum? Ut
              repellendus maiores, soluta saepe molestias quam nam, iure nobis
              doloremque corporis officiis aliquam!
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhySolana;
