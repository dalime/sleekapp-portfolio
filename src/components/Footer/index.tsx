import React from "react";
import { Button } from "@mui/material";
import { Email, LinkedIn, YouTube } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

// Helpers
import { navigateToUrl } from "../../helpers";

// Components
import { Paragraph } from "../fonts";

// Styles
import { Wrapper, SocialMediaIcons } from "./index.styles";

interface SocialMediaLink {
  name: string;
  action(): void;
  icon: JSX.Element;
}

function Footer() {
  const socialMediaLinks: SocialMediaLink[] = [
    {
      name: "Email",
      action: () =>
        (window.location.href = `mailto:admin@sleekapp.io?subject=${encodeURIComponent(
          "New Inquiry"
        )}`),
      icon: <Email />,
    },
    {
      name: "LinkedIn",
      action: () => navigateToUrl("https://linkedin.com/company/sleek-app-llc"),
      icon: <LinkedIn />,
    },
    {
      name: "YouTube",
      action: () => navigateToUrl("https://www.youtube.com/@sleekapp"),
      icon: <YouTube />,
    },
  ];

  return (
    <Wrapper>
      <SocialMediaIcons>
        {socialMediaLinks.map((link, index) => (
          <Button
            key={`footer-social-media-${index}`}
            variant="text"
            color="secondary"
            onClick={() => link.action()}
          >
            {link.icon}
          </Button>
        ))}
      </SocialMediaIcons>
      <Paragraph sx={{ color: grey[600] }}>
        {new Date().getFullYear()} &copy; Sleek App LLC. All Rights Reserved.
      </Paragraph>
    </Wrapper>
  );
}

export default Footer;
