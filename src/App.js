import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import LandingPage from "./Pages/LandingPage/LandingPage"
import SignupPage from "./Pages/SignUpPage/SignupPage";
import SigninPage from "./Pages/SignInPage/SigninPage";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import useAuthContext from "./Hooks/useAuthContext";
import CreateNewJob from "./Pages/CreateNewJob/CreateNewJob";
import Jobs from "./Pages/Jobs/Jobs";


function App() {
  const { setUser } = useAuthContext();

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
      children:[
        {
          index: true,
          element: <LandingPage />
        },
        {
          path: "signup",
          element: <SignupPage/>
        },
        {
          path: "signin",
          element: <SigninPage/>
        },
        {
          path: "create_new_job",
          element: <CreateNewJob/>
        },
        {
          path: "Jobs",
          element: <Jobs/>
        },

      ]
    }
  ])
  return <>
    <RouterProvider router={routers} />
  </>;
}

export default App;
