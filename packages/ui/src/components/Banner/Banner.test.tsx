import React, { createRef } from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Banner } from "./Banner";
import { Sparkles } from "lucide-react";

describe("Banner component", () => {
  it("renders announcement banner with icon and badge", () => {
    render(
      <Banner
        icon={<Sparkles data-testid="banner-icon" />}
        badge={<span>NEW</span>}
        action={<button>View Release</button>}
      >
        Chellaa UI v1.0.0 is officially released!
      </Banner>
    );

    expect(screen.getByRole("region", { name: "Announcement" })).toBeInTheDocument();
    expect(screen.getByTestId("banner-icon")).toBeInTheDocument();
    expect(screen.getByText("NEW")).toBeInTheDocument();
    expect(screen.getByText("Chellaa UI v1.0.0 is officially released!")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "View Release" })).toBeInTheDocument();
  });

  it("handles dismissal when close button is clicked", async () => {
    const handleClose = vi.fn();
    const user = userEvent.setup();

    render(
      <Banner closable onClose={handleClose}>
        Scheduled Maintenance Window Tonight
      </Banner>
    );

    const closeBtn = screen.getByRole("button", { name: "Dismiss banner" });
    await user.click(closeBtn);

    expect(handleClose).toHaveBeenCalledTimes(1);
    expect(screen.queryByText("Scheduled Maintenance Window Tonight")).not.toBeInTheDocument();
  });

  it("forwards ref to banner aside element", () => {
    const ref = createRef<HTMLElement>();
    render(<Banner ref={ref}>Ref Banner</Banner>);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });
});
