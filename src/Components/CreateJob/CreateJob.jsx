import axios from "axios";
import React from "react";
import { useState } from "react";

export default function CreateJob() {
  const [jobData, setJobData] = useState({
    job_name: "",
    posted_by_id: "",
    salary: "",
    job_type_id: "",
    job_description: "",
    job_location_id: "",
  });

  function getInputData(e) {
    let job = { ...jobData };
    job[e.target.name] = e.target.value;
    setJobData(job);
  }

  async function submitFormData(e) {
    e.preventDefault();
    console.log(jobData);
    await axios.post(`https://back-ph2h.onrender.com/jobs/`, jobData, {
      headers: { "Content-Type": "application/json" },
    });
  }

  return (
    <>
      <div className="row">
        <form onSubmit={submitFormData}>
          <div className="input-data my-3">
            <label htmlFor="first_name">Job Name :</label>
            <input
              className="form-control my-2"
              name="job_name"
              id="job_name"
              type="text"
              onChange={getInputData}
            />
          </div>
          <div className="input-data my-3">
            <label htmlFor="last_name">posted_by_id :</label>
            <input
              className="form-control my-2"
              name="posted_by_id"
              id="posted_by_id"
              type="number"
              onChange={getInputData}
            />
          </div>
          <div className="input-data my-3">
            <label htmlFor="age">salary :</label>
            <input
              className="form-control my-2"
              name="salary"
              id="salary"
              type="number"
              onChange={getInputData}
            />
          </div>
          <div className="input-data my-3">
            <label htmlFor="email">job_type_id :</label>
            <input
              className="form-control my-2"
              name="job_type_id"
              id="job_type_id"
              type="number"
              onChange={getInputData}
            />
          </div>
          <div className="input-data my-3">
            <label htmlFor="password">job_description :</label>
            <input
              className="form-control my-2"
              name="job_description"
              id="job_description"
              type="text"
              onChange={getInputData}
            />
          </div>
          <div className="input-data my-3">
            <label htmlFor="password">job_location_id :</label>
            <input
              className="form-control my-2"
              name="job_location_id"
              id="job_location_id"
              type="number"
              onChange={getInputData}
            />
          </div>
          <button className="btn btn-info my-2 float-end text-light">
            Add Job
          </button>
          <div className="clear-fix"></div>
        </form>
      </div>
    </>
  );
}
