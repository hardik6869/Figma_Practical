import React from "react";
import {
  ActiveDotSign,
  AddNewMessageBtn,
  InnerSidebar,
  SidebarHeader,
  UserGroups,
  UserSidebar,
  UserSidebarBottom,
  SidebarSider,
} from "./Sidebar.style";
import Plus from "../../assets/Plus";
import { Avatar, Badge, Col, Row } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { MyProjectsData } from "../../pages/Message/UserData";

const Sidebar = () => {
  return (
    <SidebarSider theme="light" width={315}>
      <InnerSidebar>
        <SidebarHeader>
          <span> Direct Messages </span> <Plus />
        </SidebarHeader>
        {MyProjectsData.map((user) => (
          <UserSidebar>
            <Col>
              <Avatar
                src={user.userImage[0]}
                style={{ background: `${user.userImage[1]}` }}
              >
                {user.userImage[0]}
              </Avatar>
              <span>
                {user.fullName.length > 12
                  ? `${user.fullName.slice(0, 12)}...`
                  : user.fullName}
              </span>
            </Col>
            {user.isMessage ? (
              <Badge
                count={1}
                size="small"
                style={{
                  background: "#DE350B",
                  fontSize: "8px",
                }}
              />
            ) : (
              <Col>
                {user.status ? (
                  <ActiveDotSign />
                ) : (
                  <label> {user.updateAt} </label>
                )}
              </Col>
            )}
          </UserSidebar>
        ))}

        <SidebarHeader>
          <span> Groups </span> <Plus />
        </SidebarHeader>
        <UserGroups>
          <Row>
            <label># Carrot Team</label>
          </Row>
          <Row>
            <label># Carrot Plan </label>
            <Badge
              count={1}
              size="small"
              style={{
                background: "#DE350B",
                fontSize: "8px",
              }}
            />
          </Row>
          <Row>
            <label># General</label>
            <Badge
              count={8}
              size="small"
              style={{
                background: "#DE350B",
                fontSize: "8px",
              }}
            />
          </Row>
        </UserGroups>
      </InnerSidebar>
      <UserSidebarBottom>
        <AddNewMessageBtn icon={<PlusOutlined />}>New Message</AddNewMessageBtn>
      </UserSidebarBottom>
    </SidebarSider>
  );
};

export default Sidebar;
