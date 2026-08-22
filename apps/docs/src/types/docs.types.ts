export type DocCategory =
  | "Getting Started"
  | "Forms & Inputs"
  | "Data Display"
  | "Feedback & Overlay"
  | "Navigation"
  | "Layout & Utility";

export interface PropDefinition {
  name: string;
  type: string;
  defaultValue?: string;
  required?: boolean;
  description: string;
}

export interface DocMetadata {
  id: string;
  title: string;
  description: string;
  category: DocCategory;
  badge?: "Core" | "New" | "Updated" | "Beta";
  package?: string;
}

export interface NavItem {
  id: string;
  title: string;
  category: DocCategory;
  badge?: string;
}

export interface NavGroup {
  title: DocCategory;
  items: NavItem[];
}
