import React, { createRef } from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { EmptyState } from "./EmptyState";
import { FolderSearch } from "lucide-react";

describe("EmptyState component", () => {
  it("renders with role status and shorthand props", () => {
    render(
      <EmptyState
        icon={<FolderSearch data-testid="empty-icon" />}
        title="No Results Found"
        description="Try adjusting your filter criteria."
        action={<button>Reset Filters</button>}
      />
    );

    expect(screen.getByRole("status")).toBeInTheDocument();
    expect(screen.getByTestId("empty-icon")).toBeInTheDocument();
    expect(screen.getByText("No Results Found")).toBeInTheDocument();
    expect(screen.getByText("Try adjusting your filter criteria.")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Reset Filters" })).toBeInTheDocument();
  });

  it("renders compound components", () => {
    render(
      <EmptyState variant="dashed">
        <EmptyState.Icon>
          <FolderSearch data-testid="compound-icon" />
        </EmptyState.Icon>
        <EmptyState.Title>No Deployments</EmptyState.Title>
        <EmptyState.Description>Create your first container deployment.</EmptyState.Description>
        <EmptyState.Action>
          <button>Deploy Now</button>
        </EmptyState.Action>
      </EmptyState>
    );

    expect(screen.getByTestId("compound-icon")).toBeInTheDocument();
    expect(screen.getByText("No Deployments")).toBeInTheDocument();
    expect(screen.getByText("Create your first container deployment.")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Deploy Now" })).toBeInTheDocument();
  });

  it("renders card and dashed variant classes", () => {
    const { container, rerender } = render(<EmptyState variant="card" title="Card" />);
    expect(container.querySelector(".bg-card")).toBeInTheDocument();

    rerender(<EmptyState variant="dashed" title="Dashed" />);
    expect(container.querySelector(".border-dashed")).toBeInTheDocument();
  });

  it("forwards ref to empty state container", () => {
    const ref = createRef<HTMLDivElement>();
    render(<EmptyState ref={ref} title="Ref Test" />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
