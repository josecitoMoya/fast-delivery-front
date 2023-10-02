import IncidencyContent from "@/content/IncidencyContent";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("IncidencyContent Component", () => {
  it("should render correctly and manage changes on switches", async () => {
    render(<IncidencyContent />);

    expect(screen.getByText("con un margen de 24hs confirma si..."));

    const Switch = screen.getAllByTestId("switch");

    expect(Switch[0].className).toContain("on");

    await userEvent.click(Switch[0]);

    expect(Switch[0].className).toContain("off");
  });
});
