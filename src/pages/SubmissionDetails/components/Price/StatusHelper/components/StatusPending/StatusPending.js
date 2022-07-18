import React, { useState } from "react";

import { useSelector } from "react-redux";
import { getArtworkHistorySelector } from "../../../../../../../redux/selector/selector";

import { Modal, Steps } from "antd";
import { VscEye } from "react-icons/vsc";

import "./StatusPending.scss";

const { Step } = Steps;

const StatusPending = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const artworkHostory = useSelector(getArtworkHistorySelector);

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
      <div className="history">
        <VscEye className="icon" size={18} onClick={showModal} />
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
            {artworkHostory?.priceOfferDate && (
              <Step title={`Price offer: ${artworkHostory?.priceOfferDate}`} />
            )}
            {artworkHostory?.counterOfferDate && (
              <Step
                title={`Counter offer: ${artworkHostory?.counterOfferDate}`}
                description="This is a description."
              />
            )}
            {artworkHostory?.rejectedOfferDate && (
              <Step
                title={`Rejected offer: ${artworkHostory?.rejectedOfferDate}`}
              />
            )}
            {artworkHostory?.acceptedOfferDate && (
              <Step
                title={`Price offer: ${artworkHostory?.acceptedOfferDate}`}
              />
            )}
          </Steps>
          <div className="modal-button">
            <div className="button" onClick={showModal}>
              Close
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default StatusPending;
