import { render, screen } from "@testing-library/react";
import Incidency from "@/app/user/incidency/page";

describe("Incidency Page", () => {
  it("should render correctly ", () => {
    render(<Incidency />);

    expect(screen.getByTestId("homelogo"));

    expect(screen.getByText("reporte de incidencia"));
  });
});
