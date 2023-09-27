import React from "react";

// Components
import { PortfolioItem, Section } from "../../components";

// Styles
import { CaseStudiesWrapper } from "./index.styles";

interface PortfolioItemInterface {
  title: string;
  description: string;
  imgSrc: string;
  viewLink?: string;
  codeLink?: string;
}

const portfolioItems: PortfolioItemInterface[] = [
  {
    title: "Example App",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero reiciendis ducimus debitis expedita quibusdam deserunt facilis omnis, unde consectetur? Quibusdam dolorum pariatur qui consectetur doloribus voluptates ipsum quia sed nulla.",
    imgSrc:
      "https://images.unsplash.com/photo-1612198273689-b437f53152ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3164&q=80",
    viewLink: "https://google.com",
  },
];

function CaseStudies() {
  const renderPortfolioItems = (): JSX.Element[] => {
    return portfolioItems.map((item, index) => {
      const { title, description, imgSrc, viewLink, codeLink } = item;
      return (
        <PortfolioItem
          key={`portfolio-item-${index}`}
          title={title}
          description={description}
          imgSrc={imgSrc}
          viewLink={viewLink || ""}
          codeLink={codeLink || ""}
        />
      );
    });
  };

  return (
    <Section>
      <CaseStudiesWrapper>
        <h1>Case Studies</h1>
        {renderPortfolioItems()}
      </CaseStudiesWrapper>
    </Section>
  );
}

export default CaseStudies;
