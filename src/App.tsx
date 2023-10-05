import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { grey, yellow } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";

// Pages
import NotFoundPage from "./routes/NotFoundPage";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Blog from "./pages/Blog";

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
  // About
  {
    path: "/about",
    element: <About />,
    errorElement: <NotFoundPage />,
  },
  // Blog
  {
    path: "/blog",
    element: <Blog />,
    errorElement: <NotFoundPage />,
  },
  // Portfolio
  {
    path: "/portfolio",
    element: <Portfolio />,
    errorElement: <NotFoundPage />,
  },
  // Home
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
