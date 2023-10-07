import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { List, Button } from "@mui/material";
import { Close, Web, Code } from "@mui/icons-material";

// Types
import { PortfolioItemInterface } from "../../types";

// Helpers
import { navigateToUrl } from "../../helpers";

// Components
import ProjectDetails from "./ProjectDetails";
import PortfolioItem from "./PortfolioItem";
import PlaceholderCoding from "./Placeholder";
import { Page, Section, MainHeading, Subheading } from "../../components";

// Styles
import {
  Wrapper,
  ProjectPreview,
  PreviewImg,
  ProjectsList,
  MatrixBackdrop,
} from "./index.styles";
import MobilePortfolio from "./MobilePortfolio";

// Assets
import MatrixBackground from "../../assets/images/matrix-background.gif";

function Portfolio() {
  const isSmallScreen = useMediaQuery({ maxWidth: 900 });

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
    setLoading(true);
    setActiveItem(newItem);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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

  if (isSmallScreen) return <MobilePortfolio />;

  return (
    <Page>
      <Section padding={20}>
        <MainHeading
          align="center"
          style={{ marginBottom: 20, fontSize: isSmallScreen ? 30 : 50 }}
        >
          Portfolio
        </MainHeading>
        <Wrapper>
          <ProjectPreview>
            {loading ? (
              <MatrixBackdrop src={MatrixBackground} alt="Matrix background" />
            ) : activeItem && activeItem.imgSrc ? (
              <PreviewImg
                src={activeItem.imgSrc}
                alt="Preview of the project being hovered"
                loading="lazy"
              />
            ) : (
              <PlaceholderCoding />
            )}
          </ProjectPreview>
          <ProjectsList>
            <Subheading sx={{ paddingRight: 2, paddingTop: 2 }}>
              {activeItem ? (
                <>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingLeft: 20,
                    }}
                  >
                    {activeItem.viewLink && (
                      <Button
                        variant="contained"
                        onClick={() =>
                          activeItem.viewLink
                            ? navigateToUrl(activeItem.viewLink)
                            : {}
                        }
                      >
                        <Web style={{ marginRight: 5 }} />
                        View
                      </Button>
                    )}
                    {activeItem.codeLink && (
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() =>
                          activeItem.codeLink
                            ? navigateToUrl(activeItem.codeLink)
                            : {}
                        }
                      >
                        <Code style={{ marginRight: 5 }} />
                        Code
                      </Button>
                    )}
                    <div style={{ width: "100%", textAlign: "right" }}>
                      {activeItem.title}
                      <Button onClick={() => changeProject(null)}>
                        <Close fontSize="large" />
                      </Button>
                    </div>
                  </div>
                  <ProjectDetails project={activeItem} />
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
          </ProjectsList>
        </Wrapper>
      </Section>
    </Page>
  );
}

export default Portfolio;
