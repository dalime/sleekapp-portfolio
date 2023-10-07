import React from "react";
import Typed from "react-typed";

// Styles
import { PlaceholderWrapper, PlaceholderText } from "./index.styles";

function PlaceholderCoding() {
  const escapeHtml = (unsafe: string) => {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  return (
    <PlaceholderWrapper>
      <PlaceholderText>
        <Typed
          strings={[escapeHtml("<div><h1>Hello World...</h1></div>")]}
          backSpeed={0}
          typeSpeed={40}
          startDelay={2000}
          style={{ textAlign: "left" }}
        />
      </PlaceholderText>
    </PlaceholderWrapper>
  );
}

export default PlaceholderCoding;
