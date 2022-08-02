import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  getArtworkByIdSelector,
  getArtworkHistorySelector,
  getArtworkListSelector,
} from "../../redux/selector/selector";
import {
  getArtworkByIdAction,
  patchArtworkAction,
  getArtworkHistoryAction,
  getArtworkAction,
} from "../../redux/action";

import { Row, Col, Typography, Input, Form, message } from "antd";
import PriceOfferHelper from "./components/PriceOfferHelper/PriceOfferHelper";
import { artworkDataMapping } from "../../shared/mapping/backofficeDataMap";

import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./SubmissionDetails.scss";
import { useState } from "react";

const { Text } = Typography;
const Textarea = Input.TextArea;
const FormItem = Form.Item;

const SubmissionDetails = () => {
  const [artwork, setArtwork] = useState();

  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { id } = useParams();

  const { data } = useSelector(getArtworkListSelector);
  const artworkById = useSelector(getArtworkByIdSelector);
  const artworkHistory = useSelector(getArtworkHistorySelector);

  useEffect(() => {
    dispatch(getArtworkAction());
  }, [dispatch]);

  useEffect(() => {
    form.setFieldsValue({ note: artworkHistory?.note });
  }, [artworkHistory]);

  useEffect(() => {
    setArtwork(artworkDataMapping(data?.items));
  }, [data]);

  useEffect(() => {
    const artworkId = artwork?.filter(({ key }) => {
      return String(key) === id;
    });
    dispatch(getArtworkByIdAction(artworkId?.[0]?.id));
    dispatch(getArtworkHistoryAction(artworkId?.[0]?.id));
  }, [dispatch, id, artwork]);

  const onFinishNote = async (values) => {
    const artworkId = artwork?.filter(({ key }) => {
      return String(key) === id;
    });
    dispatch(
      patchArtworkAction(artworkId?.[0]?.id, {
        ...values,
        status: artworkById?.status,
        submissionStatus: artworkById?.submissionStatus,
      })
    );

    await message.success("Submit success!");
  };

  const onFinishFailed = () => {
    message.error("Submit failed!");
  };

  const decrementLocationID = (event) => {
    if (id <= 0) {
      event.preventDefault();
    }
  };

  const incrementLocationID = (event) => {
    if (id >= artwork?.length) {
      event.preventDefault();
    }
  };

  return (
    <Row className="submission-details">
      <Link
        to={`/e2899344-0676-11ed-b939-0242ac120002/${Number(id) - 1}`}
        onClick={decrementLocationID}
      >
        <Col
          className={
            id === "0" ? "submission-change-diabled" : "submission-change"
          }
        >
          <IoIosArrowBack size={30} className="submission-change-arrow" />
        </Col>
      </Link>
      <Row className="submission-details-card">
        <Row>
          <Text className="location">
            <Link to="/e2899344-0676-11ed-b939-0242ac120002">Submissions</Link>{" "}
            <MdKeyboardArrowRight size={14} />
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
              form={form}
              name="submit-note"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              onFinish={onFinishNote}
              onFinishFailed={onFinishFailed}
              className="submit-work-form"
            >
              <Row className="detail">
                <Text className="data-header">
                  <span className="dark">Note</span> (for internal use only)
                </Text>
                <FormItem name="note">
                  <Textarea className="note" type="text" />
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
            <PriceOfferHelper
              history={artworkHistory}
              id={artworkById?.id}
              status={artworkById?.submissionStatus}
            />
          </Col>
        </Row>
      </Row>
      <Link
        to={`/e2899344-0676-11ed-b939-0242ac120002/${Number(id) + 1}`}
        onClick={incrementLocationID}
      >
        <Col
          className={
            id === String(artwork?.length)
              ? "submission-change-diabled"
              : "submission-change"
          }
        >
          <IoIosArrowForward size={30} className="submission-change-arrow" />
        </Col>
      </Link>
    </Row>
  );
};

export default SubmissionDetails;
