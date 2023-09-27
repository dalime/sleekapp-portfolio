import React from "react";
import { Button } from "@mui/material";

// Styled Components
import { Wrapper, RightSide, LeftSide, LogoImg } from "./index.styles";

// Images
import SleekAppLogo from "../../assets/images/sleekapp-logo.png";

interface MenuItemProps {
  text: string;
}

function MenuItem({ text }: MenuItemProps) {
  return (
    <Button variant="text" sx={{ marginLeft: 1, marginRight: 1 }}>
      {text}
    </Button>
  );
}

function HeaderMenu() {
  return (
    <Wrapper data-testid="desktop-navigation">
      <LeftSide>
        <LogoImg src={SleekAppLogo} alt="Sleek App" />
      </LeftSide>
      <RightSide>
        <MenuItem text="Home" />
        <MenuItem text="About" />
        <MenuItem text="Blog" />
      </RightSide>
    </Wrapper>
  );
}

export default HeaderMenu;
