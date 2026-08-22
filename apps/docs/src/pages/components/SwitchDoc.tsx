import React, { useState } from "react";
import { Switch } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
import type { PropDefinition } from "../../types/docs.types";

const switchProps: PropDefinition[] = [
  {
    name: "checked",
    type: "boolean",
    defaultValue: "false",
    description: "Whether the switch toggle is in the ON position.",
  },
  {
    name: "size",
    type: '"small" | "medium" | "large"',
    defaultValue: '"medium"',
    description: "Size dimensions of the toggle.",
  },
  {
    name: "label",
    type: "ReactNode",
    description: "Label text for the switch.",
  },
  {
    name: "description",
    type: "string",
    description: "Supporting explanation text.",
  },
];

export const SwitchDoc: React.FC = () => {
  const [notifications, setNotifications] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);

  return (
    <ComponentDoc
      title="Switch"
      description="An interactive toggle switch representing binary states with smooth physical animation and keyboard space/enter triggers."
      category="Forms & Inputs"
      propsData={switchProps}
    >
      <ComponentPreview
        title="Settings Toggles"
        code={`<Switch
  label="Push Notifications"
  description="Receive instant desktop notifications for build results."
  checked={notifications}
  onCheckedChange={setNotifications}
/>

<Switch
  label="Two-Factor Authentication (2FA)"
  description="Require security code on every login attempt."
  checked={twoFactor}
  onCheckedChange={setTwoFactor}
/>`}
      >
        <div className="space-y-4 max-w-md w-full">
          <Switch
            label="Push Notifications"
            description="Receive instant desktop notifications for build results."
            checked={notifications}
            onCheckedChange={setNotifications}
          />
          <Switch
            label="Two-Factor Authentication (2FA)"
            description="Require security code on every login attempt."
            checked={twoFactor}
            onCheckedChange={setTwoFactor}
          />
        </div>
      </ComponentPreview>
    </ComponentDoc>
  );
};
