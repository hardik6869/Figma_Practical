import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/Authentication/SignUp";
import AuthLayout from "../Layout/AuthLayout";
import SignIn from "../pages/Authentication/SignIn";
import AppLayout from "../Layout/AppLayout";
import Home from "../pages/Dashboard/Home";

const AppRoutes = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: "/", index: true, element: <SignIn /> },
      { path: "/signup", index: true, element: <SignUp /> },
    ],
  },
  {
    element: <AppLayout />,
    children: [{ path: "/home", index: true, element: <Home /> }],
  },
]);

export default AppRoutes;
