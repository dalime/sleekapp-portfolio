import React from "react";
import { useMediaQuery } from "react-responsive";

// Components
import Service from "./Service";
import { Section, Subheading } from "../../../components";

// Styles
import { Wrapper } from "./index.styles";

function Services() {
  const isSmallScreen = useMediaQuery({ maxWidth: 1100 });

  return (
    <Section
      style={{
        paddingTop: "7.5%",
        paddingBottom: "7.5%",
      }}
    >
      <Subheading>A Comprehensive Development Agency</Subheading>
      <Wrapper style={{ flexDirection: isSmallScreen ? "column" : "row" }}>
        <Service
          title="Design"
          animationName="design"
          description="App and web design services that combine creativity and user-centric principles. Our team crafts visually engaging interfaces with seamless experiences."
        />
        <Service
          title="Development"
          animationName="development"
          description="Our expert team leverages the latest technologies to build customized apps and websites that convert to business growth."
        />
        <Service
          title="Copywriting"
          animationName="copywriting"
          description="Compelling app and website copywriting services. Our team crafts persuasive and engaging content that converts visitors to customers."
        />
      </Wrapper>
    </Section>
  );
}

export default Services;
