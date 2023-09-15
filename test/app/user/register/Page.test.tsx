import Register from "@/app/user/register/page";
import { render, screen } from "@testing-library/react";

describe("Register Page", () => {
  it("should render correctly ", () => {
    render(<Register />);

    expect(screen.getByTestId("homelogo"));

    expect(screen.getByText("Creá tu cuenta"));
  });
});
