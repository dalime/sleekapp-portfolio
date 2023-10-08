import React from "react";

// Assets
import PhoneTransparent from "../../../assets/images/iphone-frame-transparent.png";

function Step1() {
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
    ></div>
  );
}

export default Step1;
