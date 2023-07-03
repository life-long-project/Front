import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import LandingPage from "./Pages/LandingPage/LandingPage";
import SignupPage from "./Pages/SignUpPage/SignupPage";
import SigninPage from "./Pages/SignInPage/SigninPage";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import useAuthContext from "./Hooks/useAuthContext";
import CreateNewJob from "./Pages/CreateNewJob/CreateNewJob";
import Jobs from "./Pages/Jobs/Jobs";
import ChatPage from "./Pages/ChatPage/ChatPage";
import JobDetails from "./Pages/JobDetails/JobDetails";

function App() {
  const { setUser } = useAuthContext();

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     let decoded = jwt_decode(localStorage.getItem("token"));
  //     setUser(decoded.user);
  //   }
  // }, [setUser]);

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
          path: "signup",
          element: <SignupPage />,
        },
        {
          path: "signin",
          element: <SigninPage />,
        },
        {
          path: "create-job",
          element: <CreateNewJob />,
        },
        {
          path: "Jobs",
          element: <Jobs />,
        },
        {
          path: "chat",
          element: <ChatPage />,
        },
        {
          path: "Job-Details/:id",
          element: <JobDetails />,
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
