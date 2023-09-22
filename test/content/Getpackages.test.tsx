import Packages from "@/app/admin/packages/page";

import { render, screen } from "@testing-library/react";

describe("GetPackages Component", () => {
  it("renders correctly", () => {
    render(<Packages />);
  });
});
