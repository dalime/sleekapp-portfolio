import React from "react";
import { useMediaQuery } from "react-responsive";
import { Typography, Button } from "@mui/material";

// Components
import { Backdrop } from "../../../components";

// Styles
import { ServiceImg } from "./index.styles";

interface Props {
  title: string;
  imgSrc: string;
  description: string;
}

function Service({ title, imgSrc, description }: Props) {
  const isSmallScreen = useMediaQuery({ maxWidth: 1100 });

  return (
    <Backdrop
      width={isSmallScreen ? "50%" : "calc(100% / 3 - 5%)"}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        height: 500,
        marginLeft: isSmallScreen ? "25%" : "auto",
        marginBottom: isSmallScreen ? 20 : "auto",
      }}
    >
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
    </Backdrop>
  );
}

export default Service;
