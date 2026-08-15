import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createRef } from "react";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Avatar } from "./Avatar";
import { AvatarGroup } from "./AvatarGroup";
import { Shield } from "lucide-react";
describe("Avatar & AvatarGroup component", () => {
    it("renders image with src and alt attributes", () => {
        render(_jsx(Avatar, { src: "https://example.com/photo.jpg", alt: "Kumar Selvan" }));
        const img = screen.getByRole("img", { name: "Kumar Selvan" });
        expect(img).toBeInTheDocument();
    });
    it("extracts 2-letter uppercase initials from multi-word name", () => {
        render(_jsx(Avatar, { name: "Kumar Selvan" }));
        expect(screen.getByText("KS")).toBeInTheDocument();
    });
    it("extracts initials from single-word name", () => {
        render(_jsx(Avatar, { name: "Chella" }));
        expect(screen.getByText("CH")).toBeInTheDocument();
    });
    it("falls back to initials when image encounters load error", () => {
        render(_jsx(Avatar, { src: "https://invalid.url/broken.jpg", name: "Dev Ops" }));
        const img = screen.getByRole("img", { name: "Dev Ops" });
        fireEvent.error(img);
        expect(screen.getByText("DO")).toBeInTheDocument();
    });
    it("renders custom icon when provided", () => {
        render(_jsx(Avatar, { icon: _jsx(Shield, { "data-testid": "shield-icon" }) }));
        expect(screen.getByTestId("shield-icon")).toBeInTheDocument();
    });
    it("renders status indicator dot with accessible label", () => {
        render(_jsx(Avatar, { name: "Online User", status: "online" }));
        expect(screen.getByRole("status")).toHaveAttribute("aria-label", "Status: online");
    });
    it("AvatarGroup limits items to max and displays overflow count badge", () => {
        render(_jsxs(AvatarGroup, { max: 2, children: [_jsx(Avatar, { name: "User 1" }), _jsx(Avatar, { name: "User 2" }), _jsx(Avatar, { name: "User 3" }), _jsx(Avatar, { name: "User 4" })] }));
        expect(screen.getByText("U1")).toBeInTheDocument();
        expect(screen.getByText("U2")).toBeInTheDocument();
        expect(screen.queryByText("U3")).not.toBeInTheDocument();
        expect(screen.getByText("+2")).toBeInTheDocument();
    });
    it("forwards ref to Avatar container", () => {
        const ref = createRef();
        render(_jsx(Avatar, { ref: ref, name: "Ref User" }));
        expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
    it("forwards ref to AvatarGroup container", () => {
        const ref = createRef();
        render(_jsx(AvatarGroup, { ref: ref, children: _jsx(Avatar, { name: "A" }) }));
        expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
});
