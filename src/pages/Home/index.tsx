import React from "react";

// Components
import Hero from "./Hero";
import Services from "./Services";
import Reviews from "./Reviews";
import CTASection from "./CTASection";
import { H3, Page, Paragraph, Section, Subheading } from "../../components";

function Home() {
  return (
    <Page testId="home-page">
      <Hero />
      <Services />
      <CTASection />
      <Reviews />
      <CTASection />
      <Section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "10%",
          paddingRight: "10%",
        }}
      >
        <Subheading>Case Study</Subheading>
        <H3>The Ask: Build a 2D Game Board with React</H3>
        <Paragraph sx={{ marginBottom: 2 }}>
          We were taskd with creating a 2D lofi game with React. The game is
          meant to be played like a board game with selectable board zones and
          the board is meant to be zoomable / pinch and zoom. This is how we
          approached our problem, step by step.
        </Paragraph>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/PjLBs2vAgl8?si=h-MtlY631oOtKxIj"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </Section>
      <CTASection />
    </Page>
  );
}

export default Home;
