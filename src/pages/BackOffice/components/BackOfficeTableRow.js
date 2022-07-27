import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Row, Col, Typography, Modal, Button } from "antd";
import { backofficeSatatusMap } from "../../../shared/mapping/backofficeStatusMap";

import { VscEye } from "react-icons/vsc";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineDelete } from "react-icons/ai";
import "./BackOfficeTableRow.scss";

const { Text } = Typography;

const BackOfficeTableRow = ({
  firstName,
  status,
  id,
  image,
  nationality,
  submitDate,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isArchiveModalVisible, setIsArchiveModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const showArchiveModal = () => {
    setIsArchiveModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleArchiveOk = () => {
    setIsArchiveModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleArchiveCancel = () => {
    setIsArchiveModalVisible(false);
  };

  return (
    <Row key={id} className="person-row">
      <Col className="backoffice-columns-item">{id}</Col>
      <Col className="backoffice-columns-item">
        <img src={image} alt="img" className="image-item" />
      </Col>
      <Col className="backoffice-columns-item">
        <div className={backofficeSatatusMap[status]}>{status}</div>
      </Col>
      <Col className="backoffice-columns-item">{firstName}</Col>
      <Col className="backoffice-columns-item">{nationality}</Col>
      <Col className="backoffice-columns-item">{submitDate}</Col>
      <Col className="action-items">
        <Link to={`/backoffice/${id}`}>
          <VscEye id={id} color="#5E3CEF" size={24} className="actions-icon" />
        </Link>
        <AiOutlineDelete
          color="#5E3CEF"
          size={22}
          className="actions-icon"
          onClick={showArchiveModal}
        />
        <Modal
          title="archive_modal"
          visible={isArchiveModalVisible}
          onOk={handleArchiveOk}
          onCancel={handleArchiveCancel}
        >
          <Col className="modal-header">
            <AiOutlineDelete
              color="#5E3CEF"
              size={30}
              className="actions-icon"
            />
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

        <RiDeleteBin6Line
          color="#FF4D4F"
          size={22}
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
      </Col>
    </Row>
  );
};

export default BackOfficeTableRow;
