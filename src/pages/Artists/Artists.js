import React, { useEffect, useState, useCallback } from "react";
// Ant Design Components
import { Col, Typography, Spin, Pagination } from "antd";
// components
import ArtistCard from "./Components/ArtistCard";
// API
import { getArtistsAction } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { getArtistsSelector } from "../../redux/selector/selector";
// style
import "./Artists.scss";

import artistOne from "../../Assets/Images/image.png";

const Artists = () => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const { Text } = Typography;

  const { data, loading } = useSelector(getArtistsSelector);

  useEffect(() => {
    dispatch(getArtistsAction(page));
  }, [dispatch, page]);

  const handleChangePage = useCallback((e) => {
    setPage(e);
  }, []);

  if (loading) {
    return <Spin size="large" />;
  }

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
            firstName="Al"
            lastName="Chen"
          />

          {!!data?.items?.length &&
            data?.items?.map(({ photo, firstName, lastName }) => (
              <ArtistCard
                imageSrc={photo}
                alt="artist-image"
                firstName={firstName}
                lastName={lastName}
              />
            ))}
        </Col>

        <Pagination
          defaultCurrent={page}
          total={data?.meta?.count || 50}
          onChange={handleChangePage}
        />
      </Col>
    </Col>
  );
};

export default Artists;
