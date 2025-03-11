import React, { useEffect, useState } from "react";
import { Col, Row, Typography } from "antd";
import { Link, useLocation } from "react-router-dom";

import Card from "../Card/Card";

import "./Header.scss";

const Header = () => {
  const { Text } = Typography;
  const location = useLocation();
  const [pathname, setPathname] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setPathname(false);
    } else {
      setPathname(true);
    }
  }, [location.pathname]);

  return (
    <Row className="navigation">
      <Card>
        <Col className="name">
          <Link to="/">
            <Text className={pathname ? "logo-black" : "logo"}>
              Edelweiss Gallery
            </Text>
          </Link>
        </Col>
        <Col>
          <Col className="menu">
            <Link className={pathname ? "pages-black" : "pages"} to="/about">
              About
            </Link>

            <Link className={pathname ? "pages-black" : "pages"} to="/artists">
              Artists
            </Link>

            <Link
              className={pathname ? "pages-black" : "pages"}
              to="/contact-us"
            >
              Contact Us
            </Link>
          </Col>
        </Col>
      </Card>
    </Row>
  );
};

export default Header;
