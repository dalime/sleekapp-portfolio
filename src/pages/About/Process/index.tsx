import React, { ReactNode } from "react";

// Styles
import { Wrapper } from "./index.styles";

interface Props {
  children?: ReactNode | ReactNode[];
}

function Process({ children }: Props) {
  return <Wrapper>{children}</Wrapper>;
}

export default Process;
