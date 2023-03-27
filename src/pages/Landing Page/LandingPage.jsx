import React from "react";
import Cta from "./Cta/Cta";
import HowItWork from "./HowItWork/HowItWork";
import JobCategories from "./Job Categories/JobCategories";
import LandingHeader from "./Landing Header/LandingHeader";
import Testimonal from "./Testimonal/Testimonal";
export default function LandingPage() {
  return (
    <>
      <LandingHeader />
      <JobCategories />
      <HowItWork />
      <Cta />
      <Testimonal />
    </>
  );
}
