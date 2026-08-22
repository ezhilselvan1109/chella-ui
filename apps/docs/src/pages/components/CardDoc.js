import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button, Badge } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
const cardProps = [
    {
        name: "variant",
        type: '"outlined" | "elevated" | "flat"',
        defaultValue: '"outlined"',
        description: "Border, shadow, and elevation style.",
    },
    {
        name: "hoverable",
        type: "boolean",
        defaultValue: "false",
        description: "Adds hover translation and shadow lift animation.",
    },
];
export const CardDoc = () => {
    return (_jsx(ComponentDoc, { title: "Card", description: "Content container component with compound headers, descriptions, body content, and footer actions.", category: "Data Display", propsData: cardProps, children: _jsx(ComponentPreview, { title: "Compound Card", code: `<Card variant="outlined" className="max-w-sm">
  <CardHeader>
    <div className="flex justify-between items-start">
      <CardTitle>Enterprise Analytics</CardTitle>
      <Badge variant="success" size="small">Live</Badge>
    </div>
    <CardDescription>Real-time telemetry and microservice traffic metrics.</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-xs text-muted-foreground">
      System health is optimal with 99.98% uptime in the last 30 days.
    </p>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="ghost" size="small">Details</Button>
    <Button variant="primary" size="small">View Metrics</Button>
  </CardFooter>
</Card>`, children: _jsxs(Card, { variant: "outlined", className: "max-w-sm w-full", children: [_jsxs(CardHeader, { children: [_jsxs("div", { className: "flex justify-between items-start", children: [_jsx(CardTitle, { children: "Enterprise Analytics" }), _jsx(Badge, { variant: "success", size: "small", children: "Live" })] }), _jsx(CardDescription, { children: "Real-time telemetry and microservice traffic metrics." })] }), _jsx(CardContent, { children: _jsx("p", { className: "text-xs text-muted-foreground", children: "System health is optimal with 99.98% uptime in the last 30 days." }) }), _jsxs(CardFooter, { className: "flex justify-between", children: [_jsx(Button, { variant: "ghost", size: "small", children: "Details" }), _jsx(Button, { variant: "primary", size: "small", children: "View Metrics" })] })] }) }) }));
};
