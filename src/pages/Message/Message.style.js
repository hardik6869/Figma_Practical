import styled from "styled-components";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";

export const MessageOuterLayout = styled.div`
  padding: 48px 48px 48px 47px;
  border-radius: 16px;
  background: var(--gray-g-05, rgba(143, 146, 161, 0.05));
`;

export const MessageMainWrapper = styled(Layout)`
  width: 100%;
  height: 828px;
  border-radius: 16px;
  flex: 1 1 auto;
  overflow: hidden;
  .ant-layout-sider {
    border-radius: 16px 0 0 16px;
    background-color: #fff;
  }
`;

export const MessageInnerLayout = styled(Layout)`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #fff;
`;

export const ChatContent = styled(Content)`
  flex: 1 1 auto;
  overflow-x: hidden;
  width: 100%;
  height: 100vh;
`;
