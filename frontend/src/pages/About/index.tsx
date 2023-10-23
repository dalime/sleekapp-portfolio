import React, { CSSProperties, ReactNode, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Button, SxProps } from "@mui/material";
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
  ContactForm,
  TechStack,
} from "../../components";

// Styles
import { TeamMemberImg } from "./index.styles";

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

function About() {
  // Hooks
  const isMedScreen = useMediaQuery({ maxWidth: 1100 });
  const isSmallScreen = useMediaQuery({ maxWidth: 900 });
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // State
  const [imgHovering, setImgHovering] = useState<boolean>(false);

  // Style
  const mainStyle: CSSProperties = { color: yellow[300], textAlign: "center" };
  const paddingSide = {
    paddingLeft: "10%",
    paddingRight: "10%",
  };
  const paragraphSx: SxProps = {
    textAlign: "center",
    paddingLeft: "10%",
    paddingRight: "10%",
    marginTop: 2,
  };
  const columnCenter: CSSProperties = {
    display: "fex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  };

  return (
    <Page>
      <MainHeading sx={isMobile ? { ...mainStyle, fontSize: 30 } : mainStyle}>
        About
      </MainHeading>
      <Paragraph
        sx={{
          ...paragraphSx,
          ...paddingSide,
          width: isMobile
            ? "100%"
            : isSmallScreen
            ? "75%"
            : isMedScreen
            ? "60%"
            : "50%",
          marginLeft: isMobile
            ? 0
            : isSmallScreen
            ? "12.5%"
            : isMedScreen
            ? "20%"
            : "25%",
        }}
      >
        Sleek App was born out of a desire to deliver high quality web and
        mobile apps for clients who want to create real value-providing products
        for customers.
      </Paragraph>
      <SectionCut style={paddingSide}>
        <SubHead isMobile={isMobile}>How Your Journey Will Look</SubHead>
        <Process />
      </SectionCut>
      <SectionCut
        style={{
          ...paddingSide,
          ...columnCenter,
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
          become a reality”
        </Paragraph>
        <Paragraph>- Danny Lim, President</Paragraph>
        <Button
          className="pulse"
          variant="contained"
          color="primary"
          sx={{ marginTop: 5, padding: 2 }}
          onClick={() =>
            process.env.REACT_APP_CALL_LINK
              ? navigateToUrl(process.env.REACT_APP_CALL_LINK)
              : {}
          }
        >
          Book 1:1 Strategy Call
        </Button>
      </SectionCut>
      <TechStack />
      <SectionCut>
        <ContactForm />
      </SectionCut>
    </Page>
  );
}

export default About;
