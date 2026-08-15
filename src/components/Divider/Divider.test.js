import { jsx as _jsx } from "react/jsx-runtime";
import { createRef } from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Divider } from "./Divider";
describe("Divider component", () => {
    it("renders horizontal hr separator by default", () => {
        const { container } = render(_jsx(Divider, { decorative: false }));
        const separator = screen.getByRole("separator");
        expect(separator).toBeInTheDocument();
        expect(separator).toHaveAttribute("aria-orientation", "horizontal");
        expect(container.querySelector("hr")).toBeInTheDocument();
    });
    it("renders vertical separator with aria-orientation vertical", () => {
        render(_jsx(Divider, { orientation: "vertical", decorative: false }));
        const separator = screen.getByRole("separator");
        expect(separator).toBeInTheDocument();
        expect(separator).toHaveAttribute("aria-orientation", "vertical");
    });
    it("renders text children label between divider lines", () => {
        render(_jsx(Divider, { children: "OR CONTINUE WITH" }));
        expect(screen.getByText("OR CONTINUE WITH")).toBeInTheDocument();
    });
    it("supports start and end alignment for children", () => {
        const { container, rerender } = render(_jsx(Divider, { align: "start", children: "Section Start" }));
        expect(container.querySelector(".before\\:w-6")).toBeInTheDocument();
        rerender(_jsx(Divider, { align: "end", children: "Section End" }));
        expect(container.querySelector(".after\\:w-6")).toBeInTheDocument();
    });
    it("forwards ref to divider container", () => {
        const ref = createRef();
        render(_jsx(Divider, { ref: ref }));
        expect(ref.current).toBeInstanceOf(HTMLElement);
    });
});
