import React from "react";
import { animated, useSpring } from "@react-spring/web";

// Styles
import { HeroWrapper, HeroLeft } from "./index.styles";

// Images
import SleekAppLogo from "../../assets/images/sleekapp-logo.png";

function Home() {
  const [springs, api] = useSpring(() => ({
    from: { x: 100 },
  }));

  const handleClick = () => {
    api.start({
      from: {
        x: -200,
      },
      to: {
        x: -100,
      },
    });
  };

  return (
    <div>
      <HeroWrapper>
        <HeroLeft>
          <h1>Sleek App</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cum
            nam obcaecati quia ea facere, consequuntur cupiditate beatae aut
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
    </div>
  );
}

export default Home;
