import React from "react";
import { Col, Button, Typography } from "antd";
import ArtsperLogo from "../../../../Assets/Images/LogoBlack.png";

import "./Artsper.scss";

const Artsper = () => {
  const { Text } = Typography;
  return (
    <Col className="artsper">
      <Col className="artsper-image">
        <img src={ArtsperLogo} alt="artsper-logo" className="artsper-logo" />
      </Col>
      <Col className="artsper-content">
        <Text className="section-title">
          Submit your artworks along the other famous artists
        </Text>
        <Button className="primary-button">Explore Now Artsper</Button>
      </Col>
    </Col>
  );
};

export default Artsper;
