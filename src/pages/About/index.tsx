import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Button } from "@mui/material";
import { yellow } from "@mui/material/colors";

// Helpers
import { navigateToUrl } from "../../helpers";

// Components
import Process from "./Process";
import {
  Page,
  Section,
  MainHeading,
  Paragraph,
  Subheading,
} from "../../components";

// Styles
import {
  Rows,
  Column,
  TechWrapper,
  TechImg,
  TechText,
  TeamMemberImg,
} from "./index.styles";

function About() {
  // Hooks
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // State
  const [imgHovering, setImgHovering] = useState<boolean>(false);
  const [techHovering, setTechHovering] = useState<string | null>(null);

  // Style
  const mainStyle = { color: yellow[300], textAlign: "center" };
  const paddingSide = { paddingLeft: "10%", paddingRight: "10%" };
  const paragraphSx = {
    textAlign: "center",
    paddingLeft: "10%",
    paddingRight: "10%",
    marginTop: 2,
  };

  /**
   * Renders a technology logo and name for the Tech Stack
   * @param imgSrc string
   * @param name strig
   * @returns JSX.Element
   */
  const renderTech = (imgSrc: string, name: string): JSX.Element => (
    <TechWrapper
      onMouseEnter={() => setTechHovering(name)}
      onMouseLeave={() => setTechHovering(null)}
    >
      <TechImg src={imgSrc} alt={name} />
      <TechText style={techHovering === name ? { color: yellow[500] } : {}}>
        {name}
      </TechText>
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
        <Subheading>The Sleek App Journey</Subheading>
        <Paragraph sx={paragraphSx}>
          Efficiency is found in repeated systems. At Sleek App, we make
          something as complicated as developing an app a series of processes.
          Here is how we will handle business.
        </Paragraph>
        <Process />
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
        <Button
          onClick={() =>
            process.env.REACT_APP_LINKEDIN_URL
              ? navigateToUrl(process.env.REACT_APP_LINKEDIN_URL)
              : {}
          }
        >
          <TeamMemberImg
            src={
              imgHovering
                ? "http://sleekapp.io/wp-content/uploads/2023/10/danny-avatar.png"
                : "https://sleekapp.io/wp-content/uploads/2023/07/danny-avatar-bw-150x150.png"
            }
            alt="Sleek App President"
            onMouseEnter={() => setImgHovering(true)}
            onMouseLeave={() => setImgHovering(false)}
          />
        </Button>
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
              "http://sleekapp.io/wp-content/uploads/2023/10/mongodb.png",
              "Mongo DB"
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
    </Page>
  );
}

export default About;
