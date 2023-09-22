import React from "react";
import { render, screen } from "@testing-library/react";
import TaskManager from "@/content/TaskManager";

describe("TaskManager Component", () => {
  it("should render correctly", () => {
    render(<TaskManager />);

    expect(screen.getByText("¡Hola Admin!"));

    expect(screen.getByText("Estos son los pedidos del dia"));

    expect(screen.getAllByTestId("Photo"));

    expect(screen.getByTestId("Week"));
    expect(screen.getByTestId("Details"));
  });
});
