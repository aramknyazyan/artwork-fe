import React, { useState } from "react";
import { Col, Row, Input, Typography, Select } from "antd";
import { Form, Checkbox } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./SubmitPage.scss";
import SubmitForm from "./components/SubmitForm/SubmitForm";

const SubmitPage = () => {
  const [phoneShow, setPhoneShow] = useState("none"); //show phone number section
  const [mailShow, setMailShow] = useState("none"); //show mail section

  //open mail or phone number section

  const radioValue = (e) => {
    if (e.target.value === 1) {
      setPhoneShow("phoneShow");
      setMailShow("none");
    } else if (e.target.value === 2) {
      setMailShow("mailShow");
      setPhoneShow("none");
    }
  };


  
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };
  const { Text } = Typography;
  const { Option } = Select;
  const { TextArea } = Input;

  function onFinish(values) {
    console.log("Success:", values);
  }

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row className="submitPage">
      <Row className="sections top">
        <h2 className="edelweissGallery">Edelweiss Gallery</h2>
      </Row>
      <Row className="submitCard">
        <Col span={24} style={{ textAlign: "start" }}>
          <p className="bigText">Artist’s Details:</p>
        </Col>
        <SubmitForm />
      </Row>
    </Row>
  );
};

export default SubmitPage;
