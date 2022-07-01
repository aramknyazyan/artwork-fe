import React from "react";
import { Col, Typography } from "antd";

import artistOne from "../../Assets/Images/image.png";
import artistTwo from "../../Assets/Images/image-two.png";
import artistThree from "../../Assets/Images/image-three.png";
import "./Artists.scss";
import ArtistCard from "./Components/ArtistCard";

const Artists = () => {
  const { Text } = Typography;
  return (
    <Col className="artists-page">
      <Col className="artists-page-card">
        <Col className="page-title">
          <Text className="title">Artists</Text>
        </Col>
        <Col className="artists-section">
          <ArtistCard
            imageSrc={artistOne}
            alt="artist-image"
            artistName="Al Chen"
          />
          <ArtistCard
            imageSrc={artistTwo}
            alt="artist-image"
            artistName="Al Chen"
          />
          <ArtistCard
            imageSrc={artistThree}
            alt="artist-image"
            artistName="Al Chen"
          />
          <ArtistCard
            imageSrc={artistOne}
            alt="artist-image"
            artistName="Al Chen"
          />
          <ArtistCard
            imageSrc={artistTwo}
            alt="artist-image"
            artistName="Al Chen"
          />
          <ArtistCard
            imageSrc={artistThree}
            alt="artist-image"
            artistName="Al Chen"
          />
          <ArtistCard
            imageSrc={artistOne}
            alt="artist-image"
            artistName="Al Chen"
          />
          <ArtistCard
            imageSrc={artistTwo}
            alt="artist-image"
            artistName="Al Chen"
          />
          <ArtistCard
            imageSrc={artistThree}
            alt="artist-image"
            artistName="Al Chen"
          />
        </Col>
      </Col>
    </Col>
  );
};

export default Artists;
