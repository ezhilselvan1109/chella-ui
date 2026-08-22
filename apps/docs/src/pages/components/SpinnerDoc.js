import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Spinner } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
export const SpinnerDoc = () => {
    return (_jsx(ComponentDoc, { title: "Spinner", description: "Indeterminate circular loader with screen-reader text for background fetching and submission indicators.", category: "Feedback & Overlay", children: _jsx(ComponentPreview, { title: "Spinner Sizes & Colors", code: `<Spinner size="small" />
<Spinner size="medium" />
<Spinner size="large" />`, children: _jsxs("div", { className: "flex items-center gap-6", children: [_jsx(Spinner, { size: "small" }), _jsx(Spinner, { size: "medium" }), _jsx(Spinner, { size: "large" })] }) }) }));
};
