import React, { ReactNode } from "react";

import Background from "../Background";

interface Props {
  testId?: string;
  children?: ReactNode | ReactNode[];
}

function Page({ testId, children }: Props) {
  return (
    <div data-testid={testId || ""}>
      <div style={{ zIndex: 1, position: "sticky" }}>{children}</div>
      <Background />
    </div>
  );
}

export default Page;
