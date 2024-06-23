import React from "react";
// ANTD components
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
import "./PriceOffer.scss";

const { Text } = Typography;
const FormItem = Form.Item;

const PriceOffer = ({ id }) => {
  const dispatch = useDispatch();

  const onFinishPriceOffer = async (values) => {
    dispatch(
      patchArtworkAction(id, {
        ...values,
        status: "Submitted",
        submissionStatus: "Price Offer",
        priceOffer: Number(values.priceOffer),
      })
    );

    dispatch(getArtworkByIdAction(id));

    await message.success("Submit success!");
  };

  const onFinishFailed = () => {
    message.error("Submit failed!");
  };

  return (
    <Form
      name="submit-note"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinishPriceOffer}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="submit-work-form"
    >
      <Row className="detail">
        <Text className="data-header">
          <span className="dark">Price Offer</span>
        </Text>
        <FormItem
          name="priceOffer"
          rules={[
            {
              required: true,
              message: "Please input price offer!",
            },
          ]}
        >
          <Input addonAfter={CurrencySelect} type="number" />
        </FormItem>

        <Row className="send-price">
          <Button
            className="send-price-button"
            type="primary"
            htmlType="submit"
          >
            Send Price Offer
          </Button>
        </Row>
      </Row>
    </Form>
  );
};

export default PriceOffer;
