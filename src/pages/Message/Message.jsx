import React from "react";
import {
  ChatContent,
  MessageInnerLayout,
  MessageMainWrapper,
  MessageOuterLayout,
} from "./Message.style";
import Sidebar from "../../components/message/Sidebar";
import ChatHeader from "../../components/message/ChatHeader";
import Chat from "../../components/message/Chat";

const Message = () => {
  return (
    <MessageOuterLayout>
      <MessageMainWrapper>
        <Sidebar />
        <MessageInnerLayout>
          <ChatHeader />
          <ChatContent>
            <Chat />
          </ChatContent>
        </MessageInnerLayout>
      </MessageMainWrapper>
    </MessageOuterLayout>
  );
};

export default Message;
