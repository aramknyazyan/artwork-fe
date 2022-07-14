import React from "react";
import { useNavigate } from "react-router-dom";

import { Typography } from "antd";

import applauseImage from "../../Assets/Images/applause.png";
import "./SuccessPage.scss";

const { Text } = Typography;

const SuccessPage = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/");
  };
  return (
    <div className="success-page">
      <div className="header">Edelweiss Gallery</div>
      <div className="content">
        <img src={applauseImage} alt="applause" />
        <Text className="title">Thanks for submission</Text>
        <Text className="subtitle">
          Your form was successfully submitted. We will get back to you within 2
          weeks with a price offer.
        </Text>
        <div className="button" onClick={clickHandler}>
          Submit New Arwork
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
