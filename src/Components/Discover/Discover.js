import React from "react";
import { Row, Col, Button } from "antd";
import ArLogoWhite from "../../Assets/Imges/ArtsyLogoWhite.png";

import "./Discover.scss";

const Discover = () => {
  return (
    <Row>
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
          Get inspired, discover artists &amp; submit your own art
        </Col>
        <Col>
          <Button className="primaryButton">Explore Now</Button>
        </Col>
      </Col>
      <Col span={14} className="discoverImage">
        <img src={ArLogoWhite} alt="ArLogoWhite" className="ArLogoWhite" />
      </Col>
    </Row>
  );
};

export default Discover;
