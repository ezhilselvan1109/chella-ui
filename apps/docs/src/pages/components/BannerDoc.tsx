import React from "react";
import { Banner, Button, Badge } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
import { Sparkles } from "lucide-react";

export const BannerDoc: React.FC = () => {
  return (
    <ComponentDoc
      title="Banner"
      description="Full-width top announcement banner highlighting major product releases, notices, or call-to-actions."
      category="Feedback & Overlay"
    >
      <ComponentPreview
        title="Announcement Banner"
        code={`<Banner
  icon={<Sparkles className="w-4 h-4 text-emerald-400" />}
  badge={<Badge variant="primary" size="small">v0.1.0</Badge>}
  action={<Button size="small" variant="secondary">Explore</Button>}
>
  Chellaa UI v0.1.0 Released — Explore over 35 production-grade accessible components.
</Banner>`}
      >
        <div className="w-full">
          <Banner
            icon={<Sparkles className="w-4 h-4 text-emerald-400" />}
            badge={<Badge variant="primary" size="small">v0.1.0</Badge>}
            action={<Button size="small" variant="secondary">Explore</Button>}
          >
            Chellaa UI v0.1.0 Released — Explore over 35 production-grade accessible components.
          </Banner>
        </div>
      </ComponentPreview>
    </ComponentDoc>
  );
};
