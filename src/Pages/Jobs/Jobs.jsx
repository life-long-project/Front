import React, { useState } from "react";
import "./Jobs.css";
import JobList from "../../Components/JobList/JobList";
import { useAxiosGet } from "../../Hooks/useAxiosGet";
import FilterBox from "./FilterBox/FilterBox";
import SearchJobs from "./SearchJobs/SearchJobs";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Loading from "../LoadingPage/LoadingPage";
// import useAuthContext from "../../Hooks/useAuthContext";

export default function Jobs() {
  const [url, setUrl] = useState("https://back-ph2h.onrender.com/jobs");
  const [search, setSearch] = useState("");
  const { data, isPending } = useAxiosGet(url);
  const [values, setValues] = useState([]);
  // const [skills, setSkills] = useState("");
  // const { myuser } = useAuthContext();

  console.log(values);

  const handleSearch = (e) => {
    e.preventDefault();
    setUrl(`https://back-ph2h.onrender.com/jobs/?search=${search}`);
  };

  return (
    <>
      <div className="container-fluid jobsBg">
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
