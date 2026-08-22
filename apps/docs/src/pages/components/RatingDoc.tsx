import React, { useState } from "react";
import { Rating } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
import type { PropDefinition } from "../../types/docs.types";

const ratingProps: PropDefinition[] = [
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

export const RatingDoc: React.FC = () => {
  const [score, setScore] = useState(4);

  return (
    <ComponentDoc
      title="Rating"
      description="Interactive star rating component with keyboard navigation, hover preview feedback, and read-only display modes."
      category="Forms & Inputs"
      propsData={ratingProps}
    >
      <ComponentPreview
        title="Interactive Star Rating"
        code={`<Rating value={score} onChange={setScore} />
<p className="text-xs text-muted-foreground">Current score: {score} / 5</p>`}
      >
        <div className="flex flex-col items-center gap-2">
          <Rating value={score} onChange={setScore} size="large" />
          <span className="text-xs text-muted-foreground">Selected: {score} out of 5 stars</span>
        </div>
      </ComponentPreview>
    </ComponentDoc>
  );
};
