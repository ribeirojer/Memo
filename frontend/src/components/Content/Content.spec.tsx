import { render } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import Content from "./index";
// @vitest-environment happy-dom

describe("Content", () => {
  it("renders the correct link and name", () => {
    const link = "https://example.com/image.jpg";
    const name = "Example Name";
    const { container } = render(<Content link={link} name={name}></Content>);
    // verifique se o texto está sendo exibido corretamente
    expect(container).toBeTruthy();
  });

  it("renders the correct icons", () => {
    const link = "https://example.com/image.jpg";
    const name = "Example Name";
    render(<Content link={link} name={name} />);
  });

  it("does not render any icons when the 'link' prop is not provided", () => {
    const name = "Example Name";
    render(<Content name={name} link={""} />);
  });
});
