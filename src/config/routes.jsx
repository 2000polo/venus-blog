import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import Home from "../layouts/Home";
import Profile from "../layouts/Profile";
import UserLayout from "../layouts";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <UserLayout />,
    //   errorElement: <div>Error Page</div>,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
      ],
    },
  ]);
  