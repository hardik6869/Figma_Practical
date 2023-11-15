import { Button } from "antd";
import Sider from "antd/es/layout/Sider";
import styled from "styled-components";

export const SidebarSider = styled(Sider)`
  & > div {
    border-right-color: #fff;
    background-color: #fff;
    border-right-width: 1px;
    border-right-style: solid;
    max-height: 100vh;
    width: 250px;
    display: flex;
    flex-direction: column;
  }

  & .ant-layout-sider-children {
    min-height: 100vh;
  }
`;

export const SidebarWrapper = styled.div`
  margin-top: 40px;
  width: 250px;
  height: 100%;
  flex-shrink: 0;
`;

export const CaDasLogo = styled.div`
  flex: 0 0 auto;
  position: relative;
  padding: 38px 108px 38px 24px;
  &.Logo {
    width: 118px;
    height: 24px;
  }
`;

export const SidebarMenu = styled.div`
  margin-top: 20px;
  flex: 1 1 auto;
  overflow: hidden;
  & .ant-menu-item {
    display: flex;
    height: 56px;
    padding: 0 20px;
    border-radius: 0;
    background: transparent;
    color: #8f92a1;
    border: none;
    display: flex;
    align-items: center;
    justify-content: left;

    & a {
      text-decoration: none;
      & .ant-menu-item-selected,
      & .ant-menu-item-active,
      & .ant-menu-item:active {
        color: red;
      }
    }
    & svg {
      display: block;
      margin-right: 16px;
      height: 24px;
      width: auto;
    }
  }
  & .ant-menu-item-selected {
    margin: 0;
    color: var(--blue-b-100, #0052cc);
    border-left: 4px solid #0052cc;
    & svg {
      path {
        fill: var(--blue-b-100, #0052cc);
      }
    }
  }
`;

export const SidebarBottom = styled.div`
  flex: 0 0 auto;
  padding: 40px 24px;
`;

export const Teams = styled.div`
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
`;

export const AddNewTeamBtn = styled(Button)`
  display: flex;
  width: 202px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background: var(--gray-g-05, rgba(143, 146, 161, 0.05));

  &.ant-btn {
    color: var(--black-b-100, #171717);
    font-family: DM Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 171.429% */
    letter-spacing: -0.2px;
    padding: 8px 36px;
    border: none;
  }
`;

export const TeamProfile = styled.div`
  width: 202px;
  height: 72px;
  margin: 16px 0;
  border-radius: 16px;
  background: var(--gray-g-05, rgba(143, 146, 161, 0.05));
  font-feature-settings: "clig" off, "liga" off;
  padding: 16px 24px;
  cursor: pointer;
  .ant-row {
    .ant-col {
      padding-left: 12px;
      h2 {
        font-size: 14px;
        font-weight: bold;
      }
      p {
        color: var(--gray-g-100, #8f92a1);
        font-family: DM Sans;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 150% */
        letter-spacing: -0.4px;
      }
    }
  }
`;
