import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HomeJobsContext } from "../../Context/HomeJobsContext";

export default function Home() {
  let { jobs, searchedJobs} = useContext(HomeJobsContext);
  console.log(jobs);
  function handleIsActiveFilter(value){
    searchedJobs(value)
  }
  return (
    <>
      <div className="row">
        {/* Filters */}
        <div className="col-md-4">
        <div className="form-check">
          <input className="form-check-input" type="radio" name="is_active" value={true} onChange={e => handleIsActiveFilter(e.target.value)} id="active"/>
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            active
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="is_active" value={false} onChange={e => handleIsActiveFilter(e.target.value)} id="notActive" />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            not active
          </label>
        </div>
        </div>
        {/* Jobs */}
        <div className="col-md-8">
          <div className="searchBar">
            <form action=""><input type="search" name="" id="" onChange={e => searchedJobs(e.target.value)}/></form>
          </div>
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
                    <Link to={`/details/${job._id}`}><h5 className="card-title">{job.job_name}</h5></Link>
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
