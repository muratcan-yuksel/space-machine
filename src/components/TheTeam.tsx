import React from "react";
import "../styles/theTeam.css";
import { Container, Row, Col } from "react-bootstrap";
import teamImage from "../assets/moon-half.svg";

const TheTeam = () => {
  return (
    <div className="theTeamComponent">
      <Container>
        <Row>
          <Row className="title d-flex justify-content-center">
            Meet the Team
          </Row>
          {/* container starts */}
          <Row className="teamComtainer">
            <Col xs={6} lg={3} className="individualTeamMember">
              <Col xs={12} className="teamImgContainer">
                <img src={teamImage} alt="" className="teamImg" />
              </Col>
              <Col xs={12} className="para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                cumque odit inventore vel labore architecto asperiores at iste
                quibusdam voluptas, ipsum exercitationem aperiam aut et vitae
                esse consequatur? Voluptatem, ad?
              </Col>
            </Col>{" "}
            <Col xs={6} lg={3} className="individualTeamMember">
              <Col xs={12} className="teamImgContainer">
                <img src={teamImage} alt="" className="teamImg" />
              </Col>
              <Col xs={12} className="para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                cumque odit inventore vel labore architecto asperiores at iste
                quibusdam voluptas, ipsum exercitationem aperiam aut et vitae
                esse consequatur? Voluptatem, ad?
              </Col>
            </Col>{" "}
            <Col xs={6} lg={3} className="individualTeamMember">
              <Col xs={12} className="teamImgContainer">
                <img src={teamImage} alt="" className="teamImg" />
              </Col>
              <Col xs={12} className="para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                cumque odit inventore vel labore architecto asperiores at iste
                quibusdam voluptas, ipsum exercitationem aperiam aut et vitae
                esse consequatur? Voluptatem, ad?
              </Col>
            </Col>{" "}
            <Col xs={6} lg={3} className="individualTeamMember">
              <Col xs={12} className="teamImgContainer">
                <img src={teamImage} alt="" className="teamImg" />
              </Col>
              <Col xs={12} className="para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                cumque odit inventore vel labore architecto asperiores at iste
                quibusdam voluptas, ipsum exercitationem aperiam aut et vitae
                esse consequatur? Voluptatem, ad?
              </Col>
            </Col>{" "}
            {/* container ends below */}
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default TheTeam;
