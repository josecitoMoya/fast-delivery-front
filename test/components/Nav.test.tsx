import { render, screen } from "@testing-library/react";
import Nav from "@/components/Nav";

describe("Nav Component", () => {
  it("should render without errores", () => {
    render(<Nav href="/" lHref="/logout" />);
  });

  it("should show home and exit logo", () => {
    render(<Nav href="/" lHref="/logout" />);

    expect(screen.getByTestId("homelogo"));

    expect(screen.getByTestId("exitlogo"));
  });

  it("should redir correctly", () => {
    render(<Nav href="/" lHref="/logout" />);

    const Link: HTMLAnchorElement[] = screen.queryAllByRole("link");

    expect(Link[0].href).toEqual("http://localhost/");

    expect(Link[1].href).toEqual("http://localhost/logout");
  });
});
