import React, { useState } from "react";
import { Button } from "@mui/material";
import {
  VolumeUp,
  VolumeOff,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

// Styles
import { Wrapper } from "./index.styles";

function MusicPlayer() {
  const [playMusic, setPlayMusic] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(true);

  if (!process.env.REACT_APP_MUSIC_NAME) return <></>;

  return (
    <Wrapper>
      <Button
        variant="text"
        sx={{ marginLeft: 2 }}
        onClick={() => setPlayMusic(!playMusic)}
      >
        {playMusic ? <VolumeOff /> : <VolumeUp />}
      </Button>
      {playMusic && (
        <>
          <audio
            className="custom-audio"
            controls
            autoPlay
            loop
            style={
              !visible
                ? { display: "none", marginLeft: 10 }
                : { marginLeft: 10 }
            }
          >
            <source
              src={require(`../../assets/music/${process.env.REACT_APP_MUSIC_NAME}`)}
              type="audio/mpeg"
            />
            Your browser does not support the audio element.
          </audio>
          <Button
            variant="text"
            sx={{ marginLeft: 1 }}
            onClick={() => setVisible(!visible)}
          >
            {visible ? <VisibilityOff /> : <Visibility />}
          </Button>
        </>
      )}
    </Wrapper>
  );
}

export default MusicPlayer;
