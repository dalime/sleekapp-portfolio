import React from "react";

import { Wrapper, RightSide, LeftSide } from "./index.styles";

function HeaderMenu() {
  return (
    <Wrapper data-testid="desktop-navigation">
      <LeftSide>Hello</LeftSide>
      <RightSide>World</RightSide>
    </Wrapper>
  );
}

export default HeaderMenu;
