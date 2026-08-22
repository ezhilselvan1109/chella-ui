import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Skeleton } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
export const SkeletonDoc = () => {
    return (_jsx(ComponentDoc, { title: "Skeleton", description: "Animated placeholder mimicking the layout geometry of content while data is loading.", category: "Feedback & Overlay", children: _jsx(ComponentPreview, { title: "Card Skeleton Wireframe", code: `<div className="flex items-center gap-3">
  <Skeleton variant="circular" width={40} height={40} />
  <div className="space-y-2">
    <Skeleton variant="text" width={160} height={16} />
    <Skeleton variant="text" width={100} height={12} />
  </div>
</div>`, children: _jsxs("div", { className: "w-full max-w-sm p-4 border border-border rounded-chellaa-lg space-y-3", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Skeleton, { variant: "circular", width: 40, height: 40 }), _jsxs("div", { className: "space-y-2", children: [_jsx(Skeleton, { variant: "text", width: 160, height: 14 }), _jsx(Skeleton, { variant: "text", width: 100, height: 10 })] })] }), _jsx(Skeleton, { variant: "rectangular", width: "100%", height: 80 })] }) }) }));
};
