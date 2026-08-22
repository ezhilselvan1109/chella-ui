import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";

export const BreadcrumbDoc: React.FC = () => {
  return (
    <ComponentDoc
      title="Breadcrumb"
      description="Hierarchical navigation path showing the user's current location within the application structure."
      category="Navigation"
    >
      <ComponentPreview
        title="Breadcrumb Path"
        code={`<Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbLink href="#getting-started">Home</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbItem>
    <BreadcrumbLink href="#components">Components</BreadcrumbLink>
  </BreadcrumbItem>
  <BreadcrumbSeparator />
  <BreadcrumbItem>
    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
  </BreadcrumbItem>
</Breadcrumb>`}
      >
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="#getting-started">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#button">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </Breadcrumb>
      </ComponentPreview>
    </ComponentDoc>
  );
};
