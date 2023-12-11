import React from "react";
import {
  ChatField,
  ChatFrom,
  ChatInputField,
  ChatMessage,
  ChatTo,
  DateLabel,
  MainChatWrapper,
} from "./Chat.style";
import Images from "../../Global/Images";
import { Avatar, Image, Input } from "antd";
import Download from "../../assets/Download";
import Emoji from "../../assets/Emoji";
import Attachments from "../../assets/Attachments";

const Chat = () => {
  const Message = [
    {
      id: 1,
      FromImage: Images.Avatar1,
      from: "Hello Linh!",
    },
    {
      id: 2,
      FromImage: "",
      from: "Can you send me preview image of reading app project?",
    },
    {
      id: 3,
      FromImage: "",
      from: "",
      to: "Okay bro! Wait a minute…",
    },
    {
      id: 4,
      FromImage: "",
      from: "",
      to: "Here you are bro. Please check it",
    },
    {
      id: 5,
      FromImage: "",
      from: "",
      to: "",
      SendImage: Images.SendImages,
    },
  ];

  return (
    <>
      <MainChatWrapper>
        <DateLabel>09:24, Monday</DateLabel>

        {Message.map((message) => (
          <>
            {message.from ? (
              <ChatFrom>
                {message.FromImage ? (
                  <Avatar src={message.FromImage} size={40} />
                ) : (
                  <span> </span>
                )}

                <ChatMessage>
                  <label> {message.from} </label>
                </ChatMessage>
              </ChatFrom>
            ) : (
              <ChatTo>
                {message.to && (
                  <ChatMessage>
                    <label> {message.to}</label>
                  </ChatMessage>
                )}
                {message.SendImage && (
                  <>
                    <Image src={message.SendImage} preview={false} />
                    <Avatar src={<Download />} shape="square" />
                  </>
                )}
              </ChatTo>
            )}
          </>
        ))}
      </MainChatWrapper>
      <ChatField>
        <ChatInputField>
          <Avatar src={Images.Avatar1} />
          <Input placeholder="Write a comment…" />
          <Emoji />
          <Attachments />
        </ChatInputField>
      </ChatField>
    </>
  );
};

export default Chat;
