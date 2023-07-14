import React, { useEffect, useState } from "react";
import "./Jobs.css";
import { useAxiosGet } from "../../Hooks/useAxiosGet";
import FilterBox from "./FilterBox/FilterBox";
import SearchJobs from "./SearchJobs/SearchJobs";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Loading from "../LoadingPage/LoadingPage";
import JobList from "./JobList/JobList";
import { useLocation } from "react-router-dom";
import useAuthContext from "../../Hooks/useAuthContext";
import { useGetByAction } from "../../Hooks/useGetByAction";
import FilterAccordation from "./FilterBox/FilterAccordation/FilterAccordation";

export default function Jobs() {
  const location = useLocation();
  const [selectedSort, setSelectedSort] = useState("updatedAt");
  const [skills, setSkills] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedType, setSelectedType] = useState([]);
  const [url, setUrl] = useState(
    `https://back-ph2h.onrender.com/jobs/?city=${
      location.state ? location.state.selectedCity : ""
    }&search=${
      location.state ? location.state.searchWord : ""
    }&sort=${selectedSort}&skills=${skills}`
  );
  console.log(selectedLocation);
  const {
    getData: getOptions,
    setData: setOptions,
    data: options,
    isPending: optionsLoading,
    error: optionsError,
  } = useGetByAction();
  const { data, isPending } = useAxiosGet(url);
  const [search, setSearch] = useState("");
  // const [values, setValues] = useState([]);
  const { user } = useAuthContext();

  const {
    data: profileData,
    isPending: profileIsPending,
    error: profileError,
  } = useAxiosGet(`https://back-ph2h.onrender.com/user/profile/${user?._id}`);

  console.log(profileData);
  useEffect(() => {
    if (location.state) {
      setSearch(location.state.searchWord);
      // setSelectedLocation(location.state.selectedCity)
    }
    getOptions(`https://back-ph2h.onrender.com/jobs/options`);
  }, []);
  useEffect(() => {
    setUrl(
      `https://back-ph2h.onrender.com/jobs/?search=${search}&sort=${selectedSort}&skills=${skills}&city=${selectedLocation}&job_type=${selectedType}`
    );
  }, [search, skills, selectedSort, selectedLocation,selectedType]);

  const handleSearch = (e) => {
    e.preventDefault();
    setUrl(
      `https://back-ph2h.onrender.com/jobs/?search=${search}&sort=${selectedSort}&skills=${skills}&city=${selectedLocation}&job_type=${selectedType}`
    );
  };

  const handleSort = (s) => {
    setSelectedSort(s);
    setUrl(
      `https://back-ph2h.onrender.com/jobs/?search=${search}&sort=${selectedSort}&skills=${skills}&city=${selectedLocation}&job_type=${selectedType}`
    );
  };

  console.log(url);
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
            <FilterAccordation
                filterTitle={"Job Tybe"}
                filterItems={["full-time","part-time"]}
                values={selectedType}
                setValues={setSelectedType}
                skills={skills}
                setUrl={setUrl}
                sort={selectedSort}
                search={search}
              />
              
              <FilterAccordation
                filterTitle={"skills"}
                filterItems={options?.skills}
                values={skills}
                setValues={setSkills}
                skills={skills}
                setUrl={setUrl}
                sort={selectedSort}
                search={search}
              />

              <FilterAccordation
                filterTitle={"Location"}
                filterItems={options?.cities}
                values={selectedLocation}
                setValues={setSelectedLocation}
                skills={skills}
                setUrl={setUrl}
                sort={selectedSort}
                search={search}
              />

              {/* <FilterBox
                options={options}
                skills={skills}
                setSkills={setSkills}
                url={url}
                setUrl={setUrl}
                sort={selectedSort}
                search={search}
              /> */}
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
                            <MenuItem key={i} onClick={() => handleSort(s)}>
                              {s}
                            </MenuItem>
                          ))}
                      </MenuList>
                    </Menu>
                  </div>
                </div>

                {user && profileData && (
                  <Accordion allowMultiple>
                    <AccordionItem className="filterBoxAccordation">
                      <h2>
                        <AccordionButton>
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            className="fw-bold"
                          >
                            My Jobs{" "}
                            <i className="ms-2 fa-solid fa-briefcase fa-shake"></i>
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <Stack mt={1} spacing={1}>
                          <Tabs>
                            <TabList>
                              <Tab>
                                On Progress Jobs{" "}
                                <i className="ms-2 fa-solid fa-person-digging fa-beat-fade"></i>
                              </Tab>
                              <Tab>
                                Pending Jobs{" "}
                                <i className="ms-2 fa-solid fa-spinner fa-spin"></i>
                              </Tab>
                              <Tab>
                                Published Jobs{" "}
                                <i className="ms-2 fa-solid fa-crown fa-bounce"></i>
                              </Tab>
                            </TabList>

                            <TabPanels>
                              <TabPanel>
                                <JobList jobs={profileData.accepted_jobs} />
                              </TabPanel>
                              <TabPanel>
                                <JobList
                                  jobs={profileData.pending_offers.map(
                                    (offer, key) => offer.job
                                  )}
                                />
                              </TabPanel>
                              <TabPanel>
                                <JobList jobs={profileData.user_jobs} />
                              </TabPanel>
                            </TabPanels>
                          </Tabs>
                        </Stack>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                )}

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
