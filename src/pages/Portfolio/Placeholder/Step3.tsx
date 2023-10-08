import React from "react";
import { Typography } from "@mui/material";
import { blue, grey } from "@mui/material/colors";

// Assets
import PhoneTransparent from "../../../assets/images/iphone-frame-transparent.png";
import PlaceholderImage from "../../../assets/images/placeholder-image.jpeg";

function Step3() {
  return (
    <div
      style={{
        height: "100%",
        background: "transparent",
        backgroundImage: `url(${PhoneTransparent}`,
        backgroundSize: "auto 100%",
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
          Let's build something cool together...
        </p>
        <img
          src={PlaceholderImage}
          alt="Placeholder"
          style={{ width: 100, height: "auto", borderRadius: 8 }}
        />
      </div>
    </div>
  );
}

export default Step3;
