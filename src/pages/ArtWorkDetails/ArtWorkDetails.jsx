import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// Ant Design Components
import { Col, Typography, Input, Form, Row, message } from "antd";
// Components
import ArtworkActionButtons from "../../Components/ArtworkActionButtons/ArtworkActionButtons";
import PriceOfferHelper from "../../shared/helpers/priceOfferHelper";
import ArtworkPrice from "../../Components/ArtworkPrice/ArtworkPrice";
// API
import { useSelector, useDispatch } from "react-redux";
import {
  getArtworkByIdSelector,
  getArtworkHistorySelector,
} from "../../redux/selector/selector";
import {
  patchArtworkAction,
  getArtworkByIdAction,
  getArtworkHistoryAction,
} from "../../redux/action";
// constants
import { ARTWORK_STATUSES_ENUM } from "../../shared/constants";
// styles
import "./ArtWorkDetails.scss";

const { Text } = Typography;
const Textarea = Input.TextArea;
const FormItem = Form.Item;

export const ArtWorkDetails = () => {
  const [form] = Form.useForm();
  const { id } = useParams();

  const dispatch = useDispatch();
  const artworkById = useSelector(getArtworkByIdSelector);
  const artworkHistory = useSelector(getArtworkHistorySelector);

  useEffect(() => {
    dispatch(getArtworkByIdAction(id));
    dispatch(getArtworkHistoryAction(id));
  }, [dispatch, id]);

  const onFinishNote = async (values) => {
    dispatch(
      patchArtworkAction(id, {
        ...values,
        ...artworkHistory,
        status: artworkById?.status,
        submissionStatus: artworkById?.submissionStatus,
      })
    );

    await message.success("Submit success!");
  };

  const onFinishFailed = () => {
    message.error("Submit failed!");
  };

  return (
    <Col className="submission-container">
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
              {artworkById ? artworkById.artistInfo?.nationality : "not found"}
            </Text>
          </Row>

          <Row className="detail">
            <Text className="data-header">Preffered Communication Method</Text>
            <Text className="data">
              {artworkById
                ? artworkById.artistInfo?.mobile?.phone
                : "not found"}{" "}
              {artworkById ? artworkById.artistInfo?.email : "not found"}
            </Text>
          </Row>

          <Row className="details-image-constiner">
            <Row className="details-image">
              <Text className="data-header">Artwork Main Photo</Text>
              {artworkById?.artworkMainPhoto ? (
                <img
                  className="data-image"
                  src={artworkById?.artworkMainPhoto}
                  alt="main"
                />
              ) : (
                "not found"
              )}
            </Row>

            {artworkById?.artworkInSitu && (
              <Row className="details-image">
                <Text className="data-header">Artwork Photo in situ</Text>
                <img
                  className="data-image"
                  src={artworkById?.artworkInSitu}
                  alt="main"
                />
              </Row>
            )}
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

          {artworkById?.priceOffer && (
            <ArtworkPrice price={artworkById?.priceOffer} />
          )}

          <PriceOfferHelper
            history={artworkHistory}
            id={artworkById?.id}
            status={artworkById?.submissionStatus}
            counterOffer={artworkById?.counterOffer}
            isAdmin={false}
          />

          {!!artworkById?.submissionStatus &&
            artworkById?.submissionStatus !== ARTWORK_STATUSES_ENUM.New && (
              <ArtworkActionButtons
                status={artworkById?.submissionStatus}
                isAdmin={false}
                id={id}
              />
            )}
        </Col>
      </Row>
    </Col>
  );
};

export default ArtWorkDetails;
