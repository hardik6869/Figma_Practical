import React from "react";
import {
  AddTeamBtn,
  InnerWrapper,
  MyTeamHeader,
  MyTeamWrapper,
  TeamProfile,
  UserIcon,
} from "./Home.style";
import { Avatar, Button, Col, Dropdown, Row } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { MyTeamData } from "./MyTeamData";
import Ellipsis from "../../assets/Ellipsis";

const MyTeam = () => {
  const items = [
    {
      label: "Open",
      key: "1",
    },
    {
      label: "Edit",
      key: "2",
    },
    {
      label: "Delete",
      key: "3",
    },
  ];
  return (
    <MyTeamWrapper>
      <MyTeamHeader>
        <p> My Team</p>
        <Dropdown menu={{ items }}>
          <Button type="text" icon={<Ellipsis />} />
        </Dropdown>
      </MyTeamHeader>
      <InnerWrapper>
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 48,
          }}
        >
          {MyTeamData.map((team) => (
            <Col md={16} lg={12} xl={8} xxl={6}>
              <TeamProfile>
                <Row>
                  <Row>
                    <Avatar src={team.teamLogo} shape="square" size="large" />
                    <Col>
                      <h2>{team.teamName}</h2>
                      <p>{team.member} Members</p>
                    </Col>
                  </Row>
                  <Dropdown menu={{ items }}>
                    <Button type="text" size="small" icon={<Ellipsis />} />
                  </Dropdown>
                </Row>

                <UserIcon>
                  {team.user.map((item) => (
                    <Avatar src={item[0]} style={{ background: item[1] }}>
                      {item[0]}
                    </Avatar>
                  ))}
                </UserIcon>
              </TeamProfile>
            </Col>
          ))}
          <Col md={16} lg={12} xl={8} xxl={6}>
            <AddTeamBtn>
              <span>
                <PlusOutlined /> Add Team
              </span>
            </AddTeamBtn>
          </Col>
        </Row>
      </InnerWrapper>
    </MyTeamWrapper>
  );
};

export default MyTeam;
