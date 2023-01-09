import React from "react";
import { render, screen } from "@testing-library/react";
import Content from "./Content";

describe("Content", () => {
  it("renders the correct link and name", () => {
    const link = "https://example.com/image.jpg";
    const name = "Example Name";
    render(<Content link={link} name={name} />);

    expect(screen.getByAltText(name)).toHaveAttribute("src", link);
    expect(screen.getByText(name)).toBeInTheDocument();
  });

  it("renders the correct icons", () => {
    const link = "https://example.com/image.jpg";
    const name = "Example Name";
    render(<Content link={link} name={name} />);

    expect(screen.getByTestId("link-icon")).toBeInTheDocument();
    expect(screen.getByTestId("arrows-out-simple-icon")).toBeInTheDocument();
  });

  it("does not render any icons when the 'link' prop is not provided", () => {
    const name = "Example Name";
    render(<Content name={name} />);

    expect(screen.queryByTestId("link-icon")).not.toBeInTheDocument();
    expect(
      screen.queryByTestId("arrows-out-simple-icon")
    ).not.toBeInTheDocument();
  });
});
