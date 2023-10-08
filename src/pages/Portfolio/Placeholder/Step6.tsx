import React from "react";
import { useMediaQuery } from "react-responsive";
import { Upload } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

// Style
import "./index.css";

function Step6() {
  const mobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div
      style={{
        height: "100%",
        background: "transparent",
        backgroundSize: "auto 100%",
      }}
      className="fade-in"
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
        className="move-up"
      >
        <Upload
          fontSize="large"
          style={{
            width: mobile ? 100 : 200,
            height: "auto",
            color: grey[200],
          }}
        />
      </div>
    </div>
  );
}

export default Step6;
