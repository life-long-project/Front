import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../Components/Layout/Layout";
import "./App.css";
import HomeJobsContextProvider from "../Context/HomeJobsContext";
import JobDetails from "../pages/jobDetails/JobDetails";
import CreateJob from "../pages/create/CreateJob";
import ProfilePage from "../pages/ProfilePage/ProfilePage";

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
          path: 'profile', 
          element: <ProfilePage />
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