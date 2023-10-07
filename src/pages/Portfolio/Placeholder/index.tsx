import React, { useState, useEffect } from "react";
import Typed from "react-typed";

// Components
import Step1 from "./Step1";
import Step2 from "./Step2";

// Styles
import { Wrapper, Text, Keyboard, Body } from "./index.styles";

function Placeholder() {
  const [step, setStep] = useState<number>(0);

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
    setTimeout(() => {
      setStep(1);
      setTimeout(() => {
        setStep(2);
      }, 8000);
    }, 9000);
  }, []);

  return (
    <Wrapper>
      <Body style={step === 2 ? { background: "transparent" } : {}}>
        {step === 2 ? <Step2 /> : step === 1 ? <Step1 /> : <></>}
      </Body>
      <Keyboard>
        <Text>
          <span style={{ marginLeft: 10 }}>{" > "}</span>
          <Typed
            strings={
              step === 1
                ? [escapeHtml("makeSleek();")]
                : [
                    escapeHtml(
                      "<div><h1>New App</h1><p>Let's build something cool together...</p></div>"
                    ),
                  ]
            }
            backSpeed={0}
            typeSpeed={40}
            startDelay={2000}
            style={{ textAlign: "left" }}
          />
        </Text>
      </Keyboard>
    </Wrapper>
  );
}

export default Placeholder;
