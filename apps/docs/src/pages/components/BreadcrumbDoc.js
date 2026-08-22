import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@chellaa/ui";
import { ComponentDoc } from "../../components/shared/ComponentDoc";
import { ComponentPreview } from "../../components/shared/ComponentPreview";
export const BreadcrumbDoc = () => {
    return (_jsx(ComponentDoc, { title: "Breadcrumb", description: "Hierarchical navigation path showing the user's current location within the application structure.", category: "Navigation", children: _jsx(ComponentPreview, { title: "Breadcrumb Path", code: `<Breadcrumb>
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
</Breadcrumb>`, children: _jsxs(Breadcrumb, { children: [_jsx(BreadcrumbItem, { children: _jsx(BreadcrumbLink, { href: "#getting-started", children: "Home" }) }), _jsx(BreadcrumbSeparator, {}), _jsx(BreadcrumbItem, { children: _jsx(BreadcrumbLink, { href: "#button", children: "Components" }) }), _jsx(BreadcrumbSeparator, {}), _jsx(BreadcrumbItem, { children: _jsx(BreadcrumbPage, { children: "Breadcrumb" }) })] }) }) }));
};
