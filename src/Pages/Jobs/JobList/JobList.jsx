import React from "react";
import JobCard from "../JobCard/JobCard";

export default function JobList({ jobs }) {
  return (
    <>
      <div className="row">
        {jobs.map((job, index) => (
          <div className="col-lg-4" key={index}>
            <JobCard job={job} />
          </div>
        ))}
      </div>
    </>
  );
}
