import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import Logo from "./Logo";

function renderLogo(props: Parameters<typeof Logo>[0] = {}) {
  return render(
    <MemoryRouter>
      <Logo {...props} />
    </MemoryRouter>,
  );
}

describe("Logo", () => {
  it("renders the brand name", () => {
    renderLogo();
    expect(screen.getByText("Save")).toBeInTheDocument();
    expect(screen.getByText("Sweep")).toBeInTheDocument();
  });

  it("renders as a link by default", () => {
    renderLogo();
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/");
  });

  it("renders without a link when linkTo is empty", () => {
    renderLogo({ linkTo: "" });
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  it("uses custom linkTo path", () => {
    renderLogo({ linkTo: "/dashboard" });
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/dashboard");
  });
});
