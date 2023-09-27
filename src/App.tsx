import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { grey, yellow } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";

import Home from "./pages/Home";
import NotFoundPage from "./routes/NotFoundPage";

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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFoundPage />,
  },
]);

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
