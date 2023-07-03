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
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import Error404 from "./Pages/Error404/Error404";

function App() {
  const { setUser, userData } = useAuthContext();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      let decoded = jwt_decode(localStorage.getItem("token"));
      setUser(decoded.user);
    }
  }, [setUser]);

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
          element: (
            <ProtectedRoute userData={userData}>
              <CreateNewJob />
            </ProtectedRoute>
          ),
        },
        {
          path: "Jobs",
          element: <Jobs />,
        },
        {
          path: "messenger",
          element: (
            <ProtectedRoute userData={userData}>
              <ChatPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "Job-Details/:id",
          element: <JobDetails />,
        },
        {
          path: "*",
          element: (
              <Error404 />
          ),
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
