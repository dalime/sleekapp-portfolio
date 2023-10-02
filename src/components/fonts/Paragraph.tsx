import React, { ReactNode } from "react";
import { SxProps, Typography } from "@mui/material";

interface Props {
  sx?: SxProps;
  children?: ReactNode | ReactNode[];
}

function Paragraph({ sx, children }: Props) {
  const baseSx: SxProps = {
    marginBottom: 1,
  };

  return (
    <Typography variant="body1" sx={sx ? { ...baseSx, ...sx } : baseSx}>
      {children}
    </Typography>
  );
}

export default Paragraph;
