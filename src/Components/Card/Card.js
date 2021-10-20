import { Row } from "antd";
import React from "react";

import "./Card.scss";

const Card = (props) => {
  return <Row className="crad">{props.children}</Row>;
};

export default Card;
