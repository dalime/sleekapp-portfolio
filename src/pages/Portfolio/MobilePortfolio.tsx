import React, { useState } from "react";
import { List, Button } from "@mui/material";
import { Close } from "@mui/icons-material";
import { yellow } from "@mui/material/colors";

// Types
import { PortfolioItemInterface } from "../../types";

// Components
import ProjectDetails from "./ProjectDetails";
import PortfolioItem from "./PortfolioItem";
import PlaceholderCoding from "./Placeholder";
import PreviewOverlay from "./PreviewOverlay";
import { Page, Section, MainHeading, Subheading } from "../../components";

// Styles
import {
  MobileWrapper,
  MobileProjectPreview,
  PreviewWrapper,
  MobilePreviewImg,
  MobileProjectsList,
  MatrixBackdrop,
} from "./index.styles";
import "./index.css";

// Assets
import MatrixBackground from "../../assets/images/matrix-background.gif";

function MobilePortfolio() {
  const [hoveringItem, setHoveringItem] = useState<number | null>(null);
  const [activeItem, setActiveItem] = useState<PortfolioItemInterface | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(false);

  /**
   * Changes the active item to preview and kicks off the matrix animation to show
   * @param newItem PortfolioItemInterface | null
   */
  const changeProject = (newItem: PortfolioItemInterface | null): void => {
    if (newItem) setLoading(true);
    setActiveItem(newItem);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

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
          setActiveItem={changeProject}
        />
      );
    });
  };

  return (
    <Page>
      <Section padding={20} style={{ paddingTop: 10 }}>
        <MainHeading
          align="center"
          style={{
            marginBottom: 10,
            fontSize: 26,
            color: yellow[300],
          }}
        >
          Portfolio
        </MainHeading>
        <MobileWrapper>
          <MobileProjectPreview>
            {loading ? (
              <MatrixBackdrop src={MatrixBackground} alt="Matrix background" />
            ) : activeItem && activeItem.imgSrc ? (
              <PreviewWrapper>
                {activeItem && <PreviewOverlay project={activeItem} />}
                <MobilePreviewImg
                  src={activeItem.imgSrc}
                  alt="Preview of the project being hovered"
                  loading="lazy"
                />
              </PreviewWrapper>
            ) : (
              <PlaceholderCoding />
            )}
          </MobileProjectPreview>
          <MobileProjectsList>
            <Subheading
              sx={{
                paddingRight: 2,
                paddingTop: 2,
                fontSize: 20,
                marginBottom: 0,
              }}
            >
              {activeItem ? (
                <>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingLeft: 20,
                      width: "100%",
                    }}
                  >
                    {activeItem.title}
                    <Button onClick={() => changeProject(null)}>
                      <Close fontSize="medium" />
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
              <List dense={false} sx={{ width: "100%" }} className="fade-in">
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
