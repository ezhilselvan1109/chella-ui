import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Switch } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
const switchProps = [
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
export const SwitchDoc = () => {
    const [notifications, setNotifications] = useState(true);
    const [twoFactor, setTwoFactor] = useState(false);
    return (_jsx(ComponentDoc, { title: "Switch", description: "An interactive toggle switch representing binary states with smooth physical animation and keyboard space/enter triggers.", category: "Forms & Inputs", propsData: switchProps, children: _jsx(ComponentPreview, { title: "Settings Toggles", code: `<Switch
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
/>`, children: _jsxs("div", { className: "space-y-4 max-w-md w-full", children: [_jsx(Switch, { label: "Push Notifications", description: "Receive instant desktop notifications for build results.", checked: notifications, onCheckedChange: setNotifications }), _jsx(Switch, { label: "Two-Factor Authentication (2FA)", description: "Require security code on every login attempt.", checked: twoFactor, onCheckedChange: setTwoFactor })] }) }) }));
};
