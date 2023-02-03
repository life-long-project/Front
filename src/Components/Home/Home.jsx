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
        <div className="col-md-8">
        {
          jobs.map((job,index) => (
            <div className="col-md-8" key={index}>
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={job.job_img_url} className="card-img" alt="Job Image" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{job.job_name}</h5>
                    <p className="card-text">{job.job_description}</p>
                    <p className="card-text">
                      <small className="text-muted">{job.publisher}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  ))
        }
        </div>

      </div>
    </>
  );
}
