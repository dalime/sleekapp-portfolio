import React, { CSSProperties, ReactNode } from "react";

// Components
import HeaderMenu from "../HeaderMenu";
import Background from "../Background";

// Styles
import { Div, Body } from "./index.styles";

interface Props {
  testId?: string;
  children?: ReactNode | ReactNode[];
  style?: CSSProperties;
}

function Page({ testId, children, style }: Props) {
  return (
    <Div data-testid={testId || ""} style={style || {}}>
      <HeaderMenu />
      <Body>{children}</Body>
      <Background />
    </Div>
  );
}

export default Page;
