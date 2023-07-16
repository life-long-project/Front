import React, { useEffect, useState } from "react";
import "./CreateNewJob.css";
import {
  FormControl,
  Input,
  NumberInput,
  NumberInputField,
  Stack,
  Textarea,
  Button,
  HStack,
  Box,
} from "@chakra-ui/react";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import { useAxiosGet } from "../../Hooks/useAxiosGet";
import axios from "axios";
import useAuthContext from "../../Hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

export default function CreateNewJob() {
  const [skills, setSkills] = useState([]);
  const [cities, setCities] = useState([]);
  const [type, setType] = useState({ value: "full-time", label: "Full Time" });
  const [submitLoading, setSubmitLoading] = useState(false);
  const [error, setError] = useState(false);
  const { user } = useAuthContext();
  const navigate = useNavigate()
  console.log(user);

  const { data: skillsData } = useAxiosGet(
    "https://back-ph2h.onrender.com/jobs/skills"
  );
  const { data: citiesData } = useAxiosGet(
    "https://back-ph2h.onrender.com/cities"
  );

  useEffect(() => {
    if (skillsData) {
      let skillList = skillsData.map((skill) => {
        return { value: skill, label: skill };
      });
      setSkills((prev) => [...skillList, ...prev]);
    }
    if (citiesData) {
      let citiesList = citiesData.map((city) => {
        return { value: city, label: city };
      });
      setCities(citiesList);
    }
  }, [skillsData, citiesData]);

  const [jobData, setJobData] = useState({
    title: "",
    description: "",
    skills: "",
    type: "",
    location: "",
    salary: "",
    duration: "0",
  });

  function getInputData(e) {
    let job = { ...jobData };
    job[e.target.name] = e.target.value;
    setJobData(job);
  }

  async function submitFormData(e) {
    e.preventDefault();
    setError(null);
    setSubmitLoading(true);
    try {
      const postResponse = await axios.post(
        `https://back-ph2h.onrender.com/jobs/?auth_token=${localStorage.getItem(
          "token"
        )}`,
        jobData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setSubmitLoading(false);
      console.log(postResponse);
      navigate("/jobs")
    } catch (error) {
      setError(error);
      setSubmitLoading(false);
      console.log(error);
    }
  }

  const handleJobType = (option) => {
    let selected = option.value;
    setType(selected);
  };
  const jobType = [
    { value: "full-time", label: "Full Time" },
    { value: "part-time", label: "Part Time" },
  ];
  const customStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      height: "3rem",
      padding: "0 0.7rem",
      fontSize: "1.1rem",
    }),
  };
  return (
    <>
      <section className="createNewJob">
        <div className="container">
          <div className="row">
            <Stack spacing={3}>
              <FormControl id="jobTitle">
                <Input
                  type="text"
                  size="lg"
                  className="bg-white"
                  placeholder="Job Title"
                  name="title"
                  id="title"
                  onChange={getInputData}
                />
              </FormControl>
              <FormControl id="jobTitle">
                <Textarea
                  placeholder="Job Description"
                  size="lg"
                  className="bg-white"
                  name="description"
                  id="description"
                  onChange={(e) => {
                    getInputData(e);
                    console.log(e.target.value);
                  }}
                />
              </FormControl>
              <FormControl id="jobSkills">
                <CreatableSelect
                  options={skills}
                  isMulti
                  styles={customStyles}
                  placeholder="Select Skills"
                  name="skills"
                  id="skills"
                  onChange={(option) => {
                    let selected = option.map((option) => {
                      return option.value;
                    });
                    setJobData((prev) => ({ ...prev, skills: selected }));
                  }}
                />
              </FormControl>
              <HStack>
                <Box className="w-50">
                  <FormControl id="jobType">
                    <Select
                      options={jobType}
                      styles={customStyles}
                      placeholder="Select Job Type"
                      name="type"
                      id="type"
                      onChange={(option) => {
                        handleJobType(option);
                        setJobData((prev) => ({ ...prev, type: option.value }));
                      }}
                    />
                  </FormControl>
                </Box>
                <Box className="w-50">
                  {type === "part-time" && (
                    <FormControl id="duration">
                      <NumberInput size={"lg"}>
                        <NumberInputField
                          placeholder="Enter Duration (Days)"
                          name="duration"
                          id="duration"
                          className="bg-white"
                          onChange={getInputData}
                        />
                      </NumberInput>
                    </FormControl>
                  )}
                </Box>
              </HStack>
              <FormControl id="city">
                <Select
                  options={cities}
                  styles={customStyles}
                  placeholder="Select City"
                  name="location"
                  id="location"
                  onChange={(option) => {
                    setJobData((prev) => ({ ...prev, location: option.value }));
                  }}
                />
              </FormControl>
              <FormControl id="salary">
                <NumberInput size={"lg"}>
                  <NumberInputField
                    placeholder="Enter Salary (LE)"
                    name="salary"
                    id="salary"
                    className="bg-white"
                    onChange={getInputData}
                  />
                </NumberInput>
              </FormControl>
              <Button
                type="submit"
                loadingText="Posting"
                size="lg"
                className="main-btn"
                mt={4}
                isLoading={submitLoading}
                onClick={submitFormData}
              >
                Create Job
              </Button>
            </Stack>
          </div>
        </div>
      </section>
    </>
  );
}
