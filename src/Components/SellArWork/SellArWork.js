import React from "react";
import { Row, Col, Button } from "antd";

import "./SellArWork.scss";

const SellArWork = () => {
  return (
    <Row className="sellArWork">
      <Col span={24} style={{ marginTop: "52px" }} className="title">
        Sell your artwok with Edelweiss Gallery
      </Col>
      <Col span={10} className="subTitle" style={{ marginTop: "17px" }}>
        Get inspired, discover artists &amp; submit your own artworks along the
        other famous artists
      </Col>
      <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
        <Button
          type="primary"
          className="submitWorkButton"
          style={{ margin: "32px 0px 17px 0px" }}
        >
          Submit Arwork
        </Button>
      </Col>
      <Col span={24}>
        <p className="freeValuation">Get free valuation</p>
      </Col>
    </Row>
  );
};

export default SellArWork;
