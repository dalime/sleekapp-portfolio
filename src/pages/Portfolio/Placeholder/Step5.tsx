import React from "react";
import { CircularProgress } from "@mui/material";

function Step5() {
  return (
    <div
      style={{
        height: "100%",
        background: "transparent",
        backgroundSize: "auto 100%",
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
        <CircularProgress size={200} />
      </div>
    </div>
  );
}

export default Step5;
