import React from "react";

import PriceOffer from "../PriceOffer/PriceOffer";
import Price from "../Price/Price";

const PriceOfferHelper = ({ history }) => {
  if (history.priceOffer === 0) {
    return <PriceOffer />;
  } else if (history.priceOffer !== 0) {
    return <Price priceOffer={history.priceOffer} />;
  }
};

export default PriceOfferHelper;
