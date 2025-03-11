import React from "react";
// ANTD components
import { Select } from "antd";

const Option = Select;

const CurrencySelect = (
  <Select defaultValue="USD" className="select-before">
    <Option value="USD">USD</Option>
    <Option value="EUR">EUR</Option>
  </Select>
);

export default CurrencySelect;
