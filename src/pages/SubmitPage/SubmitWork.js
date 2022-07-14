import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postArtworkAction, putSignedURLAction } from "../../redux/action";
import {
  materialConstants,
  locationConstants,
  supportConstants,
  preferredMessanger,
  creationYear,
} from "../../shared/constants";

import {
  Col,
  Form,
  Input,
  Button,
  Typography,
  Radio,
  Tooltip,
  Select,
  message,
} from "antd";

import Photos from "./components/Photos";

import { FiInfo } from "react-icons/fi";
import "./SubmitWork.scss";

const { Text } = Typography;
const { Option } = Select;
const FormItem = Form.Item;
const { TextArea, Group } = Input;

const SubmitWork = () => {
  const [value, setValue] = useState(1);
  const [required, setRequired] = useState(true);
  const [images, setImages] = useState({
    artworkMainPhoto: { name: "", url: "" },
    artworkInSitu: { name: "", url: "" },
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    await dispatch(
      putSignedURLAction(
        images.artworkMainPhoto.url,
        values.artworkMainPhoto?.[0]
      )
    );

    await dispatch(
      putSignedURLAction(images.artworkInSitu.url, values.artworkInSitu?.[0])
    );

    await dispatch(
      postArtworkAction(
        {
          ...values,
          presentedChannels: Object.values(values.presentedChannels),
          width: Number(values.width),
          depth: Number(values.depth),
          height: Number(values.height),
          yearOfCreation: Number(values.yearOfCreation),
          artworkMainPhoto: images.artworkMainPhoto.name,
          artworkInSitu: images.artworkInSitu.name,
          submissionStatus: "New",
          status: "Submitted",
        },
        (status) => {
          if (status.type === "success") {
            navigate("/success");
          } else {
            message.error("Submit failed!");
          }
        }
      )
    );
  };

  const onFinishFailed = () => {
    message.error("Submit failed!");
  };

  const onChange = (e) => {
    setValue(e.target.value);
    setRequired((prev) => !prev);
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
                  { required: true, message: "Please select nationality!" },
                ]}
              >
                <Select placeholder="Nationality" className="select">
                  {locationConstants.map((item, index) => {
                    return (
                      <Option value={item} key={index}>
                        {item}
                      </Option>
                    );
                  })}
                </Select>
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

              <Col className={required ? "display" : "none"}>
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
                            required: required,
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
                        name={["artistInfo", "nationality"]}
                        rules={[
                          {
                            required: true,
                            message: "Please select nationality!",
                          },
                        ]}
                      >
                        <Select
                          placeholder="Preferred Messanger"
                          className="select"
                        >
                          {preferredMessanger.map((item, index) => {
                            return (
                              <Option value={item} key={index}>
                                {item}
                              </Option>
                            );
                          })}
                        </Select>
                      </FormItem>
                    </Col>
                  </Col>
                </Group>
              </Col>

              <Col className={required ? "none" : "display"}>
                <Col className="form-items">
                  <Col className="form-item-input-col-big">
                    <Text className="input-title">
                      Email Address <span className="red-asterisk"> *</span>
                    </Text>
                    <FormItem
                      name={["artistInfo", "email"]}
                      rules={[
                        {
                          required: !required,
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
          <Photos
            name="Main Photo"
            itemKey="artworkMainPhoto"
            setImages={setImages}
            images={images}
          />
          <Photos
            name="Photo in situ"
            itemKey="artworkInSitu"
            setImages={setImages}
            images={images}
          />
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
              <Select placeholder="Material" className="select">
                {materialConstants.map((item, index) => {
                  return (
                    <Option value={item} key={index}>
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
              <Select placeholder="Support" className="select">
                {supportConstants.map((item, index) => {
                  return (
                    <Option value={item} key={index}>
                      {item}
                    </Option>
                  );
                })}
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
              <Select placeholder="Location" className="select">
                {locationConstants.map((item, index) => {
                  return (
                    <Option value={item} key={index}>
                      {item}
                    </Option>
                  );
                })}
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
              <Select placeholder="Year of Creation" className="select">
                {creationYear.map((item, index) => {
                  return (
                    <Option value={item} key={index}>
                      {item}
                    </Option>
                  );
                })}
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
