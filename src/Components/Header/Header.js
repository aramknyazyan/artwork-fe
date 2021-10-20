import React, { useState } from "react";

import "antd/dist/antd.css";
import { Col, Row, Menu, Button } from "antd";

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

  return (
    <>
      <Row
        style={{ display: "flex", alignItems: "center" }}
        className="Navigation"
      >
        <Col span={12} style={{ fontSize: "25px" }} className="name">
          <p className="text">Edelweiss Gallery</p>
        </Col>
        <Col span={12}>
          <Menu className="menu">
            <Menu.Item key="about" className="pages">
              About
            </Menu.Item>
            <Menu.Item key="artists" className="pages">
              Artists
            </Menu.Item>
            <Menu.Item key="contact" className="pages">
              Contact Us
            </Menu.Item>
            <Button type="primary" className={show}>
              Submit Arwork
            </Button>
          </Menu>
        </Col>
      </Row>
    </>
  );
};

export default Header;
