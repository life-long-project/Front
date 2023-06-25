import React from "react";
import "./HeroSections.css";
import {
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Select,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { BiCurrentLocation } from "react-icons/bi";

export default function HeroSection() {
  return (
    <>
      <section className="Hero-Section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="Hero-Section-Content d-flex align-items-center">
                <div>
                  <h1 className="HeroSectionMainText mb-4">
                    Your next job is a tap away
                  </h1>
                  <p className="HeroSectionSubText mb-4">
                    find jobs near you and start making money
                  </p>
                  <div className="HeroSectionSearchBar">
                    <Stack>
                      <InputGroup size="lg">
                        <InputLeftAddon
                          className="SearchBarLeftIcons"
                          children={<BsSearch />}
                        />
                        <Input
                          className="SearchBarInputForm"
                          type="text"
                          placeholder="Job, Company name..."
                        />
                        <InputLeftAddon
                          className="SearchBarLeftIconsNoBorder"
                          children={<BiCurrentLocation />}
                        />
                        <Select
                          placeholder="Select country"
                          className="SearchBarInputForm"
                        >
                          <option>United Arab Emirates</option>
                          <option>Nigeria</option>
                        </Select>
                        <input
                          type="button"
                          className="HeroSectionSearchBarFormBtn"
                          value="Search"
                        />
                      </InputGroup>
                    </Stack>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 position-relative HeroSectionImage">
              <input
                type="image"
                className="position-absolute bottom-0 end-0"
                alt="Hero Section Image !"
                src="/images/Header Image.png"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
