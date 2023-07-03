import React, { useEffect, useState } from "react";
import "./Jobs.css";
import { useAxiosGet } from "../../Hooks/useAxiosGet";
import FilterBox from "./FilterBox/FilterBox";
import SearchJobs from "./SearchJobs/SearchJobs";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Loading from "../LoadingPage/LoadingPage";
import JobList from "./JobList/JobList";
import { useLocation } from "react-router-dom";
// import useAuthContext from "../../Hooks/useAuthContext";

export default function Jobs() {
  const location = useLocation();
  const [url, setUrl] = useState(
    `https://back-ph2h.onrender.com/jobs/?job_location=${
      location.state ? location.state.selectedCity : ""
    }&search=${location.state? location.state.searchWord : ""}`
  );
  const { data, isPending } = useAxiosGet(url);
  const [search, setSearch] = useState("");
  const [values, setValues] = useState([]);
  // const [skills, setSkills] = useState("");
  // const { myuser } = useAuthContext();

  useEffect(() => {
    if( location.state ){
      setSearch(location.state.searchWord);
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setUrl(`https://back-ph2h.onrender.com/jobs/?search=${search}`);
  };

  return (
    <>
      <div className="container jobsBg">
        <div className="row py-4">
          <SearchJobs
            search={search}
            setSearch={setSearch}
            handleSearch={handleSearch}
          />
        </div>
        <div className="row">
          <div className="col-lg-3">
            <section className="filterSection">
              <FilterBox values={values} setValues={setValues} />
            </section>
          </div>
          <div className="col-lg-9">
            {isPending && <Loading />}
            {data && (
              <>
                <div className="row mb-3">
                  <div className="sortedBy d-flex justify-content-between align-items-center">
                    <h2>Showing {} Jobs</h2>

                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<ChevronDownIcon />}
                        className="bg-transparent"
                      >
                        <span className="text-muted">Sorted By : </span>
                        Latest Jobs
                      </MenuButton>
                      <MenuList>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                      </MenuList>
                    </Menu>
                  </div>
                </div>

                <section className="jobSection">
                  <JobList jobs={data.jobs} />
                </section>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
