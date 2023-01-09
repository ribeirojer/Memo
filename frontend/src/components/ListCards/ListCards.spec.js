import React from "react";
import { render, screen, act } from "@testing-library/react";
import ListCards from "./ListCards";

describe("ListCards", () => {
  it("renders loading message while data is being fetched", () => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      })
    );

    render(<ListCards editCard={jest.fn()} removeCard={jest.fn()} />);

    expect(screen.getByText("carregando...")).toBeInTheDocument();
  });

  it("renders an error message when there is an error fetching the data", () => {
    jest.spyOn(global, "fetch").mockImplementation(() => Promise.reject());

    render(<ListCards editCard={jest.fn()} removeCard={jest.fn()} />);

    expect(screen.getByText("Houve um problema...")).toBeInTheDocument();
  });

  it("renders the correct data", async () => {
    const mockData = [
      {
        _id: "123",
        question: "Example Question",
        response: "Example Response",
        subject: "Example Subject",
      },
    ];
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );

    render(<ListCards editCard={jest.fn()} removeCard={jest.fn()} />);

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(screen.getByText("Example Question")).toBeInTheDocument();
    expect(screen.getByText("Example Response")).toBeInTheDocument();
    expect(screen.getByText("Example Subject")).toBeInTheDocument();
  });

  it("calls the editCard function when the edit button is clicked", () => {
    const editCard = jest.fn();
    const removeCard = jest.fn();
    const mockData = [
      {
        _id: "123",
        question: "Example Question",
        response: "Example Response",
        subject: "Example Subject",
      },
    ];
    render(<ListCards data={mockData} editCard={editCard} removeCard={removeCard} />);

    screen.getByText("Editar").click();

    expect(editCard).toHaveBeenCalledWith("123");
  });

  it("calls the removeCard function when the delete button is clicked", () => {
    const editCard = jest.fn();
    const removeCard = jest.fn();
    const mockData = [
      {
        _id: "123",
        question: "Example Question",
        response: "Example Response",
        subject: "Example Subject",
      },
    ];
    render(<ListCards data={mockData} editCard={editCard} removeCard={removeCard} />);

    screen.getByText("Excluir").click();

    expect(removeCard).toHaveBeenCalledWith("123");
  });

  it("renders the correct number of cards", () => {
    const mockData = [
      {
        _id: "123",
        question: "Example Question",
        response: "Example Response",
        subject: "Example Subject",
      },
      {
        _id: "456",
        question: "Another Example Question",
        response: "Another Example Response",
        subject: "Another Example Subject",
      },
    ];
    render(<ListCards data={mockData} editCard={jest.fn()} removeCard={jest.fn()} />);

    const cards = screen.getAllByTestId("card");

    expect(cards).toHaveLength(2);
  });
  
  it("calls the editCard function when the edit button is clicked", () => {
    const editCard = jest.fn();
    const removeCard = jest.fn();
    const mockData = [
      {
        _id: "123",
        question: "Example Question",
        response: "Example Response",
        subject: "Example Subject",
      },
    ];
    render(<ListCards data={mockData} editCard={editCard} removeCard={removeCard} />);

    screen.getByText("Editar").click();

    expect(editCard).toHaveBeenCalledWith("123");
  });

  it("renders the correct question, response, and subject for each card", () => {
    const mockData = [
      {
        _id: "123",
        question: "Example Question",
        response: "Example Response",
        subject: "Example Subject",
      },
      {
        _id: "456",
        question: "Another Example Question",
        response: "Another Example Response",
        subject: "Another Example Subject",
      },
    ];
    render(<ListCards data={mockData} editCard={jest.fn()} removeCard={jest.fn()} />);

    screen.getByText("Example Question");
    screen.getByText("Example Response");
    screen.getByText("Example Subject");
    screen.getByText("Another Example Question");
    screen.getByText("Another Example Response");
    screen.getByText("Another Example Subject");
  });

  it("renders a loading message when data is not yet available", () => {
    render(<ListCards data={null} editCard={jest.fn()} removeCard={jest.fn()} />);

    screen.getByText("carregando...");
  });

  it("renders an error message if there is a problem fetching the data", () => {
    render(<ListCards data={null} error={true} editCard={jest.fn()} removeCard={jest.fn()} />);

    screen.getByText("Houve um problema...");
  });
});
