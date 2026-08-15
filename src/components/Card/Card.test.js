import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Card } from "./Card";
import { Button } from "../Button";
describe("Card component", () => {
    it("renders card with compound header, title, description, content and footer", () => {
        render(_jsxs(Card, { children: [_jsxs(Card.Header, { children: [_jsx(Card.Title, { children: "Total Revenue" }), _jsx(Card.Description, { children: "Monthly performance analytics" })] }), _jsx(Card.Content, { children: _jsx("div", { "data-testid": "revenue", children: "$45,231.89" }) }), _jsx(Card.Footer, { children: _jsx(Button, { size: "small", children: "View Details" }) })] }));
        expect(screen.getByText("Total Revenue")).toBeInTheDocument();
        expect(screen.getByText("Monthly performance analytics")).toBeInTheDocument();
        expect(screen.getByTestId("revenue")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /view details/i })).toBeInTheDocument();
    });
    it("applies variant classes properly", () => {
        const { container, rerender } = render(_jsx(Card, { variant: "elevated", children: "Content" }));
        expect(container.firstChild).toHaveClass("shadow-md");
        rerender(_jsx(Card, { variant: "outlined", children: "Content" }));
        expect(container.firstChild).toHaveClass("border-border");
        rerender(_jsx(Card, { variant: "flat", children: "Content" }));
        expect(container.firstChild).toHaveClass("border-none");
    });
    it("supports hoverable style", () => {
        const { container } = render(_jsx(Card, { hoverable: true, children: "Hoverable Card" }));
        expect(container.firstChild).toHaveClass("hover:shadow-lg");
    });
});
