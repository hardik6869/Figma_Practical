import React from "react";
import {
  AddProjectBtn,
  InnerWrapper,
  MyProjectsWrapper,
  MyTeamHeader,
  ProjectSummary,
  ProjectTitle,
  UserIcon,
} from "./Home.style";
import { Avatar, Button, Col, Dropdown, Progress, Row } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Ellipsis from "../../assets/Ellipsis";
import Activity from "../../assets/Activity";
import Attachments from "../../assets/Attachments";
import { MyProjectsData } from "./MyProjectsData";

const MyProjects = () => {
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
    <MyProjectsWrapper>
      <MyTeamHeader>
        <p> My Projects </p>
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
          {MyProjectsData.map((project) => (
            <Col md={16} lg={12} xl={8} xxl={6}>
              <ProjectSummary>
                <ProjectTitle>
                  <span> {project.projectName} </span>
                  <Dropdown menu={{ items }}>
                    <Button type="text" size="small" icon={<Ellipsis />} />
                  </Dropdown>
                </ProjectTitle>
                <p>{project.teamName} Members </p>

                <Row>
                  {project.attachement && (
                    <label>
                      <Attachments /> {project.attachement}
                    </label>
                  )}
                  <label
                    style={
                      project.time < 4
                        ? {
                            color: "var(--red-r-100, #DE350B)",
                            background: "#DE350B33",
                          }
                        : project.time < 7
                        ? {
                            color: "var(--yellow-y-100, #FF991F)",
                            background: "#FF991F33",
                          }
                        : {}
                    }
                  >
                    <Activity time={project.time} /> {project.time} days left
                  </label>
                </Row>

                <Progress
                  percent={project.progress}
                  size="small"
                  style={{ fontWeight: "bold" }}
                />

                <UserIcon>
                  {project.user.map((item) => (
                    <Avatar src={item[0]} style={{ background: item[1] }}>
                      {item[0]}
                    </Avatar>
                  ))}
                </UserIcon>
              </ProjectSummary>
            </Col>
          ))}

          <Col md={16} lg={12} xl={8} xxl={6}>
            <AddProjectBtn>
              <span>
                <PlusOutlined /> Add Project
              </span>
            </AddProjectBtn>
          </Col>
        </Row>
      </InnerWrapper>
    </MyProjectsWrapper>
  );
};

export default MyProjects;
