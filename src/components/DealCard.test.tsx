import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import DealCard from "./DealCard";
import type { Deal } from "../data/deals";

const mockDeal: Deal = {
  id: "test-1",
  title: "Test Deal Title",
  description: "Test deal description text here.",
  category: "grocery",
  discount: "20% Off",
  store: "Test Store",
  region: "national",
  expiresAt: "2026-12-31",
  featured: false,
};

describe("DealCard", () => {
  it("renders deal title", () => {
    render(<DealCard deal={mockDeal} />);
    expect(screen.getByText("Test Deal Title")).toBeInTheDocument();
  });

  it("renders deal description", () => {
    render(<DealCard deal={mockDeal} />);
    expect(screen.getByText("Test deal description text here.")).toBeInTheDocument();
  });

  it("renders discount badge", () => {
    render(<DealCard deal={mockDeal} />);
    expect(screen.getByText("20% Off")).toBeInTheDocument();
  });

  it("renders category label", () => {
    render(<DealCard deal={mockDeal} />);
    expect(screen.getByText("Grocery")).toBeInTheDocument();
  });

  it("renders store name", () => {
    render(<DealCard deal={mockDeal} />);
    expect(screen.getByText("Test Store")).toBeInTheDocument();
  });

  it("renders region info", () => {
    render(<DealCard deal={mockDeal} />);
    expect(screen.getByText("National, US")).toBeInTheDocument();
  });
});
