import React from "react";
import {
  AppInnerLayout,
  AppOuterContent,
  AppOuterLayout,
} from "./Layout.style";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const AppLayout = () => {
  return (
    <AppOuterLayout>
      <Sidebar />
      <AppInnerLayout>
        <Header />
        <AppOuterContent>
          <Outlet />
        </AppOuterContent>
      </AppInnerLayout>
    </AppOuterLayout>
  );
};

export default AppLayout;
