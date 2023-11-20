import styled from "styled-components";
import { Button } from "antd";
import Sider from "antd/es/layout/Sider";

export const SidebarSider = styled(Sider)`
  & > div {
    border-right-color: #fff;
    background-color: #fff;
    border-right-width: 1px;
    border-right-style: solid;
    min-height: 828px;
    width: 314px;
    display: flex;
    flex-direction: column;
  }
  & .ant-layout-sider-children {
    max-height: 100vh;
    border-radius: 16px;
  }
`;

export const InnerSidebar = styled.div`
  margin: 0px 32px 32px;
  margin-top: 20px;
  flex: 1 1 auto;
  overflow: hidden;
`;

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  margin: 40px 0px 16px;
  span {
    color: var(--gray-g-100, #8f92a1);
    font-feature-settings: "clig" off, "liga" off;
    /* Bold/Label */
    font-family: DM Sans;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 166.667% */
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  svg {
    width: 16px;
    height: 16px;
    fill: var(--gray-g-100, #8f92a1);
  }
`;

export const UserSidebar = styled.div`
  flex: 1 1 auto;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .ant-col {
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      width: 102px;
      color: var(--black-b-100, #171717);
      font-family: DM Sans;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px; /* 171.429% */
      letter-spacing: -0.2px;
      margin-right: 10px;
    }
    .ant-avatar {
      width: 36px;
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
      .ant-avatar-string {
        color: var(--white-w-100, #fff);
        font-size: 48px;
        font-weight: 700;
      }
    }
  }
  .ant-col {
    label {
      width: 48px;
      color: var(--gray-g-100, #8f92a1);
      text-align: right;
      font-family: DM Sans;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px; /* 166.667% */
      letter-spacing: -0.2px;
    }
  }
`;

export const ActiveDotSign = styled.div`
  width: 8px;
  height: 8px;
  flex-shrink: 0;
  color: #00875a;
  background-color: #00875a;
  border-radius: 50%;
`;

export const UserGroups = styled.div`
  width: 250px;
  height: 40px;
  .ant-row {
    border-radius: 16px;
    background: var(--white-w-100, #fff);
    padding: 8px 20px 8px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    label {
      color: var(--black-b-100, #171717);
      font-family: DM Sans;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px; /* 171.429% */
      letter-spacing: -0.2px;
    }
  }
`;

export const UserSidebarBottom = styled.div`
  flex: 0 0 auto;
`;

export const AddNewMessageBtn = styled(Button)`
  display: flex;
  width: 250px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background: var(--gray-g-05, rgba(143, 146, 161, 0.05));
  margin: 0px 32px 32px;
  &.ant-btn {
    color: var(--black-b-100, #171717);
    font-family: DM Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 171.429% */
    letter-spacing: -0.2px;
    padding: 8px 64px;
    border: none;
  }
`;
