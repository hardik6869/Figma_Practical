import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/Authentication/SignUp";
import AuthLayout from "../Layout/AuthLayout";

const AppRoutes = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [{ path: "/", index: true, element: <SignUp /> }],
  },
]);

export default AppRoutes;
