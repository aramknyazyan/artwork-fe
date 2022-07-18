import React from "react";

import { useDispatch } from "react-redux";
import {
  patchArtworkAction,
  getArtworkByIdAction,
} from "../../../../redux/action";

import { Form, Button, Typography, Input, Row, message, Select } from "antd";

import "./PriceOffer.scss";

const { Text } = Typography;
const FormItem = Form.Item;
const Option = Select;

const selectAfter = (
  <Select defaultValue="USD" className="select-before">
    <Option value="USD">USD</Option>
    <Option value="EUR">EUR</Option>
  </Select>
);

const PriceOffer = ({ id }) => {
  const dispatch = useDispatch();

  console.log(id);

  const onFinishPriceOffer = async (values) => {
    dispatch(
      patchArtworkAction(id, {
        ...values,
        status: "Submitted",
        submissionStatus: "Pending",
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
          <Input addonAfter={selectAfter} type="number" />
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
