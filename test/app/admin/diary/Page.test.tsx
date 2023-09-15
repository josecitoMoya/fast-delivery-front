import { render, screen } from "@testing-library/react";
import Diary from "@/app/admin/diary/page";

describe("Diary Page", () => {
  it("should render correctly ", () => {
    render(<Diary />);

    expect(screen.getByTestId("homelogo"));

    expect(screen.getByText("Gestionar pedidos"));
  });
});
