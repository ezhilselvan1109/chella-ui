import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Alert } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
export const AlertDoc = () => {
    return (_jsx(ComponentDoc, { title: "Alert Banner", description: "Static or dismissible contextual alert conveying system statuses, informational notices, warnings, and errors.", category: "Feedback & Overlay", children: _jsx(ComponentPreview, { title: "Alert Variants", code: `<Alert variant="info" title="System Maintenance">
  Scheduled database upgrade tonight at 02:00 UTC.
</Alert>
<Alert variant="success" title="Deployment Success">
  Version 0.1.0 successfully released to production cluster.
</Alert>
<Alert variant="warning" title="API Deprecation Notice">
  Legacy v1 endpoint will be sunset on September 30th.
</Alert>
<Alert variant="danger" title="Service Outage">
  Payments gateway experiencing elevated failure rates.
</Alert>`, children: _jsxs("div", { className: "space-y-3 w-full max-w-lg", children: [_jsx(Alert, { variant: "info", title: "System Maintenance", children: "Scheduled database upgrade tonight at 02:00 UTC." }), _jsx(Alert, { variant: "success", title: "Deployment Success", children: "Version 0.1.0 successfully released to production cluster." }), _jsx(Alert, { variant: "warning", title: "API Deprecation Notice", children: "Legacy v1 endpoint will be sunset on September 30th." }), _jsx(Alert, { variant: "danger", title: "Service Outage", children: "Payments gateway experiencing elevated failure rates." })] }) }) }));
};
