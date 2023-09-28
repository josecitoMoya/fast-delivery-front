import React from "react";
import { render, screen } from "@testing-library/react";
import TravelContent from "@/content/TravelContent";

describe("TravelContent Component", () => {
  it("should render correctly", () => {
    const props = {
      dir: "Dirección de destino",
      id: "12345",
      destinatario: "Juan Pérez",
    };

    render(<TravelContent {...props} />);

    expect(screen.getByText(`${props.dir}`));
    expect(screen.getByText(`${props.id}`));
    expect(screen.getByText(`${props.destinatario}`));
    expect(screen.getByText("Finalizar"));
  });
});
