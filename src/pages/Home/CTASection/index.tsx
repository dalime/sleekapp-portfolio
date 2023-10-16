import React from "react";
import { Button } from "@mui/material";
import { Paid } from "@mui/icons-material";

// Helpers
import { navigateToUrl } from "../../../helpers";

// Components
import { Section } from "../../../components";

// Styles
import "./index.css";

function CTASection() {
  return (
    <Section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 10,
      }}
    >
      <Button
        variant="outlined"
        onClick={() =>
          process.env.REACT_APP_CALL_LINK
            ? navigateToUrl(process.env.REACT_APP_CALL_LINK)
            : {}
        }
        sx={{
          padding: 3,
        }}
        className="pulse"
        startIcon={<Paid fontSize="large" />}
      >
        Turn Money Printer On
      </Button>
    </Section>
  );
}

export default CTASection;
