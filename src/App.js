import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import LandingPage from "./Pages/Landing Page/LandingPage"
import SignupPage from "./Pages/Sign Up Page/SignupPage";
import SigninPage from "./Pages/Sign In Page/SigninPage";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import useAuthContext from "./Hooks/useAuthContext";


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
        }
      ]
    }
  ])
  return <>
    <RouterProvider router={routers} />
  </>;
}

export default App;
