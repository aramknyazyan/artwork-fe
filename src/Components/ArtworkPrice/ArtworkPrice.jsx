import React from "react";
// antd components
import { Row } from "antd";
// styles
import "./ArtworkPrice.scss";

const ArtworkPrice = ({ price }) => (
  <Row className="artwork-price-conatiner">
    <Row className="artwork-price-title">Price Offer</Row>
    <Row className="artwork-price">${price}</Row>
  </Row>
);

export default ArtworkPrice;
