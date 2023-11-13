import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import styled from "styled-components";

export const AppOuterLayout = styled(Layout)`
  width: 100%;
  min-height: 100vh;
  padding: 0;
`;

export const AuthWrapper = styled(Layout)`
  background-color: rgba(0, 82, 204, 0.05);
  width: 100%;
  min-height: 100vh;
  flex-wrap: wrap;
  padding: 0;
  text-align: center;
`;

export const AppInnerLayout = styled(Layout)`
  width: 100%;
  height: 100vh;
`;

export const AppOuterContent = styled(Content)`
  flex: 1 1 auto;
  overflow: auto;
  background: #fff;
  width: 100%;
  height: 100vh;
`;
