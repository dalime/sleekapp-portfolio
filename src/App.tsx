import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { grey, yellow } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";

import Home from "./pages/Home";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: yellow[300],
    },
    secondary: {
      main: grey[400],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;
