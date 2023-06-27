import React, { useState } from "react";
import "./Jobs.css";
import JobCard from "../../Components/JobCard/JobCard";
import JobList from "../../Components/JobList/JobList";
import { useAxiosGet } from "../../Hooks/useAxiosGet";
import useAuthContext from "../../Hooks/useAuthContext";

export default function Jobs() {
  const [url, setUrl] = useState("https://back-ph2h.onrender.com/jobs");
  const [search, setSearch] = useState("");
  const [skills, setSkills] = useState("");
  const { data, isPending, error } = useAxiosGet(url);
  const { myuser } = useAuthContext();
  console.log(myuser);

  return (
    <>
      <div className="container-fluid jobsBg">
        <div className="row mb-3"></div>
        <div className="row">
          <div className="col-lg-3">
            <section className="filterSection"></section>
          </div>
          <div className="col-lg-9">
            <section className="jobSection">
              {data && <JobList jobs={data.jobs} />}
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
