import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import { Star, Code, Web } from "@mui/icons-material";
import { yellow } from "@mui/material/colors";

// Types
import { PortfolioItemInterface } from "../../types";

// Helpers
import { navigateToUrl } from "../../helpers";

// Components
import { H3, Paragraph } from "../../components";

// Styles
import { ProjectDetailWrapper, StarsWrapper } from "./index.styles";

interface Props {
  project: PortfolioItemInterface;
  isMobile?: boolean;
}

function ProjectDetails({ project, isMobile }: Props) {
  const { description, role, feedback, codeLink, viewLink } = project;

  return (
    <ProjectDetailWrapper mobile={isMobile || false}>
      <H3>Role: {role}</H3>
      <H3>Summary</H3>
      <Paragraph>{description}</Paragraph>
      <H3>State before working</H3>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, ullam
        maiores magnam doloremque et cupiditate ut harum saepe.
      </Paragraph>
      <H3>What We Did</H3>
      <Paragraph>
        Lorem ipsum in necessitatibus eius non facilis a ducimus reprehenderit
        dicta commodi voluptates molestiae.
      </Paragraph>
      <H3>Feedback</H3>
      <StarsWrapper>
        {[...Array(5)].map((_, i) => (
          <Star key={`star-${i}`} sx={{ color: yellow[500] }} />
        ))}
      </StarsWrapper>
      <Paragraph>{feedback}</Paragraph>
      <ButtonGroup>
        {codeLink && (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigateToUrl(codeLink)}
          >
            <Code sx={{ marginRight: 2 }} />
            Source Code
          </Button>
        )}
        {viewLink && (
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigateToUrl(viewLink)}
          >
            <Web sx={{ marginRight: 2 }} />
            Deployed Project
          </Button>
        )}
      </ButtonGroup>
    </ProjectDetailWrapper>
  );
}

export default ProjectDetails;
