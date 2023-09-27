import React from "react";
import { animated, useSpring } from "@react-spring/web";

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
        <h1>Sleek App</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cum nam
          obcaecati quia ea facere, consequuntur cupiditate beatae aut
          aspernatur saepe quis assumenda omnis corporis voluptas sit
          consequatur deserunt ipsam?
        </p>
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
