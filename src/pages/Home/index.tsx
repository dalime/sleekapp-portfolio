import React from "react";
import { animated, useSpring } from "@react-spring/web";

import SleekAppLogo from "../../assets/images/sleekapp-logo.png";

function Home() {
  const [springs, api] = useSpring(() => ({
    from: { x: 100 },
  }));

  const handleClick = () => {
    api.start({
      from: {
        x: 0,
      },
      to: {
        x: 100,
      },
    });
  };

  return (
    <div>
      <h1>Home</h1>
      <animated.img
        src={SleekAppLogo}
        alt="Sleek App"
        width={200}
        onClick={handleClick}
        style={{
          width: 200,
          height: "auto",
          ...springs,
        }}
      />
    </div>
  );
}

export default Home;
