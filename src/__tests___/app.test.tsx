import { test, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "../App";

describe.skip("render app comp", () => {
  test("render initial state of comp", () => {
    render(<App />);

    const viteLogo = screen.getByRole("img", {
      name: /vite logo/i,
    });

    const reactLogo = screen.getByRole("img", {
      name: /react logo/i,
    });

    const headingEl = screen.getByRole("heading", {
      name: /vite \+ react/i,
    });

    expect(viteLogo).toBeInTheDocument();
    expect(reactLogo).toBeInTheDocument();
    expect(headingEl).toHaveTextContent(/vite \+ react/i);
  });

  test("render button should incrmnt on click", async () => {
    // initial state
    render(<App />);
    // access dom e element of button
    const btnEl = screen.getByRole("button", {
      name: /count is 0/i,
    });

    expect(btnEl).toBeInTheDocument();
    expect(btnEl).toHaveTextContent("count is 0");

    // when user clicked
    const userEvent = user.setup();
    await userEvent.click(btnEl);
    expect(btnEl).toHaveTextContent("count is ");
  });
});
