import React, { createRef } from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tag } from "./Tag";
import { Tag as TagIcon } from "lucide-react";

describe("Tag component", () => {
  it("renders with text label and icon", () => {
    render(
      <Tag icon={<TagIcon data-testid="tag-icon" />}>
        Production
      </Tag>
    );

    expect(screen.getByText("Production")).toBeInTheDocument();
    expect(screen.getByTestId("tag-icon")).toBeInTheDocument();
  });

  it("handles close button click and prevents bubbling", async () => {
    const handleClose = vi.fn();
    const handleClick = vi.fn();
    const user = userEvent.setup();

    render(
      <Tag closable onClose={handleClose} onClick={handleClick}>
        Dismissible
      </Tag>
    );

    const closeBtn = screen.getByRole("button", { name: "Remove tag" });
    await user.click(closeBtn);

    expect(handleClose).toHaveBeenCalledTimes(1);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("renders selectable checkbox attributes and toggles on click", async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();

    const { rerender } = render(
      <Tag selectable selected={false} onClick={handleClick}>
        Selectable Tag
      </Tag>
    );

    const tag = screen.getByRole("checkbox");
    expect(tag).toHaveAttribute("aria-checked", "false");

    await user.click(tag);
    expect(handleClick).toHaveBeenCalledTimes(1);

    rerender(
      <Tag selectable selected={true} onClick={handleClick}>
        Selectable Tag
      </Tag>
    );
    expect(tag).toHaveAttribute("aria-checked", "true");
  });

  it("forwards ref to tag container", () => {
    const ref = createRef<HTMLSpanElement>();
    render(<Tag ref={ref}>Ref Tag</Tag>);
    expect(ref.current).toBeInstanceOf(HTMLSpanElement);
  });
});
