import React from "react";
import {
  AddNewTeamBtn,
  CaDasLogo,
  SidebarBottom,
  SidebarMenu,
  SidebarSider,
  TeamProfile,
  Teams,
} from "./sidebar.style";
import { Avatar, Badge, Col, Menu, Row } from "antd";
import { Link } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import Logo from "../assets/Logo";
import Images from "../Global/Images";
import Dashboard from "../assets/Dashboard";
import Message from "../assets/Message";
import Project from "../assets/Project";
import Schedule from "../assets/Schedule";
import Activity from "../assets/Activity";
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const Sidebar = () => {
  const items = [
    getItem(<Link to="/dashboard">Dashboard</Link>, "1", <Dashboard />),
    getItem(<Link to="/message">Message</Link>, "2", <Message />),
    getItem(<Link to="/project">Project</Link>, "3", <Project />),
    getItem(<Link to="/schedule">Schedule</Link>, "4", <Schedule />),
    getItem(<Link to="/activity">Activity</Link>, "5", <Activity />),
  ];
  return (
    <SidebarSider theme="light" width={250}>
      <CaDasLogo>
        <Logo />
      </CaDasLogo>
      <SidebarMenu>
        <Menu mode="inline" items={items} />
      </SidebarMenu>
      <SidebarBottom>
        <Teams>Teams</Teams>

        <TeamProfile>
          <Row>
            <Badge
              dot
              style={{
                height: "10px",
                width: "10px",
                border: "1px white solid",
              }}
              offset={[-5, 35]}
              dotSize={8}
              status="success"
            >
              <Avatar src={Images.CarrotLabs} shape="square" size="large" />
            </Badge>
            <Col>
              <h2>Carrot Team</h2>
              <p>@carrotteam</p>
            </Col>
          </Row>
        </TeamProfile>
        <AddNewTeamBtn icon={<PlusOutlined />}> Add New Team</AddNewTeamBtn>
      </SidebarBottom>
    </SidebarSider>
  );
};

export default Sidebar;
