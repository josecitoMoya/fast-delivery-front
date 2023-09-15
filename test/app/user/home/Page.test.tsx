import { render, screen } from "@testing-library/react";
import Home from "@/app/user/home/page";

describe("Home Page", () => {
  it("should render correctly ", () => {
    render(<Home />);

    expect(screen.getByTestId("homelogo"));

    expect(screen.getByText("Repartos pendientes"));

    expect(screen.getByText("Repartos terminados"));

    expect(screen.getByText("Obtener paquetes"));
  });
});
