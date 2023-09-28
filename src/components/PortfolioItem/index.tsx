import React from "react";
import { Button } from "@mui/material";
import { Code, Visibility } from "@mui/icons-material";

// Helpers
import { navigateToUrl } from "../../helpers";

// Components
import Backdrop from "../Backdrop";

// Styles
import { Img, RightColumn, ButtonWrapper } from "./index.styles";
import "./index.css";

interface Props {
  title: string;
  description: string;
  imgSrc: string;
  viewLink?: string;
  codeLink?: string;
}

function PortfolioItem({
  title,
  description,
  imgSrc,
  viewLink,
  codeLink,
}: Props) {
  return (
    <Backdrop
      data-testid="portfolio-item"
      width="80%"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      {imgSrc && (
        <button
          type="button"
          style={{
            border: "none",
            background: "transparent",
            cursor: "pointer",
          }}
          onClick={() => (viewLink ? navigateToUrl(viewLink) : {})}
        >
          <Img
            src={imgSrc}
            alt={`Preview of portfolio item ${title}`}
            className="portfolio-item-img"
          />
        </button>
      )}
      <RightColumn>
        <h3>{title}</h3>
        <p>{description}</p>
        <ButtonWrapper>
          {codeLink && (
            <Button
              variant="contained"
              startIcon={<Code />}
              onClick={() => navigateToUrl(codeLink)}
            >
              Code
            </Button>
          )}
          {viewLink && (
            <Button
              variant="contained"
              startIcon={<Visibility />}
              onClick={() => navigateToUrl(viewLink)}
            >
              View
            </Button>
          )}
        </ButtonWrapper>
      </RightColumn>
    </Backdrop>
  );
}

export default PortfolioItem;
