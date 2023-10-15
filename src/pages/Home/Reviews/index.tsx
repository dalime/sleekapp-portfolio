import React from "react";
import { Button } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

// Animated Slider
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import horizontalCss from "react-animated-slider/build/horizontal.css";

// Types
import { PortfolioItemInterface } from "../../../types";

// Components
import { Subheading, H3, Paragraph, Backdrop } from "../../../components";

// Styles
import "./index.css";
import { navigateToUrl } from "../../../helpers";

function SliderButton(left: boolean): JSX.Element {
  return (
    <Button variant="text">
      {left ? (
        <ChevronLeft fontSize="large" style={{ color: "#ffffff !important" }} />
      ) : (
        <ChevronRight
          fontSize="large"
          style={{ color: "#ffffff !important" }}
        />
      )}
    </Button>
  );
}

function Reviews() {
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

  return (
    <>
      <Subheading>What Our Clients Say</Subheading>
      <Slider
        classNames={horizontalCss}
        prevButton={SliderButton(true)}
        nextButton={SliderButton(false)}
      >
        {portfolioItems.map((item, index) => {
          if (!item) return <></>;
          const { title, description, imgSrc, viewLink } = item;
          return (
            <div
              key={`client-review-${index}`}
              style={{
                background: `url('${imgSrc}') no-repeat center center`,
              }}
            >
              <Backdrop className="center">
                <H3>{title}</H3>
                <Paragraph>{description}</Paragraph>
                <Button
                  variant="contained"
                  onClick={() => (viewLink ? navigateToUrl(viewLink) : {})}
                >
                  View
                </Button>
              </Backdrop>
            </div>
          );
        })}
      </Slider>
    </>
  );
}

export default Reviews;
