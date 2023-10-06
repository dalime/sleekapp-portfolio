import React from "react";
import { Star } from "@mui/icons-material";
import { yellow } from "@mui/material/colors";

// Types
import { PortfolioItemInterface } from "../../types";

// Components
import { H3, Paragraph } from "../../components";

// Styles
import { ProjectDetailWrapper, StarsWrapper } from "./index.styles";

interface Props {
  project: PortfolioItemInterface;
  isMobile?: boolean;
}

function ProjectDetails({ project, isMobile }: Props) {
  const { description, role, feedback } = project;

  return (
    <ProjectDetailWrapper mobile={isMobile || false}>
      <H3>Role: {role}</H3>
      <Paragraph>{description}</Paragraph>
      <H3>Feedback</H3>
      <StarsWrapper>
        {[...Array(5)].map((_, i) => (
          <Star key={`star-${i}`} sx={{ color: yellow[500] }} />
        ))}
      </StarsWrapper>
      <Paragraph>{feedback}</Paragraph>
    </ProjectDetailWrapper>
  );
}

export default ProjectDetails;
