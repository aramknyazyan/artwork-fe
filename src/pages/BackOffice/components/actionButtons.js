import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { patchArtworkAction } from "../../../redux/action";

import { Link } from "react-router-dom";
import { Typography, Modal, Col, Button } from "antd";

import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineDelete } from "react-icons/ai";
import { VscEye } from "react-icons/vsc";

const { Text } = Typography;

const ActionButtons = ({ id, submissionStatus }) => {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isArchiveModalVisible, setIsArchiveModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const showArchiveModal = () => {
    setIsArchiveModalVisible(true);
  };

  const handleOk = () => {
    dispatch(
      patchArtworkAction(id, {
        status: "Deleted",
        submissionStatus: submissionStatus,
      })
    );
    setIsModalVisible(false);
  };
  const handleArchiveOk = () => {
    dispatch(
      patchArtworkAction(id, {
        status: "Archived",
        submissionStatus: submissionStatus,
      })
    );
    setIsArchiveModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleArchiveCancel = () => {
    setIsArchiveModalVisible(false);
  };

  return (
    <div>
      <Link to={`/backoffice/${id}`}>
        <VscEye id={id} color="#5E3CEF" size={24} className="actions-icon" />
      </Link>
      <AiOutlineDelete
        color="#5E3CEF"
        size={24}
        className="actions-icon"
        onClick={showArchiveModal}
      />
      <RiDeleteBin6Line
        color="#FF4D4F"
        size={24}
        className="actions-icon"
        onClick={showModal}
      />
      <Modal
        title="delete_modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Col className="modal-header">
          <RiDeleteBin6Line
            color="#FF4D4F"
            size={30}
            className="actions-icon"
          />
          <Col className="modal-text">
            <Text className="modal-header-content">
              Are you sure you want to delete this submission?
            </Text>
            <Text className="modal-header-subcontent">
              By deleting this submission, you will loose the content within.
            </Text>
            <Col className="modal-buttons">
              <Button className="modal-button cancel" onClick={handleCancel}>
                No
              </Button>
              <Button className="modal-button delete" onClick={handleOk}>
                Delete
              </Button>
            </Col>
          </Col>
        </Col>
      </Modal>

      <Modal
        title="archive_modal"
        visible={isArchiveModalVisible}
        onOk={handleArchiveOk}
        onCancel={handleArchiveCancel}
      >
        <Col className="modal-header">
          <AiOutlineDelete color="#5E3CEF" size={30} className="actions-icon" />
          <Col className="modal-text">
            <Text className="modal-header-content">
              Are you sure you want to archive this submission?
            </Text>
            <Col className="modal-buttons">
              <Button
                className="modal-button cancel"
                onClick={handleArchiveCancel}
              >
                No
              </Button>
              <Button
                className="modal-button archive"
                onClick={handleArchiveOk}
              >
                Confirm
              </Button>
            </Col>
          </Col>
        </Col>
      </Modal>
    </div>
  );
};

export default ActionButtons;
