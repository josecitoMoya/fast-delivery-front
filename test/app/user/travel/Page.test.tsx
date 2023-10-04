import Travel from "@/app/user/travel/[id]/page";
import { render, screen } from "@testing-library/react";

describe("Travel Page", () => {
  it("should render correctly ", () => {
    render(<Travel />);

    expect(screen.getByTestId("homelogo"));

    expect(screen.getByText("Reparto en curso"));

    expect(screen.getByText("Cancelar entrega"));
  });
});
