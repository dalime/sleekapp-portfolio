import React from "react";
import { animated, useSpring } from "@react-spring/web";
import { Button, Typography } from "@mui/material";
import { yellow } from "@mui/material/colors";

// Helpers
import { navigateToUrl } from "../../helpers";

// Styles
import { HeroWrapper, HeroLeft } from "./index.styles";

// Images
import SleekAppLogo from "../../assets/images/sleekapp-logo.png";

function Hero() {
  const [springs, api] = useSpring(() => ({
    from: { x: -50 },
  }));

  const handleClick = () => {
    api.start({
      from: {
        x: -50,
      },
      to: {
        x: -100,
      },
    });
  };

  return (
    <HeroWrapper>
      <HeroLeft>
        <Typography
          variant="h1"
          sx={{
            fontSize: 30,
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          Sleek App{" "}
          <span style={{ color: yellow[200] }}>Development Agency</span>
        </Typography>
        <Typography variant="h2" sx={{ fontWeight: 500, marginTop: 2 }}>
          Let's Bring Your Vision to{" "}
          <span style={{ color: yellow[500] }}>Life</span>
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          A One-Stop-Shop App Development Agency. We turn visions into reality.
        </Typography>
        <Button
          variant="contained"
          sx={{ marginTop: 4 }}
          onClick={() =>
            navigateToUrl("https://calendly.com/sleekapp/consultation")
          }
        >
          Develop Your App
        </Button>
      </HeroLeft>
      <animated.img
        src={SleekAppLogo}
        alt="Sleek App"
        width={300}
        onClick={handleClick}
        style={{
          width: 300,
          height: "auto",
          ...springs,
        }}
      />
    </HeroWrapper>
  );
}

export default Hero;
