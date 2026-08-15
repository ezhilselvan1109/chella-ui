import React, { createRef } from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Command } from "./Command";

describe("Command component", () => {
  it("renders search input, groups, items, and shortcuts", () => {
    render(
      <Command>
        <Command.Input placeholder="Search actions..." />
        <Command.List>
          <Command.Group heading="Navigation">
            <Command.Item shortcut="⌘D">Dashboard</Command.Item>
            <Command.Item shortcut="⌘S">Settings</Command.Item>
          </Command.Group>
        </Command.List>
      </Command>
    );

    expect(screen.getByRole("searchbox")).toBeInTheDocument();
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();
    expect(screen.getByText("⌘D")).toBeInTheDocument();
  });

  it("filters items when typing into search input and shows empty state", async () => {
    const user = userEvent.setup();

    render(
      <Command>
        <Command.Input />
        <Command.List>
          <Command.Empty>No results</Command.Empty>
          <Command.Group heading="Services">
            <Command.Item>Auth Service</Command.Item>
            <Command.Item>Billing Service</Command.Item>
          </Command.Group>
        </Command.List>
      </Command>
    );

    const input = screen.getByRole("searchbox");
    await user.type(input, "Billing");

    expect(screen.getByText("Billing Service")).toBeInTheDocument();
    expect(screen.queryByText("Auth Service")).not.toBeInTheDocument();

    await user.type(input, "xyznonexistent");
    expect(screen.getByText("No results")).toBeInTheDocument();
  });

  it("handles item selection on click and on Enter key", async () => {
    const handleSelect = vi.fn();
    const user = userEvent.setup();

    render(
      <Command>
        <Command.Input />
        <Command.List>
          <Command.Group>
            <Command.Item onSelect={handleSelect}>Deploy Cluster</Command.Item>
          </Command.Group>
        </Command.List>
      </Command>
    );

    const item = screen.getByText("Deploy Cluster");
    await user.click(item);
    expect(handleSelect).toHaveBeenCalledTimes(1);

    const combobox = screen.getByRole("combobox");
    fireEvent.keyDown(combobox, { key: "Enter" });
    expect(handleSelect).toHaveBeenCalledTimes(2);
  });

  it("forwards ref to command root container", () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <Command ref={ref}>
        <Command.Input />
      </Command>
    );
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
