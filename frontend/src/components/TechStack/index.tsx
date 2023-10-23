import React, { CSSProperties, ReactNode, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { SxProps, Button } from "@mui/material";
import { yellow } from "@mui/material/colors";

// Helpers
import { navigateToUrl } from "../../helpers";

// Components
import Section from "../Section";
import { Paragraph, Subheading } from "../fonts";

// Styles
import { Rows, Column, TechWrapper, TechText, TechImg } from "./index.styles";

interface SubHeadProps {
  isMobile: boolean;
  children?: ReactNode | ReactNode[];
}

/**
 * Subheading with mobile style
 * @param isMobile boolean
 * @param children ReactNode | ReactNode[] | undefined
 * @returns
 */
function SubHead({ isMobile, children }: SubHeadProps): JSX.Element {
  return (
    <Subheading sx={isMobile ? { fontSize: 30 } : {}}>{children}</Subheading>
  );
}

interface SectionCutProps {
  children?: ReactNode | ReactNode[];
  style?: CSSProperties;
}

/**
 * Subheading with mobile style
 * @param children ReactNode | ReactNode[] | undefined
 * @param style CSSProperties | undefined
 * @returns
 */
function SectionCut({ children, style }: SectionCutProps): JSX.Element {
  const baseStyle = { paddingTop: "7.5%", paddingBottom: "7.5%" };

  return (
    <Section style={style ? { ...baseStyle, ...style } : baseStyle}>
      {children}
    </Section>
  );
}

interface Props {
  noAction?: boolean;
}

function TechStack({ noAction }: Props) {
  // Hooks
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // State
  const [techHovering, setTechHovering] = useState<string | null>(null);

  // Style
  const paragraphSx: SxProps = {
    textAlign: "center",
    paddingLeft: "10%",
    paddingRight: "10%",
    marginTop: 2,
  };
  const paddingSide = {
    paddingLeft: "10%",
    paddingRight: "10%",
  };
  const columnCenter: CSSProperties = {
    display: "fex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
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
    <SectionCut
      style={{
        ...paddingSide,
        ...columnCenter,
        marginBottom: 30,
      }}
    >
      <SubHead isMobile={isMobile}>Our Specialized Tech Stack</SubHead>
      <Paragraph sx={paragraphSx}>
        We have a core tech stack in which we specialize, ensuring world-class
        quality with it.
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
        accordingly.
      </Paragraph>
      {!noAction && (
        <Button
          className="pulse"
          variant="contained"
          color="primary"
          onClick={() =>
            process.env.REACT_APP_CALL_LINK
              ? navigateToUrl(process.env.REACT_APP_CALL_LINK)
              : {}
          }
          sx={{ marginTop: 5, padding: 2 }}
        >
          Book 1:1 Strategy Call
        </Button>
      )}
    </SectionCut>
  );
}

export default TechStack;
