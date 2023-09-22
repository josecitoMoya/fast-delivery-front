import { render, screen } from "@testing-library/react";
import AddProductContent from "@/content/Add-ProductContent";
import userEvent from "@testing-library/user-event";

describe("AddProductContent Component", () => {
  it("should render correctly and manage changes on date", async () => {
    render(<AddProductContent />);

    const addressInput: HTMLInputElement =
      screen.getByPlaceholderText("Dirección");
    const receiverInput: HTMLInputElement = screen.getByPlaceholderText(
      "Nombre De Quien Recibe"
    );
    const weightInput: HTMLInputElement = screen.getByPlaceholderText(
      "Peso Del Paquete (KG)"
    );

    await userEvent.type(addressInput, "Calle 123");
    await userEvent.type(receiverInput, "Juan");
    await userEvent.type(weightInput, "5");

    expect(addressInput.value).toBe("Calle 123");
    expect(receiverInput.value).toBe("Juan");
    expect(weightInput.value).toBe("5");

    screen.getByText("Agregar");
    expect(screen.getByText("Agregar"));
  });
});
