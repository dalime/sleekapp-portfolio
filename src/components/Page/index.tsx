import React, { ReactNode } from "react";

// Components
import HeaderMenu from "../HeaderMenu";
import Background from "../Background";

// Styles
import { Div, Body } from "./index.styles";

interface Props {
  testId?: string;
  children?: ReactNode | ReactNode[];
}

function Page({ testId, children }: Props) {
  return (
    <Div data-testid={testId || ""}>
      <HeaderMenu />
      <Body>{children}</Body>
      <Background />
    </Div>
  );
}

export default Page;
