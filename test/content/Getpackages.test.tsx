import GetPackages from "@/content/GetPackages";
import { render, screen } from "@testing-library/react";

describe("GetPackages Component", () => {
  it("renders correctly", () => {
    render(<GetPackages tasks={[]} />);
  });
  it("renders the correct number of packages", () => {
    const tasks = [
      { id: "1", adress: "Address 1", city: "City 1" },
      { id: "2", adress: "Address 2", city: "City 2" },
    ];
    render(<GetPackages tasks={tasks} />);

    expect(screen.getByText("2 paquetes"));

    expect(screen.queryAllByTestId("task")).toHaveLength(2);
  });
  it("renders correctly without packages", () => {
    render(<GetPackages tasks={[]} />);

    expect(screen.getByText("0 paquetes"));

    expect(screen.queryAllByTestId("task")).toHaveLength(0);
  });
});
