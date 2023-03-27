import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../Components/Layout/Layout";
import "./App.css";
import JobDetails from "../pages/jobDetails/JobDetails";
import CreateJob from "../pages/create/CreateJob";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import SignUp from "../pages/signup/SignUp";
import Login from "../pages/login/Login";

import LandingPage from "../pages/Landing Page/LandingPage";
function App() {
  let routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "details/:id",
          element: <JobDetails />,
        },
        {
          path: "createJob",
          element: <CreateJob />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "profile",
          element: <ProfilePage />,
        },
      ],
    },
  ]);

  return (
    <>
        <RouterProvider router={routers} />
    </>
  );
}

export default App;
