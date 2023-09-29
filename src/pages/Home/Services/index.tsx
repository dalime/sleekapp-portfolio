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
    <Section>
      <Subheading>A Comprehensive Development Agency</Subheading>
      <Wrapper style={{ flexDirection: isSmallScreen ? "column" : "row" }}>
        <Service
          title="Design"
          imgSrc="https://sleekapp.io/wp-content/uploads/2023/07/app-design-2-768x511.jpeg"
          description="App and web design services that combine creativity and user-centric principles. Our team crafts visually stunning interfaces that engage users, ensuring seamless experiences and captivating designs for your digital presence."
        />
        <Service
          title="Development"
          imgSrc="https://sleekapp.io/wp-content/uploads/2023/07/app-development-1-768x768.jpeg"
          description="Top-notch app and web development services, creating robust and scalable solutions. Our expert team leverages the latest technologies to build customized applications and websites that convert to business growth."
        />
        <Service
          title="Copywriting"
          imgSrc="https://sleekapp.io/wp-content/uploads/2023/07/copywriting-768x549.jpg"
          description="Compelling app and website copywriting services. We craft persuasive and engaging content that captivates users, communicates brand messages effectively, and drives conversions, ensuring your digital presence stands out from the competition."
        />
      </Wrapper>
    </Section>
  );
}

export default Services;
