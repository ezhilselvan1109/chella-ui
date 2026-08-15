import React, { createRef, useState } from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tabs } from "./Tabs";

describe("Tabs component", () => {
  it("renders tab triggers and displays initial active tab content", () => {
    render(
      <Tabs defaultValue="account">
        <Tabs.List>
          <Tabs.Trigger value="account">Account</Tabs.Trigger>
          <Tabs.Trigger value="password">Password</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="account">Account Settings Panel</Tabs.Content>
        <Tabs.Content value="password">Password Settings Panel</Tabs.Content>
      </Tabs>
    );

    expect(screen.getByRole("tab", { name: "Account" })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("tab", { name: "Password" })).toHaveAttribute("aria-selected", "false");
    expect(screen.getByText("Account Settings Panel")).toBeInTheDocument();
    expect(screen.queryByText("Password Settings Panel")).not.toBeInTheDocument();
  });

  it("switches active tab when trigger is clicked", async () => {
    const user = userEvent.setup();
    const handleValueChange = vi.fn();

    render(
      <Tabs defaultValue="account" onValueChange={handleValueChange}>
        <Tabs.List>
          <Tabs.Trigger value="account">Account</Tabs.Trigger>
          <Tabs.Trigger value="password">Password</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="account">Account Settings Panel</Tabs.Content>
        <Tabs.Content value="password">Password Settings Panel</Tabs.Content>
      </Tabs>
    );

    const passwordTab = screen.getByRole("tab", { name: "Password" });
    await user.click(passwordTab);

    expect(handleValueChange).toHaveBeenCalledWith("password");
    expect(passwordTab).toHaveAttribute("aria-selected", "true");
    expect(screen.getByText("Password Settings Panel")).toBeInTheDocument();
    expect(screen.queryByText("Account Settings Panel")).not.toBeInTheDocument();
  });

  it("does not activate disabled tabs", async () => {
    const user = userEvent.setup();
    const handleValueChange = vi.fn();

    render(
      <Tabs defaultValue="account" onValueChange={handleValueChange}>
        <Tabs.List>
          <Tabs.Trigger value="account">Account</Tabs.Trigger>
          <Tabs.Trigger value="billing" disabled>Billing (Disabled)</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="account">Account Settings Panel</Tabs.Content>
        <Tabs.Content value="billing">Billing Settings Panel</Tabs.Content>
      </Tabs>
    );

    const billingTab = screen.getByRole("tab", { name: "Billing (Disabled)" });
    await user.click(billingTab);

    expect(handleValueChange).not.toHaveBeenCalled();
    expect(screen.getByText("Account Settings Panel")).toBeInTheDocument();
    expect(screen.queryByText("Billing Settings Panel")).not.toBeInTheDocument();
  });

  it("supports keyboard navigation with Arrow keys", () => {
    render(
      <Tabs defaultValue="tab1">
        <Tabs.List>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
          <Tabs.Trigger value="tab3">Tab 3</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">Content 1</Tabs.Content>
        <Tabs.Content value="tab2">Content 2</Tabs.Content>
        <Tabs.Content value="tab3">Content 3</Tabs.Content>
      </Tabs>
    );

    const tablist = screen.getByRole("tablist");
    fireEvent.keyDown(tablist, { key: "ArrowRight" });

    expect(screen.getByRole("tab", { name: "Tab 2" })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByText("Content 2")).toBeInTheDocument();

    fireEvent.keyDown(tablist, { key: "ArrowLeft" });
    expect(screen.getByRole("tab", { name: "Tab 1" })).toHaveAttribute("aria-selected", "true");
  });

  it("supports controlled mode", () => {
    function ControlledTabs() {
      const [val, setVal] = useState("tab2");
      return (
        <Tabs value={val} onValueChange={setVal}>
          <Tabs.List>
            <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
            <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1">Panel 1</Tabs.Content>
          <Tabs.Content value="tab2">Panel 2</Tabs.Content>
        </Tabs>
      );
    }

    render(<ControlledTabs />);
    expect(screen.getByText("Panel 2")).toBeInTheDocument();
    expect(screen.queryByText("Panel 1")).not.toBeInTheDocument();
  });

  it("supports declarative items array", () => {
    render(
      <Tabs
        items={[
          { key: "overview", label: "Overview", children: <div>Overview Content</div> },
          { key: "metrics", label: "Metrics", children: <div>Metrics Content</div> },
        ]}
      />
    );

    expect(screen.getByRole("tab", { name: "Overview" })).toBeInTheDocument();
    expect(screen.getByText("Overview Content")).toBeInTheDocument();
  });

  it("forwards ref to container element", () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <Tabs ref={ref} defaultValue="1">
        <Tabs.List>
          <Tabs.Trigger value="1">1</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="1">1</Tabs.Content>
      </Tabs>
    );
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
