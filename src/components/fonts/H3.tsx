import React, { CSSProperties, ReactNode } from "react";
import { Typography } from "@mui/material";

interface Props {
  style?: CSSProperties;
  children?: ReactNode | ReactNode[];
}

function H3({ style, children }: Props) {
  return (
    <Typography
      variant="h3"
      sx={{ fontSize: 25, fontWeight: 500, marginBottom: 2 }}
      style={style || {}}
    >
      {children}
    </Typography>
  );
}

export default H3;
