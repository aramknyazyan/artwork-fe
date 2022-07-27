import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getSignedURL } from "../../../redux/action";
import { getSignedURLSelector } from "../../../redux/selector/selector";

import { Form, Typography, Upload } from "antd";

import "./Photos.scss";

const { Text } = Typography;
const { Item } = Form;

const Photos = ({ name, itemKey, setImages, images }) => {
  const [fileList, setFileList] = useState([]);

  const dispatch = useDispatch();
  const signedURL = useSelector(getSignedURLSelector);

  useEffect(() => {
    dispatch(getSignedURL());
  }, [dispatch]);

  useEffect(() => {
    if (signedURL[0] && itemKey === "artworkMainPhoto") {
      setImages({
        ...images,
        artworkMainPhoto: {
          name: signedURL[0]?.filename,
          url: signedURL[0]?.url,
        },
      });
    } else if (signedURL[1] && itemKey === "artworkInSitu") {
      setImages({
        ...images,
        artworkInSitu: { name: signedURL[1]?.filename, url: signedURL[0]?.url },
      });
    }
  }, [dispatch, signedURL, name]); // eslint-disable-line

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const onChangeUpload = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  const dummyRequest = () => {
    return false;
  };

  return (
    <div className="form-item-upload">
      <Text className="input-title">
        {name} <span className="red-asterisk">*</span>
      </Text>
      <Item
        name={itemKey}
        valuePropName="fileList"
        getValueFromEvent={normFile}
        rules={[
          {
            required: true,
            message: "Please upload image!",
          },
        ]}
      >
        <Upload
          action={dummyRequest}
          listType="picture-card"
          fileList={fileList}
          onChange={onChangeUpload}
          onPreview={onPreview}
        >
          {fileList.length < 1 && "+ Upload"}
        </Upload>
      </Item>
    </div>
  );
};

export default Photos;
