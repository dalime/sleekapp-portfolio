import React from "react";
import Typed from "react-typed";
import { Button, Typography } from "@mui/material";
import { yellow } from "@mui/material/colors";

// Helpers
import { navigateToUrl } from "../../../helpers";

interface Props {
  mobile?: boolean;
}

function HeroText({ mobile }: Props) {
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
      <Typography
        variant="h2"
        sx={{ fontWeight: 500, marginTop: 2, fontSize: mobile ? 40 : "auto" }}
      >
        <Typed
          strings={["Let's Bring Your Vision to Life"]}
          typeSpeed={40}
          style={{ textAlign: mobile ? "center" : "left" }}
        />
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginTop: 2,
          fontSize: 20,
          textAlign: mobile ? "center" : "left",
        }}
      >
        A One-Stop-Shop App Development Agency.{mobile ? <br /> : <></>}We turn
        visions into reality.
      </Typography>
      <Button
        variant="contained"
        sx={{ marginTop: 4 }}
        onClick={() =>
          process.env.REACT_APP_CALL_LINK
            ? navigateToUrl(process.env.REACT_APP_CALL_LINK)
            : {}
        }
      >
        Turn Money Printer On
      </Button>
    </>
  );
}

export default HeroText;
