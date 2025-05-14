
import { render, screen } from "@testing-library/react";
import { PaginationControls } from "../pagination-controls";
import React from "react";

import { vi } from "vitest";

// ✅ mock both useRouter and useSearchParams
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
  useSearchParams: () =>
    new URLSearchParams({
      page: "1",
    }),
}));


describe("PaginationControls", () => {
  it("renders current page and disables Prev button on page 1", () => {
    render(<PaginationControls currentPage={1} totalPages={5} />);

    expect(screen.getByText("Page 1 of 5")).toBeInTheDocument();

    const prevButton = screen.getByRole("button", { name: /previous/i });
    expect(prevButton).toBeDisabled();

    const nextButton = screen.getByRole("button", { name: /next/i });
    expect(nextButton).not.toBeDisabled();
  });

  it("enables both buttons on a middle page", () => {
    render(<PaginationControls currentPage={3} totalPages={5} />);

    expect(screen.getByText("Page 3 of 5")).toBeInTheDocument();

    const prevButton = screen.getByRole("button", { name: /previous/i });
    const nextButton = screen.getByRole("button", { name: /next/i });

    expect(prevButton).not.toBeDisabled();
    expect(nextButton).not.toBeDisabled();
  });

  it("disables Next button on last page", () => {
    render(<PaginationControls currentPage={5} totalPages={5} />);

    expect(screen.getByText("Page 5 of 5")).toBeInTheDocument();

    const nextButton = screen.getByRole("button", { name: /next/i });
    expect(nextButton).toBeDisabled();
  });
});
