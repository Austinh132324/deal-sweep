import { describe, it, expect } from "vitest";
import { deals, regions, categoryLabels, categoryColors } from "./deals";

describe("deals data", () => {
  it("has deals", () => {
    expect(deals.length).toBeGreaterThan(0);
  });

  it("each deal has required fields", () => {
    for (const deal of deals) {
      expect(deal.id).toBeTruthy();
      expect(deal.title).toBeTruthy();
      expect(deal.description).toBeTruthy();
      expect(deal.category).toBeTruthy();
      expect(deal.discount).toBeTruthy();
      expect(deal.store).toBeTruthy();
      expect(deal.region).toBeTruthy();
      expect(deal.expiresAt).toBeTruthy();
    }
  });

  it("all deal categories have labels", () => {
    const categories = new Set(deals.map((d) => d.category));
    for (const cat of categories) {
      expect(categoryLabels[cat]).toBeTruthy();
      expect(categoryColors[cat]).toBeTruthy();
    }
  });

  it("all deal regions exist in regions list", () => {
    const regionIds = new Set(regions.map((r) => r.id));
    for (const deal of deals) {
      expect(regionIds.has(deal.region)).toBe(true);
    }
  });

  it("has featured deals", () => {
    const featured = deals.filter((d) => d.featured);
    expect(featured.length).toBeGreaterThan(0);
  });
});

describe("regions data", () => {
  it("has regions", () => {
    expect(regions.length).toBeGreaterThan(0);
  });

  it("each region has required fields", () => {
    for (const region of regions) {
      expect(region.id).toBeTruthy();
      expect(region.name).toBeTruthy();
      expect(region.state).toBeTruthy();
    }
  });

  it("includes a national region", () => {
    expect(regions.find((r) => r.id === "national")).toBeTruthy();
  });
});
