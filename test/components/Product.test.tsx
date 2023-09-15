import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import Product from "@/components/Product";

describe("Product Component", () => {
  it("debería renderizar correctamente con props", () => {
    const dir = "Dirección de ejemplo";
    const cuantity = 5;
    render(<Product dir={dir} cuantity={cuantity} />);

    expect(screen.getByText(dir));

    expect(screen.getByText(cuantity.toString()));
  });
  it("should change the quantity of packages", async () => {
    render(<Product dir="Dirección de ejemplo" cuantity={5} />);

    const incrementButton = screen.getByTestId("increment-button");
    const decrementButton = screen.getByTestId("decrement-button");
    const quantityText = screen.getByTestId("quantity-text");

    expect(quantityText.textContent).toEqual("5");

    await userEvent.click(incrementButton);

    expect(quantityText.textContent).toEqual("5");

    for (let i = 0; i < 8; i++) {
      await userEvent.click(decrementButton);
    }

    expect(quantityText.textContent).toEqual("0");

    await userEvent.click(incrementButton);

    expect(quantityText.textContent).toEqual("1");
  });
});
