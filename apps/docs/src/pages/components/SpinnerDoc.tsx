import React from "react";
import { Spinner } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";

export const SpinnerDoc: React.FC = () => {
  return (
    <ComponentDoc
      title="Spinner"
      description="Indeterminate circular loader with screen-reader text for background fetching and submission indicators."
      category="Feedback & Overlay"
    >
      <ComponentPreview
        title="Spinner Sizes & Colors"
        code={`<Spinner size="small" />
<Spinner size="medium" />
<Spinner size="large" />`}
      >
        <div className="flex items-center gap-6">
          <Spinner size="small" />
          <Spinner size="medium" />
          <Spinner size="large" />
        </div>
      </ComponentPreview>
    </ComponentDoc>
  );
};
