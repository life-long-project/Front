import React from "react";
import "./FilterBox.css";
import FilterAccordation from "./FilterAccordation/FilterAccordation";

let filterTitle = "Job Type";
let filterItems = ["Full Time", "Part Time"];
export default function FilterBox({ values, setValues,options }) {
  return (
    <>
      <FilterAccordation
        filterTitle={"skills"}
        filterItems={filterItems}
        values={values}
        setValues={setValues}
      />
    </>
  );
}
