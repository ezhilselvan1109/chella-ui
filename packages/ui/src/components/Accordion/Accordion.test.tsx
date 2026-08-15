import React, { createRef, useState } from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Accordion } from "./Accordion";

describe("Accordion component", () => {
  it("renders triggers and expands default value item", () => {
    render(
      <Accordion type="single" defaultValue="item-1">
        <Accordion.Item value="item-1">
          <Accordion.Trigger>Section 1</Accordion.Trigger>
          <Accordion.Content>Content 1</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>Section 2</Accordion.Trigger>
          <Accordion.Content>Content 2</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );

    expect(screen.getByRole("button", { name: "Section 1" })).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("button", { name: "Section 2" })).toHaveAttribute("aria-expanded", "false");
    expect(screen.getByText("Content 1")).toBeInTheDocument();
    expect(screen.queryByText("Content 2")).not.toBeInTheDocument();
  });

  it("toggles item when clicked in single mode", async () => {
    const user = userEvent.setup();
    const handleValueChange = vi.fn();

    render(
      <Accordion type="single" collapsible defaultValue="item-1" onValueChange={handleValueChange}>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>Section 1</Accordion.Trigger>
          <Accordion.Content>Content 1</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>Section 2</Accordion.Trigger>
          <Accordion.Content>Content 2</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );

    const trigger2 = screen.getByRole("button", { name: "Section 2" });
    await user.click(trigger2);

    expect(handleValueChange).toHaveBeenCalledWith("item-2");
    expect(screen.getByText("Content 2")).toBeInTheDocument();
    expect(screen.queryByText("Content 1")).not.toBeInTheDocument();

    // Collapse section 2
    await user.click(trigger2);
    expect(screen.queryByText("Content 2")).not.toBeInTheDocument();
  });

  it("allows multiple items to be expanded in multiple mode", async () => {
    const user = userEvent.setup();

    render(
      <Accordion type="multiple" defaultValue={["item-1"]}>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>Section 1</Accordion.Trigger>
          <Accordion.Content>Content 1</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>Section 2</Accordion.Trigger>
          <Accordion.Content>Content 2</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );

    expect(screen.getByText("Content 1")).toBeInTheDocument();

    const trigger2 = screen.getByRole("button", { name: "Section 2" });
    await user.click(trigger2);

    expect(screen.getByText("Content 1")).toBeInTheDocument();
    expect(screen.getByText("Content 2")).toBeInTheDocument();
  });

  it("does not toggle disabled items", async () => {
    const user = userEvent.setup();

    render(
      <Accordion type="single">
        <Accordion.Item value="item-1" disabled>
          <Accordion.Trigger>Disabled Section</Accordion.Trigger>
          <Accordion.Content>Disabled Content</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );

    const trigger = screen.getByRole("button", { name: "Disabled Section" });
    await user.click(trigger);

    expect(screen.queryByText("Disabled Content")).not.toBeInTheDocument();
  });

  it("supports controlled state", () => {
    function ControlledAccordion() {
      const [val, setVal] = useState("item-2");
      return (
        <Accordion type="single" value={val} onValueChange={(v) => setVal(v as string)}>
          <Accordion.Item value="item-1">
            <Accordion.Trigger>Section 1</Accordion.Trigger>
            <Accordion.Content>Content 1</Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value="item-2">
            <Accordion.Trigger>Section 2</Accordion.Trigger>
            <Accordion.Content>Content 2</Accordion.Content>
          </Accordion.Item>
        </Accordion>
      );
    }

    render(<ControlledAccordion />);
    expect(screen.getByText("Content 2")).toBeInTheDocument();
    expect(screen.queryByText("Content 1")).not.toBeInTheDocument();
  });

  it("supports declarative items array", () => {
    render(
      <Accordion
        items={[
          { value: "faq-1", title: "Question 1", content: "Answer 1" },
          { value: "faq-2", title: "Question 2", content: "Answer 2" },
        ]}
      />
    );

    expect(screen.getByRole("button", { name: "Question 1" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Question 2" })).toBeInTheDocument();
  });

  it("forwards ref to container element", () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <Accordion ref={ref}>
        <Accordion.Item value="1">
          <Accordion.Trigger>Title</Accordion.Trigger>
          <Accordion.Content>Body</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
