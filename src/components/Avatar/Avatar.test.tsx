import React, { createRef } from "react";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Avatar } from "./Avatar";
import { AvatarGroup } from "./AvatarGroup";
import { Shield } from "lucide-react";

describe("Avatar & AvatarGroup component", () => {
  it("renders image with src and alt attributes", () => {
    render(<Avatar src="https://example.com/photo.jpg" alt="Kumar Selvan" />);
    const img = screen.getByRole("img", { name: "Kumar Selvan" });
    expect(img).toBeInTheDocument();
  });

  it("extracts 2-letter uppercase initials from multi-word name", () => {
    render(<Avatar name="Kumar Selvan" />);
    expect(screen.getByText("KS")).toBeInTheDocument();
  });

  it("extracts initials from single-word name", () => {
    render(<Avatar name="Chella" />);
    expect(screen.getByText("CH")).toBeInTheDocument();
  });

  it("falls back to initials when image encounters load error", () => {
    render(<Avatar src="https://invalid.url/broken.jpg" name="Dev Ops" />);
    const img = screen.getByRole("img", { name: "Dev Ops" });

    fireEvent.error(img);

    expect(screen.getByText("DO")).toBeInTheDocument();
  });

  it("renders custom icon when provided", () => {
    render(<Avatar icon={<Shield data-testid="shield-icon" />} />);
    expect(screen.getByTestId("shield-icon")).toBeInTheDocument();
  });

  it("renders status indicator dot with accessible label", () => {
    render(<Avatar name="Online User" status="online" />);
    expect(screen.getByRole("status")).toHaveAttribute("aria-label", "Status: online");
  });

  it("AvatarGroup limits items to max and displays overflow count badge", () => {
    render(
      <AvatarGroup max={2}>
        <Avatar name="User 1" />
        <Avatar name="User 2" />
        <Avatar name="User 3" />
        <Avatar name="User 4" />
      </AvatarGroup>
    );

    expect(screen.getByText("U1")).toBeInTheDocument();
    expect(screen.getByText("U2")).toBeInTheDocument();
    expect(screen.queryByText("U3")).not.toBeInTheDocument();
    expect(screen.getByText("+2")).toBeInTheDocument();
  });

  it("forwards ref to Avatar container", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Avatar ref={ref} name="Ref User" />);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("forwards ref to AvatarGroup container", () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <AvatarGroup ref={ref}>
        <Avatar name="A" />
      </AvatarGroup>
    );
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});
