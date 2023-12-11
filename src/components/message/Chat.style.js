import styled from "styled-components";
import { Content } from "antd/es/layout/layout";

export const MainChatWrapper = styled(Content)`
  width: 100%;
  padding: 24px 24px 32px;
  height: 600px;
  overflow-y: scroll;
`;

export const DateLabel = styled.div`
  color: var(--gray-g-100, #8f92a1);
  text-align: center;
  font-family: DM Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 166.667% */
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const ChatFrom = styled.div`
  display: flex;
  align-items: center;
  .ant-avatar {
    padding: 0;
    margin: 0;
  }
  span {
    margin-right: 34px;
  }
`;

export const ChatMessage = styled.div`
  margin: 8px;
  height: 48px;
  border-radius: 16px;
  background: var(--gray-g-05, rgba(143, 146, 161, 0.05));
  padding: 14px 16px;
  margin-right: 16px;
  label {
    color: var(--black-b-100, #171717);
    font-feature-settings: "clig" off, "liga" off;
    /* Regular/Title Large */
    font-family: DM Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    letter-spacing: -0.4px;
  }
`;

export const ChatTo = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  position: relative;
  padding: 14px 16px;
  & .ant-image {
    width: 320px;
    height: 240px;
  }
  & .ant-avatar {
    position: absolute;
    fill: "#171717";
    background: #fff;
    top: 20px;
    right: 20px;
  }
`;

export const ChatField = styled.div`
  flex: 0 0 auto;
  padding: 12px 24px 12px 24px;
`;

export const ChatInputField = styled.div`
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  padding: 12px 24px 12px 16px;
  background: rgba(143, 146, 161, 0.05);
  & .ant-input {
    height: 48px;
    border: none;
    background: rgba(143, 146, 161, 0);
    color: var(--gray-g-100, #8f92a1);
    font-family: DM Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
  & .ant-avatar {
    margin-right: 12px;
    width: 48px;
    height: 48px;
    padding: 4px;
    flex-shrink: 0;
  }
  svg {
    height: 24px;
    width: 24px;
    margin: 12px;
  }
`;
