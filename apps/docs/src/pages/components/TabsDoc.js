import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
const tabsProps = [
    {
        name: "defaultValue",
        type: "string",
        description: "Value of initial active tab.",
    },
    {
        name: "variant",
        type: '"underline" | "pill" | "enclosed"',
        defaultValue: '"underline"',
        description: "Visual indicator style.",
    },
];
export const TabsDoc = () => {
    return (_jsx(ComponentDoc, { title: "Tabs", description: "Content organization component switching between parallel views in the same context.", category: "Data Display", propsData: tabsProps, children: _jsx(ComponentPreview, { title: "Pill & Underline Tabs", code: `<Tabs defaultValue="account" variant="pill">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
    <TabsTrigger value="billing">Billing</TabsTrigger>
  </TabsList>
  <TabsContent value="account" className="pt-4 text-xs text-muted-foreground">
    Manage your account personal settings and preferences.
  </TabsContent>
  <TabsContent value="password" className="pt-4 text-xs text-muted-foreground">
    Update your security credentials and passkeys.
  </TabsContent>
  <TabsContent value="billing" className="pt-4 text-xs text-muted-foreground">
    View invoices and manage credit cards.
  </TabsContent>
</Tabs>`, children: _jsx("div", { className: "w-full max-w-md", children: _jsxs(Tabs, { defaultValue: "account", variant: "pill", children: [_jsxs(TabsList, { children: [_jsx(TabsTrigger, { value: "account", children: "Account" }), _jsx(TabsTrigger, { value: "password", children: "Password" }), _jsx(TabsTrigger, { value: "billing", children: "Billing" })] }), _jsx(TabsContent, { value: "account", className: "pt-4 text-xs text-muted-foreground", children: "Manage your account personal settings, emails, and profile picture." }), _jsx(TabsContent, { value: "password", className: "pt-4 text-xs text-muted-foreground", children: "Update your security credentials and passkeys." }), _jsx(TabsContent, { value: "billing", className: "pt-4 text-xs text-muted-foreground", children: "View invoices and manage payment methods." })] }) }) }) }));
};
