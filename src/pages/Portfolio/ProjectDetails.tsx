import React from "react";

// Types
import { PortfolioItemInterface } from "../../types";

// Components
import { H3, Paragraph } from "../../components";

// Styles
import { ProjectDetailWrapper } from "./index.styles";

interface Props {
  project: PortfolioItemInterface;
}

function ProjectDetails({ project }: Props) {
  const { description, role, feedback } = project;

  return (
    <ProjectDetailWrapper>
      <H3>Role: {role}</H3>
      <Paragraph>{description}</Paragraph>
      <H3>Feedback</H3>
      <Paragraph>{feedback}</Paragraph>
    </ProjectDetailWrapper>
  );
}

export default ProjectDetails;
