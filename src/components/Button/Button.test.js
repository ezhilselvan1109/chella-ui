import { jsx as _jsx } from "react/jsx-runtime";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";
describe("Button component", () => {
    it("renders correctly with default props", () => {
        render(_jsx(Button, { children: "Click me" }));
        const button = screen.getByRole("button", { name: /click me/i });
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass("bg-primary");
    });
    it("handles click events", async () => {
        const handleClick = vi.fn();
        const user = userEvent.setup();
        render(_jsx(Button, { onClick: handleClick, children: "Submit" }));
        const button = screen.getByRole("button", { name: /submit/i });
        await user.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
    it("prevents click events when disabled", async () => {
        const handleClick = vi.fn();
        const user = userEvent.setup();
        render(_jsx(Button, { disabled: true, onClick: handleClick, children: "Disabled" }));
        const button = screen.getByRole("button", { name: /disabled/i });
        expect(button).toBeDisabled();
        await user.click(button);
        expect(handleClick).not.toHaveBeenCalled();
    });
    it("prevents click events when loading and displays loading spinner", async () => {
        const handleClick = vi.fn();
        const user = userEvent.setup();
        render(_jsx(Button, { loading: true, onClick: handleClick, children: "Save" }));
        const button = screen.getByRole("button", { name: /save/i });
        expect(button).toBeDisabled();
        expect(button).toHaveAttribute("aria-busy", "true");
        await user.click(button);
        expect(handleClick).not.toHaveBeenCalled();
    });
    it("applies variant classes correctly", () => {
        const { rerender } = render(_jsx(Button, { variant: "danger", children: "Delete" }));
        expect(screen.getByRole("button")).toHaveClass("bg-danger");
        rerender(_jsx(Button, { variant: "secondary", children: "Cancel" }));
        expect(screen.getByRole("button")).toHaveClass("bg-secondary");
        rerender(_jsx(Button, { variant: "outline", children: "Outline" }));
        expect(screen.getByRole("button")).toHaveClass("border");
        rerender(_jsx(Button, { variant: "ghost", children: "Ghost" }));
        expect(screen.getByRole("button")).toHaveClass("hover:bg-secondary");
    });
    it("applies size classes correctly", () => {
        const { rerender } = render(_jsx(Button, { size: "small", children: "Small" }));
        expect(screen.getByRole("button")).toHaveClass("h-8");
        rerender(_jsx(Button, { size: "medium", children: "Medium" }));
        expect(screen.getByRole("button")).toHaveClass("h-10");
        rerender(_jsx(Button, { size: "large", children: "Large" }));
        expect(screen.getByRole("button")).toHaveClass("h-12");
    });
    it("renders with fullWidth modifier", () => {
        render(_jsx(Button, { fullWidth: true, children: "Full Width" }));
        expect(screen.getByRole("button")).toHaveClass("w-full");
    });
    it("supports leftIcon and rightIcon", () => {
        render(_jsx(Button, { leftIcon: _jsx("span", { "data-testid": "left-icon", children: "\u2190" }), rightIcon: _jsx("span", { "data-testid": "right-icon", children: "\u2192" }), children: "Navigate" }));
        expect(screen.getByTestId("left-icon")).toBeInTheDocument();
        expect(screen.getByTestId("right-icon")).toBeInTheDocument();
    });
});
