import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Card } from "./Card";
import { Button } from "../Button";

describe("Card component", () => {
  it("renders card with compound header, title, description, content and footer", () => {
    render(
      <Card>
        <Card.Header>
          <Card.Title>Total Revenue</Card.Title>
          <Card.Description>Monthly performance analytics</Card.Description>
        </Card.Header>
        <Card.Content>
          <div data-testid="revenue">$45,231.89</div>
        </Card.Content>
        <Card.Footer>
          <Button size="small">View Details</Button>
        </Card.Footer>
      </Card>
    );

    expect(screen.getByText("Total Revenue")).toBeInTheDocument();
    expect(screen.getByText("Monthly performance analytics")).toBeInTheDocument();
    expect(screen.getByTestId("revenue")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /view details/i })).toBeInTheDocument();
  });

  it("applies variant classes properly", () => {
    const { container, rerender } = render(<Card variant="elevated">Content</Card>);
    expect(container.firstChild).toHaveClass("shadow-md");

    rerender(<Card variant="outlined">Content</Card>);
    expect(container.firstChild).toHaveClass("border-border");

    rerender(<Card variant="flat">Content</Card>);
    expect(container.firstChild).toHaveClass("border-none");
  });

  it("supports hoverable style", () => {
    const { container } = render(<Card hoverable>Hoverable Card</Card>);
    expect(container.firstChild).toHaveClass("hover:shadow-lg");
  });
});
