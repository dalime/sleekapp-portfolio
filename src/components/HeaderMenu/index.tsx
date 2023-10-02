import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

// Components
import CustomMenuItem from "./CustomMenuItem";

// Styles
import { Wrapper, RightSide, LeftSide, LogoImg } from "./index.styles";
import "./index.css";

// Images
import SleekAppLogo from "../../assets/images/sleekapp-logo.png";
import MobileMenu from "../MobileMenu";

function HeaderMenu() {
  const [scrollY, setScrollY] = useState<number>(0);
  const isMobile = useMediaQuery({ maxWidth: 720 });

  /**
   * Sets scrollY state to scroll position to smoothly show linear gradient background
   */
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarHeight = 70;
  const opacity = Math.min(scrollY / navbarHeight, 1);

  const HeaderMenuBody: JSX.Element = (
    <>
      <LeftSide>
        <LogoImg src={SleekAppLogo} alt="Sleek App" />
      </LeftSide>
      <RightSide>
        <CustomMenuItem text="Home" route="/" />
        <CustomMenuItem text="About" route="/about" />
        <CustomMenuItem text="Portfolio" route="/portfolio" />
        <CustomMenuItem text="Blog" route="/blog" />
      </RightSide>
    </>
  );

  return (
    <Wrapper
      data-testid="desktop-navigation"
      className="navbar"
      style={{
        background: `linear-gradient(to bottom, rgba(14, 14, 14, ${opacity}) 0%, rgba(14, 14, 14, ${opacity}) 100%)`,
        justifyContent: isMobile ? "flex-end" : "space-between",
        width: isMobile ? "100vw" : "calc(100vw - 40px)",
      }}
    >
      {isMobile ? <MobileMenu /> : HeaderMenuBody}
    </Wrapper>
  );
}

export default HeaderMenu;
