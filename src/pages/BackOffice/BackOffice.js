import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getArtworkAction } from "../../redux/action";
import { getArtworkListSelector } from "../../redux/selector/selector";

import { Row, Col, Menu, Input, Typography, Select, Skeleton } from "antd";
import BackOfficeTableRow from "./components/BackOfficeTableRow";

import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

import "./BackOffice.scss";

const Text = Typography;
const MenuItem = Menu.Item;
const { Search } = Input;
const { Option } = Select;

const BackOffice = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector(getArtworkListSelector);

  useEffect(() => {
    dispatch(getArtworkAction());
  }, [dispatch]);

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
          <Search placeholder="Search" allowClear style={{ width: 200 }} />
          <Select style={{ width: 200 }} placeholder="Status">
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
        {loading ? (
          <Skeleton active />
        ) : (
          data?.items?.map((item) => {
            return (
              <BackOfficeTableRow
                firstName={item?.artistName}
                submitDate={item?.createdDate}
                status={item?.submissionStatus}
                id={item?.id}
                nationality={item?.currentLocation}
                image={item?.artworkMainPhoto}
              />
            );
          })
        )}
      </Row>
    </Row>
  );
};

export default BackOffice;
