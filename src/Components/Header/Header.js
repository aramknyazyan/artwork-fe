import React, { useState } from "react";
import { Col, Row, Typography } from "antd";
import { Link } from "react-router-dom";

import Card from "../Card/Card";

import "./Header.scss";

const Header = () => {
  const [show, setShow] = useState("none");
  onscroll = () => {
    if (window.scrollY > 40) {
      setShow("submitWorkButton");
    } else if (window.scrollY < 40) {
      setShow("none");
    }
  };

  const { Text } = Typography;
  return (
    <Row className="navigation">
      <Card>
        <Col className="name">
          <Link to="/">
            <Text className="text">Edelweiss Gallery</Text>
          </Link>
        </Col>
        <Col>
          <Col className="menu">
            <Text key="about" className="pages">
              About
            </Text>
            <Text key="artists" className="pages">
              Artists
            </Text>
            <Text key="contact" className="pages">
              Contact Us
            </Text>
          </Col>
        </Col>
      </Card>
    </Row>
  );
};

export default Header;
