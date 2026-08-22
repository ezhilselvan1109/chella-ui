import React from "react";
import { Alert } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";

export const AlertDoc: React.FC = () => {
  return (
    <ComponentDoc
      title="Alert Banner"
      description="Static or dismissible contextual alert conveying system statuses, informational notices, warnings, and errors."
      category="Feedback & Overlay"
    >
      <ComponentPreview
        title="Alert Variants"
        code={`<Alert variant="info" title="System Maintenance">
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
</Alert>`}
      >
        <div className="space-y-3 w-full max-w-lg">
          <Alert variant="info" title="System Maintenance">
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
          </Alert>
        </div>
      </ComponentPreview>
    </ComponentDoc>
  );
};
