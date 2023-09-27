import React from "react";
import { render, screen } from "@testing-library/react";

import PortfolioItem from "./index";

describe("Portfolio item", () => {
  render(<PortfolioItem title="Text" description="lorem ipsum" imgSrc="" />);

  it("Renders", () => {
    const portfolioItem = screen.getByTestId("portfolio-item");
    expect(portfolioItem).toBeInTheDocument();
  });
});
