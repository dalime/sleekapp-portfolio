import React from "react";

// Components
import Hero from "./Hero";
import CaseStudies from "./CaseStudies";
import Services from "./Services";
import { Page } from "../../components";

function Home() {
  return (
    <Page testId="home-page">
      <Hero />
      <Services />
      <CaseStudies />
    </Page>
  );
}

export default Home;
