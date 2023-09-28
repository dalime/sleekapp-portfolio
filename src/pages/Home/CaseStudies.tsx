import React from "react";

// Components
import { PortfolioItem, Section, Subheading } from "../../components";

// Styles
import { CaseStudiesWrapper } from "./index.styles";

interface PortfolioItemInterface {
  title: string;
  description: string;
  imgSrc: string;
  viewLink?: string;
  codeLink?: string;
}

function CaseStudies() {
  const data = process.env.REACT_APP_PORTFOLIO_ITEMS
    ? JSON.parse(process.env.REACT_APP_PORTFOLIO_ITEMS)
    : [];
  const portfolioItems = data as PortfolioItemInterface[];

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

  if (!portfolioItems.length) return <></>;

  return (
    <Section>
      <CaseStudiesWrapper>
        <Subheading>Case Studies</Subheading>
        {renderPortfolioItems()}
      </CaseStudiesWrapper>
    </Section>
  );
}

export default CaseStudies;
