import React from "react";
import { ARTWORK_STATUSES_ENUM } from "../constants/statusSelect.constants";

import StatusPending from "../../Components/ArtworkStatuses/Pending/StatusPending";
///////////////////////////////////
import PriceOffer from "../../Components/ArtworkStatuses/PriceOffer/PriceOffer";
import PriceOfferCL from "../../Components/ArtworkStatuses/ClientPriceOffer/PriceOfferCL";
import CounterPriceOffer from "../../Components/ArtworkStatuses/CounterPriceOffer/CounterPriceOffer";
import AcceptedPriceOffer from "../../Components/ArtworkStatuses/AcceptedPriceOffer/AcceptedPriceOffer";
import StatusNoActionCard from "../../Components/ArtworkStatuses/StatusNoActionCard/StatusNoActionCard";

const PriceOfferHelper = ({ history, id, status, isAdmin, counterOffer }) => {
  switch (status) {
    case ARTWORK_STATUSES_ENUM.New:
      switch (isAdmin) {
        case true:
          return <PriceOffer id={id} />;

        case false:
          return <StatusPending />;

        default:
          <StatusPending />;
      }

    case ARTWORK_STATUSES_ENUM.Price_Offer:
      switch (isAdmin) {
        case true:
          return <StatusPending />;

        case false:
          return <PriceOfferCL id={id} />;

        default:
          <StatusPending />;
      }

    case ARTWORK_STATUSES_ENUM.Counter_Offer:
      return (
        <CounterPriceOffer
          id={id}
          counterOfferPrice={counterOffer}
          isAdmin={isAdmin}
        />
      );

    case ARTWORK_STATUSES_ENUM.Accepted_Counter_Offer:
    case ARTWORK_STATUSES_ENUM.Accepted_Price_Offer:
    case ARTWORK_STATUSES_ENUM.Sold:
    case ARTWORK_STATUSES_ENUM.Shipped:
    case ARTWORK_STATUSES_ENUM.Published:
      switch (isAdmin) {
        case true:
          return (
            <AcceptedPriceOffer
              counterOffer={counterOffer}
              status={status}
              id={id}
            />
          );

        case false:
          return <StatusNoActionCard status={status} />;

        default:
          <StatusPending />;
      }

    case ARTWORK_STATUSES_ENUM.Rejected_Price_Offer:
      return <StatusNoActionCard status={status} counter={false} />;

    case ARTWORK_STATUSES_ENUM.Rejected_Counter_Offer:
      return <StatusNoActionCard status={status} counter={true} />;

    default:
      return null;
  }
};

export default PriceOfferHelper;
