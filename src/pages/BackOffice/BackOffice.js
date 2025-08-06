import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getArtworkAction } from "../../redux/action";
import { getArtworkListSelector } from "../../redux/selector/selector";
import {
  backofficeDataMapping,
  artworkDataMapping,
} from "../../shared/mapping/backofficeDataMap";

import { Row, Menu, Input, Typography, Select, Table } from "antd";
import { statusSelectConstants } from "../../shared/constants/statusSelect.constants";
import { columns } from "../../shared/constants/tableHeadItems";

import "./BackOffice.scss";

const Text = Typography;
const MenuItem = Menu.Item;
const { Search } = Input;
const { Option } = Select;

const BackOffice = () => {
  const [backofficeData, setBackofficeData] = useState([]);
  const [current, setCurrent] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, loading } = useSelector(getArtworkListSelector);

  useEffect(() => {
    dispatch(getArtworkAction(searchParams));
  }, [dispatch, searchParams]);

  useEffect(() => {
    setBackofficeData(data?.items);
    artworkDataMapping(data?.items);
  }, [data]);

  useEffect(() => {
    setSearchParams({});
  }, [setSearchParams]);

  const menuChangeHandler = (e) => {
    if (e.key === "") {
      var params = Object.fromEntries(new URLSearchParams(searchParams));
      delete params.status;
      setSearchParams(params);
    } else {
      setSearchParams({
        ...Object.fromEntries(new URLSearchParams(searchParams)),
        status: e.key,
      });
    }

    setCurrent(e.key);
  };

  const selectChangeHandler = (key) => {
    if (key === undefined) {
      var params = Object.fromEntries(new URLSearchParams(searchParams));
      delete params.submissionStatus;
      setSearchParams(params);
    } else {
      setSearchParams({
        ...Object.fromEntries(new URLSearchParams(searchParams)),
        submissionStatus: key,
      });
    }
  };

  const onSearch = (e) => {
    if (!e.length) {
      var params = Object.fromEntries(new URLSearchParams(searchParams));
      delete params.keyword;
      setSearchParams(params);
    } else {
      setSearchParams({
        ...Object.fromEntries(new URLSearchParams(searchParams)),
        keyword: e,
      });
    }
  };

  return (
    <Row className="backoffice-page">
      <Row className="backoffice-header">
        <Menu
          className="backoffice-header-menu"
          selectedKeys={current}
          onClick={menuChangeHandler}
        >
          <MenuItem key="">Backoffice</MenuItem>
          <MenuItem key="Submitted">Submissions</MenuItem>
          <MenuItem key="Archived">Archive</MenuItem>
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
            style={{ width: 200 }}
            onSearch={onSearch}
          />
          <Select
            style={{ width: 200 }}
            placeholder="Status"
            onChange={selectChangeHandler}
            allowClear
          >
            {statusSelectConstants.map((item) => {
              return (
                <Option value={item} key={item}>
                  {item}
                </Option>
              );
            })}
          </Select>
        </Row>
      </Row>

      <Row className="backoffice">
        <Table
          columns={columns}
          dataSource={data ? backofficeDataMapping(backofficeData) : ""}
          loading={loading}
          pagination={{
            defaultPageSize: 10,
            showSizeChanger: true,
            pageSizeOptions: ["10", "20", "30"],
          }}
          className="tableANTD"
          onRow={(record) => ({
            onClick: () => {
              navigate(`/backoffice/${record.id}`);
            },
          })}
        />
      </Row>
    </Row>
  );
};

export default BackOffice;
