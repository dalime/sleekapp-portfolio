import React from "react";

// Components
import Hero from "./Hero";
import CaseStudies from "./CaseStudies";
import Services from "./Services";
import Reviews from "./Reviews";
import CTASection from "./CTASection";
import { Page } from "../../components";

function Home() {
  return (
    <Page testId="home-page">
      <Hero />
      <Services />
      <CTASection />
      <Reviews />
      <CaseStudies />
    </Page>
  );
}

export default Home;
