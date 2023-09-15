import { render, screen } from "@testing-library/react";
import Packages from "@/app/admin/packages/page";

describe("Packages Page", () => {
  it("should render correctly ", () => {
    render(<Packages />);

    expect(screen.getByTestId("homelogo"));

    expect(screen.getByText("Paquetes"));
  });
});
