import React from "react";
import "./FilterBox.css";
import FilterAccordation from "./FilterAccordation/FilterAccordation";

let filterTitle = 'Job Type'
let filterItems = ['Full Time', 'Part Time']
export default function FilterBox() {
  return (
    <>
      <FilterAccordation filterTitle={filterTitle} filterItems={filterItems}/>
      <FilterAccordation filterTitle={filterTitle} filterItems={filterItems}/>
    </>
  );
}
