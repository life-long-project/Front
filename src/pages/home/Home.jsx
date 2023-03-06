import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HomeJobsContext } from "../../Context/HomeJobsContext";
import { useAxiosGet } from "../../hooks/useAxiosGet";
import Loading from "../../Components/loadingPage/Loading";
import JobList from "../../Components/JobList/JobList";
import "./Home.css";
import moment from "moment";

export default function Home() {
  //let { jobs, searchedJobs } = useContext(HomeJobsContext);
  const { data, isPending, error } = useAxiosGet(
    "https://back-ph2h.onrender.com/jobs"
  );

  function handleIsActiveFilter(value) {
    //searchedJobs(value);
  }

  return (
    <>
      {isPending && <Loading />}
      {error && <div className="error">{error}</div>}
      {data && <JobList jobs={data.jobs} />}
    </>
  );
}
