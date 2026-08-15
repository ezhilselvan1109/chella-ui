import { useState } from "react";
import {
  Button,
  Input,
  Select,
  Modal,
  Card,
  Badge,
  Table,
  Checkbox,
  Switch,
  useTheme,
} from "../index";
import {
  Copy,
  Check,
  Sun,
  Moon,
  Laptop,
  Search,
  UserPlus,
} from "lucide-react";

type DocSection =
  | "getting-started"
  | "theming"
  | "button"
  | "input"
  | "checkbox"
  | "switch"
  | "select"
  | "modal"
  | "card"
  | "badge"
  | "table";

export default function App() {
  const [activeSection, setActiveSection] = useState<DocSection>("getting-started");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();

  // Demo interactive states
  const [btnVariant, setBtnVariant] = useState<"primary" | "secondary" | "outline" | "ghost" | "danger" | "link">("primary");
  const [btnSize, setBtnSize] = useState<"small" | "medium" | "large">("medium");
  const [btnLoading, setBtnLoading] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(false);

  const [inputVal, setInputVal] = useState("Jane Doe");
  const [inputError, setInputError] = useState("");
  const [inputSize, setInputSize] = useState<"small" | "medium" | "large">("medium");
  const [inputVariant, setInputVariant] = useState<"default" | "filled" | "flushed">("default");

  const [selectVal, setSelectVal] = useState<string | string[]>("1");
  const [modalDemoOpen, setModalDemoOpen] = useState(false);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const navItems: { id: DocSection; title: string; category: "Guide" | "Components" }[] = [
    { id: "getting-started", title: "Overview & Installation", category: "Guide" },
    { id: "theming", title: "Theme & Design Tokens", category: "Guide" },
    { id: "button", title: "Button", category: "Components" },
    { id: "input", title: "Input", category: "Components" },
    { id: "checkbox", title: "Checkbox", category: "Components" },
    { id: "switch", title: "Switch", category: "Components" },
    { id: "select", title: "Select", category: "Components" },
    { id: "modal", title: "Modal", category: "Components" },
    { id: "card", title: "Card", category: "Components" },
    { id: "badge", title: "Badge", category: "Components" },
    { id: "table", title: "Table", category: "Components" },
  ];

  const filteredNav = navItems.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans transition-colors duration-200">
      {/* Top Navigation */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md px-6 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-chella-md bg-primary text-primary-foreground flex items-center justify-center font-black text-sm shadow-sm">
            C
          </div>
          <div>
            <span className="font-bold tracking-tight text-base">Chella UI Docs</span>
            <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
              v0.1.0
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center bg-muted/60 p-1 rounded-chella-md border border-border">
            <button
              onClick={() => setTheme("light")}
              className={`p-1.5 rounded-chella-sm transition-colors ${
                theme === "light" ? "bg-background text-primary shadow-xs" : "text-muted-foreground"
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={`p-1.5 rounded-chella-sm transition-colors ${
                theme === "dark" ? "bg-background text-primary shadow-xs" : "text-muted-foreground"
              }`}
            >
              <Moon className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setTheme("system")}
              className={`p-1.5 rounded-chella-sm transition-colors ${
                theme === "system" ? "bg-background text-primary shadow-xs" : "text-muted-foreground"
              }`}
            >
              <Laptop className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Content Layout */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        {/* Sidebar */}
        <aside className="w-64 border-r border-border p-4 space-y-6 shrink-0 hidden md:block">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-muted-foreground absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search components..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-muted/40 rounded-chella-md border border-border outline-none focus:border-primary"
            />
          </div>

          <div className="space-y-4">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-2">
                Getting Started
              </div>
              <div className="space-y-1">
                {filteredNav
                  .filter((i) => i.category === "Guide")
                  .map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full text-left px-3 py-1.5 rounded-chella-md text-xs font-medium transition-colors ${
                        activeSection === item.id
                          ? "bg-primary/10 text-primary font-semibold"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      {item.title}
                    </button>
                  ))}
              </div>
            </div>

            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-2">
                Components
              </div>
              <div className="space-y-1">
                {filteredNav
                  .filter((i) => i.category === "Components")
                  .map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full text-left px-3 py-1.5 rounded-chella-md text-xs font-medium transition-colors ${
                        activeSection === item.id
                          ? "bg-primary/10 text-primary font-semibold"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      {item.title}
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Doc View */}
        <main className="flex-1 p-6 sm:p-10 max-w-4xl space-y-10 overflow-y-auto">
          {activeSection === "getting-started" && (
            <div className="space-y-8">
              <div className="space-y-2">
                <Badge variant="primary">Design System</Badge>
                <h1 className="text-3xl font-extrabold tracking-tight">Chella UI</h1>
                <p className="text-muted-foreground text-base">
                  A modern, production-grade React component library built with Tailwind CSS, strictly-typed TypeScript, and accessible WAI-ARIA foundations.
                </p>
              </div>

              {/* Quick Installation */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold">Installation</h2>
                <div className="relative rounded-chella-lg bg-muted/60 border border-border p-4 font-mono text-xs text-foreground flex items-center justify-between">
                  <code>npm install @chella/ui</code>
                  <button
                    onClick={() => copyToClipboard("npm install @chella/ui", "install")}
                    className="p-1.5 rounded hover:bg-muted text-muted-foreground hover:text-foreground"
                  >
                    {copiedCode === "install" ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Basic Setup */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold">Quick Start</h2>
                <p className="text-sm text-muted-foreground">
                  Import the compiled Tailwind stylesheet and wrap your root application with <code>ThemeProvider</code>:
                </p>

                <div className="relative rounded-chella-lg bg-card border border-border p-4 font-mono text-xs text-foreground overflow-x-auto">
                  <pre>{`// main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@chella/ui";
import "@chella/ui/styles.css"; // Bundled Tailwind CSS styles
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system">
      <App />
    </ThemeProvider>
  </React.StrictMode>
);`}</pre>
                </div>
              </div>

              {/* Component Usage */}
              <div className="space-y-3">
                <h2 className="text-xl font-bold">Using Components</h2>
                <div className="relative rounded-chella-lg bg-card border border-border p-4 font-mono text-xs text-foreground overflow-x-auto">
                  <pre>{`// App.tsx
import { Button, Input, Modal, Select, Table, Card } from "@chella/ui";

export default function CustomerPage() {
  return (
    <Card>
      <Input label="Customer Name" placeholder="Enter customer name" />
      <Select
        options={[
          { label: "Active", value: "active" },
          { label: "Inactive", value: "inactive" },
        ]}
      />
      <Button variant="primary">Create Customer</Button>
    </Card>
  );
}`}</pre>
                </div>
              </div>
            </div>
          )}

          {activeSection === "theming" && (
            <div className="space-y-8">
              <div className="space-y-2">
                <Badge variant="primary">Architecture</Badge>
                <h1 className="text-3xl font-extrabold tracking-tight">Theme & Design Tokens</h1>
                <p className="text-muted-foreground text-sm">
                  Chella UI uses an HSL CSS variable architecture. This empowers seamless light/dark mode toggling and runtime brand palette customization without rebuilding CSS.
                </p>
              </div>

              <Card variant="outlined">
                <Card.Header>
                  <Card.Title>Semantic Design Tokens</Card.Title>
                  <Card.Description>All components strictly consume semantic tokens instead of hardcoded hex values.</Card.Description>
                </Card.Header>
                <Card.Content>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                    <div className="p-3 rounded-chella-md bg-primary/10 border border-primary/20">
                      <div className="font-bold text-primary">bg-primary</div>
                      <div className="text-muted-foreground">Primary Brand Action</div>
                    </div>
                    <div className="p-3 rounded-chella-md bg-secondary border border-border">
                      <div className="font-bold text-secondary-foreground">bg-secondary</div>
                      <div className="text-muted-foreground">Secondary Surfaces</div>
                    </div>
                    <div className="p-3 rounded-chella-md bg-success/15 border border-success/25">
                      <div className="font-bold text-success">bg-success</div>
                      <div className="text-muted-foreground">Positive Alerts</div>
                    </div>
                    <div className="p-3 rounded-chella-md bg-danger/15 border border-danger/25">
                      <div className="font-bold text-danger">bg-danger</div>
                      <div className="text-muted-foreground">Destructive Actions</div>
                    </div>
                  </div>
                </Card.Content>
              </Card>
            </div>
          )}

          {activeSection === "button" && (
            <div className="space-y-8">
              <div className="space-y-2">
                <Badge variant="primary">Component</Badge>
                <h1 className="text-3xl font-extrabold tracking-tight">Button</h1>
                <p className="text-muted-foreground text-sm">
                  Interactive button component supporting variants, sizes, loading spinners, icons, and keyboard focus states.
                </p>
              </div>

              {/* Interactive Playground */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Interactive Preview</div>
                <div className="p-8 rounded-chella-lg border border-border bg-card flex flex-col items-center justify-center gap-6">
                  <Button
                    variant={btnVariant}
                    size={btnSize}
                    loading={btnLoading}
                    disabled={btnDisabled}
                  >
                    Interactive Button
                  </Button>

                  {/* Controls */}
                  <div className="flex flex-wrap items-center justify-center gap-4 text-xs pt-4 border-t border-border w-full">
                    <div className="flex items-center gap-2">
                      <span>Variant:</span>
                      <select
                        value={btnVariant}
                        onChange={(e) => setBtnVariant(e.target.value as "primary" | "secondary" | "outline" | "ghost" | "danger" | "link")}
                        className="bg-muted p-1 rounded border border-border"
                      >
                        <option value="primary">primary</option>
                        <option value="secondary">secondary</option>
                        <option value="outline">outline</option>
                        <option value="ghost">ghost</option>
                        <option value="danger">danger</option>
                        <option value="link">link</option>
                      </select>
                    </div>

                    <div className="flex items-center gap-2">
                      <span>Size:</span>
                      <select
                        value={btnSize}
                        onChange={(e) => setBtnSize(e.target.value as "small" | "medium" | "large")}
                        className="bg-muted p-1 rounded border border-border"
                      >
                        <option value="small">small</option>
                        <option value="medium">medium</option>
                        <option value="large">large</option>
                      </select>
                    </div>

                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={btnLoading}
                        onChange={(e) => setBtnLoading(e.target.checked)}
                      />
                      <span>loading</span>
                    </label>

                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={btnDisabled}
                        onChange={(e) => setBtnDisabled(e.target.checked)}
                      />
                      <span>disabled</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-2">
                <div className="text-sm font-bold">Code Example</div>
                <div className="rounded-chella-lg bg-card border border-border p-4 font-mono text-xs">
                  <pre>{`<Button variant="${btnVariant}" size="${btnSize}"${btnLoading ? " loading" : ""}${btnDisabled ? " disabled" : ""}>
  Interactive Button
</Button>`}</pre>
                </div>
              </div>

              {/* Props Table */}
              <div className="space-y-3">
                <div className="text-sm font-bold">API Reference</div>
                <Table
                  columns={[
                    { key: "prop", title: "Prop", dataIndex: "prop", className: "font-mono text-primary font-semibold" },
                    { key: "type", title: "Type", dataIndex: "type", className: "font-mono text-xs text-muted-foreground" },
                    { key: "default", title: "Default", dataIndex: "default", className: "font-mono text-xs" },
                    { key: "desc", title: "Description", dataIndex: "desc" },
                  ]}
                  dataSource={[
                    { id: "1", prop: "variant", type: '"primary" | "secondary" | "danger" | "ghost" | "outline" | "link"', default: '"primary"', desc: "Visual style variant" },
                    { id: "2", prop: "size", type: '"small" | "medium" | "large"', default: '"medium"', desc: "Button dimensions" },
                    { id: "3", prop: "loading", type: "boolean", default: "false", desc: "Shows spinner and disables clicks" },
                    { id: "4", prop: "disabled", type: "boolean", default: "false", desc: "Disables interaction" },
                    { id: "5", prop: "fullWidth", type: "boolean", default: "false", desc: "Stretches across container width" },
                  ]}
                />
              </div>
            </div>
          )}

          {activeSection === "input" && (
            <div className="space-y-8">
              <div className="space-y-2">
                <Badge variant="primary">Component</Badge>
                <h1 className="text-3xl font-extrabold tracking-tight">Input</h1>
                <p className="text-muted-foreground text-sm">
                  Text field input with labels, validation error alerts, helper descriptions, clear button, and prefix/suffix slots.
                </p>
              </div>

              {/* Interactive Demo */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Interactive Preview</div>
                <div className="p-8 rounded-chella-lg border border-border bg-card max-w-md mx-auto space-y-4">
                  <Input
                    label="Customer Full Name"
                    placeholder="Enter customer name"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    error={inputError}
                    size={inputSize}
                    variant={inputVariant}
                    clearable
                    helperText={!inputError ? "Displayed on customer invoice." : undefined}
                  />

                  <div className="flex flex-wrap items-center gap-3 pt-3 text-xs border-t border-border">
                    <button
                      onClick={() => setInputError(inputError ? "" : "Customer name is required")}
                      className="px-2 py-1 bg-muted rounded border border-border"
                    >
                      Toggle Error
                    </button>
                    <select
                      value={inputVariant}
                      onChange={(e) => setInputVariant(e.target.value as "default" | "filled" | "flushed")}
                      className="bg-muted p-1 rounded border border-border"
                    >
                      <option value="default">default</option>
                      <option value="filled">filled</option>
                      <option value="flushed">flushed</option>
                    </select>

                    <select
                      value={inputSize}
                      onChange={(e) => setInputSize(e.target.value as "small" | "medium" | "large")}
                      className="bg-muted p-1 rounded border border-border"
                    >
                      <option value="small">small</option>
                      <option value="medium">medium</option>
                      <option value="large">large</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === "checkbox" && (
            <div className="space-y-8">
              <div className="space-y-2">
                <Badge variant="primary">Component</Badge>
                <h1 className="text-3xl font-extrabold tracking-tight">Checkbox</h1>
                <p className="text-muted-foreground text-sm">
                  Native accessible form checkbox supporting controlled/uncontrolled state, indeterminate tri-state, descriptions, errors, and custom sizes.
                </p>
              </div>

              {/* Interactive Demo */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Interactive Preview</div>
                <div className="p-8 rounded-chella-lg border border-border bg-card max-w-md mx-auto space-y-4">
                  <Checkbox
                    label="Accept Terms & Privacy Policy"
                    description="You agree to receive security and transactional notifications."
                    defaultChecked
                  />
                  <Checkbox
                    label="Two-Factor Authentication (Mandatory)"
                    size="small"
                  />
                  <Checkbox
                    label="All Regional Clusters Healthy"
                    indeterminate
                    size="medium"
                  />
                  <Checkbox
                    label="Billing Information Verified"
                    error="Credit card verification pending."
                  />
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Usage Example</div>
                <div className="relative rounded-chella-lg bg-muted/60 border border-border p-4 font-mono text-xs text-foreground">
                  <pre className="overflow-x-auto">
{`import { Checkbox } from "@chella/ui";

export default function SignupForm() {
  const [accepted, setAccepted] = useState(false);

  return (
    <Checkbox
      label="I accept the Terms and Conditions"
      description="You must agree before creating an account."
      checked={accepted}
      onCheckedChange={setAccepted}
    />
  );
}`}
                  </pre>
                </div>
              </div>

              {/* Props Table */}
              <div className="space-y-3">
                <div className="text-sm font-bold">API Reference</div>
                <div className="rounded-chella-lg border border-border overflow-hidden">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead className="bg-muted/50 border-b border-border">
                      <tr>
                        <th className="p-3 font-semibold">Prop</th>
                        <th className="p-3 font-semibold">Type</th>
                        <th className="p-3 font-semibold">Default</th>
                        <th className="p-3 font-semibold">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="p-3 font-mono text-primary">checked</td>
                        <td className="p-3 font-mono text-muted-foreground">boolean</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Controlled checked state.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">defaultChecked</td>
                        <td className="p-3 font-mono text-muted-foreground">boolean</td>
                        <td className="p-3 font-mono">false</td>
                        <td className="p-3">Initial state for uncontrolled usage.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">onCheckedChange</td>
                        <td className="p-3 font-mono text-muted-foreground">(checked: boolean) =&gt; void</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Callback fired when checked state toggles.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">indeterminate</td>
                        <td className="p-3 font-mono text-muted-foreground">boolean</td>
                        <td className="p-3 font-mono">false</td>
                        <td className="p-3">Sets DOM indeterminate property and renders minus icon.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">size</td>
                        <td className="p-3 font-mono text-muted-foreground">"small" | "medium" | "large"</td>
                        <td className="p-3 font-mono">"medium"</td>
                        <td className="p-3">Size token for the checkbox box and label text.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">error</td>
                        <td className="p-3 font-mono text-muted-foreground">ReactNode</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Validation error message linked via aria-describedby.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeSection === "switch" && (
            <div className="space-y-8">
              <div className="space-y-2">
                <Badge variant="primary">Component</Badge>
                <h1 className="text-3xl font-extrabold tracking-tight">Switch</h1>
                <p className="text-muted-foreground text-sm">
                  Accessible binary toggle switch (`role="switch"`) designed for immediate settings and configuration preferences.
                </p>
              </div>

              {/* Semantic comparison note */}
              <div className="p-4 rounded-chella-md bg-primary/10 border border-primary/20 text-xs leading-relaxed space-y-1">
                <span className="font-bold text-primary block">Checkbox vs Switch Semantics:</span>
                <p className="text-foreground/90">
                  Use <strong>Checkbox</strong> for multi-option selections and form fields submitted with a submit button. Use <strong>Switch</strong> for standalone, immediate settings (e.g. Dark mode, Push notifications, Two-Factor Authentication).
                </p>
              </div>

              {/* Interactive Demo */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Interactive Preview</div>
                <div className="p-8 rounded-chella-lg border border-border bg-card max-w-md mx-auto space-y-5">
                  <Switch
                    label="Enable Real-Time Telemetry"
                    description="Streams microservice logs directly to your observability dashboard."
                    defaultChecked
                  />
                  <Switch
                    label="Compact Navigation Mode"
                    size="small"
                  />
                  <Switch
                    label="Global Maintenance Lock"
                    error="Cannot enable maintenance lock during active peak deployment window."
                    size="medium"
                  />
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Usage Example</div>
                <div className="relative rounded-chella-lg bg-muted/60 border border-border p-4 font-mono text-xs text-foreground">
                  <pre className="overflow-x-auto">
{`import { Switch } from "@chella/ui";

export default function SettingsPanel() {
  const [notifications, setNotifications] = useState(true);

  return (
    <Switch
      label="Enable Push Notifications"
      description="Receive build completion alerts on desktop."
      checked={notifications}
      onCheckedChange={setNotifications}
    />
  );
}`}
                  </pre>
                </div>
              </div>

              {/* Props Table */}
              <div className="space-y-3">
                <div className="text-sm font-bold">API Reference</div>
                <div className="rounded-chella-lg border border-border overflow-hidden">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead className="bg-muted/50 border-b border-border">
                      <tr>
                        <th className="p-3 font-semibold">Prop</th>
                        <th className="p-3 font-semibold">Type</th>
                        <th className="p-3 font-semibold">Default</th>
                        <th className="p-3 font-semibold">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="p-3 font-mono text-primary">checked</td>
                        <td className="p-3 font-mono text-muted-foreground">boolean</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Controlled checked/on state.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">defaultChecked</td>
                        <td className="p-3 font-mono text-muted-foreground">boolean</td>
                        <td className="p-3 font-mono">false</td>
                        <td className="p-3">Initial state for uncontrolled usage.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">onCheckedChange</td>
                        <td className="p-3 font-mono text-muted-foreground">(checked: boolean) =&gt; void</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Callback fired when the switch state changes.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">size</td>
                        <td className="p-3 font-mono text-muted-foreground">"small" | "medium" | "large"</td>
                        <td className="p-3 font-mono">"medium"</td>
                        <td className="p-3">Size token for the switch track and sliding thumb.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">disabled</td>
                        <td className="p-3 font-mono text-muted-foreground">boolean</td>
                        <td className="p-3 font-mono">false</td>
                        <td className="p-3">Disables switch interaction and applies opacity token.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">description</td>
                        <td className="p-3 font-mono text-muted-foreground">ReactNode</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Descriptive subtitle linked via aria-describedby.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">error</td>
                        <td className="p-3 font-mono text-muted-foreground">ReactNode</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Validation error message linked via aria-describedby and aria-invalid.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeSection === "select" && (
            <div className="space-y-8">
              <div className="space-y-2">
                <Badge variant="primary">Component</Badge>
                <h1 className="text-3xl font-extrabold tracking-tight">Select</h1>
                <p className="text-muted-foreground text-sm">
                  Keyboard-accessible dropdown combobox with search filtering, multi-selection tags, and controlled/uncontrolled state.
                </p>
              </div>

              <div className="p-8 rounded-chella-lg border border-border bg-card max-w-md mx-auto space-y-4">
                <Select
                  label="Select Role"
                  placeholder="Choose an option..."
                  searchable
                  clearable
                  value={selectVal}
                  onChange={setSelectVal}
                  options={[
                    { label: "Admin - Full Access", value: "1" },
                    { label: "Editor - Content Publishing", value: "2" },
                    { label: "Viewer - Read Only", value: "3" },
                  ]}
                />
              </div>
            </div>
          )}

          {activeSection === "modal" && (
            <div className="space-y-8">
              <div className="space-y-2">
                <Badge variant="primary">Component</Badge>
                <h1 className="text-3xl font-extrabold tracking-tight">Modal</h1>
                <p className="text-muted-foreground text-sm">
                  Accessible dialog portalled to document.body featuring focus trapping, ESC key listener, backdrop blur dismiss, and focus restoration.
                </p>
              </div>

              <div className="p-8 rounded-chella-lg border border-border bg-card flex justify-center">
                <Button onClick={() => setModalDemoOpen(true)} leftIcon={<UserPlus className="w-4 h-4" />}>
                  Open Dialog
                </Button>

                <Modal
                  open={modalDemoOpen}
                  onClose={() => setModalDemoOpen(false)}
                  title="Confirm Operation"
                  description="This is an accessible modal dialog adhering to WAI-ARIA standards."
                  footer={
                    <>
                      <Button variant="secondary" onClick={() => setModalDemoOpen(false)}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={() => setModalDemoOpen(false)}>
                        Confirm
                      </Button>
                    </>
                  }
                >
                  <p className="text-sm text-foreground/80 py-2">
                    Press <kbd className="px-1.5 py-0.5 rounded bg-muted font-mono text-xs">Escape</kbd> or click the backdrop overlay to dismiss this modal.
                  </p>
                </Modal>
              </div>
            </div>
          )}

          {activeSection === "card" && (
            <div className="space-y-8">
              <div className="space-y-2">
                <Badge variant="primary">Component</Badge>
                <h1 className="text-3xl font-extrabold tracking-tight">Card</h1>
                <p className="text-muted-foreground text-sm">
                  Compound card container with header, title, description, content, and footer subcomponents.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card variant="elevated" hoverable>
                  <Card.Header>
                    <Card.Title>Elevated Card</Card.Title>
                    <Card.Description>With smooth hover lift effect</Card.Description>
                  </Card.Header>
                  <Card.Content>
                    Interactive dashboard container component with token-based styling.
                  </Card.Content>
                  <Card.Footer>
                    <Button size="small">Action</Button>
                  </Card.Footer>
                </Card>

                <Card variant="outlined">
                  <Card.Header>
                    <Card.Title>Outlined Card</Card.Title>
                    <Card.Description>Subtle border style</Card.Description>
                  </Card.Header>
                  <Card.Content>
                    Clean flat container for structured information.
                  </Card.Content>
                </Card>
              </div>
            </div>
          )}

          {activeSection === "badge" && (
            <div className="space-y-8">
              <div className="space-y-2">
                <Badge variant="primary">Component</Badge>
                <h1 className="text-3xl font-extrabold tracking-tight">Badge & Tag</h1>
                <p className="text-muted-foreground text-sm">
                  Status pills, dot indicators, and removable tags with variant color mappings.
                </p>
              </div>

              <div className="p-6 rounded-chella-lg border border-border bg-card space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="primary">Primary</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="danger">Danger</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
                  <Badge dot variant="success">Online</Badge>
                  <Badge dot variant="danger">Offline</Badge>
                  <Badge removable onRemove={() => alert("Removed Tag")} variant="primary">React</Badge>
                </div>
              </div>
            </div>
          )}

          {activeSection === "table" && (
            <div className="space-y-8">
              <div className="space-y-2">
                <Badge variant="primary">Component</Badge>
                <h1 className="text-3xl font-extrabold tracking-tight">Table</h1>
                <p className="text-muted-foreground text-sm">
                  Declarative data table supporting column sorting, custom cell rendering, row selection checkboxes, and loading states.
                </p>
              </div>

              <Table
                columns={[
                  { key: "name", title: "Name", dataIndex: "name", sorter: true },
                  { key: "role", title: "Role", dataIndex: "role" },
                  { key: "status", title: "Status", dataIndex: "status", render: (s) => <Badge dot variant="success">{String(s)}</Badge> },
                ]}
                dataSource={[
                  { id: "1", name: "Kumar Selvan", role: "Architect", status: "Active" },
                  { id: "2", name: "Ravi Chandran", role: "Lead Engineer", status: "Active" },
                ]}
              />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
