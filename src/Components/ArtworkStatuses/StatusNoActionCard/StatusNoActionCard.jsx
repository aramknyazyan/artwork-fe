import React from "react";
// ANTD components
import { Row } from "antd";
// constants
import { ARTWORK_STATUSES_CLASS_NAME } from "../../../shared/constants";
// styles
import "./StatusNoActionCard.scss";

const StatusNoActionCard = ({ status, counter }) => {
  return (
    <Row className="no-action-status-container">
      <Row className="no-action-status-title">
        {counter ? "Counter" : "Price"} Offer Status:
      </Row>

      <Row className={ARTWORK_STATUSES_CLASS_NAME[status]}>{status}</Row>
    </Row>
  );
};

export default StatusNoActionCard;
