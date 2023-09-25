import ProfileState from "@/content/ProfileState";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("ProfileState Component", () => {
  it("should render correctly", () => {
    render(<ProfileState />);

    expect(screen.getByText("Farid"));
    expect(screen.getByText("ACTIVO"));

    const switchElement = screen.getByTestId("switch");
    expect(switchElement);
  });

  it("should change state on click", async () => {
    render(<ProfileState />);

    const switchElement = screen.getByTestId("switch");

    expect(switchElement.className).toContain("on");

    await userEvent.click(switchElement);

    expect(switchElement.className).toContain("off");
  });
});
