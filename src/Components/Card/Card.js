import { Row } from "antd";
import React from "react";

import "./Card.scss";

const Card = ({ children }) => {
  return <Row className="card">{children}</Row>;
};

export default Card;
