import React, { createRef } from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Breadcrumb } from "./Breadcrumb";

describe("Breadcrumb component", () => {
  it("renders nav element with aria-label='breadcrumb' and list structure", () => {
    render(
      <Breadcrumb>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Page>Clusters</Breadcrumb.Page>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb>
    );

    const nav = screen.getByRole("navigation", { name: "breadcrumb" });
    expect(nav).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("href", "/");

    const page = screen.getByText("Clusters");
    expect(page).toHaveAttribute("aria-current", "page");
  });

  it("renders declarative items list", () => {
    render(
      <Breadcrumb
        items={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Workloads", href: "/workloads" },
          { label: "Deployments" },
        ]}
      />
    );

    expect(screen.getByRole("link", { name: "Dashboard" })).toHaveAttribute("href", "/dashboard");
    expect(screen.getByRole("link", { name: "Workloads" })).toHaveAttribute("href", "/workloads");
    expect(screen.getByText("Deployments")).toHaveAttribute("aria-current", "page");
  });

  it("renders custom separator with presentation role and aria-hidden", () => {
    const { container } = render(
      <Breadcrumb separator="/">
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator>/</Breadcrumb.Separator>
          <Breadcrumb.Item>
            <Breadcrumb.Page>Current</Breadcrumb.Page>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb>
    );

    const separators = container.querySelectorAll("li[role='presentation']");
    expect(separators.length).toBe(1);
    expect(separators[0]).toHaveAttribute("aria-hidden", "true");
  });

  it("collapses items when maxItems is exceeded", () => {
    render(
      <Breadcrumb
        maxItems={3}
        items={[
          { label: "Home", href: "/" },
          { label: "Level 1", href: "/l1" },
          { label: "Level 2", href: "/l2" },
          { label: "Level 3", href: "/l3" },
          { label: "Current Page" },
        ]}
      />
    );

    expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
    expect(screen.getByText("More links")).toBeInTheDocument();
    expect(screen.getByText("Current Page")).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "Level 1" })).not.toBeInTheDocument();
  });

  it("forwards ref to nav container", () => {
    const ref = createRef<HTMLElement>();
    render(<Breadcrumb ref={ref} items={[{ label: "Home" }]} />);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });
});
