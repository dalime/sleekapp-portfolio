import React from "react";
import { Paper, Button } from "@mui/material";
import { Code, Visibility } from "@mui/icons-material";

import { navigateToUrl } from "../../helpers";
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
    <Paper
      data-testid="portfolio-item"
      style={{
        width: "80%",
      }}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: 3,
        borderRadius: 5,
      }}
    >
      {imgSrc && (
        <Img
          src={imgSrc}
          alt={`Preview of portfolio item ${title}`}
          className="portfolio-item-img"
        />
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
    </Paper>
  );
}

export default PortfolioItem;
