import React from "react";
// ANTD components
import { Row, Select, message } from "antd";
// constants
import {
  ARTWORK_STATUSES_CLASS_NAME,
  ARTWORK_STATUSES_ENUM,
} from "../../../shared/constants";
// api
import { useDispatch } from "react-redux";
import {
  patchArtworkAction,
  getArtworkByIdAction,
} from "../../../redux/action";
// styles
import "./AcceptedPriceOffer.scss";

const Option = Select;

const AcceptedPriceOffer = ({ status, id, counterOffer }) => {
  const dispatch = useDispatch();

  const selectChangeHandler = async (value) => {
    dispatch(
      patchArtworkAction(id, {
        submissionStatus: value,
      })
    );

    dispatch(getArtworkByIdAction(id));

    await message.success("Status changed successfully!");
  };

  return (
    <Row className="accepted-status-select-container">
      <Row className="accepted-status-select-title">Price Offer Status:</Row>

      <Row className={ARTWORK_STATUSES_CLASS_NAME[status]}>
        <Select
          defaultValue={status || ARTWORK_STATUSES_ENUM.Accepted_Price_Offer}
          onChange={selectChangeHandler}
          className="status-select"
        >
          {!counterOffer && (
            <Option value={ARTWORK_STATUSES_ENUM.Accepted_Price_Offer}>
              Accepted Price Offer
            </Option>
          )}

          {counterOffer && (
            <Option value={ARTWORK_STATUSES_ENUM.Accepted_Counter_Offer}>
              Accepted Counter Offer
            </Option>
          )}
          <Option value={ARTWORK_STATUSES_ENUM.Published}>Published</Option>
          <Option value={ARTWORK_STATUSES_ENUM.Sold}>Sold</Option>
          <Option value={ARTWORK_STATUSES_ENUM.Shipped}>Shipped</Option>
        </Select>
      </Row>
    </Row>
  );
};

export default AcceptedPriceOffer;
