import React from "react";
import { Col, Typography } from "antd";

import Card from "../Card/Card";

import { IconContext } from "react-icons";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import IllLogo from "../../Assets/Images/Illlogo.png";
import Vector from "../../Assets/Images/Vector.png";

import "./Footer.scss";

const Footer = () => {
  const { Text } = Typography;
  return (
    <Col className="footer">
      <Card>
        <Col>
          <Col className="footer-pages">
            <Text className="pages">About</Text>
            <Text className="pages">Artists</Text>
            <Text className="pages">Contact Us</Text>
          </Col>
        </Col>
        <Col className="social-icons">
          <Col className="icons">
            <IconContext.Provider value={{ size: "24px" }}>
              <FaInstagram className="icon" />
              <FiLinkedin className="icon" />
              <FaFacebookF className="icon" />
            </IconContext.Provider>
            <img src={IllLogo} alt="ill-logo" className="icon" />
            <img src={Vector} alt="vector" className="icon" />
          </Col>
        </Col>
      </Card>
    </Col>
  );
};

export default Footer;
