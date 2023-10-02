import React from "react";

// Components
import { PortfolioItem, Section, Subheading } from "../../components";

// Styles
import { CaseStudiesWrapper } from "./index.styles";

interface PortfolioItemInterface {
  title: string;
  description: string;
  role: string;
  feedback: string;
  imgSrc: string;
  viewLink?: string;
  codeLink?: string;
}

function CaseStudies() {
  const portfolioItem1 = process.env.REACT_APP_PORTFOLIO_ITEM_1
    ? JSON.parse(process.env.REACT_APP_PORTFOLIO_ITEM_1)
    : null;
  const portfolioItem2 = process.env.REACT_APP_PORTFOLIO_ITEM_2
    ? JSON.parse(process.env.REACT_APP_PORTFOLIO_ITEM_2)
    : null;
  const portfolioItem3 = process.env.REACT_APP_PORTFOLIO_ITEM_3
    ? JSON.parse(process.env.REACT_APP_PORTFOLIO_ITEM_3)
    : null;
  const portfolioItems: (PortfolioItemInterface | null)[] = [
    portfolioItem1,
    portfolioItem2,
    portfolioItem3,
  ];

  const renderPortfolioItems = (): JSX.Element[] => {
    return portfolioItems.map((item, index) => {
      if (!item) return <></>;
      const { title, description, role, feedback, imgSrc, viewLink, codeLink } =
        item;
      return (
        <PortfolioItem
          key={`portfolio-item-${index}`}
          title={title}
          description={description}
          role={role}
          feedback={feedback || ""}
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
