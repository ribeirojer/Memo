import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  it("should render the correct text", () => {
    // renderize o componente Button com algum texto
    render(<Button color="#000000" theme="#ffffff" text="Test button" />);

    // verifique se o texto está sendo exibido corretamente
    expect(screen.getByText("Test button")).toBeInTheDocument();
  });

  it("should have the correct color and theme styles", () => {
    // renderize o componente Button com alguns valores de cor e tema
    render(<Button color="#000000" theme="#ffffff" text="Test button" />);

    // pegue o estilo da cor da primeira div filha do componente Button
    const colorStyle = window.getComputedStyle(
      screen.getByRole("button").firstChild
    ).color;

    // pegue o estilo do tema da primeira div filha do componente Button
    const themeStyle = window.getComputedStyle(
      screen.getByRole("button").firstChild
    ).backgroundColor;

    // verifique se os estilos de cor e tema são os esperados
    expect(colorStyle).toBe("rgb(0, 0, 0)");
    expect(themeStyle).toBe("rgb(255, 255, 255)");
  });

  it("should change the color and theme styles on hover", () => {
    // renderize o componente Button com alguns valores de cor e tema
    render(<Button color="#000000" theme="#ffffff" text="Test button" />);

    // pegue o elemento de botão
    const button = screen.getByRole("button");

    // gere um evento de mouseover no elemento de botão
    fireEvent.mouseOver(button);

    // pegue o estilo da cor da primeira div filha do componente Button
    const colorStyle = window.getComputedStyle(
      screen.getByRole("button").firstChild
    ).color;

    // pegue o estilo do tema da primeira div filha do componente Button
    const themeStyle = window.getComputedStyle(
      screen.getByRole("button").firstChild
    ).backgroundColor;

    // verifique se os estilos de cor e tema são os esperados
    expect(colorStyle).toBe("rgb(255, 255, 255)");
    expect(themeStyle).toBe("rgb(0, 0, 0)");
  });
});
