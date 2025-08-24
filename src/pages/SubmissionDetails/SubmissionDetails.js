import React, { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link, useParams, useNavigate } from "react-router-dom";
// ANTD components
import { Row, Col, Typography, Input, Form, message } from "antd";
import PriceOfferHelper from "../../shared/helpers/priceOfferHelper";
// components
import ArtworkPrice from "../../Components/ArtworkPrice/ArtworkPrice";
import ArtworkActionButtons from "../../Components/ArtworkActionButtons/ArtworkActionButtons";
// API
import { useDispatch, useSelector } from "react-redux";
import { getArtworkByIdSelector, getArtworkHistorySelector, getArtworkListSelector } from "../../redux/selector/selector";
import { getArtworkByIdAction, patchArtworkAction, getArtworkHistoryAction, getArtworkAction } from "../../redux/action";
// shared
import { artworkDataMapping } from "../../shared/mapping/backofficeDataMap";
import { ARTWORK_STATUSES_ENUM } from "../../shared/constants";
// icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// styles
import "./SubmissionDetails.scss";

const { Text } = Typography;
const Textarea = Input.TextArea;
const FormItem = Form.Item;

const SubmissionDetails = () => {
  const [artwork, setArtwork] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { id } = useParams();

  const { data } = useSelector(getArtworkListSelector);
  const artworkById = useSelector(getArtworkByIdSelector);
  const artworkHistory = useSelector(getArtworkHistorySelector);

  // useEffect(() => {
  //   if (!!artworkById) {
  //     const isNewArtwork = artworkById.submissionStatus === ARTWORK_STATUSES_ENUM.New;
  //     const isSameArtwork = id === artworkById.id;

  //     if (isNewArtwork && isSameArtwork) {
  //       console.log("is NEW artwork --- ", artworkById);
  //       dispatch(
  //         patchArtworkAction(id, {
  //           submissionStatus: ARTWORK_STATUSES_ENUM.Reviewed,
  //         })
  //       );
  //     }
  //   }
  // }, [artworkById, id]);

  useEffect(() => {
    dispatch(getArtworkAction());
  }, [dispatch]);

  useEffect(() => {
    form.setFieldsValue({ note: artworkHistory?.note });
  }, [artworkHistory, form]);

  useEffect(() => {
    setArtwork(artworkDataMapping(data?.items));
  }, [data]);

  useEffect(() => {
    dispatch(getArtworkByIdAction(id));
    dispatch(getArtworkHistoryAction(id));
  }, [dispatch, id, artwork]);

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

  const decrementLocationID = () => {
    const artworkId = artwork?.filter((item) => {
      return item.id === id;
    });

    const prevArtworkId = artwork?.filter(({ key }) => {
      if (artworkId?.[0]?.key === 0) {
        return key === artwork?.length - 1;
      }

      return key === artworkId?.[0]?.key - 1;
    });

    navigate(`/backoffice/${prevArtworkId?.[0]?.id}`);
  };

  const incrementLocationID = () => {
    const artworkId = artwork?.filter((item) => {
      return item.id === id;
    });

    const nextArtworkId = artwork?.filter(({ key }) => {
      if (artworkId?.[0]?.key === artwork?.length - 1) {
        return key === 0;
      }

      return key === artworkId?.[0]?.key + 1;
    });

    navigate(`/backoffice/${nextArtworkId?.[0]?.id}`);
  };

  return (
    <Row className="submission-details">
      <Col className="submission-change" onClick={decrementLocationID}>
        <IoIosArrowBack size={30} className="submission-change-arrow" />
      </Col>
      <Row className="submission-details-card">
        <Row>
          <Text className="location">
            <Link to="/backoffice">Submissions</Link>
            <MdKeyboardArrowRight size={14} />
            <span className="blue-text">Artwork ID: {artworkById ? artworkById.id : "not found"}</span>
          </Text>
        </Row>
        <Row className="submission-content">
          <Col className="container">
            <Text className="content-header">Submission Details</Text>
            <Row className="detail">
              <Text className="data-header">Artwork submission date</Text>
              <Text className="data">{artworkById ? artworkById.createdDate : "not found"}</Text>
            </Row>

            <Row className="detail">
              <Text className="data-header">Artist Name</Text>
              <Text className="data">
                {artworkById ? artworkById.artistInfo?.firstName : "not found"} {artworkById ? artworkById.artistInfo?.lastName : "not found"}
              </Text>
            </Row>

            <Row className="detail">
              <Text className="data-header">Artist Nationality</Text>
              <Text className="data">{artworkById ? artworkById.artistInfo?.nationality : "not found"}</Text>
            </Row>

            <Row className="detail">
              <Text className="data-header">Preffered Communication Method</Text>
              <Text className="data">
                {artworkById ? artworkById.artistInfo?.mobile?.phone : "not found"} {artworkById ? artworkById.artistInfo?.email : "not found"}
              </Text>
            </Row>

            <Row className="details-image-constiner">
              <Row className="details-image">
                <Text className="data-header">Artwork Main Photo</Text>
                {artworkById?.artworkMainPhoto ? <img className="data-image" src={artworkById?.artworkMainPhoto} alt="main" /> : "not found"}
              </Row>

              {artworkById?.artworkInSitu && (
                <Row className="details-image">
                  <Text className="data-header">Artwork Photo in situ</Text>
                  <img className="data-image" src={artworkById?.artworkInSitu} alt="main" />
                </Row>
              )}
            </Row>

            <Row className="detail">
              <Text className="data-header">Artwork Title</Text>
              <Text className="data">{artworkById ? artworkById?.title : "not found"}</Text>
            </Row>

            <Row className="detail">
              <Text className="data-header">Support</Text>
              <Text className="data">{artworkById ? artworkById?.support : "not found"}</Text>
            </Row>

            <Row className="detail">
              <Text className="data-header">Material</Text>
              <Text className="data">{artworkById ? artworkById?.material : "not found"}</Text>
            </Row>

            <Row className="size-details">
              <Col className="size">
                <Text className="data-header">Height</Text>
                <Text className="data">{artworkById ? artworkById?.height : "not found"}</Text>
              </Col>
              <Col className="size">
                <Text className="data-header">Width</Text>
                <Text className="data">{artworkById ? artworkById?.width : "not found"}</Text>
              </Col>
              <Col className="size">
                <Text className="data-header">Depth</Text>
                <Text className="data">{artworkById ? artworkById?.depth : "not found"}</Text>
              </Col>
            </Row>

            <Row className="detail">
              <Text className="data-header">Artwork Current Location</Text>
              <Text className="data">{artworkById ? artworkById?.currentLocation : "not found"}</Text>
            </Row>

            <Row className="detail">
              <Text className="data-header">Year of Creation</Text>
              <Text className="data">{artworkById ? artworkById?.yearOfCreation : "not found"}</Text>
            </Row>

            <Row className="detail">
              <Text className="data-header">Other online sales channels this artwork is presented.</Text>
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
              className="submit-work-form">
              <Row className="detail">
                <Text className="data-header">
                  <span className="dark">Note</span> (for internal use only)
                </Text>
                <FormItem name="note">
                  <Textarea className="note" type="text" />
                </FormItem>
                <Row className="textarea-save-row">
                  <button className="textarea-save-button" type="primary" htmlType="submit">
                    Save
                  </button>
                </Row>
              </Row>
            </Form>

            {artworkById?.priceOffer && <ArtworkPrice price={artworkById?.priceOffer} />}

            <PriceOfferHelper
              history={artworkHistory}
              id={artworkById?.id}
              status={artworkById?.submissionStatus}
              counterOffer={artworkById?.counterOffer}
              isAdmin={true}
            />

            {!!artworkById?.submissionStatus && artworkById?.submissionStatus !== ARTWORK_STATUSES_ENUM.New && (
              <ArtworkActionButtons status={artworkById?.submissionStatus} isAdmin={true} id={id} />
            )}
          </Col>
        </Row>
      </Row>
      <Col className="submission-change" onClick={incrementLocationID}>
        <IoIosArrowForward size={30} className="submission-change-arrow" />
      </Col>
    </Row>
  );
};

export default SubmissionDetails;
