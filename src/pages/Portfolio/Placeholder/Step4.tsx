import React from "react";
import { Typography, Button } from "@mui/material";
import { Google, Facebook, Email } from "@mui/icons-material";
import { blue, grey } from "@mui/material/colors";

// Types
import { StepProps } from "./types";

// Assets
import PhoneTransparent from "../../../assets/images/iphone-frame-transparent.png";
import PlaceholderImage from "../../../assets/images/placeholder-image.jpeg";

function Step4({ phoneDimensions }: StepProps) {
  const { width, height } = phoneDimensions;

  /**
   * Renders a social media button
   * @param Icon JSX.Element
   * @returns JSX.Element
   */
  const renderButton = (Icon: JSX.Element): JSX.Element => (
    <Button variant="contained" color="info" sx={{ margin: 0.5 }}>
      {Icon}
    </Button>
  );

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
          <div style={{ marginTop: 20 }}>
            {renderButton(<Google />)}
            {renderButton(<Facebook />)}
            {renderButton(<Email />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step4;
