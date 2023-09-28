import React from "react";
import Typed from "react-typed";
import { Button, Typography } from "@mui/material";
import { yellow } from "@mui/material/colors";

// Helpers
import { navigateToUrl } from "../../helpers";

function HeroText() {
  return (
    <>
      <Typography
        variant="h1"
        sx={{
          fontSize: 30,
          textTransform: "uppercase",
          fontWeight: 600,
        }}
      >
        Sleek App <span style={{ color: yellow[200] }}>Development Agency</span>
      </Typography>
      <Typography variant="h2" sx={{ fontWeight: 500, marginTop: 2 }}>
        <Typed strings={["Let's Bring Your Vision to Life"]} typeSpeed={40} />
      </Typography>
      <Typography variant="body1" sx={{ marginTop: 2 }}>
        A One-Stop-Shop App Development Agency. We turn visions into reality.
      </Typography>
      <Button
        variant="contained"
        sx={{ marginTop: 4 }}
        onClick={() =>
          navigateToUrl("https://calendly.com/sleekapp/consultation")
        }
      >
        Develop Your App
      </Button>
    </>
  );
}

export default HeroText;
