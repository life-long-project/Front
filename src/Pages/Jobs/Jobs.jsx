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
import { useGetByAction } from "../../Hooks/useGetByAction";

export default function Jobs() {
  const location = useLocation();
  const [selectedSort,setSelectedSort] =useState('')
  const [url, setUrl] = useState(
    `https://back-ph2h.onrender.com/jobs/?job_location=${
      location.state ? location.state.selectedCity : ""
    }&search=${location.state ? location.state.searchWord : ""}&sort=${selectedSort}`
  );
  const {
    getData: getOptions,
    setData: setOptions,
    data: options,
    isPending: optionsLoading,
    error: optionsError,
  } = useGetByAction();
  const { data, isPending } = useAxiosGet(url);
  const [search, setSearch] = useState("");
  const [values, setValues] = useState([]);
  // const [skills, setSkills] = useState("");
  // const { myuser } = useAuthContext();

  useEffect(() => {
    if (location.state) {
      setSearch(location.state.searchWord);
    }
    getOptions(`https://back-ph2h.onrender.com/jobs/options`);
  }, []);


  const handleSearch = (e) => {
    e.preventDefault();
    setUrl(`https://back-ph2h.onrender.com/jobs/?search=${search}&sort=${selectedSort}`);
  };

  const handleSort= (s) => {
    setSelectedSort(s)
    setUrl(`https://back-ph2h.onrender.com/jobs/?search=${search}&sort=${selectedSort}`);
  }

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
              <FilterBox values={values} setValues={setValues} options={options}/>
            </section>
          </div>
          <div className="col-lg-9">
            {isPending && <Loading />}
            {data && (
              <>
                <div className="row mb-3">
                  <div className="sortedBy d-flex justify-content-between align-items-center">
                    <h2>Showing {data.total} Jobs</h2>

                    <Menu>
                      <MenuButton
                        as={Button}
                        rightIcon={<ChevronDownIcon />}
                        className="bg-transparent"
                      >
                        <span className="text-muted">Sorted By : </span>
                        {selectedSort}
                      </MenuButton>
                      <MenuList>
                        {options &&
                          options.sort.map((s, i) => (
                            <MenuItem key={i} onClick={()=>handleSort(s)}>{s}</MenuItem>
                          ))}
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
