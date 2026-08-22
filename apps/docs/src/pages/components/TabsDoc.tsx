import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent, Card } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
import type { PropDefinition } from "../../types/docs.types";

const tabsProps: PropDefinition[] = [
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

export const TabsDoc: React.FC = () => {
  return (
    <ComponentDoc
      title="Tabs"
      description="Content organization component switching between parallel views in the same context."
      category="Data Display"
      propsData={tabsProps}
    >
      <ComponentPreview
        title="Pill & Underline Tabs"
        code={`<Tabs defaultValue="account" variant="pill">
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
</Tabs>`}
      >
        <div className="w-full max-w-md">
          <Tabs defaultValue="account" variant="pill">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="pt-4 text-xs text-muted-foreground">
              Manage your account personal settings, emails, and profile picture.
            </TabsContent>
            <TabsContent value="password" className="pt-4 text-xs text-muted-foreground">
              Update your security credentials and passkeys.
            </TabsContent>
            <TabsContent value="billing" className="pt-4 text-xs text-muted-foreground">
              View invoices and manage payment methods.
            </TabsContent>
          </Tabs>
        </div>
      </ComponentPreview>
    </ComponentDoc>
  );
};
