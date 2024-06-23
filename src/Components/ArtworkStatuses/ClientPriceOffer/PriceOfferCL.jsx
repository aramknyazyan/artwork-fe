import React from "react";
// antd components
import { Form, Button, Typography, Input, Row, message } from "antd";
// components
import CurrencySelect from "../../CurrencySelect/CurrencySelect";
// api
import { useDispatch } from "react-redux";
import {
  patchArtworkAction,
  getArtworkByIdAction,
} from "../../../redux/action";
// styles
import "./PriceOfferCL.scss";

const { Text } = Typography;
const FormItem = Form.Item;

const PriceOfferCL = ({ id }) => {
  const dispatch = useDispatch();

  const onFinishPriceOffer = async (values) => {
    dispatch(
      patchArtworkAction(id, {
        status: "Submitted",
        submissionStatus: "Counter Offer",
        counterOffer: Number(values.counterPriceOffer),
      })
    );

    dispatch(getArtworkByIdAction(id));

    await message.success("Submit success!");
  };

  const handleAcceptPriceOffer = async () => {
    dispatch(
      patchArtworkAction(id, {
        submissionStatus: "Accepted Price Offer",
      })
    );

    dispatch(getArtworkByIdAction(id));

    await message.success("Price Offer Accepted!");
  };

  const handleRejectPriceOffer = async () => {
    dispatch(
      patchArtworkAction(id, {
        submissionStatus: "Rejected Price Offer",
      })
    );

    dispatch(getArtworkByIdAction(id));

    await message.success("Price Offer Rejected!");
  };

  const onFinishFailed = () => {
    message.error("Submit failed!");
  };

  return (
    <Row className="counter-offer-container">
      <Form
        name="submit-note"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinishPriceOffer}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="submit-counter-Offer"
      >
        <Row className="counter-Offer-detail">
          <Text className="data-header">
            <span className="dark">Counter Offer</span>
          </Text>

          <FormItem
            name="counterPriceOffer"
            rules={[
              {
                required: true,
                message: "Please input counter price offer!",
              },
            ]}
          >
            <Input addonAfter={CurrencySelect} type="number" />
          </FormItem>

          <Row className="send-counter-price">
            <Button
              className="send-counter-price-button"
              type="primary"
              htmlType="submit"
            >
              Send Counter Offer
            </Button>
          </Row>
        </Row>
      </Form>

      <Row className="counter-offer-action-buttons">
        <Button
          className="reject-price-offer-button"
          onClick={handleRejectPriceOffer}
          type="primary"
        >
          Reject Price Offer
        </Button>

        <Button
          className="accept-price-offer-button"
          onClick={handleAcceptPriceOffer}
          type="primary"
        >
          Accept Price Offer
        </Button>
      </Row>
    </Row>
  );
};

export default PriceOfferCL;
