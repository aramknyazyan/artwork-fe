import React from "react";

import StatusPending from "./components/StatusPending/StatusPending";
import StatusAccepted from "./components/StatusAccepted/StatusAccepted";

const StatusHelper = ({ status }) => {
  console.log("status --- ", status);
  switch (status) {
    case "New":
      // todo
      return <StatusPending />;

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

export default StatusHelper;
