import userEvent from "@testing-library/user-event";
import Details from "@/components/Details";
import { render, screen } from "@testing-library/react";

describe("Details Component", () => {
  it("should render correctly", () => {
    render(<Details />);
    expect(screen.getByText("Detalles"));
    expect(screen.getByText("03/01/23"));
    expect(screen.getByText("repartidores"));
    expect(screen.getByText("paquetes"));
  });

  it("should change class on event", async () => {
    render(<Details />);

    expect(screen.getByTestId("testCont").className).toBe("");
    await userEvent.click(screen.getByTestId("arrow"));
    expect(screen.getByTestId("testCont").className).toBe("d-none");
    await userEvent.click(screen.getByTestId("arrow"));
    expect(screen.getByTestId("testCont").className).toBe("");
  });
});
