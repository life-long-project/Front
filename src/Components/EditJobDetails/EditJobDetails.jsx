import React, { useEffect, useState } from "react";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import {
  Box,
  Button,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import { useAxiosGet } from "../../Hooks/useAxiosGet";

export default function EditJobDetails({ isOpen, onOpen, onClose, job }) {
    const [skills, setSkills] = useState([]);
    const [cities, setCities] = useState([]);
  const [newJob, setNewJob] = useState({ ...job[0] });
  console.log(newJob);
  const handleJobType = (option) => {
    let selected = option.value;
    setNewJob(pre => ({...pre, job_type :selected}));
  };
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
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Log in to complete</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {job && (
              <>
                <FormControl id="jobTitle">
                  <Input
                    type="text"
                    size="lg"
                    className="bg-white"
                    placeholder="Job Title"
                    name="title"
                    id="title"
                    value={newJob.job_name}
                    onChange={(e) =>
                      setNewJob((pre) => ({ ...pre, job_name: e.target.value }))
                    }
                  />
                </FormControl>
                <Box >
                  <FormControl id="jobType">
                    <Select
                      options={jobType}
                      styles={customStyles}
                      placeholder="Select Job Type"
                      name="type"
                      id="type"
                      onChange={(option) => {
                        handleJobType(option);
                        // setJobData((prev) => ({ ...prev, type: option.value }));
                      }}
                    />
                  </FormControl>
                </Box>
                <Box >
                  {newJob.job_type === "part-time" && (
                    <FormControl id="duration">
                      <NumberInput size={"lg"}>
                        <NumberInputField
                          placeholder="Enter Duration (Days)"
                          name="duration"
                          id="duration"
                          className="bg-white"
                        //   onChange={getInputData}
                        />
                      </NumberInput>
                    </FormControl>
                  )}
                </Box>
              </>
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
