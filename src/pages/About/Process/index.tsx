import React, { useState, useEffect, ReactNode } from "react";
import { useMediaQuery } from "react-responsive";
import { Button, SxProps } from "@mui/material";
import { CheckBoxOutlineBlank, CheckBox } from "@mui/icons-material";
import Lottie from "react-lottie";

// Helpers
import { navigateToUrl } from "../../../helpers";

// Components
import { H3 } from "../../../components";

// Styles
import { Wrapper } from "./index.styles";

// Assets
import videoCallJson from "../../../assets/lottie-jsons/video-call.json";
import designJson from "../../../assets/lottie-jsons/design.json";
import pmBoardJson from "../../../assets/lottie-jsons/project-mgmt-board.json";
import devJson from "../../../assets/lottie-jsons/development.json";
import agileSprintsJson from "../../../assets/lottie-jsons/agile-sprints.json";
import deployJson from "../../../assets/lottie-jsons/deploy.json";
import supportJson from "../../../assets/lottie-jsons/support.json";

interface TextProps {
  children?: ReactNode | ReactNode[];
}

function Text({ children }: TextProps): JSX.Element {
  return <H3 style={{ marginBottom: 20, marginTop: 20 }}>{children}</H3>;
}

interface NextButtonProps {
  key: string | number;
  toNextStep(): void;
  text?: string;
  sx?: SxProps;
  className?: string;
}

/**
 * Next Step Button
 * @param toNextStep () => void
 * @returns JSX.Element
 */
function NextButton({
  key,
  toNextStep,
  text,
  sx,
  className,
}: NextButtonProps): JSX.Element {
  const [checked, setChecked] = useState<boolean>(false);
  const [hovering, setHovering] = useState<boolean>(false);

  const handleClick = (): void => {
    setChecked(true);
    setTimeout(() => {
      toNextStep();
    }, 750);
  };

  return (
    <Button
      key={key}
      className={className || ""}
      variant="text"
      color={hovering || checked ? "success" : "secondary"}
      startIcon={
        checked ? (
          <CheckBox fontSize="large" style={{ width: 30, height: "auto" }} />
        ) : (
          <CheckBoxOutlineBlank
            fontSize="large"
            style={{ width: 30, height: "auto" }}
          />
        )
      }
      sx={sx ? { ...sx, fontSize: 18 } : { fontSize: 18 }}
      onClick={() => handleClick()}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {text || "Next"}
    </Button>
  );
}

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
   * Renders the necessary Lottie Animation
   * @param jsonPath any
   * @returns JSX.Element
   */
  const renderLottieJson = (jsonPath: any): JSX.Element => (
    <Lottie
      options={{ ...defaultOptions, animationData: jsonPath }}
      height={imageWidth}
      width={imageWidth}
      isStopped={false}
      isPaused={false}
    />
  );

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
            {renderLottieJson(videoCallJson)}
            <Text>1:1 Strategy Call</Text>
            <NextButton key={"step-1"} toNextStep={() => setJourneyStep(2)} />
          </>
        );
      case 2:
        // Design Rounds
        return (
          <>
            {renderLottieJson(designJson)}
            <Text>Design Rounds with Feedback</Text>
            <NextButton key={"step-2"} toNextStep={() => setJourneyStep(3)} />
          </>
        );
      case 3:
        // Project Management Board
        return (
          <>
            {renderLottieJson(pmBoardJson)}
            <Text>Detailed Project Plan with Kanban Board</Text>
            <NextButton key={"step-3"} toNextStep={() => setJourneyStep(4)} />
          </>
        );
      case 4:
        // Version 1 Sprints
        return (
          <>
            {renderLottieJson(devJson)}
            <Text>Development Agile Sprints</Text>
            {renderLottieJson(agileSprintsJson)}
            <Text>Until Version 1.0 Complete</Text>
            <NextButton key={"step-4"} toNextStep={() => setJourneyStep(5)} />
          </>
        );
      case 5:
        // Deploy
        return (
          <>
            {renderLottieJson(deployJson)}
            <Text>Deploy Version 1.0</Text>
            <NextButton key={"step-5"} toNextStep={() => setJourneyStep(6)} />
          </>
        );
      case 6:
        // Feature Sprints
        return (
          <>
            {renderLottieJson(devJson)}
            <Text>Feature Development</Text>
            {renderLottieJson(agileSprintsJson)}
            <Text>In Agile Sprints</Text>
            <NextButton key={"step-6"} toNextStep={() => setJourneyStep(7)} />
          </>
        );
      case 7:
        // Continued Support
        return (
          <>
            {renderLottieJson(supportJson)}
            <Text>Continued Support</Text>
            <NextButton key={"step-7"} toNextStep={() => setJourneyStep(8)} />
          </>
        );
      case 8:
        // Start Now
        return (
          <>
            <NextButton
              key="start-now"
              className="pulse"
              toNextStep={() =>
                process.env.REACT_APP_CALL_LINK
                  ? navigateToUrl(process.env.REACT_APP_CALL_LINK)
                  : {}
              }
              text="Start Now"
              sx={{ padding: 2, marginBottom: 4 }}
            />
            <Button
              color="secondary"
              variant="outlined"
              onClick={() => setJourneyStep(0)}
            >
              View Again
            </Button>
          </>
        );
      default:
        return (
          <Button
            className="pulse"
            variant="contained"
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
