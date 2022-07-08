import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getSignedURL, postArtworkAction } from "../../redux/action";
import { getSignedURLSelector } from "../../redux/selector/selector";

import {
  Col,
  Form,
  Input,
  Button,
  Typography,
  Radio,
  Tooltip,
  Upload,
  Select,
  message,
} from "antd";

import { materialConstant } from "../../shared/constants/postArtwork.constants";

import { FiInfo } from "react-icons/fi";
import "./SubmitWork.scss";

const { Text } = Typography;
const { Option } = Select;
const { Item } = Form;
const FormItem = Form.Item;
const { TextArea, Group } = Input;

const SubmitWork = () => {
  const [value, setValue] = useState();
  const [showNumber, setShowNumber] = useState("none");
  const [showEmail, setShowEmail] = useState("none");
  const [numberRequared, setNumberRequared] = useState();
  const [emailRequared, setEmailRequared] = useState();
  const [fileList, setFileList] = useState([]);
  const [fileListTwo, setFileListTwo] = useState([]);

  const dispatch = useDispatch();
  const signedURL = useSelector(getSignedURLSelector);

  console.log(signedURL);

  useEffect(() => {
    dispatch(getSignedURL());
  }, [dispatch]);

  const onFinish = (values) => {
    dispatch(
      postArtworkAction({
        ...values,
        presentedChannels: Object.values(values.presentedChannels),
        width: Number(values.width),
        depth: Number(values.depth),
        height: Number(values.height),
      })
    );
    message.success("Submit success!");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    console.log({
      ...errorInfo.values,
      presentedChannels: Object.values(errorInfo.values.presentedChannels),
      width: Number(errorInfo.values.width),
    });

    message.error("Submit failed!");
  };

  const onChange = (e) => {
    setValue(e.target.value);
    if (e.target.value === 1) {
      setShowNumber("display");
      setShowEmail("none");
      setNumberRequared(true);
      setEmailRequared(false);
    } else if (e.target.value === 2) {
      setShowNumber("none");
      setShowEmail("display");
      setNumberRequared(false);
      setEmailRequared(true);
    }
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const onChangeUpload = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const normFileTwo = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileListTwo;
  };

  const onChangeUploadTwo = ({ fileList: newFileListTwo }) => {
    setFileListTwo(newFileListTwo);
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

  return (
    <Col className="submit-work">
      <Form
        name="submit-work"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="submit-work-form"
      >
        <Input.Group className="group-inputs">
          <Text className="form-section-title">Artist’s Details:</Text>
          <Col className="form-items">
            <Col className="form-item-input-col-small">
              <Text className="input-title">
                First Name <span className="red-asterisk">*</span>
              </Text>
              <FormItem
                name={["artistInfo", "firstName"]}
                rules={[
                  { required: true, message: "Please input your first name!" },
                ]}
              >
                <Input placeholder="First Name" />
              </FormItem>
            </Col>

            <Col className="form-item-input-col-small">
              <Text className="input-title">
                Last Name <span className="red-asterisk">*</span>
              </Text>
              <FormItem
                name={["artistInfo", "lastName"]}
                rules={[
                  { required: true, message: "Please input your last name!" },
                ]}
              >
                <Input placeholder="Last Name" />
              </FormItem>
            </Col>
          </Col>

          <Col className="form-items">
            <Col className="form-item-input-col-big">
              <Text className="input-title">
                Nationality <span className="red-asterisk">*</span>
              </Text>
              <FormItem
                name={["artistInfo", "nationality"]}
                rules={[
                  { required: true, message: "Please input your nationality!" },
                ]}
              >
                <Input placeholder="Nationality" />
              </FormItem>
            </Col>
          </Col>

          <Col className="form-items">
            <Col className="form-item-input-col-big">
              <Text className="input-title">
                Preferred Communication Method{" "}
                <span className="red-asterisk">*</span>
              </Text>
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>
                  Mobile Number
                  <Tooltip title="This is for Whatsup or similar apps to contact with you.">
                    <FiInfo size={16} className="tooltip-icon" />
                  </Tooltip>
                </Radio>
                <Radio value={2}>Email Address</Radio>
              </Radio.Group>

              <Col className={showNumber}>
                <Group className="group-inputs">
                  <Col className="form-items">
                    <Col className="form-item-input-col-small">
                      <Text className="input-title">
                        Moblie Number <span className="red-asterisk">*</span>
                      </Text>
                      <FormItem
                        name={["artistInfo", "mobile", "phone"]}
                        rules={[
                          {
                            required: numberRequared,
                            message: "Please input your mobile number!",
                          },
                        ]}
                      >
                        <Input placeholder="Mobile Number" />
                      </FormItem>
                    </Col>

                    <Col className="form-item-input-col-small">
                      <Text className="input-title">
                        Preferred Messanger
                        <span className="red-asterisk"> *</span>
                      </Text>
                      <FormItem
                        name={["artistInfo", "mobile", "prefferedMessenger"]}
                        rules={[
                          {
                            required: numberRequared,
                            message: "Please input your preferred messanger!",
                          },
                        ]}
                      >
                        <Input placeholder="Preferred Messanger" />
                      </FormItem>
                    </Col>
                  </Col>
                </Group>
              </Col>

              <Col className={showEmail}>
                <Col className="form-items">
                  <Col className="form-item-input-col-big">
                    <Text className="input-title">
                      Email Address <span className="red-asterisk"> *</span>
                    </Text>
                    <FormItem
                      name={["artistInfo", "email"]}
                      rules={[
                        {
                          required: emailRequared,
                          message: "Please input your email address!",
                        },
                      ]}
                    >
                      <Input placeholder="Email Address" />
                    </FormItem>
                  </Col>
                </Col>
              </Col>
            </Col>
          </Col>
        </Input.Group>

        <Text className="form-section-title">Artwork’s Details:</Text>
        <Text className="input-title">
          Artwork Photos <span className="red-asterisk">*</span>
        </Text>
        <Text className="photo-detail-text">
          - Main image: cropped photograph of the artwork - Image 2: the work in
          situ (required)
        </Text>
        <Text className="photo-detail-text">
          - Image 3, 4, 5: details of the artwork, the signature (optional)
        </Text>
        <Text className="photo-detail-text">
          - If possible, please upload images as JPG or JPEG files.
        </Text>
        <Text className="photo-detail-text">
          - The size of the file needs to be less than 10 MB.
        </Text>

        <Col className="form-items-upload-cols">
          <Col className="form-item-upload">
            <Text className="input-title">
              Main Photo <span className="red-asterisk">*</span>
            </Text>
            <Item
              name="artworkMainPhoto"
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
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onChange={onChangeUpload}
                onPreview={onPreview}
              >
                {fileList.length < 1 && "+ Upload"}
              </Upload>
            </Item>
          </Col>

          <Col className="form-item-upload">
            <Text className="input-title">
              Photo in situ <span className="red-asterisk">*</span>
            </Text>
            <Item
              name="artworkInSitu"
              valuePropName="fileList"
              getValueFromEvent={normFileTwo}
            >
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileListTwo}
                onChange={onChangeUploadTwo}
                onPreview={onPreview}
              >
                {fileListTwo.length < 1 && "+ Upload"}
              </Upload>
            </Item>
          </Col>
        </Col>

        <Col className="form-items">
          <Col className="form-item-input-col-big">
            <Text className="input-title">Artwork Title (optional)</Text>
            <FormItem name="title">
              <Input placeholder="Artwork Title" />
            </FormItem>
          </Col>
        </Col>

        <Col className="form-items">
          <Col className="form-item-input-col-small">
            <Text className="input-title">
              Material <span className="red-asterisk">*</span>
            </Text>
            <FormItem
              name="material"
              rules={[{ required: true, message: "Please select material!" }]}
            >
              <Select placeholder="Material">
                {materialConstant.map((item, index) => {
                  return (
                    <Option value="acril" key={index}>
                      {item}
                    </Option>
                  );
                })}
              </Select>
            </FormItem>
          </Col>

          <Col className="form-item-input-col-small">
            <Text className="input-title">
              Support <span className="red-asterisk">*</span>
            </Text>
            <FormItem
              name="support"
              rules={[{ required: true, message: "Please select support!" }]}
            >
              <Select placeholder="Support">
                <Option value="canvas">Canvas</Option>
                <Option value="Canvass">Canvass</Option>
                <Option value="Canvass">Canvass</Option>
              </Select>
            </FormItem>
          </Col>
        </Col>

        <Col className="form-items">
          <Col className="form-item-input-col-smaller">
            <Text className="input-title">
              Height <span className="red-asterisk">*</span>
            </Text>
            <FormItem>
              <Group>
                <FormItem
                  name="height"
                  noStyle
                  rules={[
                    { required: true, message: "Please input image height!" },
                  ]}
                >
                  <Input
                    type="number"
                    placeholder="Height"
                    className="small-imput"
                  />
                </FormItem>

                <FormItem
                  noStyle
                  rules={[
                    { required: true, message: "measurement is required" },
                  ]}
                >
                  <Select placeholder="cm" className="small-select">
                    <Option value="cm">cm</Option>
                    <Option value="mm">mm</Option>
                    <Option value="inch">inch</Option>
                  </Select>
                </FormItem>
              </Group>
            </FormItem>
          </Col>

          <Col className="form-item-input-col-smaller">
            <Text className="input-title">
              Width <span className="red-asterisk">*</span>
            </Text>
            <FormItem>
              <Group>
                <FormItem
                  name="width"
                  noStyle
                  rules={[
                    { required: true, message: "Please input image width!" },
                  ]}
                >
                  <Input
                    type="number"
                    placeholder="Width"
                    className="small-imput"
                  />
                </FormItem>

                <FormItem
                  noStyle
                  rules={[
                    { required: true, message: "Measurement is required" },
                  ]}
                >
                  <Select placeholder="cm" className="small-select">
                    <Option value="cm">cm</Option>
                    <Option value="mm">mm</Option>
                    <Option value="inch">inch</Option>
                  </Select>
                </FormItem>
              </Group>
            </FormItem>
          </Col>

          <Col className="form-item-input-col-smaller">
            <Text className="input-title">
              Depth <span className="red-asterisk">*</span>
            </Text>
            <FormItem>
              <Group>
                <FormItem
                  name="depth"
                  noStyle
                  rules={[
                    { required: true, message: "Please input image depth!" },
                  ]}
                >
                  <Input
                    type="number"
                    placeholder="Depth"
                    className="small-imput"
                  />
                </FormItem>

                <FormItem
                  noStyle
                  rules={[
                    { required: true, message: "measurement is required" },
                  ]}
                >
                  <Select placeholder="cm" className="small-select">
                    <Option value="cm">cm</Option>
                    <Option value="mm">mm</Option>
                    <Option value="inch">inch</Option>
                  </Select>
                </FormItem>
              </Group>
            </FormItem>
          </Col>
        </Col>

        <Col className="form-items">
          <Col className="form-item-input-col-small">
            <Text className="input-title">
              Artwork Location <span className="red-asterisk">*</span>
            </Text>
            <FormItem
              name="currentLocation"
              rules={[{ required: true, message: "Please select country!" }]}
            >
              <Select placeholder="Location">
                <Option value="Armenia">Armenia</Option>
                <Option value="Russia">Russia</Option>
              </Select>
            </FormItem>
          </Col>

          <Col className="form-item-input-col-small">
            <Text className="input-title">
              Year of Creation <span className="red-asterisk">*</span>
            </Text>
            <FormItem
              name="yearOfCreation"
              rules={[
                { required: true, message: "Please select year of creation!" },
              ]}
            >
              <Select placeholder="Year of Creation">
                <Option value="2021">2021</Option>
                <Option value="2018">2018</Option>
              </Select>
            </FormItem>
          </Col>
        </Col>

        <Col className="form-items">
          <Col className="form-item-input-col-big">
            <Text className="input-title">
              In what other online sales channels is this artwork presented?
              (optional)
            </Text>
            <Group>
              <FormItem name={["presentedChannels", []]} className="text-area">
                <TextArea
                  maxLength={300}
                  placeholder="Artwork Title"
                  className="text-area"
                />
              </FormItem>
            </Group>
          </Col>
        </Col>

        <FormItem wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit Artwork
          </Button>
        </FormItem>
      </Form>
    </Col>
  );
};

export default SubmitWork;
