import React from "react";

// Components
import { Page, Section, MainHeading, Subheading } from "../../components";

// Styles
import { Wrapper } from "./index.styles";

function Portfolio() {
  return (
    <Page>
      <Section padding={20}>
        <MainHeading>Our Portfolio</MainHeading>
        <Wrapper>
          <div></div>
          <div>
            <Subheading>Projects</Subheading>
          </div>
        </Wrapper>
      </Section>
    </Page>
  );
}

export default Portfolio;
