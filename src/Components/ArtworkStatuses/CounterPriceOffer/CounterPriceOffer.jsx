import React from "react";
// ANTD components
import { Button, Row, message } from "antd";
// API
import { useDispatch } from "react-redux";
import { patchArtworkAction, getArtworkByIdAction, getArtworkHistoryAction } from "../../../redux/action";
// styles
import "./CounterPriceOffer.scss";

const CounterPriceOffer = ({ counterOfferPrice, id, isAdmin }) => {
  const dispatch = useDispatch();

  const handleAcceptCounterPriceOffer = async () => {
    const response = await dispatch(
      patchArtworkAction(id, {
        submissionStatus: "Accepted Counter Offer",
      })
    );

    if (typeof response === "string") {
      await dispatch(getArtworkByIdAction(id));
      await dispatch(getArtworkHistoryAction(id));
      message.success("Counter Offer Accepted!");
    }
  };

  const handleRejectCounterPriceOffer = async () => {
    const response = await dispatch(
      patchArtworkAction(id, {
        submissionStatus: "Rejected Counter Offer",
      })
    );

    if (typeof response === "string") {
      dispatch(getArtworkByIdAction(id));
      dispatch(getArtworkHistoryAction(id));
      message.success("Counter Offer Rejected!");
    }
  };

  return (
    <Row className="counter-price-offer-container">
      <Row className="counter-price-offer-title">Price Offer Status:</Row>
      <Row className="counter-price-offer-status">Counter Offer</Row>

      <Row className="counter-price-offer">
        <Row className="counter-price-offer-title">Counter Price Offer</Row>
        <Row className="counter-price">${counterOfferPrice}</Row>
      </Row>

      {!isAdmin && <Row className="pending-status">Pending</Row>}

      {isAdmin && (
        <Row className="counter-price-buttons-container">
          <Button className="reject-counter-price-offer-button" onClick={handleRejectCounterPriceOffer} type="primary">
            Reject
          </Button>

          <Button className="accept-counter-price-offer-button" onClick={handleAcceptCounterPriceOffer} type="primary">
            Accept
          </Button>
        </Row>
      )}
    </Row>
  );
};

export default CounterPriceOffer;
