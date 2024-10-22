import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomeLayout from "./page/home/HomeLayout.js";
import SignUp from "./page/auth/SignUp.js";
import Login from "./page/auth/Login.js";
import LandingPage from "./page/landingPage/LandingPage.js";

const router = createBrowserRouter([
  { path: "/sign-up", element: <SignUp /> },
  { path: "/login", element: <Login /> },
  { path: "/home", element: <HomeLayout /> },
  {
    path: "/",
    element: <LandingPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
