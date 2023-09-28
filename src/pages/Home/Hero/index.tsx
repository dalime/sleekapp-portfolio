import React from "react";
import { useMediaQuery } from "react-responsive";
import { animated, useSpring } from "@react-spring/web";

// Components
import MobileHero from "./MobileHero";
import HeroText from "./HeroText";

// Styles
import { HeroWrapper, HeroLeft } from "./index.styles";

// Images
import SleekAppLogo from "../../../assets/images/sleekapp-logo.png";

function Hero() {
  const isMobile = useMediaQuery({ maxWidth: 720 });

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

  if (isMobile) return <MobileHero />;

  return (
    <HeroWrapper>
      <HeroLeft>
        <HeroText />
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
