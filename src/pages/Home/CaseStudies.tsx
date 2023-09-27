import React from "react";

// Components
import { PortfolioItem } from "../../components";

// Styles
import { CaseStudiesWrapper } from "./index.styles";

function CaseStudies() {
  return (
    <CaseStudiesWrapper>
      <h1>Case Studies</h1>
      <PortfolioItem
        title="Hello"
        description="lorem ipsum"
        imgSrc="https://images.unsplash.com/photo-1612198273689-b437f53152ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3164&q=80"
      />
    </CaseStudiesWrapper>
  );
}

export default CaseStudies;
