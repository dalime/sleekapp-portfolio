import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { animated, useSpring } from "@react-spring/web";
import { Button } from "@mui/material";
import { AppShortcut, Paid } from "@mui/icons-material";
import { green, grey } from "@mui/material/colors";

// Helpers
import { navigateToUrl } from "../../../helpers";

function Step5() {
  const mobile = useMediaQuery({ maxWidth: 768 });

  const [pulse, setPulse] = useState(false);

  const { y } = useSpring({
    from: { y: 0 },
    to: { y: pulse ? 0 : mobile ? 15 : 20 },
    onRest: () => setPulse(!pulse),
    config: {
      tension: mobile ? 15 : 20,
      friction: 0,
    },
  });

  return (
    <div
      style={{
        height: "100%",
        background: "transparent",
        backgroundSize: "auto 100%",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <AppShortcut
          fontSize="large"
          style={{
            width: mobile ? 50 : 150,
            height: "auto",
            color: grey[200],
            marginBottom: 30,
          }}
        />
        <animated.div
          children={
            <Paid
              fontSize="large"
              style={{
                width: mobile ? 50 : 150,
                height: "auto",
                color: green[500],
              }}
            />
          }
          style={{
            width: mobile ? 50 : 150,
            height: "auto",
            transform: y.to((value) => `translate3d(0,${value}px,0)`),
            margin: "auto",
          }}
        />
        <Button
          color="primary"
          variant="contained"
          sx={{ marginTop: 7 }}
          onClick={() =>
            navigateToUrl("https://calendly.com/sleekapp/consultation")
          }
        >
          Turn Money Printer On
        </Button>
      </div>
    </div>
  );
}

export default Step5;
