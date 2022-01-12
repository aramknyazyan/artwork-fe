import React, { useState } from "react";
import { Row, Col, Menu, Input, Typography, Select, Modal, Button } from "antd";
import { Link } from "react-router-dom";

import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { VscEye } from "react-icons/vsc";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineDelete } from "react-icons/ai";

import data from "../../data/data.json";

import "./BackOffice.scss";

const BackOffice = () => {
  const Text = Typography;
  const MenuItem = Menu.Item;
  const { Search } = Input;
  const { Option } = Select;
  const onSearch = (value) => console.log(value);

  const [status, setStatus] = useState(true);

  function handleChange(value) {
    console.log(`selected ${value}`);
    setStatus(value);
    setTimeout(() => {
      console.log(status, "status");
    }, 1000);
  }

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
    <Row className="backoffice-page">
      <Row className="backoffice-header">
        <Menu className="backoffice-header-menu">
          <MenuItem key="backoffice">Backoffice</MenuItem>
          <MenuItem key="submissions">Submissions</MenuItem>
          <MenuItem key="archive">Archive</MenuItem>
        </Menu>
      </Row>

      <Row className="search-submissions-row">
        <Row>
          <Text className="text">New Submissions</Text>
        </Row>
        <Row className="search-submissions">
          <Search
            placeholder="Search"
            allowClear
            onSearch={onSearch}
            style={{ width: 200 }}
          />
          <Select
            style={{ width: 200 }}
            onChange={handleChange}
            placeholder="Status"
          >
            <Option value="reviewed">reviewed</Option>
            <Option value="counter_offer">counter offer</Option>
            <Option value="accepted_price_offer">accepted price offer</Option>
            <Option value="rejected_counter_offer">
              rejected counter offer
            </Option>
            <Option value="accepted_counter_offer">
              accepted counter offer
            </Option>
            <Option value="rejected_price_offer">rejected price offer</Option>
            <Option value="pending">pending</Option>
            <Option value="new">new</Option>
          </Select>
        </Row>
      </Row>

      <Row className="backoffice">
        <Row className="backoffice-columns">
          <Col className="backoffice-columns-item">
            <Text>Id</Text>
            <Col className="arrows">
              <TiArrowSortedUp />
              <TiArrowSortedDown />
            </Col>
          </Col>
          <Col className="backoffice-columns-item">
            <Text>Photo</Text>
            <Col className="arrows">
              <TiArrowSortedUp />
              <TiArrowSortedDown />
            </Col>
          </Col>
          <Col className="backoffice-columns-item">
            <Text>Status</Text>
            <Col className="arrows">
              <TiArrowSortedUp />
              <TiArrowSortedDown />
            </Col>
          </Col>
          <Col className="backoffice-columns-item">
            <Text>Artist Name</Text>
            <Col className="arrows">
              <TiArrowSortedUp />
              <TiArrowSortedDown />
            </Col>
          </Col>
          <Col className="backoffice-columns-item">
            <Text>Country</Text>
            <Col className="arrows">
              <TiArrowSortedUp />
              <TiArrowSortedDown />
            </Col>
          </Col>
          <Col className="backoffice-columns-item">
            <Text>Submission Date</Text>
            <Col className="arrows">
              <TiArrowSortedUp />
              <TiArrowSortedDown />
            </Col>
          </Col>
          <Col className="backoffice-columns-item">
            <Text>Actions</Text>
            <Col className="arrows">
              <TiArrowSortedUp style={{ margin: "0" }} />
              <TiArrowSortedDown />
            </Col>
          </Col>
        </Row>
        {data.map((personData) => {
          return (
            <Row key={personData.id} className="person-row">
              <Col className="backoffice-columns-item">{personData.id}</Col>
              <Col className="backoffice-columns-item">
                <img src={personData.image} alt="img" className="image-item" />
              </Col>
              <Col className="backoffice-columns-item">
                <div className="status">{personData.status}</div>
              </Col>
              <Col className="backoffice-columns-item">
                {personData.firstName} {personData.lastName}
              </Col>
              <Col className="backoffice-columns-item">
                {personData.nationality}
              </Col>
              <Col className="backoffice-columns-item">
                {personData.submitDate}
              </Col>
              <Col className="action-items">
                <Link to={`/backoffice/${personData.id}`}>
                  <VscEye
                    id={personData.id}
                    color="#5E3CEF"
                    size={22}
                    className="actions-icon"
                  />
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
                        By deleting this submission, you will loose the content
                        within.
                      </Text>
                      <Col className="modal-buttons">
                        <Button
                          className="modal-button cancel"
                          onClick={handleCancel}
                        >
                          No
                        </Button>
                        <Button
                          className="modal-button delete"
                          onClick={handleOk}
                        >
                          Delete
                        </Button>
                      </Col>
                    </Col>
                  </Col>
                </Modal>
              </Col>
            </Row>
          );
        })}
      </Row>
    </Row>
  );
};

export default BackOffice;
