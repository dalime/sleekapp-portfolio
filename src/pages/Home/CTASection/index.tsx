import React from "react";
import { Button } from "@mui/material";

// Helpers
import { navigateToUrl } from "../../../helpers";

// Components
import { Section } from "../../../components";

function CTASection() {
  return (
    <Section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 20,
        paddingBottom: 20,
      }}
    >
      <Button
        variant="contained"
        onClick={() =>
          process.env.REACT_APP_CALL_LINK
            ? navigateToUrl(process.env.REACT_APP_CALL_LINK)
            : {}
        }
      >
        Turn Money Printer On
      </Button>
    </Section>
  );
}

export default CTASection;
