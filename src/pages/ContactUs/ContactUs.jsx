import React from "react";
import { useDispatch } from "react-redux";
// AntDesign components
import { Col, Typography, Form, message, Button, Input } from "antd";
// api
import { contactUsAction } from "../../redux/action";
// utils
import { CONTACT_US_FORM_VALIDATION } from "../../shared/constants/contactUs.constants";
// styles
import "./ContactUs.scss";

const FormItem = Form.Item;
const { TextArea, Group } = Input;
const { Text } = Typography;

const ContactUs = () => {
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    await dispatch(contactUsAction(values));
  };

  const onFinishFailed = () => {
    message.error("Something went wrong!");
  };

  return (
    <Col className="contact-us-container">
      <Typography className="contact-us-title">Contact Us</Typography>
      <Form
        name="contact-us"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="contact-us-form"
      >
        <Col className="container">
          <Col className="input-container">
            <Text className="input-title">
              First Name <span className="red-asterisk">*</span>
            </Text>
            <FormItem
              name="firstName"
              rules={[CONTACT_US_FORM_VALIDATION?.firstName]}
            >
              <Input placeholder="First Name" />
            </FormItem>
          </Col>

          <Col className="input-container">
            <Text className="input-title">
              Last Name <span className="red-asterisk">*</span>
            </Text>
            <FormItem
              name="lastName"
              rules={[CONTACT_US_FORM_VALIDATION?.lastName]}
            >
              <Input placeholder="Last Name" />
            </FormItem>
          </Col>
        </Col>

        <Col className="input-container">
          <Text className="input-title">
            Email <span className="red-asterisk">*</span>
          </Text>
          <FormItem name="email" rules={[CONTACT_US_FORM_VALIDATION?.email]}>
            <Input placeholder="Email" />
          </FormItem>
        </Col>

        <Col className="input-container">
          <Text className="input-title">
            Message <span className="red-asterisk">*</span>
          </Text>
          <Col className="input-container">
            <Group>
              <FormItem
                name="message"
                className="text-area"
                rules={[CONTACT_US_FORM_VALIDATION?.message]}
              >
                <TextArea
                  maxLength={300}
                  placeholder="Artwork Title"
                  className="text-area"
                />
              </FormItem>
            </Group>
          </Col>
        </Col>

        <FormItem className="container">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </FormItem>
      </Form>
    </Col>
  );
};

export default ContactUs;
