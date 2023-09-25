import DetailsChild from "@/components/DetailsChild";
import { render, screen } from "@testing-library/react";

describe("DetailsChild Component", () => {
  it("debe renderizar correctamente", () => {
    const props = {
      href: "/repartidores",
      title: "repartidores",
    };

    render(<DetailsChild {...props} />);

    expect(screen.getByText(props.title));

    expect(screen.getByText("20%"));

    expect(screen.getByRole("link", { name: /ver/i }));
  });

  it('debe renderizar correctamente para "paquetes"', () => {
    const props = {
      href: "/paquetes",
      title: "paquetes",
    };

    render(<DetailsChild {...props} />);

    expect(screen.getByText(props.title));

    expect(screen.getByText("20%"));

    expect(screen.getByRole("link", { name: /ver/i }));
  });
});
