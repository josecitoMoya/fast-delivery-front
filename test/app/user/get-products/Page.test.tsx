import GetProducts from "@/app/user/get-products/page";
import { render, screen } from "@testing-library/react";

describe("Get-Products Page", () => {
  it("should render correctly ", () => {
    render(<GetProducts />);

    expect(screen.getByTestId("homelogo"));

    expect(screen.getByText("Obtener paquetes"));

    expect(screen.getByText("Iniciar jornada"));
  });
});
