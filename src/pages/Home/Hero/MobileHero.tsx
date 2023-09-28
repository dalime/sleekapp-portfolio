import React from "react";
import { animated, useSpring } from "@react-spring/web";

// Components
import HeroText from "./HeroText";

// Styles
import { MobileHeroWrapper, MobileHeroTextWrapper } from "./index.styles";

// Images
import SleekAppLogo from "../../../assets/images/sleekapp-logo.png";

function MobileHero() {
  const [springs, api] = useSpring(() => ({
    from: { y: 0 },
  }));

  const handleClick = () => {
    api.start({
      from: {
        y: 0,
      },
      to: {
        y: -50,
      },
    });
  };

  return (
    <MobileHeroWrapper>
      <MobileHeroTextWrapper>
        <HeroText mobile />
      </MobileHeroTextWrapper>
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
    </MobileHeroWrapper>
  );
}

export default MobileHero;
