# Chellaa UI — NPM Workspaces Monorepo

Enterprise-grade React Component Library and Design System with Tailwind CSS, TypeScript, Vitest, Storybook, and Vite.

---

## 1. Monorepo Structure

```text
chellaa-ui/
│
├── apps/
│   ├── docs/             # Documentation Portal with live previews & API tables (@chellaa/docs)
│   ├── playground/       # Design System Workbench with live token engine (@chellaa/playground)
│   ├── storybook/        # Standalone Storybook 8 application (@chellaa/storybook)
│   └── test-consumer/    # Standalone validation app verifying zero-purge npm packaging
│
├── packages/
│   └── ui/               # Core @chellaa/ui library package
│       ├── src/
│       │   ├── components/  # 35 UI component suites (6-file anatomy)
│       │   ├── theme/       # ThemeProvider, useTheme, HSL design tokens
│       │   ├── hooks/       # useControlled, useFocusTrap, useOutsideClick, useId
│       │   ├── utils/       # cn (clsx + tailwind-merge)
│       │   └── index.ts     # Public package entry point
│       └── dist/            # Compiled artifacts (ESM, CJS, DTS, styles.css)
│
├── .github/
│   └── workflows/ci.yml  # Automated CI verification workflow
│
├── package.json          # Root npm workspaces ["apps/*", "packages/*"]
├── tsconfig.json         # Root project references
├── eslint.config.js      # Strict ESLint configuration
└── ARCHITECTURE.md       # Full monorepo architectural documentation
```

---

## 2. Quick Scripts

### 2.1 Development & Applications
```bash
# Launch Documentation Portal (port 5174)
npm run dev:docs

# Launch Interactive Design System Playground (port 5173)
npm run dev:playground

# Launch Storybook Workbench (port 6006)
npm run storybook

# Launch Test Consumer App (port 5175)
npm run dev:consumer
```

### 2.2 Building & Testing
```bash
# Build core @chellaa/ui library (dist/index.js, dist/index.cjs, dist/styles.css)
npm run build:ui

# Build all packages and applications in deterministic dependency order
npm run build:all

# Run complete Vitest suite (480 unit tests across 72 test suites)
npm run test

# Type-check TypeScript across all workspaces
npm run typecheck

# Lint across all workspaces with ESLint
npm run lint
```

---

## 3. Consuming `@chellaa/ui`

Install the package in your application:
```bash
npm install @chellaa/ui
```

Import components and precompiled zero-purge stylesheet:
```tsx
import React from "react";
import { Button, Card, Badge, ThemeProvider } from "@chellaa/ui";
import "@chellaa/ui/styles.css";

export function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <Card variant="elevated" hoverable>
        <Card.Header>
          <Card.Title>Production Microservice</Card.Title>
          <Card.Description>Status monitor</Card.Description>
        </Card.Header>
        <Card.Content>
          <Badge dot variant="success">Operational</Badge>
        </Card.Content>
        <Card.Footer>
          <Button variant="primary">Deploy Service</Button>
        </Card.Footer>
      </Card>
    </ThemeProvider>
  );
}
```

---

## 4. Vercel Deployment Architecture

Each application in `apps/` can be independently deployed to Vercel:

| Vercel Project | Root Directory | Build Command | Output Directory |
| :--- | :--- | :--- | :--- |
| **`chellaa-ui-docs`** | `apps/docs` | `npm run build` | `dist` |
| **`chellaa-ui-playground`** | `apps/playground` | `npm run build` | `dist` |
| **`chellaa-ui-storybook`** | `apps/storybook` | `npm run build:storybook` | `storybook-static` |

---

## 5. Architectural Standards

- **[Monorepo Architecture Documentation](file:///d:/learning/Microservice/chellaa-ui/ARCHITECTURE.md)**: Deep dive into package boundaries, dependency flow, theme tokens, and scaling.
- **[Component Engineering Standards](file:///d:/learning/Microservice/chellaa-ui/COMPONENT_STANDARDS.md)**: 6-file component anatomy, accessibility, and testing guidelines.

---

## 6. License

MIT © [Chellaa UI Team](https://github.com/chellaa-ui)