import React from "react";
import "./FilterBox.css";
import FilterAccordation from "./FilterAccordation/FilterAccordation";

let filterTitle = "Job Type";
let filterItems = ["Full Time", "Part Time"];
export default function FilterBox({
  values,
  setValues,
  options,
  skills,
  setSkills,
  url,
  setUrl,
  sort,
  search,
}) {
  return (
    <>
      <FilterAccordation
        filterTitle={"skills"}
        filterItems={options?.skills}
        values={skills}
        setValues={setSkills}
        skills={skills}
        setUrl={setUrl}
        sort={sort}
        search={search}
      />
    </>
  );
}
