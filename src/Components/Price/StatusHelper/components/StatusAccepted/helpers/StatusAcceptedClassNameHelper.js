export const statusAcceptedClassNameHelper = (status) => {
  switch (status) {
    case "Accepted price offer":
      return "accepted";
    case "Sold":
      return "sold";
    case "Shipped":
      return "shipped";
    case "Published":
      return "published";
    default:
      return "accepted";
  }
};
