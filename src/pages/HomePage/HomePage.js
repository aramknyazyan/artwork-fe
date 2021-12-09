import React from "react";
import { Col } from "antd";

import Artsper from "./components/Artsper/Artsper";
import Discover from "./components/Discover/Discover";
import SellArWork from "./components/SellArWork/SellArWork";

import "./HomePage.scss";

const HomePage = () => {
  return (
    <Col className="home-page">
      <SellArWork />
      <Discover />
      <Artsper />
    </Col>
  );
};

export default HomePage;
