import React from "react";
import "./Jobs.css";
import JobCard from "../../Components/JobCard/JobCard";
import JobList from "../../Components/JobList/JobList";

export default function Jobs() {
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
              <JobList />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
