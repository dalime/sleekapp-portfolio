import React, { useState } from "react";
import { Button } from "@mui/material";
import { RemoveRedEye, Code, Download } from "@mui/icons-material";

// Types
import { PortfolioItemInterface } from "../../types";

// Helpers
import { navigateToUrl } from "../../helpers";

// Styles
import { PreviewBackdrop, PreviewActions } from "./index.styles";
import "./index.css";

interface Props {
  project: PortfolioItemInterface;
}

function PreviewOverlay({ project }: Props) {
  const [backdropClass, setBackdropClass] = useState<"fade-in" | "fade-out">(
    "fade-out"
  );

  const { viewLink, codeLink } = project;

  return (
    <PreviewBackdrop
      className={backdropClass}
      onMouseEnter={() => setBackdropClass("fade-in")}
      onMouseLeave={() => setBackdropClass("fade-out")}
    >
      <PreviewActions>
        {viewLink && (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigateToUrl(viewLink)}
          >
            <RemoveRedEye style={{ marginRight: 5 }} />
            View Project
          </Button>
        )}
        {codeLink && (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigateToUrl(codeLink)}
          >
            <Code style={{ marginRight: 5 }} />
            View Code
          </Button>
        )}
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: 2 }}
          onClick={() =>
            process.env.REACT_APP_CALL_LINK
              ? navigateToUrl(process.env.REACT_APP_CALL_LINK)
              : {}
          }
        >
          <Download style={{ marginRight: 5 }} />
          Get Your Own
        </Button>
      </PreviewActions>
    </PreviewBackdrop>
  );
}

export default PreviewOverlay;
