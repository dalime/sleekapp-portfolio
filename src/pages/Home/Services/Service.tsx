import React from "react";
import { Paper, Typography, Button } from "@mui/material";

// Styles
import { ServiceImg } from "./index.styles";
import "./index.css";

interface Props {
  title: string;
  imgSrc: string;
  description: string;
}

function Service({ title, imgSrc, description }: Props) {
  return (
    <Paper className="service-wrapper">
      <Typography
        variant="h3"
        color="primary"
        sx={{ marginTop: 2, marginBottom: 2, fontSize: 30, fontWeight: 500 }}
      >
        {title}
      </Typography>
      {imgSrc ? <ServiceImg src={imgSrc} /> : <></>}
      <Typography variant="body2" sx={{ marginTop: 2, marginBottom: 2 }}>
        {description}
      </Typography>
      <Button variant="contained">See More</Button>
    </Paper>
  );
}

export default Service;
