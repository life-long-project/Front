import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { HomeJobsContext } from "../../Context/HomeJobsContext";
import { useAxiosGet } from "../../hooks/useAxiosGet";
import Loading from "../../Components/loadingPage/Loading";
import JobList from "../../Components/JobList/JobList";
import "./Home.css";
import moment from "moment";
import Select from "react-select";

const skillsList = [
  { value: "javascript", label: "javascript" },
  { value: "angular", label: "angular" },
  { value: "react", label: "react" },
  { value: "coffee", label: "coffee" },
];

export default function Home() {
  const [url, setUrl] = useState("https://back-ph2h.onrender.com/jobs");
  const [search, setSearch] = useState("");
  const [skills, setSkills] = useState("coffee");
  const { data, isPending, error } = useAxiosGet(url);

  const handleSearch = (e) => {
    e.preventDefault();
    setUrl(
      `https://back-ph2h.onrender.com/jobs/?skills=${skills}&search=${search}`
    );
  };
  const handleFilter = (option) => {
    let selected = option.map((skill) => {
      return skill.value;
    });
    console.log(selected);
    setSkills(selected);
    setUrl(
      `https://back-ph2h.onrender.com/jobs/?skills=${selected}&search=${search}`
    );
  };

  console.log(url);

  return (
    <>
      <div className="home-top">
        <div className="top-content">
          <div className="skills-box">
            <span className="spn">Skills: </span>
            <label>
              <Select
                className="sel"
                onChange={(option) => handleFilter(option)}
                options={skillsList}
                isMulti
              />
            </label>
          </div>

          <div className="right">
            <form onSubmit={(e) => handleSearch(e)}>
              <label>
                <input
                  className="form-control my-2"
                  type="text"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </label>
              <button className="btn btn-info my-2 float-end text-light">
                search
              </button>
            </form>
            <button className="btn btn-warning my-2 float-end text-light">
              <Link className="nav-link" to="/createJob">
                Add Job
              </Link>
            </button>
            <button className="btn btn-danger my-2 float-end text-light">
              <Link className="nav-link" to="/profile">
                My Profile
              </Link>
            </button>
          </div>
        </div>
      </div>
      {isPending && <Loading />}
      {error && <div className="error">{error}</div>}
      {data && data.jobs.length === 0 && (
        <h1 className="error">No Jobs to load</h1>
      )}
      {data && <JobList jobs={data.jobs} />}
    </>
  );
}
