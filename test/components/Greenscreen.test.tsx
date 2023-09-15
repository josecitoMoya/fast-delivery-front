import { render, screen } from "@testing-library/react";
import GreenScreen from "@/components/GreenScreen";

describe("Green screen component", () => {
  beforeEach(() =>
    render(
      <GreenScreen
        href="redir"
        h2="title"
        content={
          <div>
            <p data-testid="p">soy un contenido</p>
            <p data-testid="p">soy otro contenido</p>
          </div>
        }
      />
    )
  );
  it("should render witouth errors", () => {});
  it("should render with an unic title", () => {
    const elem = screen.queryAllByText("title");
    expect(elem[0].textContent).not.toEqual("title error");

    expect(elem[0].textContent).toEqual("title");

    expect(elem).toHaveLength(1);
  });
  it("should render with content", () => {
    const elem = screen.queryAllByTestId("p");
    expect(elem[0].textContent).toEqual("soy un contenido");

    expect(elem[1].textContent).toEqual("soy otro contenido");

    expect(elem).toHaveLength(2);
  });
  it("should render with href", () => {
    const elem: HTMLAnchorElement[] = screen.queryAllByRole("link");
    expect(elem[0].href).toEqual("http://localhost/redir");

    expect(elem[0].textContent).toEqual("");

    expect(elem).toHaveLength(1);
  });
});
