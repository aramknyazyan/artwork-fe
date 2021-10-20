import React from "react";
import { Row, Col, Button } from "antd";
import ArtsperLogo from "../../Assets/Imges/LogoBlack.png";

import "./Artsper.scss";

const Artsper = () => {
  return (
    <Row className="artsper">
      <Col span={14} className="artsperImage">
        <img src={ArtsperLogo} alt="ArtsperLogo" className="ArtsperLogo" />
      </Col>
      <Col
        span={10}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Col className="sectionTitle">
          Submit your artworks along the other famous artists
        </Col>
        <Col>
          <Button className="primaryButton">Explore Now</Button>
        </Col>
      </Col>
    </Row>
  );
};

export default Artsper;
