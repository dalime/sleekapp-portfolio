import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Button } from "@mui/material";
import Lottie from "react-lottie";

// Helpers
import { navigateToUrl } from "../../../helpers";

// Styles
import { Wrapper } from "./index.styles";

// Assets
import videoCallJson from "../../../assets/lottie-jsons/video-call.json";

function Process() {
  // Hooks
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isSmallMobile = useMediaQuery({ maxWidth: 562 });

  // State
  const [journeyStep, setJourneyStep] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  // Effects
  useEffect(() => {
    const handleResize = (): void => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Options for Lottie animation
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const imageWidth = isSmallMobile
    ? windowWidth * 0.5
    : isMobile
    ? Math.min(windowWidth * 0.6, 300)
    : 300;

  /**
   * Renders the elements for the current step in the journey
   * @returns JSX.Element
   */
  const renderJourneyStep = (): JSX.Element => {
    switch (journeyStep) {
      case 1:
        // Zoom Call
        return (
          <>
            <Lottie
              options={{ ...defaultOptions, animationData: videoCallJson }}
              height={imageWidth}
              width={imageWidth}
              isStopped={false}
              isPaused={false}
            />
            <Button onClick={() => setJourneyStep(2)}>Zoom Call</Button>
          </>
        );
      case 2:
        // Design Rounds
        return <Button onClick={() => setJourneyStep(3)}>Design Rounds</Button>;
      case 3:
        // Project Management Board
        return (
          <Button onClick={() => setJourneyStep(4)}>
            Project Management Board
          </Button>
        );
      case 4:
        // Version 1 Sprints
        return (
          <Button onClick={() => setJourneyStep(5)}>Version 1 Sprints</Button>
        );
      case 5:
        // Deploy
        return <Button onClick={() => setJourneyStep(6)}>Deploy</Button>;
      case 6:
        // Feature Sprints
        return (
          <Button onClick={() => setJourneyStep(7)}>Feature Sprints</Button>
        );
      case 7:
        // Continued Support
        return (
          <Button onClick={() => setJourneyStep(8)}>Continued Support</Button>
        );
      case 8:
        // Start Now
        return (
          <>
            <Button
              color="primary"
              onClick={() =>
                process.env.REACT_APP_CALL_LINK
                  ? navigateToUrl(process.env.REACT_APP_CALL_LINK)
                  : {}
              }
            >
              Start Now
            </Button>
            <Button color="secondary" onClick={() => setJourneyStep(0)}>
              Start Over
            </Button>
          </>
        );
      default:
        return (
          <Button
            className="pulse"
            variant="outlined"
            onClick={() => setJourneyStep(1)}
            sx={{ padding: 3 }}
          >
            Get Started
          </Button>
        );
    }
  };

  return <Wrapper>{renderJourneyStep()}</Wrapper>;
}

export default Process;
