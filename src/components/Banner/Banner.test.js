import { jsx as _jsx } from "react/jsx-runtime";
import { createRef } from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Banner } from "./Banner";
import { Sparkles } from "lucide-react";
describe("Banner component", () => {
    it("renders announcement banner with icon and badge", () => {
        render(_jsx(Banner, { icon: _jsx(Sparkles, { "data-testid": "banner-icon" }), badge: _jsx("span", { children: "NEW" }), action: _jsx("button", { children: "View Release" }), children: "Chella UI v1.0.0 is officially released!" }));
        expect(screen.getByRole("region", { name: "Announcement" })).toBeInTheDocument();
        expect(screen.getByTestId("banner-icon")).toBeInTheDocument();
        expect(screen.getByText("NEW")).toBeInTheDocument();
        expect(screen.getByText("Chella UI v1.0.0 is officially released!")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "View Release" })).toBeInTheDocument();
    });
    it("handles dismissal when close button is clicked", async () => {
        const handleClose = vi.fn();
        const user = userEvent.setup();
        render(_jsx(Banner, { closable: true, onClose: handleClose, children: "Scheduled Maintenance Window Tonight" }));
        const closeBtn = screen.getByRole("button", { name: "Dismiss banner" });
        await user.click(closeBtn);
        expect(handleClose).toHaveBeenCalledTimes(1);
        expect(screen.queryByText("Scheduled Maintenance Window Tonight")).not.toBeInTheDocument();
    });
    it("forwards ref to banner aside element", () => {
        const ref = createRef();
        render(_jsx(Banner, { ref: ref, children: "Ref Banner" }));
        expect(ref.current).toBeInstanceOf(HTMLElement);
    });
});
