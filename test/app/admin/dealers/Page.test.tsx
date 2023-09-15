import { render, screen } from "@testing-library/react";
import Dealers from "@/app/admin/dealers/page";

describe("Dealers Page", () => {
  it("should render correctly ", () => {
    render(<Dealers />);

    expect(screen.getByTestId("homelogo"));

    expect(screen.getByText("Repartidores"));
  });
});
