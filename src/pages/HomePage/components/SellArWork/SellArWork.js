import React from "react";
import { Col, Typography } from "antd";
import { Link } from "react-router-dom";

import "./SellArWork.scss";

const SellArWork = () => {
  const { Text } = Typography;
  return (
    <Col className="sell-arWork">
      <Col className="title">Sell your artwok with Edelweiss Gallery</Col>
      <Col className="sub-title">
        Get inspired, discover artists &amp; submit your own artworks along the
        other famous artists
      </Col>
      <Col className="buttons">
        <Col>
          <Text type="button" className="submit-work-button">
            Submit Arwork
          </Text>
          <Link to="/Submit" />
        </Col>
        <Col>
          <Text className="free-valuation">Get free valuation</Text>
          <Link to="/Submit" />
        </Col>
      </Col>
    </Col>
  );
};

export default SellArWork;
