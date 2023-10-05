import React, { useState } from "react";
import { List, Button } from "@mui/material";
import { Close } from "@mui/icons-material";

// Types
import { PortfolioItemInterface } from "../../types";

// Components
import ProjectDetails from "./ProjectDetails";
import PortfolioItem from "./PortfolioItem";
import { Page, Section, MainHeading, Subheading } from "../../components";

// Styles
import {
  MobileWrapper,
  MobileProjectPreview,
  MobilePreviewImg,
  MobileProjectsList,
} from "./index.styles";

function MobilePortfolio() {
  const [hoveringItem, setHoveringItem] = useState<number | null>(null);
  const [activeItem, setActiveItem] = useState<PortfolioItemInterface | null>(
    null
  );

  /**
   * Renders portfolio items
   * @returns JSX.Element[]
   */
  const renderPortfolioItems = (): JSX.Element[] => {
    const item1 = process.env.REACT_APP_PORTFOLIO_ITEM_1 || null;
    const item2 = process.env.REACT_APP_PORTFOLIO_ITEM_2 || null;
    const item3 = process.env.REACT_APP_PORTFOLIO_ITEM_3 || null;
    const items = [];
    if (item1) items.push(item1);
    if (item2) items.push(item2);
    if (item3) items.push(item3);

    return items.map((item, index) => {
      if (!item) return <></>;
      const portfolioItem = JSON.parse(item) as PortfolioItemInterface;
      return (
        <PortfolioItem
          key={`portfolio-list-item-${index}`}
          index={index}
          portfolioItem={portfolioItem}
          hoveringItem={hoveringItem}
          setHoveringItem={setHoveringItem}
          setActiveItem={setActiveItem}
        />
      );
    });
  };

  return (
    <Page>
      <Section padding={20}>
        <MainHeading align="center" style={{ marginBottom: 20, fontSize: 36 }}>
          Our Portfolio
        </MainHeading>
        <MobileWrapper>
          <MobileProjectPreview>
            {activeItem && activeItem.imgSrc && (
              <MobilePreviewImg
                src={activeItem.imgSrc}
                alt="Preview of the project being hovered"
              />
            )}
          </MobileProjectPreview>
          <MobileProjectsList>
            <Subheading sx={{ paddingRight: 2, paddingTop: 2 }}>
              {activeItem ? (
                <>
                  <div style={{ width: "100%", textAlign: "right" }}>
                    {activeItem.title}
                    <Button onClick={() => setActiveItem(null)}>
                      <Close />
                    </Button>
                  </div>
                  <ProjectDetails project={activeItem} isMobile />
                </>
              ) : (
                "Projects"
              )}
            </Subheading>
            {activeItem ? (
              <></>
            ) : (
              <List dense={false} sx={{ width: "100%" }}>
                {renderPortfolioItems()}
              </List>
            )}
          </MobileProjectsList>
        </MobileWrapper>
      </Section>
    </Page>
  );
}

export default MobilePortfolio;
