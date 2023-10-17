import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { Typography, Button } from "@mui/material";

// Components
import { Backdrop } from "../../../components";

// Animations
import * as designJson from "./lottie-jsons/design.json";
import * as developmentJson from "./lottie-jsons/development.json";
import * as copywritingJson from "./lottie-jsons/copywriting.json";

interface Props {
  title: string;
  animationName: string;
  description: string;
}

function Service({ title, animationName, description }: Props) {
  // Hooks
  const isSmallScreen = useMediaQuery({ maxWidth: 1100 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isSuperSmall = useMediaQuery({ maxWidth: 320 });
  const navigate = useNavigate();

  // State
  const [windowWidth, setWindowWidth] = useState<number>(0);

  // Effects
  useEffect(() => {
    const handleResize = (): void => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /**
   * Picks the lottie animation JSON based on the animation name
   * @returns JSON | null
   */
  const pickAnimation = () => {
    switch (animationName) {
      case "design":
        return designJson;
      case "development":
        return developmentJson;
      case "copywriting":
        return copywritingJson;
      default:
        return null;
    }
  };

  // Options for Lottie animation
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: pickAnimation(),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const imageWidth = isSuperSmall
    ? windowWidth * 0.5
    : isMobile
    ? Math.min(windowWidth * 0.6, 300)
    : 300;

  return (
    <Backdrop
      width={
        isSuperSmall
          ? "90%"
          : isMobile
          ? "80%"
          : isSmallScreen
          ? "50%"
          : "calc(100% / 3 - 5%)"
      }
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        height: 500,
        marginLeft: isSuperSmall ? "5%" : isMobile ? "10%" : 0,
        marginBottom: isSmallScreen ? 20 : 0,
      }}
    >
      <Typography
        variant="h3"
        color="primary"
        sx={{ marginTop: 2, marginBottom: 2, fontSize: 30, fontWeight: 500 }}
      >
        {title}
      </Typography>
      {animationName ? (
        <Lottie
          options={defaultOptions}
          height={imageWidth}
          width={imageWidth}
          isStopped={false}
          isPaused={false}
        />
      ) : (
        <div
          style={{
            width: imageWidth,
            height: imageWidth,
            border: "1px solid #e0e0e0",
            borderRadius: 8,
          }}
        />
      )}
      <Typography variant="body2" sx={{ marginTop: 2, marginBottom: 2 }}>
        {description}
      </Typography>
      <Button variant="contained" onClick={() => navigate("portfolio")}>
        See More
      </Button>
    </Backdrop>
  );
}

export default Service;
