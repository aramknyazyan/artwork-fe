import React from "react";

import PriceOffer from "../PriceOffer/PriceOffer";
import Price from "../Price/Price";

const PriceOfferHelper = ({ history, id, status }) => {
  if (history.priceOffer === 0) {
    return <PriceOffer id={id} />;
  } else if (history.priceOffer !== 0) {
    return <Price history={history} status={status} />;
  } else {
    return <PriceOffer />;
  }
};

export default PriceOfferHelper;
