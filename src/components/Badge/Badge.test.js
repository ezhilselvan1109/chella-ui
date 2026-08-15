import { jsx as _jsx } from "react/jsx-runtime";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Badge } from "./Badge";
describe("Badge component", () => {
    it("renders badge text correctly", () => {
        render(_jsx(Badge, { children: "Active" }));
        expect(screen.getByText("Active")).toBeInTheDocument();
    });
    it("applies variant classes", () => {
        const { rerender } = render(_jsx(Badge, { variant: "success", children: "Success" }));
        expect(screen.getByText("Success")).toHaveClass("text-success");
        rerender(_jsx(Badge, { variant: "danger", children: "Danger" }));
        expect(screen.getByText("Danger")).toHaveClass("text-danger");
    });
    it("renders dot indicator", () => {
        const { container } = render(_jsx(Badge, { dot: true, children: "Online" }));
        expect(container.querySelector(".rounded-full")).toBeInTheDocument();
    });
    it("handles remove click event", async () => {
        const handleRemove = vi.fn();
        const user = userEvent.setup();
        render(_jsx(Badge, { removable: true, onRemove: handleRemove, children: "React" }));
        const removeBtn = screen.getByRole("button", { name: /remove badge/i });
        await user.click(removeBtn);
        expect(handleRemove).toHaveBeenCalledTimes(1);
    });
});
