# Chellaa UI — Component Engineering Standards & Guidelines

This document defines the mandatory architectural and engineering standards for all existing and future components in the **Chellaa UI** Design System.

---

## 1. Component Directory Anatomy

Every component in `packages/ui/src/components/` MUST strictly follow this 6-file directory structure:

```text
ComponentName/
├── ComponentName.tsx          # Component implementation and forwardRef
├── ComponentName.types.ts     # TypeScript interfaces and prop definitions
├── ComponentName.variants.ts  # Tailwind CVA (class-variance-authority) definitions
├── ComponentName.test.tsx     # Vitest & React Testing Library test suite
├── ComponentName.stories.tsx  # Storybook 8 interactive stories
└── index.ts                   # Public barrel export
```

---

## 2. Standard File Templates

### 2.1 `ComponentName.types.ts`
- Extend native HTML attributes (e.g. `ButtonHTMLAttributes`, `InputHTMLAttributes`, `HTMLAttributes`).
- Extend `VariantProps<typeof componentVariants>`.
- Use strict TypeScript types. **NEVER use `any`**. Use `unknown` or constrained generics `T extends object = Record<string, unknown>`.

```typescript
import type { HTMLAttributes, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import type { componentVariants } from "./ComponentName.variants";

export interface ComponentNameProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof componentVariants> {
  children?: ReactNode;
  disabled?: boolean;
}
```

### 2.2 `ComponentName.variants.ts`
- Use `class-variance-authority` (`cva`).
- Base classes MUST use semantic Tailwind tokens (`bg-primary`, `text-foreground`, `border-border`, `ring-ring`).
- **DO NOT** use hardcoded colors (`bg-[#1677ff]`) or component-specific CSS files.
- Use standard size names across the library: `"small" | "medium" | "large"`.

```typescript
import { cva } from "class-variance-authority";

export const componentVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline: "border border-border bg-background hover:bg-muted text-foreground",
        ghost: "hover:bg-muted text-foreground",
        danger: "bg-danger text-danger-foreground hover:bg-danger/90",
      },
      size: {
        small: "h-8 px-3 text-xs rounded-chellaa-sm",
        medium: "h-10 px-4 text-sm rounded-chellaa-md",
        large: "h-12 px-6 text-base rounded-chellaa-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);
```

### 2.3 `ComponentName.tsx`
- Always forward refs using `forwardRef`.
- Explicitly set `displayName`.
- Merge classes using the standard `cn()` utility (`import { cn } from "../../utils/cn"`).
- Manage controlled and uncontrolled states using `useControlled`.
- Generate stable accessibility IDs using `useId`.

```typescript
import { forwardRef } from "react";
import { cn } from "../../utils/cn";
import { componentVariants } from "./ComponentName.variants";
import type { ComponentNameProps } from "./ComponentName.types";

export const ComponentName = forwardRef<HTMLDivElement, ComponentNameProps>(
  ({ className, variant = "primary", size = "medium", disabled = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        aria-disabled={disabled}
        className={cn(componentVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ComponentName.displayName = "ComponentName";
```

### 2.4 `index.ts`
- Re-export the component and its type definitions.

```typescript
export * from "./ComponentName";
export * from "./ComponentName.types";
export * from "./ComponentName.variants";
```

---

## 3. Design Token & Styling Rules

1. **Semantic Color Tokens**:
   - `primary` & `primary-foreground`
   - `secondary` & `secondary-foreground`
   - `success` & `success-foreground`
   - `warning` & `warning-foreground`
   - `danger` & `danger-foreground`
   - `background` & `foreground`
   - `muted` & `muted-foreground`
   - `card` & `card-foreground`
   - `popover` & `popover-foreground`
   - `border`, `input`, `ring`
2. **Opacity Modifiers**:
   - Use Tailwind slash syntax: `bg-primary/90`, `bg-primary/10`, `border-border/80`.
3. **Radius Tokens**:
   - `rounded-chellaa-sm`, `rounded-chellaa-md`, `rounded-chellaa-lg`, `rounded-chellaa-full`.

---

## 4. Accessibility (A11y) Requirements

1. **Keyboard Navigation**:
   - All interactive elements must be focusable via `tabIndex` and support standard keyboard interaction (`Enter`, `Space`, `Escape`, `Arrow` keys).
   - Visible focus indicator: `focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`.
2. **WAI-ARIA Attributes**:
   - Set `aria-busy="true"` on loading elements.
   - Set `aria-disabled="true"` on disabled elements.
   - Set `aria-invalid="true"` on form fields with errors.
   - Link labels with `htmlFor` and error/helper text with `aria-describedby`.
   - Modals must have `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, and trap focus via `useFocusTrap`.
   - Dropdowns must follow `role="combobox"` and `role="listbox"` patterns.

---

## 5. Testing Standards

1. Use `@testing-library/react` and `@testing-library/user-event`.
2. Test user behavior rather than implementation details:
   - Render and variant classes
   - User interactions (`userEvent.click`, `userEvent.type`, `userEvent.keyboard`)
   - Controlled and uncontrolled state transitions
   - Disabled and loading states preventing interactions
   - Keyboard navigation and accessibility attributes (`role`, `aria-expanded`, `aria-invalid`)

---

## 6. Storybook Guidelines

1. Every component must have a `ComponentName.stories.tsx` file with a `meta` default export and individual variant stories.
2. Stories must demonstrate:
   - Default usage
   - All variants
   - All sizes
   - Interactive states (loading, disabled, error)
   - Edge cases (long text, icons, compound combinations)
