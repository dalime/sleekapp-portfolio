import React from "react";

// Types
import { StepProps } from "./types";

// Assets
import PhoneTransparent from "../../../assets/images/iphone-frame-transparent.png";

function Step2({ phoneDimensions }: StepProps) {
  const { width } = phoneDimensions;

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
          top: 50,
          transform: "translateX(-50%)",
          width: width - 30,
          marginLeft: 15,
        }}
      >
        <h2 style={{ color: "#FFFFFF" }}>New App</h2>
        <p style={{ color: "#FFFFFF" }}>Let's build something cool together!</p>
      </div>
    </div>
  );
}

export default Step2;
