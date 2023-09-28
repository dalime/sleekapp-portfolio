import React from "react";
import { animated, useSpring } from "@react-spring/web";

// Components
import HeroText from "./HeroText";

// Styles
import { MobileHeroWrapper } from "./index.styles";

// Images
import SleekAppLogo from "../../assets/images/sleekapp-logo.png";

function MobileHero() {
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
    <MobileHeroWrapper>
      <HeroText />
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
