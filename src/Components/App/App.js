import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Home/Home";
import Layout from "../Layout/Layout";
import "./App.css";
import HomeJobsContextProvider from "../../Context/HomeJobsContext";
import JobDetails from "../JobDetails/JobDetails";
import CreateJob from "../CreateJob/CreateJob";

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
          element: (
              <JobDetails/>
          ),
        },
        {
          path: "createJob",
          element: (
            <CreateJob />
          )
        }

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
