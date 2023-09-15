import { render } from "@testing-library/react";
import Home from "@/app/page";

describe("Profile Page", () => {
  it("should render correctly ", () => {
    render(<Home />);
  });
});
