import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Modal } from "./Modal";
import { Button } from "../Button";

describe("Modal component", () => {
  it("does not render dialog when open is false", () => {
    render(
      <Modal open={false} onClose={vi.fn()} title="Hidden Modal">
        Hidden Content
      </Modal>
    );
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("renders dialog with title, description, and children when open", () => {
    render(
      <Modal
        open={true}
        onClose={vi.fn()}
        title="Confirm Deletion"
        description="Are you sure you want to delete this customer?"
      >
        <p>This action cannot be undone.</p>
      </Modal>
    );

    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();
    expect(screen.getByText("Confirm Deletion")).toBeInTheDocument();
    expect(screen.getByText("Are you sure you want to delete this customer?")).toBeInTheDocument();
    expect(screen.getByText("This action cannot be undone.")).toBeInTheDocument();
  });

  it("calls onClose when close 'X' button is clicked", async () => {
    const handleClose = vi.fn();
    const user = userEvent.setup();

    render(
      <Modal open={true} onClose={handleClose} title="Test Modal">
        Content
      </Modal>
    );

    const closeButton = screen.getByRole("button", { name: /close dialog/i });
    await user.click(closeButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when pressing Escape key", async () => {
    const handleClose = vi.fn();
    const user = userEvent.setup();

    render(
      <Modal open={true} onClose={handleClose} title="Escape Test">
        Modal body
      </Modal>
    );

    await user.keyboard("{Escape}");
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("renders custom footer actions", () => {
    render(
      <Modal
        open={true}
        onClose={vi.fn()}
        title="Action Modal"
        footer={
          <>
            <Button variant="secondary">Cancel</Button>
            <Button variant="danger">Confirm</Button>
          </>
        }
      >
        Modal content
      </Modal>
    );

    expect(screen.getByRole("button", { name: /cancel/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /confirm/i })).toBeInTheDocument();
  });
});
