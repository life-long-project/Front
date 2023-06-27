import React from "react";
import JobCard from "../JobCard/JobCard";

export default function JobList({ jobs }) {
  console.log(jobs);
  return (
    <>
      <div className="row">
        {jobs.map((job, index) => (
          <div className="col-4">
            <JobCard key={index} job={job} />
          </div>
        ))}
      </div>
    </>
  );
}
