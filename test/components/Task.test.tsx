import Task from "@/components/Task";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const mockProps = {
  id: "1",
  dir: "Address 1 City 1",
  state: "IN_PROGRESS",
  bg: "green",
};

describe("Task Component", () => {
  it("renders correctly", () => {
    render(<Task {...mockProps} />);
  });
  it("renders with the correct props", () => {
    const { getByText } = render(<Task {...mockProps} />);

    expect(getByText(mockProps.id));
    expect(getByText(mockProps.dir));
  });

  it('hides the trash icon when the state is "TERMINADA"', () => {
    render(<Task {...mockProps} state="TERMINADA" />);

    expect(screen.getByTestId("trash").className).toContain("d-none");
  });

  it("toggles the display class on click", async () => {
    render(<Task {...mockProps} />);

    const cont = screen.getByTestId("task-cont");

    expect(cont.className).not.toContain("d-none");

    await userEvent.click(screen.getByTestId("trash"));

    expect(cont.className).toContain("d-none");
  });
});
