import React from "react";
import { Col, Typography } from "antd";

import sloganImage from "../../Assets/Images/about-image.png";
import "./About.scss";

const About = () => {
  const { Text } = Typography;
  return (
    <Col className="about-page">
      <Col className="about-page-card">
        <Col className="page-title">
          <Text className="title">About</Text>
        </Col>
        <Col className="page-slogan">
          <img src={sloganImage} alt="artwork" className="image" />
          <Col className="slogan-content">
            <Text className="slogan-title">Title title title</Text>
            <Text className="slogan-content-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </Text>
          </Col>
        </Col>
        <Col className="page-content">
          <Text className="page-content-title">Another Paragraph Title</Text>
          <Text className="page-content-subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </Text>
          <Text className="page-content-subtitle">
            But also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing.
          </Text>
          <Text className="page-content-subtitle">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </Text>
          <Text className="page-content-subtitle">
            But also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing.
          </Text>
        </Col>
      </Col>
    </Col>
  );
};

export default About;
