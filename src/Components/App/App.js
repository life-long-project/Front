import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Home/Home";
import Layout from "../Layout/Layout";
import "./App.css";
import HomeJobsContextProvider from "../../Context/HomeJobsContext";

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
      ],
    },
  ]);

  return (
    <>
      <HomeJobsContextProvider>
        <RouterProvider router={routers} />
      </HomeJobsContextProvider>
    </>
  );
}

export default App;
