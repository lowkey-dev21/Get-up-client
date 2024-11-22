import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomeLayout from "./page/home/HomeLayout.js";
import SignUp from "./page/auth/SignUp.js";
import Login from "./page/auth/Login.js";
import LandingPage from "./page/landingPage/LandingPage.js";
import {
  Welcome,
  Gender,
  FocusArea,
  Goal,
  AgeRange,
  SetProfilePicture,
} from "./page/unboard/index.js";

import { Classic,Discover, Personal  } from "./page/home/index.js";

const router = createBrowserRouter([
  { path: "/sign-up", element: <SignUp /> },
  { path: "/login", element: <Login /> },
  {
    path: "/home",
    element: <HomeLayout />,
    children: [
      {
        path: "classic",
        element: <Classic />,
        index: true,
      },
      {
        path: "discover",
        element: <Discover />,
      },
      {
        path: "personal",
        element: <Personal />,
      },
    ],
  },
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/welcome",
    element: <Welcome />,
  },
  {
    path: "/gender",
    element: <Gender />,
  },
  {
    path: "/focusArea",
    element: <FocusArea />,
  },
  {
    path: "/goal",
    element: <Goal />,
  },
  {
    path: "/age-range",
    element: <AgeRange />,
  },
  {
    path: "/set-profile-picture",
    element: <SetProfilePicture />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
