import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../Components/Layout/Layout";
import "./App.css";
import HomeJobsContextProvider from "../Context/HomeJobsContext";
import JobDetails from "../pages/jobDetails/JobDetails";
import CreateJob from "../pages/create/CreateJob";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import SignUp from "../pages/signup/SignUp";
import Login from "../pages/login/Login";

// chakra
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  let routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
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
      <ChakraProvider>
        <RouterProvider router={routers} />
      </ChakraProvider>
    </>
  );
}

export default App;
