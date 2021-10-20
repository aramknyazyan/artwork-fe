import React from "react";
import { Col, Row } from "antd";
import { IconContext } from "react-icons";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import IllLogo from "../../Assets/Imges/Illlogo.png";
import Vector from "../../Assets/Imges/Vector.png";

import "./Footer.scss";

const Footer = () => {
  return (
    <Row className="footer">
      <Col span={12}>
        <Col className="footerPages">
          <p className="pages">About</p>
          <p className="pages">Artists</p>
          <p className="pages">Contact Us</p>
        </Col>
      </Col>
      <Col span={12} className="socialIcons">
        <Col className="icons">
          <IconContext.Provider value={{ size: "24px" }}>
            <FaInstagram className="icon" />
            <FiLinkedin className="icon" />
            <FaFacebookF className="icon" />
          </IconContext.Provider>
          <img src={IllLogo} alt="IllLogo" className="icon" />
          <img src={Vector} alt="Vector" className="icon" />
        </Col>
      </Col>
    </Row>
  );
};

export default Footer;
