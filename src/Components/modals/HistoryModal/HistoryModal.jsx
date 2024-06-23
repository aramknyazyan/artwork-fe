import React from "react";
// ANTD components
import { Modal, Steps } from "antd";
// API
import { useSelector } from "react-redux";
import { getArtworkHistorySelector } from "../../../redux/selector/selector";
// styles
import "./HistoryModal.scss";

const { Step } = Steps;

const HistoryModal = ({ open, closeModal }) => {
  const artworkHistory = useSelector(getArtworkHistorySelector);

  return (
    <Modal
      title="History Modal"
      visible={open}
      onOk={closeModal}
      onCancel={closeModal}
      className="history-modal"
    >
      <div className="content">
        <div className="modal-title">View History</div>

        <Steps
          progressDot
          direction="vertical"
          current={artworkHistory?.length}
        >
          {artworkHistory?.map((item) => (
            <Step
              title={`${item?.status}: ${item?.createdDate}`}
              className="steps"
            />
          ))}
        </Steps>

        <div className="modal-button">
          <div className="button" onClick={closeModal}>
            Close
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default HistoryModal;
