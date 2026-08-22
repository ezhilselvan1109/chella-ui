import React from "react";
import { Skeleton } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";

export const SkeletonDoc: React.FC = () => {
  return (
    <ComponentDoc
      title="Skeleton"
      description="Animated placeholder mimicking the layout geometry of content while data is loading."
      category="Feedback & Overlay"
    >
      <ComponentPreview
        title="Card Skeleton Wireframe"
        code={`<div className="flex items-center gap-3">
  <Skeleton variant="circular" width={40} height={40} />
  <div className="space-y-2">
    <Skeleton variant="text" width={160} height={16} />
    <Skeleton variant="text" width={100} height={12} />
  </div>
</div>`}
      >
        <div className="w-full max-w-sm p-4 border border-border rounded-chellaa-lg space-y-3">
          <div className="flex items-center gap-3">
            <Skeleton variant="circular" width={40} height={40} />
            <div className="space-y-2">
              <Skeleton variant="text" width={160} height={14} />
              <Skeleton variant="text" width={100} height={10} />
            </div>
          </div>
          <Skeleton variant="rectangular" width="100%" height={80} />
        </div>
      </ComponentPreview>
    </ComponentDoc>
  );
};
