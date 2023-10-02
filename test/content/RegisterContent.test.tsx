import RegisterContent from "@/content/RegisterContent";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("RegisterContent Component", () => {
  it("should render correctly and manage inputs changes", async () => {
    render(<RegisterContent />);

    const emailInput: HTMLInputElement = screen.getByPlaceholderText(
      "email@contraseña.com"
    );
    const passwordInput: HTMLInputElement =
      screen.getByPlaceholderText("contraseña");
    const nameInput: HTMLInputElement = screen.getByPlaceholderText(
      "introduzca su nombre"
    );
    const lastNameInput: HTMLInputElement = screen.getByPlaceholderText(
      "introduzca su apellido"
    );

    await userEvent.type(emailInput, "correo@ejemplo.com");
    await userEvent.type(passwordInput, "contraseña123");
    await userEvent.type(nameInput, "John");
    await userEvent.type(lastNameInput, "Doe");

    expect(emailInput.value).toBe("correo@ejemplo.com");
    expect(passwordInput.value).toBe("contraseña123");
    expect(nameInput.value).toBe("John");
    expect(lastNameInput.value).toBe("Doe");

    const createButton = screen.getByText("crear");
    userEvent.click(createButton);

    expect(screen.getByText("iniciar sesion"));
  });
});
