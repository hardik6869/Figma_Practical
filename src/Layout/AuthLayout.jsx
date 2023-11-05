import React from "react";
import { AuthWrapper } from "./Layout.style";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <AuthWrapper>
      <Outlet />
    </AuthWrapper>
  );
};

export default AuthLayout;
