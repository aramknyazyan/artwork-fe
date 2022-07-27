import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { patchArtworkAction } from "../../../../../../../redux/action";
import { statusAcceptedClassNameHelper } from "./helpers/StatusAcceptedClassNameHelper";
import {
  getArtworkHistorySelector,
  getArtworkByIdSelector,
} from "../../../../../../../redux/selector/selector";

import { useParams } from "react-router-dom";
import { Modal, Steps, Select } from "antd";
import { VscEye } from "react-icons/vsc";

import "./StatusAccepted.scss";

const { Step } = Steps;
const { Option } = Select;

const StatusAccepted = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [value, setValue] = useState("Accepted price offer");
  const { id } = useParams();

  const dispatch = useDispatch();
  const artworkHostory = useSelector(getArtworkHistorySelector);
  const artworkById = useSelector(getArtworkByIdSelector);

  useEffect(() => {
    setValue(artworkById?.submissionStatus);
  }, [artworkById]);

  const selectChangeHandler = (value) => {
    setValue(value);

    dispatch(
      patchArtworkAction(id, {
        ...artworkHostory,
        status: artworkHostory.status,
        submissionStatus: value,
      })
    );
  };

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
    <div className="status-accepted">
      <div className="title">Price Offer Status:</div>
      <div className={statusAcceptedClassNameHelper(value)}>
        <Select
          className="select"
          defaultValue="Accepted price offer"
          value={value}
          onChange={selectChangeHandler}
        >
          <Option value="Published">Published</Option>
          <Option value="Sold">Sold</Option>
          <Option value="Shipped">Shipped</Option>
          <Option value="Accepted price offer" disabled>
            Accepted price offer
          </Option>
        </Select>
      </div>
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

export default StatusAccepted;
