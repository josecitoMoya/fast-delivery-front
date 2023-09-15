import FoldingCont from "@/components/FoldingCont";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

const ejemploTasks = [
  { id: "1", dir: "Dir1", state: "Estado1", bg: "BG1" },
  { id: "2", dir: "Dir2", state: "Estado2", bg: "BG2" },
];

describe("FoldingCont Component", () => {
  it("should render correctly the tasks", () => {
    render(<FoldingCont text="Título" position="mx-6" tasks={ejemploTasks} />);

    expect(screen.getByText("Título"));

    expect(screen.getByText("Dir1"));

    expect(screen.getByText("Dir2"));

    expect(screen.getByTestId("arrow"));
  });
  it("should render correctly without tasks", () => {
    render(<FoldingCont text="Título" position="mx-6" tasks={[]} />);

    expect(screen.getByText("sin repartos pendientes"));
  });

  it("should hide tasks on click", async () => {
    render(<FoldingCont text="Título" position="mx-6" tasks={ejemploTasks} />);

    expect(screen.getByTestId("d-none?").className).not.toEqual("d-none");

    await userEvent.click(screen.getByTestId("arrow"));

    expect(screen.getByTestId("d-none?").className).toEqual("d-none");
  });
});
