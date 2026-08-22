import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
import type { PropDefinition } from "../../types/docs.types";

const accordionProps: PropDefinition[] = [
  {
    name: "type",
    type: '"single" | "multiple"',
    defaultValue: '"single"',
    description: "Determines whether one or multiple panels can open simultaneously.",
  },
  {
    name: "variant",
    type: '"default" | "bordered" | "separated"',
    defaultValue: '"default"',
    description: "Visual container styling (divider, bordered card, separated floating cards).",
  },
];

export const AccordionDoc: React.FC = () => {
  return (
    <ComponentDoc
      title="Accordion"
      description="Vertically stacked interactive disclosures for expanding and collapsing sections of content."
      category="Data Display"
      propsData={accordionProps}
    >
      <ComponentPreview
        title="Separated Cards Variant"
        description="Clean separated cards with independent borders and hover elevations."
        code={`<Accordion type="single" variant="separated" defaultValue="item-1">
  <AccordionItem value="item-1">
    <AccordionTrigger>What is Chellaa UI?</AccordionTrigger>
    <AccordionContent>
      Chellaa UI is a production-ready design system built on React, Tailwind CSS, and Radix Primitives.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Does it support dark mode?</AccordionTrigger>
    <AccordionContent>
      Yes, fully equipped with Obsidian dark mode rgb(10 13 14) and instant theme switching.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
      >
        <div className="w-full max-w-lg">
          <Accordion type="single" variant="separated" defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is Chellaa UI?</AccordionTrigger>
              <AccordionContent>
                Chellaa UI is a production-ready design system built on React, Tailwind CSS, and Radix Primitives.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Does it support dark mode?</AccordionTrigger>
              <AccordionContent>
                Yes, fully equipped with Obsidian dark mode (rgb(10 13 14)) and instant zero-runtime theme switching.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </ComponentPreview>
    </ComponentDoc>
  );
};
