import React, { ReactNode } from "react";
import { Typography } from "@mui/material";

interface Props {
  children?: ReactNode | ReactNode[];
}

function MainHeading({ children }: Props) {
  return (
    <Typography variant="h1" sx={{ fontWeight: 600, fontSize: 60 }}>
      {children}
    </Typography>
  );
}

export default MainHeading;
