import React from "react";
import "./FilterBox.css";
import FilterAccordation from "./FilterAccordation/FilterAccordation";

let filterTitle = "Job Type";
let filterItems = ["Full Time", "Part Time"];
export default function FilterBox({ values, setValues }) {
  return (
    <>
      <FilterAccordation
        filterTitle={filterTitle}
        filterItems={filterItems}
        values={values}
        setValues={setValues}
      />
      <FilterAccordation
        filterTitle={filterTitle}
        filterItems={filterItems}
        values={values}
        setValues={setValues}
      />
    </>
  );
}
