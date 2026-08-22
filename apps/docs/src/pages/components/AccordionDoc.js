import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
const accordionProps = [
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
export const AccordionDoc = () => {
    return (_jsx(ComponentDoc, { title: "Accordion", description: "Vertically stacked interactive disclosures for expanding and collapsing sections of content.", category: "Data Display", propsData: accordionProps, children: _jsx(ComponentPreview, { title: "Separated Cards Variant", description: "Clean separated cards with independent borders and hover elevations.", code: `<Accordion type="single" variant="separated" defaultValue="item-1">
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
</Accordion>`, children: _jsx("div", { className: "w-full max-w-lg", children: _jsxs(Accordion, { type: "single", variant: "separated", defaultValue: "item-1", children: [_jsxs(AccordionItem, { value: "item-1", children: [_jsx(AccordionTrigger, { children: "What is Chellaa UI?" }), _jsx(AccordionContent, { children: "Chellaa UI is a production-ready design system built on React, Tailwind CSS, and Radix Primitives." })] }), _jsxs(AccordionItem, { value: "item-2", children: [_jsx(AccordionTrigger, { children: "Does it support dark mode?" }), _jsx(AccordionContent, { children: "Yes, fully equipped with Obsidian dark mode (rgb(10 13 14)) and instant zero-runtime theme switching." })] })] }) }) }) }));
};
