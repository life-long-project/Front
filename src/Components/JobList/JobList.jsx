import "./JobList.css";
import JobCard from "../JobCard/JobCard";

import React from "react";

export default function JobList({ jobs }) {
  return (
    <div className="list-content">
      {jobs.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </div>
  );
}
