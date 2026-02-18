import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";

vi.mock("../context/AuthContext", () => ({
  useAuth: vi.fn(),
}));

import { useAuth } from "../context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";

const mockedUseAuth = vi.mocked(useAuth);

function renderRoute() {
  return render(
    <MemoryRouter>
      <ProtectedRoute>
        <div>Protected Content</div>
      </ProtectedRoute>
    </MemoryRouter>,
  );
}

describe("ProtectedRoute", () => {
  it("shows spinner while loading", () => {
    mockedUseAuth.mockReturnValue({
      user: null,
      session: null,
      profile: null,
      loading: true,
      signOut: vi.fn(),
      refreshProfile: vi.fn(),
    });

    renderRoute();
    expect(screen.getByRole("status")).toBeInTheDocument();
    expect(screen.queryByText("Protected Content")).not.toBeInTheDocument();
  });

  it("renders children when authenticated", () => {
    mockedUseAuth.mockReturnValue({
      user: { id: "1", email: "test@example.com" } as ReturnType<typeof useAuth>["user"],
      session: {} as ReturnType<typeof useAuth>["session"],
      profile: null,
      loading: false,
      signOut: vi.fn(),
      refreshProfile: vi.fn(),
    });

    renderRoute();
    expect(screen.getByText("Protected Content")).toBeInTheDocument();
  });

  it("redirects to login when not authenticated", () => {
    mockedUseAuth.mockReturnValue({
      user: null,
      session: null,
      profile: null,
      loading: false,
      signOut: vi.fn(),
      refreshProfile: vi.fn(),
    });

    renderRoute();
    expect(screen.queryByText("Protected Content")).not.toBeInTheDocument();
  });
});
