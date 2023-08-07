import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import User from "../comop/User";

describe.only("renders User compon", () => {
  test("renders data fetched coree", async () => {
    render(<User />);

    const headingEl = screen.getByRole("heading", {
      name: /all user/i,
    });

    const loadingEl = screen.getByText("loading...");
    const noDatael = screen.getByText(/no data to display/i);

    expect(loadingEl).toBeInTheDocument();
    expect(headingEl).toBeInTheDocument();
    expect(noDatael).toBeInTheDocument();

    const userName = await screen.findByText(/leanne graham/i);

    expect(userName).toBeInTheDocument();
    expect(loadingEl).not.toBeInTheDocument();
  });
});
