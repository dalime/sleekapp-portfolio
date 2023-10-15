import React from "react";
import { Star } from "@mui/icons-material";
import { yellow } from "@mui/material/colors";

import { StarsWrapper } from "./index.styles";

interface Props {
  rating: number;
}

function StarRating({ rating }: Props) {
  return (
    <StarsWrapper>
      {[...Array(rating)].map((_, i) => (
        <Star key={`star-${i}`} sx={{ color: yellow[500] }} />
      ))}
    </StarsWrapper>
  );
}

export default StarRating;
