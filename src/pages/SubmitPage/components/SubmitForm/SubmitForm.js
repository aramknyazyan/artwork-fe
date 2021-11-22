import React, { useState } from "react";
import "antd/dist/antd.css";
import Text from "antd/lib/typography/Text";
import {
  Form,
  Input,
  Button,
  Radio,
  Row,
  Popover,
  Col,
  Space,
  Upload,
  Select,
} from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import "./SubmitForm.scss";

const SubmitForm = () => {
  //*phone or mail section show
  const [phoneShow, setPhoneShow] = useState("none"); //show phone number section
  const [mailShow, setMailShow] = useState("none"); //show mail section
  const radioValue = (e) => {
    if (e.target.value === 1) {
      setPhoneShow("phoneShow");
      setMailShow("none");
    } else if (e.target.value === 2) {
      setMailShow("mailShow");
      setPhoneShow("none");
    }
  };

  //images upload code
  const [fileList, setFileList] = useState([]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    if (newFileList[0]?.status !== undefined) {
      console.log("1. ka nkar 1", newFileList[0]?.status);
    } else if (newFileList[0]?.status === undefined) {
      console.log("1. chka nkar 0", newFileList[0]?.status);
    }
  };
  const [fileListTwo, setFileListTwo] = useState([]);
  const onChangeTwo = ({ fileList: newFileListTwo }) => {
    setFileListTwo(newFileListTwo);
    if (newFileListTwo[0]?.status !== undefined) {
      console.log("2. ka nkar 1", newFileListTwo[0]?.status);
    } else if (newFileListTwo[0]?.status === undefined) {
      console.log("2. chka nkar 0", newFileListTwo[0]?.status);
    }
  };
  const [fileListThree, setFileListThree] = useState([]);
  const onChangeThree = ({ fileList: newFileListThree }) => {
    setFileListThree(newFileListThree);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  //submit button code
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const Item = Form.Item;
  const { TextArea } = Input;
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="formStyle"
    >
      <Row className="inputs">
        <Col className="inputColumn">
          <Text className="smallText">
            First Name <span className="redAsterisk">*</span>
          </Text>
          <Item
            name="first_name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input className="inputStyleMedium" placeholder="First Name" />
          </Item>
        </Col>
        <Col className="inputColumn">
          <Text className="smallText">
            Last Name <span className="redAsterisk">*</span>
          </Text>
          <Item
            name="last_name"
            rules={[
              {
                required: true,
                message: "Please input your last name!",
              },
            ]}
          >
            <Input className="inputStyleMedium" placeholder="Last Name" />
          </Item>
        </Col>
      </Row>

      <Row className="input">
        <Col className="inputColumn">
          <Text className="smallText">
            Nationality <span className="redAsterisk">*</span>
          </Text>
          <Item
            name="nationality"
            rules={[
              {
                required: true,
                message: "Please input your nationality!",
              },
            ]}
          >
            <Input className="inputStyleBig" placeholder="nationality" />
          </Item>
        </Col>
      </Row>

      <Row className="input">
        <Col className="inputColumn">
          <Text className="smallText">
            Preferred Communication Method{" "}
            <span className="redAsterisk">*</span>
          </Text>
          <Col>
            <Radio.Group
              name="Communication"
              style={{ marginTop: "10px" }}
              onChange={radioValue}
            >
              <Radio value={1}>Mobile Number</Radio>
              <Popover
                content={
                  "This is for Whatsup or similar apps to contact with you."
                }
                trigger="hover"
              >
                <Button className="popover">
                  <InfoCircleOutlined />
                </Button>
              </Popover>
              <Radio value={2}>Email Address</Radio>
            </Radio.Group>
          </Col>
        </Col>
      </Row>

      <Row className={phoneShow}>
        <Col className="inputColumn">
          <Text className="smallText">
            Moblie Number <span className="redAsterisk">*</span>
          </Text>
          <Item
            name="phone_number"
            rules={[
              {
                required: true,
                message: "Please input your moblie number!",
              },
            ]}
          >
            <Input className="inputStyleMedium" placeholder="Moblie Number" />
          </Item>
        </Col>
        <Col className="inputColumn">
          <Text className="smallText">
            Preferred Messanger <span className="redAsterisk">*</span>
          </Text>
          <Item
            name="preferred_messanger"
            rules={[
              {
                required: true,
                message: "Please input your preferred messanger!",
              },
            ]}
          >
            <Input
              className="inputStyleMedium"
              placeholder="Preferred Messanger"
            />
          </Item>
        </Col>
      </Row>

      <Row className={mailShow}>
        <Col className="inputColumn">
          <Text className="smallText">
            Email Address <span className="redAsterisk">*</span>
          </Text>
          <Item
            name="mail"
            rules={[
              {
                required: true,
                message: "Please input your email address!",
              },
            ]}
          >
            <Input className="inputSizeBig" placeholder="Email Address" />
          </Item>
        </Col>
      </Row>

      <Row className="input">
        <Col className="inputColumn">
          <Text className="bigText">Artwork’s Details:</Text>
          <Text className="smallText" style={{ marginTop: "36px" }}>
            Artwork Photos <span className="redAsterisk">*</span>
          </Text>
          <Space direction="vertical" style={{ textAlign: "start" }}>
            <Text>
              - Main image: cropped photograph of the artwork - Image 2: the
              work in situ (required)
            </Text>
            <Text>
              - Image 3, 4, 5: details of the artwork, the signature (optional)
            </Text>
            <Text>
              - If possible, please upload images as JPG or JPEG files.
            </Text>
            <Text>- The size of the file needs to be less than 10 MB.</Text>
          </Space>
        </Col>
      </Row>

      <Row className="inputs">
        <Col className="inputColumn">
          <Text className="smallText">
            Main Photo <span className="redAsterisk">*</span>
          </Text>
          <Upload
            action=""
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
            onPreview={onPreview}
          >
            {fileList.length < 1 && "+ Upload"}
          </Upload>
        </Col>

        <Col className="inputColumn">
          <Text className="smallText">
            Photo in situ <span className="redAsterisk">*</span>
          </Text>
          <Upload
            action=""
            listType="picture-card"
            fileList={fileListTwo}
            onChange={onChangeTwo}
            onPreview={onPreview}
          >
            {fileListTwo.length < 1 && "+ Upload"}
          </Upload>
        </Col>

        <Col className="inputColumn">
          <Upload
            action=""
            listType="picture-card"
            fileList={fileListThree}
            onChange={onChangeThree}
            onPreview={onPreview}
          >
            {fileListThree.length < 1 && "+ Upload"}
          </Upload>
        </Col>
      </Row>

      <Row className="input">
        <Col className="inputColumn">
          <Text className="smallText">
            Artwork Title <span className="optional">(optional)</span>
          </Text>
        </Col>
        <Item
          name="artwork_title"
          rules={[
            {
              required: false,
              message: "Please input your email Artwork title!",
            },
          ]}
        >
          <Input className="inputSizeBig" placeholder="Artwork Title" />
        </Item>
      </Row>

      <Row className="inputs">
        <Col className="inputColumn">
          <Text className="smallText">
            Material <span className="redAsterisk">*</span>
          </Text>
          <Item
            name="material"
            rules={[
              {
                required: true,
                message: "Please input material!",
              },
            ]}
          >
            <Input className="inputStyleMedium" placeholder="Material" />
          </Item>
        </Col>
        <Col className="inputColumn">
          <Text className="smallText">
            Support <span className="redAsterisk">*</span>
          </Text>
          <Item
            name="support"
            rules={[
              {
                required: true,
                message: "Please input Support!",
              },
            ]}
          >
            <Input className="inputStyleMedium" placeholder="Support" />
          </Item>
        </Col>
      </Row>

      <Row className="inputs">
        <Col className="inputColumn">
          <Text className="smallText">
            Height <span className="redAsterisk">*</span>
          </Text>
          <Col className="selectInput">
            <Item
              name="height"
              rules={[
                {
                  required: true,
                  message: "Please input height!",
                },
              ]}
            >
              <Input className="inputSizeSmall" placeholder="Height" />
            </Item>
            <Select
              defaultValue="cm"
              style={{ width: "73px", borderTopRightRadius: "0px" }}
              name="height_cm"
              rules={[
                {
                  required: true,
                  message: "Please input height!",
                },
              ]}
            >
              <Select.Option value="cm">cm</Select.Option>
              <Select.Option value="mm">mm</Select.Option>
              <Select.Option value="inch">inch</Select.Option>
            </Select>
          </Col>
        </Col>

        <Col className="inputColumn">
          <Text className="smallText">
            Width <span className="redAsterisk">*</span>
          </Text>
          <Col className="selectInput">
            <Item
              name="width"
              rules={[
                {
                  required: true,
                  message: "Please input width!",
                },
              ]}
            >
              <Input className="inputSizeSmall" placeholder="width" />
            </Item>
            <Select
              defaultValue="cm"
              style={{ width: "73px", borderTopRightRadius: "0px" }}
            >
              <Select.Option value="cm">cm</Select.Option>
              <Select.Option value="mm">mm</Select.Option>
              <Select.Option value="inch">inch</Select.Option>
            </Select>
          </Col>
        </Col>

        <Col className="inputColumn">
          <Text className="smallText">
            Depth <span className="redAsterisk">*</span>
          </Text>
          <Col className="selectInput">
            <Item
              name="depth"
              rules={[
                {
                  required: true,
                  message: "Please input depth!",
                },
              ]}
            >
              <Input className="inputSizeSmall" placeholder="depth" />
            </Item>
            <Select
              defaultValue="cm"
              style={{ width: "73px", borderTopRightRadius: "0px" }}
            >
              <Select.Option value="cm">cm</Select.Option>
              <Select.Option value="mm">mm</Select.Option>
              <Select.Option value="inch">inch</Select.Option>
            </Select>
          </Col>
        </Col>
      </Row>

      <Row className="inputs">
        <Col className="inputColumn">
          <Text className="smallText">
            Artwork Current Location <span className="redAsterisk">*</span>
          </Text>
          <Item
            name="location"
            rules={[
              {
                required: true,
                message: "Please input Artwork location!",
              },
            ]}
          >
            <Input
              className="inputStyleMedium"
              placeholder="Artwork Location"
            />
          </Item>
        </Col>
        <Col className="inputColumn">
          <Text className="smallText">
            Year of Creation <span className="redAsterisk">*</span>
          </Text>
          <Item
            name="year_of_creation"
            rules={[
              {
                required: true,
                message: "Please input Support!",
              },
            ]}
          >
            <Input
              className="inputStyleMedium"
              placeholder="Year of Creation"
            />
          </Item>
        </Col>
      </Row>

      <Row className="input">
        <Col className="inputColumn">
          <Text className="smallText">
            In what other online sales channels is this artwork presented?{" "}
            <span className="optional">(optional)</span>
          </Text>
          <TextArea rows={4}></TextArea>
        </Col>
      </Row>

      <Row className="input">
        <Col className="button">
          <Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
            className="submitButton"
          >
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Submit
            </Button>
          </Item>
        </Col>
        <Text className="smallText">
          <span className="lightText">
            * By clicking the button above you show acceptance of our{" "}
          </span>
          Terms of Service
        </Text>
      </Row>
    </Form>
  );
};

export default SubmitForm;
