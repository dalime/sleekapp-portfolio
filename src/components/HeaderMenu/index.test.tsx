import React from "react";
import { render, screen } from "@testing-library/react";

import HeaderMenu from "./index";

describe("Desktop navigation", () => {
  render(<HeaderMenu />);

  it("Renders", () => {
    const headerMenu = screen.getByTestId("desktop-navigation");
    expect(headerMenu).toBeInTheDocument();
  });
});
