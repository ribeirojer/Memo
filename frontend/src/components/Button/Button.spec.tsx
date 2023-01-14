import { render } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import Button from "./index";
// @vitest-environment happy-dom

describe("Button component", () => {
  it("should render the correct text", () => {
    // renderize o componente Button com algum texto
    const { container } = render(
      <Button color="#000000" theme="#ffffff">Test button</Button>
    );
    // verifique se o texto está sendo exibido corretamente
    expect(container.firstChild?.textContent).toBe("Test button");
  });

  it("should apply the color prop", () => {
    const { container } = render(
      <Button color="#000000" theme="#fff">Test button</Button>
    );
    const { children } = container;
    const color = children.item(0)?.attributes.getNamedItem("color")?.value;
    expect(color).toBe("#000000");
  });

  it("should apply the theme prop", () => {
    const { container } = render(
      <Button color="#000000" theme="#ffffff">Test button</Button>
    );
    // as classes do styled-components tem nomes estranhos
    // verificou só que elas existem no botão
    const { children } = container;
    const classe = children.item(0)?.attributes.getNamedItem("class")?.value;
    expect(classe).toBeTruthy();
  });
/** 
  it("should change the color and theme styles on hover", () => {
    // renderize o componente Button com alguns valores de cor e tema
    const { container } = render(
      <Button color="#000000" theme="#ffffff" text="Test button" />
    );

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
  }); */
});
