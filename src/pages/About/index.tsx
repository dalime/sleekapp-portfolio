import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Button } from "@mui/material";
import { yellow } from "@mui/material/colors";

// Components
import {
  Page,
  Section,
  MainHeading,
  Paragraph,
  Subheading,
} from "../../components";

// Styles
import {
  OptionsWrapper,
  Rows,
  Column,
  TechWrapper,
  TechImg,
  TechText,
  TeamMemberImg,
} from "./index.styles";
import { navigateToUrl } from "../../helpers";

function About() {
  // Hooks
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // State
  const [started, setStarted] = useState<boolean>(false);

  // Style
  const mainStyle = { color: yellow[300], textAlign: "center" };
  const paddingSide = { paddingLeft: "10%", paddingRight: "10%" };
  const paragraphSx = {
    textAlign: "center",
    paddingLeft: "10%",
    paddingRight: "10%",
    marginTop: 2,
  };

  const renderTech = (
    imgSrc: string,
    name: string,
    noText?: boolean
  ): JSX.Element => (
    <TechWrapper>
      <TechImg src={imgSrc} alt={name} />
      {!noText && <TechText>{name}</TechText>}
    </TechWrapper>
  );

  return (
    <Page>
      <MainHeading sx={isMobile ? { ...mainStyle, fontSize: 30 } : mainStyle}>
        About
      </MainHeading>
      <Paragraph sx={paragraphSx}>
        Sleek App Development Agency was born out of a desire to deliver high
        quality web and mobile apps for clients who want to provide real value
        to customers. We pride ourselves in the work we&apos;ve done so far in
        helping businesses get online.
      </Paragraph>
      <Section style={paddingSide}>
        <Subheading>The Sleek App Process</Subheading>
        <Paragraph sx={paragraphSx}>
          Efficiency is found in repeated systems. At Sleek App, we make
          something as complicated as developing an app a series of processes.
          Here is how we will handle business.
        </Paragraph>
      </Section>
      <Section
        style={{
          ...paddingSide,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TeamMemberImg
          src="https://sleekapp.io/wp-content/uploads/2023/07/danny-avatar-bw-150x150.png"
          alt="Sleek App President"
        />
        <Paragraph sx={paragraphSx}>
          “There is nothing more fulfilling than watching clients&apos; visions
          become a reality” - Danny Lim, President
        </Paragraph>
      </Section>
      <Section
        style={{
          ...paddingSide,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Subheading>World-Class Tech Stack</Subheading>
        <Paragraph sx={paragraphSx}>
          At Sleek App, we pride ourselves on being both specialists and
          adaptable when it comes to technology. Understanding that each project
          has its unique requirements and challenges, our team is adept at
          tailoring our approach to match the exact needs of each client. While
          we can venture into diverse technologies, we have a core tech stack in
          which we specialize, ensuring world-class quality with it.
        </Paragraph>
        <Rows>
          <Column>
            {renderTech(
              "https://sleekapp.io/wp-content/uploads/2023/09/react-icon.png",
              "React"
            )}
            {renderTech(
              "https://sleekapp.io/wp-content/uploads/2023/09/nodejs-icon.png",
              "Node.js"
            )}
            {renderTech(
              "https://sleekapp.io/wp-content/uploads/2023/09/aws-s3-icon-846x1024.png",
              "AWS S3"
            )}
          </Column>
          <Column>
            {renderTech(
              "https://sleekapp.io/wp-content/uploads/2023/09/graphql-icon-1024x1024.png",
              "GraphQL"
            )}
            {renderTech(
              "https://sleekapp.io/wp-content/uploads/2023/09/mongodb-icon-1024x276.png",
              "Mongo DB",
              true
            )}
            {renderTech(
              "https://sleekapp.io/wp-content/uploads/2023/09/aws-ec2-icon.png",
              "AWS EC2"
            )}
          </Column>
          <Column>
            {renderTech(
              "https://sleekapp.io/wp-content/uploads/2023/09/typescript-logo-1024x1024.png",
              "Typescript"
            )}
            {renderTech(
              "https://sleekapp.io/wp-content/uploads/2023/09/postgresql-icon.png",
              "PostgreSQL"
            )}
            {renderTech(
              "https://sleekapp.io/wp-content/uploads/2023/09/aws-ecs-icon.png",
              "AWS ECS"
            )}
          </Column>
        </Rows>
        <Paragraph sx={paragraphSx}>
          Depending on your project needs, we can adjust the technology stack
          accordingly. For example, some of our clients in the past have had
          their backends developed with Python and we found this to be a more
          suitable choice.
        </Paragraph>
        <Button
          variant="contained"
          color="primary"
          onClick={() =>
            process.env.REACT_APP_CALL_LINK
              ? navigateToUrl(process.env.REACT_APP_CALL_LINK)
              : {}
          }
          sx={{ marginTop: 3 }}
        >
          Book 1:1 Strategy Call
        </Button>
      </Section>
      <Section style={paddingSide}>
        <OptionsWrapper>
          {started === false ? (
            <Button
              className="pulse"
              variant="contained"
              onClick={() => setStarted(true)}
            >
              Click Me!
            </Button>
          ) : (
            <Button>Book Consultation</Button>
          )}
        </OptionsWrapper>
      </Section>
    </Page>
  );
}

export default About;
