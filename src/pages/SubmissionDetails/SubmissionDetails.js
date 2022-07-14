import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  getArtworkByIdSelector,
  getArtworkHistorySelector,
} from "../../redux/selector/selector";
import {
  getArtworkByIdAction,
  patchArtworkAction,
  getArtworkHistoryAction,
} from "../../redux/action";

import { Row, Col, Typography, Input, Form, message } from "antd";
import PriceOfferHelper from "./components/PriceOfferHelper/PriceOfferHelper";

import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./SubmissionDetails.scss";

const { Text } = Typography;
const Textarea = Input.TextArea;
const FormItem = Form.Item;

const SubmissionDetails = () => {
  const dispatch = useDispatch();
  const artworkById = useSelector(getArtworkByIdSelector);
  const artworkHostory = useSelector(getArtworkHistorySelector);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getArtworkByIdAction(id));
    dispatch(getArtworkHistoryAction(id));
  }, [dispatch, id, artworkHostory?.note]);

  const onFinishNote = async (values) => {
    dispatch(
      patchArtworkAction(id, {
        ...values,
        status: "Submitted",
        submissionStatus: "Price Offer",
      })
    );

    await message.success("Submit success!");
  };

  const onFinishFailed = () => {
    message.error("Submit failed!");
  };

  return (
    <Row className="submission-details">
      <Link to={`/backoffice/${Number(id) - 1}`}>
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

            <Form
              name="submit-note"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinishNote}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              className="submit-work-form"
            >
              <Row className="detail">
                <Text className="data-header">
                  <span className="dark">Note</span> (for internal use only)
                </Text>
                <FormItem name="note">
                  <Textarea
                    className="note"
                    type="text"
                    defaultValue={
                      artworkHostory.note ? artworkHostory.note : ""
                    }
                  />
                </FormItem>
                <Row className="textarea-save-row">
                  <button
                    className="textarea-save-button"
                    type="primary"
                    htmlType="submit"
                  >
                    Save
                  </button>
                </Row>
              </Row>
            </Form>
            {/* <PriceOffer id={id} /> */}
            <PriceOfferHelper history={artworkHostory} />
          </Col>
        </Row>
      </Row>
      <Link to={`/backoffice/${Number(id) + 1}`}>
        <Col className="submission-change">
          <IoIosArrowForward size={30} className="submission-change-arrow" />
        </Col>
      </Link>
    </Row>
  );
};

export default SubmissionDetails;
