import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createRef } from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Kbd } from "./Kbd";
describe("Kbd component", () => {
    it("renders native kbd element with children", () => {
        const { container } = render(_jsx(Kbd, { children: "\u2318K" }));
        expect(screen.getByText("⌘K")).toBeInTheDocument();
        expect(container.querySelector("kbd")).toBeInTheDocument();
    });
    it("maps shortcut key names when keys prop is provided", () => {
        render(_jsx(Kbd, { keys: ["cmd", "shift", "p"], separator: "+" }));
        expect(screen.getByText("⌘")).toBeInTheDocument();
        expect(screen.getByText("⇧")).toBeInTheDocument();
        expect(screen.getByText("P")).toBeInTheDocument();
    });
    it("renders Kbd.Group with separator", () => {
        render(_jsxs(Kbd.Group, { separator: "+", children: [_jsx(Kbd, { children: "Ctrl" }), _jsx(Kbd, { children: "Alt" }), _jsx(Kbd, { children: "Del" })] }));
        expect(screen.getByText("Ctrl")).toBeInTheDocument();
        expect(screen.getByText("Alt")).toBeInTheDocument();
        expect(screen.getByText("Del")).toBeInTheDocument();
        expect(screen.getAllByText("+").length).toBe(2);
    });
    it("renders size and variant classes", () => {
        const { container, rerender } = render(_jsx(Kbd, { size: "small", variant: "outline", children: "Esc" }));
        expect(container.querySelector(".h-5")).toBeInTheDocument();
        expect(container.querySelector(".border-border")).toBeInTheDocument();
        rerender(_jsx(Kbd, { size: "large", variant: "subtle", children: "Enter" }));
        expect(container.querySelector(".h-7")).toBeInTheDocument();
    });
    it("forwards ref to kbd element", () => {
        const ref = createRef();
        render(_jsx(Kbd, { ref: ref, children: "A" }));
        expect(ref.current).toBeInstanceOf(HTMLElement);
    });
});
