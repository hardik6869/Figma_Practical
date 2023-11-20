import React from "react";
import MyTeam from "./MyTeam";
import MyProjects from "./MyProjects";
import { DashboardWrapper } from "./Home.style";

const Home = () => {
  return (
    <DashboardWrapper>
      <MyTeam />
      <MyProjects />
    </DashboardWrapper>
  );
};

export default Home;
