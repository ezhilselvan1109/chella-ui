import { jsx as _jsx } from "react/jsx-runtime";
import { createRef } from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tag } from "./Tag";
import { Tag as TagIcon } from "lucide-react";
describe("Tag component", () => {
    it("renders with text label and icon", () => {
        render(_jsx(Tag, { icon: _jsx(TagIcon, { "data-testid": "tag-icon" }), children: "Production" }));
        expect(screen.getByText("Production")).toBeInTheDocument();
        expect(screen.getByTestId("tag-icon")).toBeInTheDocument();
    });
    it("handles close button click and prevents bubbling", async () => {
        const handleClose = vi.fn();
        const handleClick = vi.fn();
        const user = userEvent.setup();
        render(_jsx(Tag, { closable: true, onClose: handleClose, onClick: handleClick, children: "Dismissible" }));
        const closeBtn = screen.getByRole("button", { name: "Remove tag" });
        await user.click(closeBtn);
        expect(handleClose).toHaveBeenCalledTimes(1);
        expect(handleClick).not.toHaveBeenCalled();
    });
    it("renders selectable checkbox attributes and toggles on click", async () => {
        const handleClick = vi.fn();
        const user = userEvent.setup();
        const { rerender } = render(_jsx(Tag, { selectable: true, selected: false, onClick: handleClick, children: "Selectable Tag" }));
        const tag = screen.getByRole("checkbox");
        expect(tag).toHaveAttribute("aria-checked", "false");
        await user.click(tag);
        expect(handleClick).toHaveBeenCalledTimes(1);
        rerender(_jsx(Tag, { selectable: true, selected: true, onClick: handleClick, children: "Selectable Tag" }));
        expect(tag).toHaveAttribute("aria-checked", "true");
    });
    it("forwards ref to tag container", () => {
        const ref = createRef();
        render(_jsx(Tag, { ref: ref, children: "Ref Tag" }));
        expect(ref.current).toBeInstanceOf(HTMLSpanElement);
    });
});
