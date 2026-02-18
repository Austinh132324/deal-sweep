import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Spinner from "./Spinner";

describe("Spinner", () => {
  it("renders with status role", () => {
    render(<Spinner />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("has accessible label", () => {
    render(<Spinner />);
    expect(screen.getByLabelText("Loading")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<Spinner className="h-12 w-12" />);
    const spinner = screen.getByRole("status");
    expect(spinner.className).toContain("h-12");
    expect(spinner.className).toContain("w-12");
  });
});
