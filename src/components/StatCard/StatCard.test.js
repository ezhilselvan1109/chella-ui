import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createRef } from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { StatCard } from "./StatCard";
import { DollarSign } from "lucide-react";
describe("StatCard component", () => {
    it("renders with shorthand title, value, icon, and trend", () => {
        render(_jsx(StatCard, { title: "Total Revenue", value: "$128,450", icon: _jsx(DollarSign, { "data-testid": "stat-icon" }), trend: { value: "+24.5%", direction: "up", label: "vs last month" } }));
        expect(screen.getByText("Total Revenue")).toBeInTheDocument();
        expect(screen.getByText("$128,450")).toBeInTheDocument();
        expect(screen.getByTestId("stat-icon")).toBeInTheDocument();
        expect(screen.getByText("+24.5%")).toBeInTheDocument();
        expect(screen.getByText("vs last month")).toBeInTheDocument();
    });
    it("renders compound components", () => {
        render(_jsxs(StatCard, { variant: "elevated", children: [_jsxs(StatCard.Header, { children: [_jsx(StatCard.Title, { children: "Compound Title" }), _jsx(StatCard.Icon, { children: _jsx(DollarSign, { "data-testid": "compound-icon" }) })] }), _jsx(StatCard.Value, { children: "4,890" }), _jsx(StatCard.Trend, { direction: "down", value: "-12.3%", label: "churn rate" })] }));
        expect(screen.getByText("Compound Title")).toBeInTheDocument();
        expect(screen.getByText("4,890")).toBeInTheDocument();
        expect(screen.getByTestId("compound-icon")).toBeInTheDocument();
        expect(screen.getByText("-12.3%")).toBeInTheDocument();
        expect(screen.getByText("churn rate")).toBeInTheDocument();
    });
    it("renders trend colors according to direction", () => {
        const { container, rerender } = render(_jsx(StatCard, { title: "Revenue", value: "100", trend: { value: "+10%", direction: "up" } }));
        expect(container.querySelector(".text-emerald-600")).toBeInTheDocument();
        rerender(_jsx(StatCard, { title: "Revenue", value: "100", trend: { value: "-10%", direction: "down" } }));
        expect(container.querySelector(".text-rose-600")).toBeInTheDocument();
    });
    it("forwards ref to stat card container", () => {
        const ref = createRef();
        render(_jsx(StatCard, { ref: ref, title: "Ref Test", value: "123" }));
        expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
});
