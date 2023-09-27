import React, { ReactNode } from "react";

import { Wrapper } from "./index.styles";

interface Props {
  children?: ReactNode | ReactNode[];
}

function Section({ children }: Props) {
  return <Wrapper data-testid="section-component">{children}</Wrapper>;
}

export default Section;
