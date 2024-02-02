import React from "react";

import StatusHelper from "./StatusHelper/StatusHelper";

import "./Price.scss";

const Price = ({ history, status }) => {
  return (
    <div className="offer">
      <div className="price-container">
        <div className="title">Price offer</div>
        <div className="price">${history?.priceOffer}</div>
      </div>
      <StatusHelper status={status} />
    </div>
  );
};

export default Price;
