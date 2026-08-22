import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Rating } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
const ratingProps = [
    {
        name: "value",
        type: "number",
        defaultValue: "0",
        description: "Current active star score (1 to max).",
    },
    {
        name: "max",
        type: "number",
        defaultValue: "5",
        description: "Total number of rating stars.",
    },
    {
        name: "readOnly",
        type: "boolean",
        defaultValue: "false",
        description: "Disables interaction for display purposes.",
    },
    {
        name: "size",
        type: '"small" | "medium" | "large"',
        defaultValue: '"medium"',
        description: "Visual size of the stars.",
    },
];
export const RatingDoc = () => {
    const [score, setScore] = useState(4);
    return (_jsx(ComponentDoc, { title: "Rating", description: "Interactive star rating component with keyboard navigation, hover preview feedback, and read-only display modes.", category: "Forms & Inputs", propsData: ratingProps, children: _jsx(ComponentPreview, { title: "Interactive Star Rating", code: `<Rating value={score} onChange={setScore} />
<p className="text-xs text-muted-foreground">Current score: {score} / 5</p>`, children: _jsxs("div", { className: "flex flex-col items-center gap-2", children: [_jsx(Rating, { value: score, onChange: setScore, size: "large" }), _jsxs("span", { className: "text-xs text-muted-foreground", children: ["Selected: ", score, " out of 5 stars"] })] }) }) }));
};
