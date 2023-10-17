import React from "react";
import { useMediaQuery } from "react-responsive";
import { Button } from "@mui/material";
import { yellow } from "@mui/material/colors";

// Components
import { Page, MainHeading, Paragraph } from "../../components";

// Styles
import { OptionsWrapper } from "./index.styles";

function About() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const mainStyle = { color: yellow[300], textAlign: "center" };

  return (
    <Page>
      <MainHeading sx={isMobile ? { ...mainStyle, fontSize: 30 } : mainStyle}>
        About
      </MainHeading>
      <Paragraph
        sx={{
          textAlign: "center",
          paddingLeft: "10%",
          paddingRight: "10%",
          marginTop: 2,
        }}
      >
        Sleek App is a comprehensive App Development Agency that provides
        Design, Development, and Copywriting services to help you launch your
        digital product from start to finish!
      </Paragraph>
      <OptionsWrapper>
        <Button className="pulse" variant="contained">
          Click Me!
        </Button>
      </OptionsWrapper>
    </Page>
  );
}

export default About;
