import React from "react";
import { Paper } from "@mui/material";

import { Img, RightColumn } from "./index.styles";

interface Props {
  title: string;
  description: string;
  imgSrc: string;
}

function PortfolioItem({ title, description, imgSrc }: Props) {
  return (
    <Paper
      data-testid="portfolio-item"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: 2,
      }}
    >
      {imgSrc && (
        <Img src={imgSrc} alt={`Preview of portfolio item ${title}`} />
      )}
      <RightColumn>
        <h3>{title}</h3>
        <p>{description}</p>
      </RightColumn>
    </Paper>
  );
}

export default PortfolioItem;
