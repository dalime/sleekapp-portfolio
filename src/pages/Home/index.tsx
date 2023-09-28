import React from "react";

// Components
import Hero from "./Hero";
import CaseStudies from "./CaseStudies";
import Services from "./Services";
import { HeaderMenu, Page } from "../../components";

function Home() {
  return (
    <Page testId="home-page">
      <HeaderMenu />
      <Hero />
      <Services />
      <CaseStudies />
    </Page>
  );
}

export default Home;
