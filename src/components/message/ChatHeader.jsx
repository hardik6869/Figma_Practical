import React from "react";
import {
  ChatHeaderWrapper,
  RightSideHeader,
  UserChatHeader,
} from "./ChatHeader.style";
import { Avatar, Row, Col } from "antd";
import Images from "../../Global/Images";
import Phone from "../../assets/Phone";
import Camera from "../../assets/Camera";
import Ellipsis from "../../assets/Ellipsis";

const ChatHeader = () => {
  return (
    <ChatHeaderWrapper>
      <UserChatHeader>
        <Row>
          <Avatar src={Images.Avatar1} size="large" />
          <Col>
            <label>Linh Nguyen</label>
            <p>Active Now</p>
          </Col>
        </Row>
      </UserChatHeader>
      <RightSideHeader>
        <Phone />
        <Camera />
        <Ellipsis />
      </RightSideHeader>
    </ChatHeaderWrapper>
  );
};

export default ChatHeader;
