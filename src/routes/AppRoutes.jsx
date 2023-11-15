import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/Authentication/SignUp";
import AuthLayout from "../Layout/AuthLayout";
import SignIn from "../pages/Authentication/SignIn";
import AppLayout from "../Layout/AppLayout";
import Home from "../pages/Dashboard/Home";
import Message from "../pages/Message/Message";
import Project from "../pages/Project/Project";
import Schedule from "../pages/Schedule/Schedule";
import Activity from "../pages/Activity/Activity";

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
    children: [
      { path: "/dashboard", index: true, element: <Home /> },
      { path: "/message", index: true, element: <Message /> },
      { path: "/project", index: true, element: <Project /> },
      { path: "/schedule", index: true, element: <Schedule /> },
      { path: "/activity", index: true, element: <Activity /> },
    ],
  },
]);

export default AppRoutes;
