import { render, screen } from "@testing-library/react";
import AddProduct from "@/app/admin/add-product/page";

describe("Add Product Page", () => {
  it("should render correctly ", () => {
    render(<AddProduct />);

    expect(screen.getByTestId("homelogo"));

    expect(screen.getByText("Agregar Paquetes"));
  });
});
