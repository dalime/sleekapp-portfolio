import React from "react";

// Components
import Hero from "./Hero";
import CaseStudies from "./CaseStudies";
import { HeaderMenu } from "../../components";

function Home() {
  return (
    <div data-testid="home-page">
      <HeaderMenu />
      <Hero />
      <CaseStudies />
    </div>
  );
}

export default Home;
