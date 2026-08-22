import { jsx as _jsx } from "react/jsx-runtime";
import { Banner, Button, Badge } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
import { Sparkles } from "lucide-react";
export const BannerDoc = () => {
    return (_jsx(ComponentDoc, { title: "Banner", description: "Full-width top announcement banner highlighting major product releases, notices, or call-to-actions.", category: "Feedback & Overlay", children: _jsx(ComponentPreview, { title: "Announcement Banner", code: `<Banner
  icon={<Sparkles className="w-4 h-4 text-emerald-400" />}
  badge={<Badge variant="primary" size="small">v0.1.0</Badge>}
  action={<Button size="small" variant="secondary">Explore</Button>}
>
  Chellaa UI v0.1.0 Released — Explore over 35 production-grade accessible components.
</Banner>`, children: _jsx("div", { className: "w-full", children: _jsx(Banner, { icon: _jsx(Sparkles, { className: "w-4 h-4 text-emerald-400" }), badge: _jsx(Badge, { variant: "primary", size: "small", children: "v0.1.0" }), action: _jsx(Button, { size: "small", variant: "secondary", children: "Explore" }), children: "Chellaa UI v0.1.0 Released \u2014 Explore over 35 production-grade accessible components." }) }) }) }));
};
