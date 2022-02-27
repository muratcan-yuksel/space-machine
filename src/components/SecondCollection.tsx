import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/collection.css";
import firstImg from "../assets/Cohete-2016.svg";
import secondImg from "../assets/fireball.svg";
import thirdImg from "../assets/moon-half.svg";
const SecondCollection = () => {
  return (
    <div className="secondCollection">
      {/* first row */}
      <Row>
        <Col className="collectionCol">
          <img className="collectionImg" src={firstImg} alt="" />
        </Col>
        <Col className="collectionCol">
          <img className="collectionImg" src={secondImg} alt="" />
        </Col>
        <Col className="collectionCol">
          <img className="collectionImg" src={thirdImg} alt="" />
        </Col>
      </Row>

      {/* second row */}
      {/* <Row>
        <Col className="collectionCol">
          <img className="collectionImg" src={firstImg} alt="" />
        </Col>
        <Col className="collectionCol">
          <img className="collectionImg" src={secondImg} alt="" />
        </Col>
        <Col className="collectionCol">
          <img className="collectionImg" src={thirdImg} alt="" />
        </Col>
      </Row> */}
    </div>
  );
};

export default SecondCollection;
