import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/Authentication/SignUp";
import AuthLayout from "../Layout/AuthLayout";
import SignIn from "../pages/Authentication/SignIn";

const AppRoutes = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: "/", index: true, element: <SignIn /> },
      { path: "/signup", index: true, element: <SignUp /> },
    ],
  },
]);

export default AppRoutes;
