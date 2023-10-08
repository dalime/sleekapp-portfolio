import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { animated, useSpring } from "@react-spring/web";
import { Button } from "@mui/material";
import { AppShortcut, Paid } from "@mui/icons-material";
import { green, grey } from "@mui/material/colors";

// Helpers
import { navigateToUrl } from "../../../helpers";

// Style
import "./index.css";

function Step7() {
  const mobile = useMediaQuery({ maxWidth: 768 });

  const [pulse, setPulse] = useState<boolean>(false);
  const [showCTA, setShowCTA] = useState<boolean>(false);

  const { y } = useSpring({
    from: { y: 0 },
    to: { y: pulse ? 0 : mobile ? 10 : 15 },
    onRest: () => setPulse(!pulse),
    config: {
      tension: mobile ? 10 : 15,
      friction: 0,
    },
  });

  useEffect(() => {
    setTimeout(() => {
      setShowCTA(true);
    }, 1500);
  }, []);

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
          top: "10%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
        className="fade-in"
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
      </div>
      {showCTA && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "70%",
            transform: "translate(-50%, -70%)",
            textAlign: "center",
          }}
        >
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
            className="pulse"
            sx={{ marginTop: 7 }}
            onClick={() =>
              process.env.REACT_APP_CALL_LINK
                ? navigateToUrl(process.env.REACT_APP_CALL_LINK)
                : {}
            }
          >
            Turn Money Printer On
          </Button>
        </div>
      )}
    </div>
  );
}

export default Step7;
