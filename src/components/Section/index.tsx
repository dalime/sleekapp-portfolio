import React, { ReactNode } from "react";

import { Wrapper } from "./index.styles";

interface Props {
  padding?: number;
  children?: ReactNode | ReactNode[];
}

function Section({ padding, children }: Props) {
  return (
    <Wrapper data-testid="section-component" style={padding ? { padding } : {}}>
      {children}
    </Wrapper>
  );
}

export default Section;
