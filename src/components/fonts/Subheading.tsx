import React, { ReactNode } from "react";
import { Typography } from "@mui/material";

interface Props {
  children?: ReactNode | ReactNode[];
}

function Subheading({ children }: Props) {
  return (
    <Typography
      variant="h2"
      color="inherit"
      sx={{
        fontSize: 40,
        fontWeight: 600,
        textAlign: "center",
        marginBottom: 5,
      }}
    >
      {children}
    </Typography>
  );
}

export default Subheading;
