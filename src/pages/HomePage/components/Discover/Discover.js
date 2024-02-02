import React from "react";
import { Col, Button, Typography } from "antd";
import ArLogoWhite from "../../../../Assets/Images/ArtsyLogoWhite.png";

import "./Discover.scss";

const Discover = () => {
  const { Text } = Typography;
  return (
    <Col className="discover">
      <Col className="discover-content">
        <Text className="section-title">
          Get inspired, discover <br /> artists &amp; submit your own art
        </Text>
      </Col>
      <Col className="discover-image">
        <img src={ArLogoWhite} alt="ar-logo-white" className="ar-logo-white" />
        <Button className="primary-button">Explore Now ART SY</Button>
      </Col>
    </Col>
  );
};

export default Discover;
