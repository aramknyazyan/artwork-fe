import React from "react";

import PriceOffer from "../../Components/PriceOffer/PriceOffer";
import StatusPending from "../../Components/Price/StatusHelper/components/StatusPending/StatusPending";
import StatusAccepted from "../../Components/Price/StatusHelper/components/StatusAccepted/StatusAccepted";

const PriceOfferHelper = ({ history, id, status }) => {
  console.log("priceOffer", history.priceOffer === 0, status);
  switch (status) {
    case "New":
      return <PriceOffer id={id} />;

    case "Pending":
      return <StatusPending />;

    case "Rejected Counter Offer":
      return <StatusPending />;

    case "Accepted Counter Offer":
      // todo
      return <StatusAccepted />;

    case "Sold":
      // todo
      return <StatusAccepted />;

    case "Shipped":
      //todo
      return <StatusAccepted />;

    case "Published":
      return <StatusAccepted />;

    default:
      return null;
  }
};

// 2.  Rewieved
// 4.  Accepted price offer
// 5.  Counter offer
// 5.  Price offer

export default PriceOfferHelper;
