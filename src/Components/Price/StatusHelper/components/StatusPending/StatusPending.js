import React, { useState } from "react";

import { useSelector } from "react-redux";
import { getArtworkHistorySelector } from "../../../../../redux/selector/selector";

import { Modal, Steps } from "antd";
import { VscEye } from "react-icons/vsc";

import "./StatusPending.scss";

const { Step } = Steps;

const StatusPending = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const artworkHistory = useSelector(getArtworkHistorySelector);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="status-pending">
      <div className="title">Price Offer Status:</div>
      <div className="status">PENDING</div>
      <div className="history" onClick={showModal}>
        <VscEye className="icon" size={18} />
        <div>View History</div>
      </div>
      <Modal
        title="History Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        className="history-modal"
      >
        <div className="content">
          <div className="modal-title">View History</div>
          <Steps progressDot direction="vertical" current={1}>
            {artworkHistory?.createdDate && (
              <Step
                title={`Created date: ${artworkHistory?.createdDate}`}
                className="steps"
              />
            )}
            {artworkHistory?.priceOffer && (
              <Step
                title={`Price offer: ${artworkHistory?.priceOffer}`}
                className="steps"
              />
            )}
            {artworkHistory?.counterOfferDate && (
              <Step
                title={`Counter offer: ${artworkHistory?.counterOfferDate}`}
                className="steps"
              />
            )}
            {artworkHistory?.rejectedOfferDate && (
              <Step
                title={`Rejected offer: ${artworkHistory?.rejectedOfferDate}`}
                className="steps"
              />
            )}
            {artworkHistory?.acceptedOfferDate && (
              <Step
                title={`Price offer: ${artworkHistory?.acceptedOfferDate}`}
              />
            )}
          </Steps>
          <div className="modal-button">
            <div className="button" onClick={handleCancel}>
              Close
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default StatusPending;
