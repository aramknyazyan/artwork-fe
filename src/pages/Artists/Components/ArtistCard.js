import React from "react";
import { Col, Typography } from "antd";

import "./ArtistCard.scss";

const ArtistCard = ({ imageSrc, alt, artistName }) => {
  const { Text } = Typography;
  return (
    <Col className="artist-card">
      <img src={imageSrc} alt={alt} className="artist-image" />
      <Text className="artist-name">{artistName}</Text>
    </Col>
  );
};

export default ArtistCard;
