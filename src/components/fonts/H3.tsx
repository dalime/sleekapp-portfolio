import React, { ReactNode } from "react";
import { Typography } from "@mui/material";

interface Props {
  children?: ReactNode | ReactNode[];
}

function H3({ children }: Props) {
  return (
    <Typography
      variant="h3"
      sx={{ fontSize: 25, fontWeight: 500, marginBottom: 2 }}
    >
      {children}
    </Typography>
  );
}

export default H3;
