import React from "react";
import { Button } from "@mui/material";
import { RemoveRedEye, Code, Download } from "@mui/icons-material";

// Types
import { PortfolioItemInterface } from "../../types";

// Helpers
import { navigateToUrl } from "../../helpers";

// Styles
import { PreviewBackdrop, PreviewActions } from "./index.styles";

interface Props {
  project: PortfolioItemInterface;
}

function PreviewOverlay({ project }: Props) {
  const { viewLink, codeLink } = project;

  return (
    <PreviewBackdrop>
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
            navigateToUrl("https://calendly.com/sleekapp/consultation")
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
