import React, { useContext } from "react";
import { HomeJobsContext } from "../../Context/HomeJobsContext";

export default function Home() {
  let { jobs } = useContext(HomeJobsContext);
  console.log(jobs);
  return (
    <>
      <div className="row">
        {/* Filters */}
        <div className="col-md-4">
          <h2>Filters</h2>
        </div>
        {/* Jobs */}
        <div className="col-md-8"></div>
      </div>
    </>
  );
}
