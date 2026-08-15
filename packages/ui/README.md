# Chella UI

A production-grade, accessible React component library and design system styled with Tailwind CSS, strictly-typed in TypeScript, and distributed with precompiled design tokens.

---

## Features

- **Tailwind CSS First**: 100% utility-based styling with semantic design tokens (`bg-primary`, `text-primary-foreground`, `border-border`, etc.). Zero arbitrary values or component CSS files.
- **Accessible (A11y)**: Compliant with WAI-ARIA standards, including focus traps, focus restoration, full keyboard navigation (Arrows, Escape, Enter, Space), and ARIA attributes.
- **Theme & Design Tokens**: HSL CSS variable architecture supporting Light Mode, Dark Mode, System Preference, and live Custom Brand Palettes.
- **Zero-Purge Consumer Compatibility**: Shipped with precompiled `dist/styles.css`. Consuming applications do not need to configure Tailwind content purging or scanning.
- **Strict TypeScript**: 100% strict type safety with auto-generated declaration files (`.d.ts`).
- **Compound Components & Controlled/Uncontrolled**: Advanced React composition patterns with `useControlled` and Context-based subcomponents.

---

## Installation

```bash
npm install @chella/ui
```

---

## Quick Start

Import the bundled stylesheet into your entry file (e.g. `main.tsx` or `App.tsx`):

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@chella/ui";
import "@chella/ui/styles.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system">
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
```

Then consume components from `@chella/ui`:

```tsx
import {
  Button,
  Input,
  Select,
  Modal,
  Card,
  Badge,
  Table,
} from "@chella/ui";

export default function CustomerDashboard() {
  return (
    <Card variant="elevated">
      <Card.Header>
        <Card.Title>Customer Management</Card.Title>
        <Card.Description>Provision and manage team members.</Card.Description>
      </Card.Header>
      <Card.Content>
        <Input label="Full Name" placeholder="Enter customer name" />
        <Select
          label="Role"
          options={[
            { label: "Administrator", value: "admin" },
            { label: "Editor", value: "editor" },
          ]}
        />
      </Card.Content>
      <Card.Footer>
        <Button variant="primary">Create Customer</Button>
      </Card.Footer>
    </Card>
  );
}
```

---

## Components

| Component | Features |
| :--- | :--- |
| **`Button`** | `variant` (primary, secondary, outline, ghost, danger, link), `size` (small, medium, large), `loading` spinner, `disabled`, `fullWidth`, icons |
| **`Input`** | `label`, `helperText`, `error` alert, `prefix`, `suffix`, `clearable`, `loading`, `variant` (default, filled, flushed) |
| **`Select`** | Single & `multiple` selection, `searchable`, keyboard arrows + enter, `clearable`, compound `<Select.Option>` or declarative `options` array |
| **`Modal`** | Portal dialog, focus trapping, focus restoration, backdrop dismiss, `Escape` key close, body scroll lock, compound subcomponents |
| **`Card`** | Compound architecture (`Card.Header`, `Card.Title`, `Card.Description`, `Card.Content`, `Card.Footer`), `hoverable`, `variant` |
| **`Badge`** | Status indicators, `variant` palettes, `dot` indicators, `removable` tags |
| **`Table`** | Generic typed columns, sortable columns, row selection checkboxes, `emptyText`, `loading` skeleton, responsive wrapper |

---

## License

MIT © [Chella UI Team](https://github.com/chella-ui)
