import React from "react";
import { Typography } from "@mui/material";
import { blue, grey } from "@mui/material/colors";

// Types
import { StepProps } from "./types";

// Assets
import PhoneTransparent from "../../../assets/images/iphone-frame-transparent.png";
import PlaceholderImage from "../../../assets/images/placeholder-image.jpeg";

// Style
import "./index.css";

function Step3({ phoneDimensions }: StepProps) {
  const { width, height } = phoneDimensions;

  return (
    <div
      style={{
        width: "100%",
        height,
        background: "transparent",
        backgroundImage: `url(${PhoneTransparent}`,
        backgroundSize: `${width}px ${height}px`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% 0",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: width - 30,
            marginLeft: 15,
            marginRight: 15,
          }}
          className="fade-in"
        >
          <Typography
            variant="h2"
            style={{
              fontSize: 30,
              fontWeight: 600,
              color: blue[500],
              textAlign: "center",
            }}
          >
            New App
          </Typography>
          <p style={{ color: grey[500], textAlign: "center" }}>
            Let's build something cool together!
          </p>
          <img
            src={PlaceholderImage}
            alt="Placeholder"
            style={{ width: 100, height: "auto", borderRadius: 8 }}
          />
        </div>
      </div>
    </div>
  );
}

export default Step3;
