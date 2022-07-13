import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getArtworkByIdAction } from "../../redux/action";
import { getArtworkByIdSelector } from "../../redux/selector/selector";

import { Row, Col, Typography, Input, Select, Button } from "antd";
import { Link } from "react-router-dom";

import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./SubmissionDetails.scss";

const { Text } = Typography;
const Textarea = Input.TextArea;
const Option = Select;

const SubmissionDetails = (props) => {
  const dispatch = useDispatch();
  const artworkById = useSelector(getArtworkByIdSelector);
  const personId = props.match.params.id;

  console.log(artworkById, "artworkById");

  useEffect(() => {
    dispatch(getArtworkByIdAction(personId));
  }, [dispatch, personId]);

  const selectAfter = (
    <Select defaultValue="USD" className="select-before">
      <Option value="USD">USD</Option>
      <Option value="EUR">EUR</Option>
    </Select>
  );

  return (
    <Row className="submission-details">
      <Link to={`/backoffice/${Number(personId) - 1}`}>
        <Col className="submission-change">
          <IoIosArrowBack size={30} className="submission-change-arrow" />
        </Col>
      </Link>
      <Row className="submission-details-card">
        <Row>
          <Text className="location">
            Submissions <MdKeyboardArrowRight size={14} />{" "}
            <span className="blue-text">
              Artwork ID: {artworkById ? artworkById.id : "not found"}
            </span>
          </Text>
        </Row>
        <Row className="submission-content">
          <Col className="container">
            <Text className="content-header">Submission Details</Text>
            <Row className="detail">
              <Text className="data-header">Artwork submission date</Text>
              <Text className="data">
                {artworkById ? artworkById.createdDate : "not found"}
              </Text>
            </Row>

            <Row className="detail">
              <Text className="data-header">Artist Name</Text>
              <Text className="data">
                {artworkById ? artworkById.artistInfo?.firstName : "not found"}{" "}
                {artworkById ? artworkById.artistInfo?.lastName : "not found"}
              </Text>
            </Row>

            <Row className="detail">
              <Text className="data-header">Artist Nationality</Text>
              <Text className="data">
                {artworkById
                  ? artworkById.artistInfo?.nationality
                  : "not found"}
              </Text>
            </Row>

            <Row className="detail">
              <Text className="data-header">
                Preffered Communication Method
              </Text>
              <Text className="data">
                {artworkById
                  ? artworkById.artistInfo?.mobile?.phone
                  : "not found"}{" "}
                {artworkById ? artworkById.artistInfo?.email : "not found"}
              </Text>
            </Row>

            <Row className="detail">
              <Text className="data-header">Artwork Photos</Text>
              <img
                className="data-image"
                src={artworkById ? artworkById?.artworkMainPhoto : "not found"}
                alt=""
              />
            </Row>

            <Row className="detail">
              <Text className="data-header">Artwork Title</Text>
              <Text className="data">
                {artworkById ? artworkById?.title : "not found"}
              </Text>
            </Row>

            <Row className="detail">
              <Text className="data-header">Support</Text>
              <Text className="data">
                {artworkById ? artworkById?.support : "not found"}
              </Text>
            </Row>

            <Row className="size-details">
              <Col className="size">
                <Text className="data-header">Height</Text>
                <Text className="data">
                  {artworkById ? artworkById?.height : "not found"}
                </Text>
              </Col>
              <Col className="size">
                <Text className="data-header">Width</Text>
                <Text className="data">
                  {artworkById ? artworkById?.width : "not found"}
                </Text>
              </Col>
              <Col className="size">
                <Text className="data-header">Depth</Text>
                <Text className="data">
                  {artworkById ? artworkById?.depth : "not found"}
                </Text>
              </Col>
            </Row>

            <Row className="detail">
              <Text className="data-header">Artwork Current Location</Text>
              <Text className="data">
                {artworkById ? artworkById?.currentLocation : "not found"}
              </Text>
            </Row>

            <Row className="detail">
              <Text className="data-header">Year of Creation</Text>
              <Text className="data">
                {artworkById ? artworkById?.yearOfCreation : "not found"}
              </Text>
            </Row>

            <Row className="detail">
              <Text className="data-header">
                Other online sales channels this artwork is presented.
              </Text>
              <Text className="data">
                {artworkById
                  ? artworkById?.presentedChannels?.map((item) => {
                      return item;
                    })
                  : "not found"}
              </Text>
            </Row>
          </Col>

          <Col className="container">
            <Text className="content-header">Send Price Offer</Text>

            <Row className="detail">
              <Text className="data-header">
                <span className="dark">Note</span> (for internal use only)
              </Text>
              <Textarea className="note" />
              <Row className="textarea-save-row">
                <button className="textarea-save-button">Save</button>
              </Row>
            </Row>

            <Row className="detail">
              <Text className="data-header">
                <span className="dark">Price Offer</span>
              </Text>
              <Input addonAfter={selectAfter} />
              <Row className="send-price">
                <Button className="send-price-button">Send Price Offer</Button>
              </Row>
            </Row>
          </Col>
        </Row>
      </Row>
      <Link to={`/backoffice/${Number(personId) + 1}`}>
        <Col className="submission-change">
          <IoIosArrowForward size={30} className="submission-change-arrow" />
        </Col>
      </Link>
    </Row>
  );
};

export default SubmissionDetails;
