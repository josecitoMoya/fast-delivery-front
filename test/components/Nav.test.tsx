import { render, screen } from "@testing-library/react";
import Nav from "@/components/Nav";

describe("Nav Component", () => {
  it("should render without errores", () => {
    render(<Nav href="/" lHref="/logout" />);
  });

  it("should show home and exit logo", () => {
    render(<Nav href="/" lHref="/logout" />);

    const homeLogo = screen.getByTestId("homelogo");
    const exitLogo = screen.getByTestId("exitlogo");

    expect(homeLogo).toBeTruthy();
    expect(exitLogo).toBeTruthy();
  });

  it("should redir correctly", () => {
    render(<Nav href="/" lHref="/logout" />);

    // Obtén los enlaces por sus atributos href
    const Link: HTMLAnchorElement[] = screen.queryAllByRole("link");

    expect(Link[0].href).toEqual("http://localhost/");
    expect(Link[1].href).toEqual("http://localhost/logout");
  });
});
