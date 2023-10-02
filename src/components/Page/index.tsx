import React, { ReactNode } from "react";

import HeaderMenu from "../HeaderMenu";
import Background from "../Background";

interface Props {
  testId?: string;
  children?: ReactNode | ReactNode[];
}

function Page({ testId, children }: Props) {
  return (
    <div data-testid={testId || ""}>
      <HeaderMenu />
      <div style={{ zIndex: 1, position: "sticky" }}>{children}</div>
      <Background />
    </div>
  );
}

export default Page;
