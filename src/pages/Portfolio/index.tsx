import React from "react";

// Components
import { Page, Section, MainHeading, Subheading } from "../../components";

// Styles
import { Wrapper, ProjectPreview, ProjectsList } from "./index.styles";

function Portfolio() {
  return (
    <Page>
      <Section padding={20}>
        <MainHeading>Our Portfolio</MainHeading>
        <Wrapper>
          <ProjectPreview></ProjectPreview>
          <ProjectsList>
            <Subheading>Projects</Subheading>
          </ProjectsList>
        </Wrapper>
      </Section>
    </Page>
  );
}

export default Portfolio;
