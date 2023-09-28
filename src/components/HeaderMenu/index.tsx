import React, { useState, useEffect } from "react";
import { useMatch } from "react-router-dom";
import { Button } from "@mui/material";

// Styles
import { Wrapper, RightSide, LeftSide, LogoImg } from "./index.styles";
import "./index.css";

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
  const [scrollY, setScrollY] = useState<number>(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarHeight = 70; // Adjust this value as per your navbar height
  const opacity = Math.min(scrollY / navbarHeight, 1);

  return (
    <Wrapper
      data-testid="desktop-navigation"
      className="navbar"
      style={{
        background: `linear-gradient(to bottom, rgba(14, 14, 14, ${opacity}) 0%, rgba(14, 14, 14, ${opacity}) 100%)`,
      }}
    >
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
