# Chella UI Monorepo

Enterprise-grade React Component Library and Design System with Tailwind CSS, TypeScript, Vitest, Storybook, and Vite.

---

## Monorepo Structure

```text
chella-ui/
│
├── apps/
│   ├── docs/             # Interactive documentation portal with live component demos & props tables
│   ├── playground/       # Design System Workbench with live token customizer (palette, radius, dark mode)
│   └── test-consumer/    # Standalone validation app verifying zero-purge npm packaging
│
├── packages/
│   └── ui/               # Core @chella/ui library package (Vite library mode, DTS, Tailwind styles.css)
│       │
│       ├── src/
│       │   ├── components/  # Button, Input, Select, Modal, Card, Badge, Table
│       │   ├── theme/       # ThemeProvider, useTheme, HSL design tokens
│       │   ├── hooks/       # useControlled, useFocusTrap, useOutsideClick, useId
│       │   ├── utils/       # cn (clsx + tailwind-merge)
│       │   └── index.ts     # Public package entry point
│       │
│       ├── .storybook/      # Storybook 8 with Tailwind & theme switcher
│       ├── vitest.config.ts # Vitest + React Testing Library config
│       └── vite.config.ts   # Vite library bundler
│
├── package.json          # Root npm workspaces
├── tsconfig.json         # Project references
├── eslint.config.js      # Strict ESLint config
└── .prettierrc           # Code formatter config
```

---

## Quick Scripts

### Development & Apps
```bash
# Launch interactive Design System Playground
npm run dev
# or
npm run dev:playground

# Launch Documentation Application
npm run dev:docs

# Launch Storybook Workbench
npm run storybook

# Launch Test Consumer Validation App
npm run dev:consumer
```

### Building & Testing
```bash
# Run complete Vitest suite (41 tests across all components)
npm run test

# Build all packages and applications
npm run build:all

# Type-check TypeScript
npm run typecheck
```

---

## Architectural Highlights

1. **Tailwind CSS & Semantic Tokens**: All styling uses semantic utility tokens (`bg-primary`, `text-primary-foreground`, `border-border`, etc.) mapped to HSL CSS variables.
2. **Theme Engine**: `ThemeProvider` and `useTheme()` manage Light, Dark, System themes, and dynamic custom token injection.
3. **Compound Components & Controlled State**: Supports both controlled and uncontrolled patterns seamlessly through `useControlled`.
4. **Accessible Foundations**: Full WAI-ARIA adherence (keyboard arrows, Escape listeners, focus trap and restoration for Modals).
5. **NPM Distribution**: Packaged via Vite library mode into ESM (`dist/index.js`), CJS (`dist/index.cjs`), `.d.ts` declaration maps, and precompiled `dist/styles.css`.

---

## Architecture & Engineering Standards

- **[Architecture Audit & Production Hardening Report](file:///d:/learning/Microservice/chella-ui/ARCHITECTURE_AUDIT.md)**: In-depth technical evaluation of tokens, packaging, tree-shaking, and performance.
- **[Component Engineering Standards](file:///d:/learning/Microservice/chella-ui/COMPONENT_STANDARDS.md)**: Mandatory architectural patterns, file conventions, and accessibility rules for all components.

---

## License

MIT © [Chella UI Team](https://github.com/chella-ui)