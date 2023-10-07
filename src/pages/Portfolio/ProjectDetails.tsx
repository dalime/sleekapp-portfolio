import React, { ReactNode } from "react";
import { Button, ButtonGroup } from "@mui/material";
import { Star, Code, Web } from "@mui/icons-material";
import { yellow, grey } from "@mui/material/colors";

// Types
import { PortfolioItemInterface } from "../../types";

// Helpers
import { navigateToUrl } from "../../helpers";

// Components
import { H3, H4, Paragraph } from "../../components";

// Styles
import { ProjectDetailWrapper, StarsWrapper } from "./index.styles";

interface SubHeadingProps {
  noMargin?: boolean;
  children?: ReactNode | ReactNode[];
}

function SubHeading({ noMargin, children }: SubHeadingProps): JSX.Element {
  const baseStyle = { color: grey[200] };
  return (
    <H3 style={noMargin ? baseStyle : { ...baseStyle, marginTop: 30 }}>
      {children}
    </H3>
  );
}

interface BodyTextProps {
  children?: ReactNode | ReactNode[];
}

function BodyText({ children }: BodyTextProps): JSX.Element {
  return <Paragraph sx={{ color: grey[400] }}>{children}</Paragraph>;
}

interface Props {
  project: PortfolioItemInterface;
  isMobile?: boolean;
}

function ProjectDetails({ project, isMobile }: Props) {
  const { description, role, feedback, codeLink, viewLink } = project;

  return (
    <ProjectDetailWrapper mobile={isMobile || false}>
      <SubHeading noMargin>Summary</SubHeading>
      <BodyText>{description}</BodyText>
      {role && (
        <H4 style={{ marginTop: 30, color: grey[400] }}>
          Our Role: <span style={{ color: yellow[500] }}>{role}</span>
        </H4>
      )}
      <SubHeading>Results</SubHeading>
      <BodyText>
        Because of our work, [App Name] now has 250+ daily active users
      </BodyText>
      <SubHeading>State Before Work</SubHeading>
      <BodyText>
        When we joined the project, [App Name] was not even built yet
      </BodyText>
      <SubHeading>What We Did</SubHeading>
      <BodyText>
        We buitl a version 1.0 of [App Name] from start to finish
      </BodyText>
      <SubHeading>Our Approach</SubHeading>
      <BodyText>
        We had to get creative to build [App Name], so we employed [Package
        Name] NPM package and inputted custom props
      </BodyText>
      <SubHeading>Feedback</SubHeading>
      <StarsWrapper>
        {[...Array(5)].map((_, i) => (
          <Star key={`star-${i}`} sx={{ color: yellow[500] }} />
        ))}
      </StarsWrapper>
      <BodyText>{feedback}</BodyText>
      <SubHeading>Check It Out</SubHeading>
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
