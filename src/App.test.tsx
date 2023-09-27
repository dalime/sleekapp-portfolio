import React from "react";
import { render, screen } from "@testing-library/react";

// Components
import App from "./App";

test("Renders the app", () => {
  render(<App />);
  const appElement = screen.getByTestId("app");
  expect(appElement).toBeInTheDocument();
});
