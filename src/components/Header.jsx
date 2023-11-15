import React, { useEffect, useState } from "react";
import {
  AddProjectBtn,
  AuthUserName,
  OuterWrapper,
  RightSide,
  SearchBar,
} from "./header.style";
import { Avatar, Input } from "antd";
import Plus from "../assets/Plus";
import Bell from "../assets/Bell";
import Setting from "../assets/Setting";
import Images from "../Global/Images";
import { SearchOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";

const handleSelectedHeaderOnSidebar = (path) => {
  switch (path) {
    case "/dashboard":
      return "👋 Hi Linh!";
    case "/message":
      return "💬 Message";
    case "/project":
      return "💼 Project";
    default:
      return "👋 Hi Linh!";
  }
};
const Header = () => {
  const location = useLocation();

  const [selectedHeader, setSelectedHeader] = useState(() =>
    handleSelectedHeaderOnSidebar(location.pathname)
  );
  useEffect(() => {
    setSelectedHeader(() => handleSelectedHeaderOnSidebar(location.pathname));
  }, [location.pathname]);
  return (
    <OuterWrapper>
      <AuthUserName>{selectedHeader}</AuthUserName>
      <SearchBar>
        <Input
          style={{
            width: "250px",
            height: "56px",
          }}
          placeholder="Search..."
          suffix={
            <SearchOutlined
              style={{ fontSize: "24px", color: "rgba(0, 0, 0, 0.25)" }}
            />
          }
        />
      </SearchBar>

      <RightSide>
        <AddProjectBtn icon={<Plus />} type="primary">
          Start Project
        </AddProjectBtn>
        <Bell />
        <Setting />
        <Avatar src={Images.Avatar1} />
      </RightSide>
    </OuterWrapper>
  );
};

export default Header;
