import React from "react";
import JobCard from "../JobCard/JobCard";

export default function JobList() {
  return (
    <>
        <div className="row">
          <div className="col-4">
            <JobCard />
          </div>
          <div className="col-4">
            <JobCard />
          </div>
          <div className="col-4">
            <JobCard />
          </div>
          <div className="col-4">
            <JobCard />
          </div>
        </div>
    </>
  );
}
