import React, { useEffect, useState } from "react";
import { Row, Col, Typography, Input, Select, Button } from "antd";
import { Link } from "react-router-dom";

import data from "../../data/data.json";

import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./SubmissionDetails.scss";

const SubmissionDetails = (props) => {
  const [submission, setSubmission] = useState(null);

  const personId = props.match.params.id;

  useEffect(() => {
    const personData = data.find((item) => String(item.id) === personId);

    if (personData) {
      setSubmission(personData);
    }
  }, [personId]);

  const { Text } = Typography;
  const Textarea = Input.TextArea;
  const Option = Select;

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
              Artwork ID: {submission ? submission.id : "not found"}
            </span>
          </Text>
        </Row>
        <Row className="submission-content">
          <Col className="container">
            <Text className="content-header">Submission Details</Text>
            <Row className="detail">
              <Text className="data-header">Artwork submission date</Text>
              <Text className="data">
                {submission ? submission.submitDate : "not found"}
              </Text>
            </Row>

            <Row className="detail">
              <Text className="data-header">Artist Name</Text>
              <Text className="data">
                {submission ? submission.firstName : "not found"}{" "}
                {submission ? submission.lastName : "not found"}
              </Text>
            </Row>

            <Row className="detail">
              <Text className="data-header">Artist Nationality</Text>
              <Text className="data">
                {submission ? submission.nationality : "not found"}
              </Text>
            </Row>

            <Row className="detail">
              <Text className="data-header">
                Preffered Communication Method
              </Text>
              <Text className="data">
                {submission ? submission.mobileNumber : "not found"}{" "}
                {submission ? submission.preferredMessanger : "not found"}
              </Text>
            </Row>

            <Row className="detail">
              <Text className="data-header">Artwork Photos</Text>
              <img
                className="data-image"
                src={submission ? submission.image : "not found"}
                alt=""
              />
            </Row>

            <Row className="detail">
              <Text className="data-header">Artwork Title</Text>
              <Text className="data">
                {submission ? submission.title : "not found"}
              </Text>
            </Row>

            <Row className="detail">
              <Text className="data-header">Support</Text>
              <Text className="data">
                {submission ? submission.support : "not found"}
              </Text>
            </Row>

            <Row className="size-details">
              <Col className="size">
                <Text className="data-header">Height</Text>
                <Text className="data">
                  {submission ? submission.heightSize : "not found"}
                </Text>
              </Col>
              <Col className="size">
                <Text className="data-header">Width</Text>
                <Text className="data">
                  {submission ? submission.widthSize : "not found"}
                </Text>
              </Col>
              <Col className="size">
                <Text className="data-header">Depth</Text>
                <Text className="data">
                  {submission ? submission.depthSize : "not found"}
                </Text>
              </Col>
            </Row>

            <Row className="detail">
              <Text className="data-header">Artwork Current Location</Text>
              <Text className="data">
                {submission ? submission.location : "not found"}
              </Text>
            </Row>

            <Row className="detail">
              <Text className="data-header">Year of Creation</Text>
              <Text className="data">
                {submission ? submission.creationYear : "not found"}
              </Text>
            </Row>

            <Row className="detail">
              <Text className="data-header">
                Other online sales channels this artwork is presented.
              </Text>
              <Text className="data">
                {submission ? submission.textArea : "not found"}
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
