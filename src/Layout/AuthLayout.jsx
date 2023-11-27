import React from "react";
import { AuthWrapper } from "./Layout.style";
import { Outlet } from "react-router-dom";
import { CaDasLogoWrapper } from "../pages/Authentication/Authentication.style";
import Logo from "../assets/Logo";

const AuthLayout = () => {
  return (
    <AuthWrapper>
      <CaDasLogoWrapper>
        <Logo />
      </CaDasLogoWrapper>
      <Outlet />
    </AuthWrapper>
  );
};

export default AuthLayout;
