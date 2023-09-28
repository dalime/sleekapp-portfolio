import React from "react";
import { useMatch } from "react-router-dom";
import { Button } from "@mui/material";

// Styled Components
import { Wrapper, RightSide, LeftSide, LogoImg } from "./index.styles";

// Images
import SleekAppLogo from "../../assets/images/sleekapp-logo.png";

interface MenuItemProps {
  text: string;
  route: string;
}

function MenuItem({ text, route }: MenuItemProps) {
  const match = useMatch(route);

  return (
    <Button
      variant="text"
      sx={{ marginLeft: 1, marginRight: 1 }}
      color={match ? "primary" : "inherit"}
    >
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
        <MenuItem text="Home" route="/" />
        <MenuItem text="About" route="/about" />
        <MenuItem text="Blog" route="/blog" />
      </RightSide>
    </Wrapper>
  );
}

export default HeaderMenu;
