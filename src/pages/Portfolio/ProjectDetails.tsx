import React, { ReactNode } from "react";
import { Button, ButtonGroup } from "@mui/material";
import { Star, Code, Web, Call } from "@mui/icons-material";
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
  const {
    description,
    role,
    results,
    before,
    work,
    approach,
    feedback,
    codeLink,
    viewLink,
  } = project;

  return (
    <ProjectDetailWrapper mobile={isMobile || false}>
      <SubHeading noMargin>Summary</SubHeading>
      <BodyText>{description}</BodyText>
      {role && (
        <H4 style={{ marginTop: 30, color: grey[400] }}>
          Our Role: <span style={{ color: yellow[500] }}>{role}</span>
        </H4>
      )}
      {results && (
        <>
          <SubHeading>Results</SubHeading>
          <BodyText>{results}</BodyText>
        </>
      )}
      {before && (
        <>
          <SubHeading>Before Our Engagement</SubHeading>
          <BodyText>{before}</BodyText>
        </>
      )}
      {work && (
        <>
          <SubHeading>The Work We Did</SubHeading>
          <BodyText>{work}</BodyText>
        </>
      )}
      {approach && (
        <>
          <SubHeading>Our Approach</SubHeading>
          <BodyText>{approach}</BodyText>
        </>
      )}
      {feedback && (
        <>
          <SubHeading>Feedback</SubHeading>
          <StarsWrapper>
            {[...Array(5)].map((_, i) => (
              <Star key={`star-${i}`} sx={{ color: yellow[500] }} />
            ))}
          </StarsWrapper>
          <BodyText>{feedback}</BodyText>
        </>
      )}
      {codeLink ||
        (viewLink && (
          <>
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
                  View Project
                </Button>
              )}
            </ButtonGroup>
          </>
        ))}
      <SubHeading>Get Your Own Sleek App</SubHeading>
      <Button variant="contained" color="primary">
        <Call sx={{ marginRight: 1 }} />
        Book 1:1 Strategy Call
      </Button>
    </ProjectDetailWrapper>
  );
}

export default ProjectDetails;
