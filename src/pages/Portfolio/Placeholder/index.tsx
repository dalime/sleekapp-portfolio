import React, { useState, useEffect } from "react";
import Typed from "react-typed";
import { yellow } from "@mui/material/colors";

// Components
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";

// Styles
import { Wrapper, Text, Keyboard, Body } from "./index.styles";

interface Props {
  isMobile?: boolean;
}

function Placeholder({ isMobile }: Props) {
  const [step, setStep] = useState<number>(1);
  const [phoneDimensions, setPhoneDimensions] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });
  const [rebuild, setRebuild] = useState<boolean>(true);

  /**
   * Escapes the HTML renders for strings that go into react-typed
   * @param unsafe string
   * @returns string
   */
  const escapeHtml = (unsafe: string) => {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  useEffect(() => {
    const handleResize = (): void => {
      const newHeight = isMobile
        ? window.innerHeight * 0.75 - 76 - 65 - 50
        : window.innerHeight - 95 - 40 - 90.02 - 50 - 40;
      const newWidth = (newHeight * 1298) / 2592;
      setPhoneDimensions({
        width: newWidth,
        height: newHeight,
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  useEffect(() => {
    if (rebuild) {
      setRebuild(false);
      setTimeout(() => {
        setStep(2);

        setTimeout(() => {
          setStep(3);

          setTimeout(() => {
            setStep(4);

            setTimeout(() => {
              setStep(5);

              setTimeout(() => {
                setStep(6);

                setTimeout(() => {
                  setStep(7);
                }, 1500);
                // Step 6 Delay
              }, 1500);
              // Step 5 Delay
            }, 1250);
            // Step 4 Delay
          }, 2000);
          // Step 3 Delay
        }, 1750);
        // Step 2 Delay
      }, 7000);
    }
  }, [rebuild]);

  return (
    <Wrapper>
      <Body style={{ background: "transparent" }}>
        {step === 7 ? (
          <Step7
            rebuild={() => {
              setStep(1);
              setRebuild(true);
            }}
          />
        ) : step === 6 ? (
          <Step6 />
        ) : step === 5 ? (
          <Step5 />
        ) : step === 4 ? (
          <Step4 phoneDimensions={phoneDimensions} />
        ) : step === 3 ? (
          <Step3 phoneDimensions={phoneDimensions} />
        ) : step === 2 ? (
          <Step2 phoneDimensions={phoneDimensions} />
        ) : step === 1 ? (
          <Step1 phoneDimensions={phoneDimensions} />
        ) : (
          <></>
        )}
      </Body>
      <Keyboard>
        <Text style={isMobile ? { fontSize: 11 } : {}}>
          <span style={{ marginLeft: 10, color: yellow[500] }}>{" > "}</span>
          <Typed
            strings={[
              escapeHtml(
                "<div><h1>New App</h1><p>Let's build something cool together!</p></div>"
              ),
              "makeSleek();",
              "implementFeature();",
              "build();",
              "publish();",
              "Sleek App Complete!",
            ]}
            backSpeed={0}
            typeSpeed={40}
            startDelay={2000}
            style={{ textAlign: "left" }}
            loop={rebuild}
          />
        </Text>
      </Keyboard>
    </Wrapper>
  );
}

export default Placeholder;
