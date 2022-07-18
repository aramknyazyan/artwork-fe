import React from "react";

import StatusPending from "./components/StatusPending/StatusPending";
import StatusAccepted from "./components/StatusAccepted/StatusAccepted";

const StatusHelper = ({ status }) => {
  switch (status) {
    case "Pending":
      return <StatusPending />;

    case "Rejected Counter Offer":
      return <StatusPending />;

    case "Accepted Counter Offer":
    case "Sold":
    case "Shipped":
    case "Published":
      return <StatusAccepted />;

    default:
      return null;
  }
};

export default StatusHelper;
