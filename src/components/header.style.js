import { Button } from "antd";
import styled from "styled-components";

export const OuterWrapper = styled.div`
  width: 100%;
  height: 100px;
  flex-shrink: 0;
  background: var(--white-w-100, #fff);
  padding: 24px 22px;
  display: flex;
  align-items: center;
`;

export const AuthUserName = styled.div`
  color: #171717;
  font-feature-settings: "clig" off, "liga" off;
  margin-right: 168px;

  /* Bold/H2 */
  font-family: DM Sans;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px; /* 136.364% */
  letter-spacing: -0.4px;
`;

export const SearchBar = styled.div`
  width: 250px;
  height: 56px;
  flex-shrink: 0;
`;

export const RightSide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 324px;
  margin-left: 290px;
`;

export const AddProjectBtn = styled(Button)`
  display: flex;
  width: 140px;
  height: 50px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 16px;
  background: var(--blue-b-100, #0052cc);

  color: var(--white-w-100, #fff);
  fill: var(--white-w-100, #fff);
  font-family: DM Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 171.429% */
  letter-spacing: -0.2px;
`;
