import {
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";
import "./SearchJobs.css";

export default function SearchJobs({ search, setSearch, handleSearch }) {
  return (
    <>
      <div className="HeroSectionSearchBar">
        <Stack>
          <form onSubmit={handleSearch}>
            <InputGroup size="lg">
              <InputLeftAddon
                className="SearchBarLeftIcons"
                children={<BsSearch />}
              />

              <Input
                className="SearchBarInputForm"
                type="text"
                placeholder="Search by Job Title, Keywords, or Location (e.g. Sales in Cairo)"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <input
                type="button"
                className="SearchBarJobPageButton"
                value="Search"
                onClick={handleSearch}
              />
            </InputGroup>
          </form>
        </Stack>
      </div>
    </>
  );
}
