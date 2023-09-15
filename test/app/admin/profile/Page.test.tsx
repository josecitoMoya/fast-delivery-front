import { render, screen } from "@testing-library/react";
import Profile from "@/app/admin/profile/page";

describe("Profile Page", () => {
  it("should render correctly ", () => {
    render(<Profile />);

    expect(screen.getByTestId("homelogo"));

    expect(screen.getByText("Perfil del repartidor"));

    expect(screen.getByText("Repartos pendientes"));

    expect(screen.getByText("Repartos terminados"));
  });
});
