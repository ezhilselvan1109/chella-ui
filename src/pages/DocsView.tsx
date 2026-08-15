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
  Radio,
  RadioGroup,
  Textarea,
  Tooltip,
  Popover,
  Dropdown,
  useToast,
  Tabs,
  Accordion,
  Avatar,
  AvatarGroup,
  Skeleton,
  Progress,
  CircularProgress,
  Drawer,
  Alert,
  Form,
  FormField,
  Breadcrumb,
  Pagination,
  Divider,
  Spinner,
  EmptyState,
  StatCard,
  Kbd,
  Timeline,
  Tag,
  Banner,
  Rating,
  Command,
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
  | "textarea"
  | "checkbox"
  | "switch"
  | "radio"
  | "select"
  | "modal"
  | "card"
  | "badge"
  | "table"
  | "tooltip"
  | "popover"
  | "dropdown"
  | "toast"
  | "tabs"
  | "accordion"
  | "avatar"
  | "skeleton"
  | "progress"
  | "drawer"
  | "alert"
  | "form"
  | "breadcrumb"
  | "pagination"
  | "divider"
  | "spinner"
  | "emptystate"
  | "statcard"
  | "kbd"
  | "timeline"
  | "tag"
  | "banner"
  | "rating"
  | "command";

export default function App() {
  const [activeSection, setActiveSection] = useState<DocSection>("getting-started");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerPos, setDrawerPos] = useState<"right" | "left" | "top" | "bottom">("right");
  const [docPage, setDocPage] = useState(3);
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
  const toast = useToast();

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
    { id: "textarea", title: "Textarea", category: "Components" },
    { id: "checkbox", title: "Checkbox", category: "Components" },
    { id: "switch", title: "Switch", category: "Components" },
    { id: "radio", title: "Radio & RadioGroup", category: "Components" },
    { id: "select", title: "Select", category: "Components" },
    { id: "modal", title: "Modal", category: "Components" },
    { id: "card", title: "Card", category: "Components" },
    { id: "badge", title: "Badge", category: "Components" },
    { id: "table", title: "Table", category: "Components" },
    { id: "tooltip", title: "Tooltip", category: "Components" },
    { id: "popover", title: "Popover", category: "Components" },
    { id: "dropdown", title: "Dropdown Menu", category: "Components" },
    { id: "toast", title: "Toast Notifications", category: "Components" },
    { id: "tabs", title: "Tabs", category: "Components" },
    { id: "accordion", title: "Accordion", category: "Components" },
    { id: "avatar", title: "Avatar & AvatarGroup", category: "Components" },
    { id: "skeleton", title: "Skeleton", category: "Components" },
    { id: "progress", title: "Progress & Gauge", category: "Components" },
    { id: "drawer", title: "Drawer / Sheet", category: "Components" },
    { id: "alert", title: "Alert Banner", category: "Components" },
    { id: "form", title: "Form & FormField", category: "Components" },
    { id: "breadcrumb", title: "Breadcrumb", category: "Components" },
    { id: "pagination", title: "Pagination", category: "Components" },
    { id: "divider", title: "Divider / Separator", category: "Components" },
    { id: "spinner", title: "Spinner", category: "Components" },
    { id: "emptystate", title: "EmptyState", category: "Components" },
    { id: "statcard", title: "StatCard", category: "Components" },
    { id: "kbd", title: "Kbd", category: "Components" },
    { id: "timeline", title: "Timeline", category: "Components" },
    { id: "tag", title: "Tag / Chip", category: "Components" },
    { id: "banner", title: "Banner", category: "Components" },
    { id: "rating", title: "Rating", category: "Components" },
    { id: "command", title: "Command Palette", category: "Components" },
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

          {activeSection === "textarea" && (
            <div className="space-y-8">
              <div className="space-y-2">
                <Badge variant="primary">Component</Badge>
                <h1 className="text-3xl font-extrabold tracking-tight">Textarea</h1>
                <p className="text-muted-foreground text-sm">
                  Multi-line text input with auto-resize, live character counting, design variants, labels, and accessible validation states.
                </p>
              </div>

              {/* Interactive Demo */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Interactive Preview</div>
                <div className="p-8 rounded-chella-lg border border-border bg-card max-w-md mx-auto space-y-6">
                  <Textarea
                    label="Service Architecture Overview"
                    description="Summarize inter-service gRPC communication channels."
                    placeholder="Type details about microservice dependencies..."
                    showCount
                    maxLength={200}
                    rows={3}
                  />

                  <Textarea
                    label="Auto-Expanding Post-Mortem"
                    placeholder="Type multi-line incident analysis to test auto-resize..."
                    autoResize
                    variant="filled"
                  />

                  <Textarea
                    label="System Error Log"
                    error="Error log cannot exceed 1000 characters without archive compression."
                    defaultValue="CRITICAL 500: Database connection pool exhausted on worker node 4."
                    size="small"
                  />
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Usage Example</div>
                <div className="relative rounded-chella-lg bg-muted/60 border border-border p-4 font-mono text-xs text-foreground">
                  <pre className="overflow-x-auto">
{`import { Textarea } from "@chella/ui";

export default function IncidentReport() {
  const [report, setReport] = useState("");

  return (
    <Textarea
      label="Incident Analysis"
      description="Markdown formatted summaries are supported."
      placeholder="Explain root cause and mitigation steps..."
      value={report}
      onChange={(e) => setReport(e.target.value)}
      showCount
      maxLength={500}
      autoResize
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
                        <td className="p-3 font-mono text-primary">label</td>
                        <td className="p-3 font-mono text-muted-foreground">ReactNode</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Accessible label rendered above the textarea.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">description</td>
                        <td className="p-3 font-mono text-muted-foreground">ReactNode</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Helper subtitle linked via aria-describedby.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">error</td>
                        <td className="p-3 font-mono text-muted-foreground">ReactNode</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Validation error message linked via aria-describedby and aria-invalid.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">showCount</td>
                        <td className="p-3 font-mono text-muted-foreground">boolean</td>
                        <td className="p-3 font-mono">false</td>
                        <td className="p-3">Displays the real-time character count indicator.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">autoResize</td>
                        <td className="p-3 font-mono text-muted-foreground">boolean</td>
                        <td className="p-3 font-mono">false</td>
                        <td className="p-3">Automatically adjusts height to match content.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">variant</td>
                        <td className="p-3 font-mono text-muted-foreground">"default" | "filled" | "flushed"</td>
                        <td className="p-3 font-mono">"default"</td>
                        <td className="p-3">Visual styling variant.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">size</td>
                        <td className="p-3 font-mono text-muted-foreground">"small" | "medium" | "large"</td>
                        <td className="p-3 font-mono">"medium"</td>
                        <td className="p-3">Textarea size and padding token.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">resize</td>
                        <td className="p-3 font-mono text-muted-foreground">"none" | "vertical" | "horizontal" | "both"</td>
                        <td className="p-3 font-mono">"vertical"</td>
                        <td className="p-3">CSS resize behavior.</td>
                      </tr>
                    </tbody>
                  </table>
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

          {activeSection === "radio" && (
            <div className="space-y-8">
              <div className="space-y-2">
                <Badge variant="primary">Component</Badge>
                <h1 className="text-3xl font-extrabold tracking-tight">Radio & RadioGroup</h1>
                <p className="text-muted-foreground text-sm">
                  Accessible mutually exclusive selection controls with full keyboard arrow navigation and seamless form submission.
                </p>
              </div>

              {/* Semantic comparison note */}
              <div className="p-4 rounded-chella-md bg-primary/10 border border-primary/20 text-xs leading-relaxed space-y-1">
                <span className="font-bold text-primary block">Selection Component Comparison:</span>
                <ul className="list-disc list-inside space-y-1 text-foreground/90">
                  <li><strong>Checkbox:</strong> Select zero, one, or multiple independent choices.</li>
                  <li><strong>Radio / RadioGroup:</strong> Select exactly one mutually exclusive option from a list.</li>
                  <li><strong>Switch:</strong> Toggle a single immediate binary setting (ON / OFF).</li>
                </ul>
              </div>

              {/* Interactive Demo */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Interactive Preview</div>
                <div className="p-8 rounded-chella-lg border border-border bg-card max-w-md mx-auto space-y-6">
                  <RadioGroup defaultValue="pro" label="Select Subscription Tier" description="Billing is calculated on active monthly clusters.">
                    <Radio value="starter" label="Starter ($29/mo)" description="Ideal for prototypes and hobby projects." />
                    <Radio value="pro" label="Professional ($99/mo)" description="Includes priority SLAs and 99.99% uptime." />
                    <Radio value="enterprise" label="Enterprise Custom" description="Dedicated VPC peering and HIPAA compliance." />
                  </RadioGroup>

                  <div className="pt-4 border-t border-border">
                    <RadioGroup orientation="horizontal" defaultValue="credit_card" label="Payment Method">
                      <Radio value="credit_card" label="Credit Card" />
                      <Radio value="paypal" label="PayPal" />
                      <Radio value="wire" label="Wire Transfer" />
                    </RadioGroup>
                  </div>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Usage Example</div>
                <div className="relative rounded-chella-lg bg-muted/60 border border-border p-4 font-mono text-xs text-foreground">
                  <pre className="overflow-x-auto">
{`import { Radio, RadioGroup } from "@chella/ui";

export default function PlanSelector() {
  const [selectedPlan, setSelectedPlan] = useState("pro");

  return (
    <RadioGroup
      name="subscription_plan"
      value={selectedPlan}
      onValueChange={setSelectedPlan}
      label="Choose Your Plan"
      description="You can upgrade or downgrade at any time."
    >
      <Radio value="starter" label="Starter ($29/mo)" />
      <Radio value="pro" label="Professional ($99/mo)" />
      <Radio value="enterprise" label="Enterprise (Custom)" />
    </RadioGroup>
  );
}`}
                  </pre>
                </div>
              </div>

              {/* RadioGroup Props Table */}
              <div className="space-y-3">
                <div className="text-sm font-bold">RadioGroup API Reference</div>
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
                        <td className="p-3 font-mono text-primary">value</td>
                        <td className="p-3 font-mono text-muted-foreground">string</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Controlled selected radio value.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">defaultValue</td>
                        <td className="p-3 font-mono text-muted-foreground">string</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Initial selected value for uncontrolled mode.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">onValueChange</td>
                        <td className="p-3 font-mono text-muted-foreground">(value: string) =&gt; void</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Callback fired when the selected value changes.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">name</td>
                        <td className="p-3 font-mono text-muted-foreground">string</td>
                        <td className="p-3 font-mono">auto-generated</td>
                        <td className="p-3">Form input name passed to all child Radios.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">orientation</td>
                        <td className="p-3 font-mono text-muted-foreground">"vertical" | "horizontal"</td>
                        <td className="p-3 font-mono">"vertical"</td>
                        <td className="p-3">Layout orientation of the child radio options.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">size</td>
                        <td className="p-3 font-mono text-muted-foreground">"small" | "medium" | "large"</td>
                        <td className="p-3 font-mono">"medium"</td>
                        <td className="p-3">Size token propagated to all child Radios.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">disabled</td>
                        <td className="p-3 font-mono text-muted-foreground">boolean</td>
                        <td className="p-3 font-mono">false</td>
                        <td className="p-3">Disables all radio options in the group.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">error</td>
                        <td className="p-3 font-mono text-muted-foreground">ReactNode</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Group validation error message.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Radio Props Table */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Radio API Reference</div>
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
                        <td className="p-3 font-mono text-primary">value</td>
                        <td className="p-3 font-mono text-muted-foreground">string</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Unique value of this radio option (required).</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">label</td>
                        <td className="p-3 font-mono text-muted-foreground">ReactNode</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Text or component rendered next to the radio circle.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">description</td>
                        <td className="p-3 font-mono text-muted-foreground">ReactNode</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Descriptive subtitle linked via aria-describedby.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">disabled</td>
                        <td className="p-3 font-mono text-muted-foreground">boolean</td>
                        <td className="p-3 font-mono">false</td>
                        <td className="p-3">Disables this individual radio option.</td>
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
                <h1 className="text-3xl font-extrabold tracking-tight">Select / Combobox</h1>
                <p className="text-muted-foreground text-sm">
                  Keyboard-accessible dropdown combobox supporting search filtering, multi-selection chips, custom option icons, clearable triggers, and compound syntax.
                </p>
              </div>

              {/* Interactive Demo */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Interactive Preview</div>
                <div className="p-8 rounded-chella-lg border border-border bg-card max-w-md mx-auto space-y-5">
                  <Select
                    label="Assigned Cluster Role"
                    placeholder="Choose an option..."
                    searchable
                    clearable
                    value={selectVal}
                    onChange={setSelectVal}
                    options={[
                      { label: "Cluster Admin - Full Access", value: "1" },
                      { label: "DevOps Engineer - Deployment Access", value: "2" },
                      { label: "Security Auditor - Read Only", value: "3" },
                    ]}
                  />

                  <div className="pt-4 border-t border-border">
                    <Select
                      label="Multi-Select Project Tags"
                      placeholder="Select multiple tags..."
                      multiple
                      clearable
                      defaultValue={["k8s", "docker"]}
                      options={[
                        { label: "Kubernetes", value: "k8s" },
                        { label: "Docker", value: "docker" },
                        { label: "TypeScript", value: "ts" },
                        { label: "Tailwind CSS", value: "tailwind" },
                      ]}
                    />
                  </div>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Usage Example</div>
                <div className="relative rounded-chella-lg bg-muted/60 border border-border p-4 font-mono text-xs text-foreground">
                  <pre className="overflow-x-auto">
{`import { useState } from "react";
import { Select } from "@chella/ui";

// 1. Single Searchable Select
export function RoleSelector() {
  const [role, setRole] = useState("admin");

  return (
    <Select
      label="Select System Role"
      searchable
      clearable
      value={role}
      onChange={setRole}
      options={[
        { label: "Admin - Full Access", value: "admin" },
        { label: "Editor - Publishing", value: "editor" },
        { label: "Viewer - Read Only", value: "viewer" },
      ]}
    />
  );
}

// 2. Multi-Select Tags
export function TagSelector() {
  const [tags, setTags] = useState<string[]>(["k8s"]);

  return (
    <Select
      label="Project Tags"
      multiple
      clearable
      value={tags}
      onChange={(val) => setTags(val as string[])}
      options={[
        { label: "Kubernetes", value: "k8s" },
        { label: "Docker", value: "docker" },
      ]}
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
                        <td className="p-3 font-mono text-primary">options</td>
                        <td className="p-3 font-mono text-muted-foreground">SelectOptionItem[]</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Declarative array of items ({`{ label, value, icon, disabled }`}).</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">value / defaultValue</td>
                        <td className="p-3 font-mono text-muted-foreground">string | string[]</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Controlled or initial selected value(s).</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">multiple</td>
                        <td className="p-3 font-mono text-muted-foreground">boolean</td>
                        <td className="p-3 font-mono">false</td>
                        <td className="p-3">Enables multi-selection mode with removable badge chips.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">searchable</td>
                        <td className="p-3 font-mono text-muted-foreground">boolean</td>
                        <td className="p-3 font-mono">false</td>
                        <td className="p-3">Enables client-side fuzzy search input inside the dropdown.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">clearable</td>
                        <td className="p-3 font-mono text-muted-foreground">boolean</td>
                        <td className="p-3 font-mono">false</td>
                        <td className="p-3">Renders an accessible clear button when a value is selected.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeSection === "modal" && (
            <div className="space-y-8">
              <div className="space-y-2">
                <Badge variant="primary">Component</Badge>
                <h1 className="text-3xl font-extrabold tracking-tight">Modal / Dialog</h1>
                <p className="text-muted-foreground text-sm">
                  Accessible dialog portalled to document.body featuring focus trapping, ESC key listener, backdrop blur dismiss, body scroll locking, and focus restoration.
                </p>
              </div>

              {/* Interactive Demo */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Interactive Preview</div>
                <div className="p-8 rounded-chella-lg border border-border bg-card flex justify-center">
                  <Button onClick={() => setModalDemoOpen(true)} leftIcon={<UserPlus className="w-4 h-4" />}>
                    Open Customer Dialog
                  </Button>

                  <Modal
                    open={modalDemoOpen}
                    onClose={() => setModalDemoOpen(false)}
                    title="Confirm Deployment Action"
                    description="This is an accessible modal dialog adhering strictly to WAI-ARIA standards."
                    footer={
                      <>
                        <Button variant="secondary" onClick={() => setModalDemoOpen(false)}>
                          Cancel
                        </Button>
                        <Button variant="primary" onClick={() => setModalDemoOpen(false)}>
                          Deploy Service
                        </Button>
                      </>
                    }
                  >
                    <p className="text-sm text-foreground/80 py-2">
                      Focus is trapped inside this modal dialog while open. Press <kbd className="px-1.5 py-0.5 rounded bg-muted font-mono text-xs">Escape</kbd> or click the backdrop overlay to dismiss.
                    </p>
                  </Modal>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Usage Example</div>
                <div className="relative rounded-chella-lg bg-muted/60 border border-border p-4 font-mono text-xs text-foreground">
                  <pre className="overflow-x-auto">
{`import { useState } from "react";
import { Modal, Button } from "@chella/ui";

export function DeleteConfirmation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Delete Cluster"
        description="This action cannot be undone."
        footer={
          <>
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={() => setOpen(false)}>
              Delete Permanently
            </Button>
          </>
        }
      >
        <p className="text-sm text-muted-foreground">
          Are you sure you want to permanently delete this cluster?
        </p>
      </Modal>
    </>
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
                    <tbody className="divide-y border-border">
                      <tr>
                        <td className="p-3 font-mono text-primary">open</td>
                        <td className="p-3 font-mono text-muted-foreground">boolean</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Controls whether the modal is rendered and visible (required).</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">onClose</td>
                        <td className="p-3 font-mono text-muted-foreground">() =&gt; void</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Callback fired when modal requests to close via ESC or backdrop (required).</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">title</td>
                        <td className="p-3 font-mono text-muted-foreground">ReactNode</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Primary header title linked via aria-labelledby.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">description</td>
                        <td className="p-3 font-mono text-muted-foreground">ReactNode</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Header description subtitle linked via aria-describedby.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">footer</td>
                        <td className="p-3 font-mono text-muted-foreground">ReactNode</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Action button container rendered in bottom footer bar.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">size</td>
                        <td className="p-3 font-mono text-muted-foreground">"small" | "medium" | "large" | "full"</td>
                        <td className="p-3 font-mono">"medium"</td>
                        <td className="p-3">Maximum width and sizing scale of the dialog window.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">closeOnEsc</td>
                        <td className="p-3 font-mono text-muted-foreground">boolean</td>
                        <td className="p-3 font-mono">true</td>
                        <td className="p-3">Dismisses the modal when pressing the Escape key.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">closeOnBackdropClick</td>
                        <td className="p-3 font-mono text-muted-foreground">boolean</td>
                        <td className="p-3 font-mono">true</td>
                        <td className="p-3">Dismisses the modal when clicking outside on the backdrop overlay.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeSection === "card" && (
            <div className="space-y-8">
              <div className="space-y-2">
                <Badge variant="primary">Component</Badge>
                <h1 className="text-3xl font-extrabold tracking-tight">Card</h1>
                <p className="text-muted-foreground text-sm">
                  Compound surface container with header, title, description, content, and footer subcomponents, elevation variants, and hover lift physics.
                </p>
              </div>

              {/* Interactive Demo */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Interactive Preview</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card variant="elevated" hoverable>
                    <Card.Header>
                      <Card.Title>Elevated Surface</Card.Title>
                      <Card.Description>Smooth -translate-y-1 hover lift</Card.Description>
                    </Card.Header>
                    <Card.Content>
                      Interactive dashboard container component with token-based styling.
                    </Card.Content>
                    <Card.Footer>
                      <Button size="small" variant="primary">Inspect Pods</Button>
                    </Card.Footer>
                  </Card>

                  <Card variant="outlined">
                    <Card.Header>
                      <Card.Title>Outlined Surface</Card.Title>
                      <Card.Description>Border frame with subtle contrast</Card.Description>
                    </Card.Header>
                    <Card.Content>
                      Clean flat container for structured information and tabular data.
                    </Card.Content>
                    <Card.Footer>
                      <Button size="small" variant="secondary">View Traces</Button>
                    </Card.Footer>
                  </Card>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Usage Example</div>
                <div className="relative rounded-chella-lg bg-muted/60 border border-border p-4 font-mono text-xs text-foreground">
                  <pre className="overflow-x-auto">
{`import { Card, Button } from "@chella/ui";

export function ServiceCard() {
  return (
    <Card variant="elevated" hoverable>
      <Card.Header>
        <Card.Title>Auth Microservice</Card.Title>
        <Card.Description>Port 8080 • us-east-1</Card.Description>
      </Card.Header>
      <Card.Content>
        Healthy status with 99.99% uptime over the last 30 days.
      </Card.Content>
      <Card.Footer>
        <Button size="small">View Metrics</Button>
      </Card.Footer>
    </Card>
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
                        <td className="p-3 font-mono text-primary">variant</td>
                        <td className="p-3 font-mono text-muted-foreground">"elevated" | "outlined" | "flat"</td>
                        <td className="p-3 font-mono">"elevated"</td>
                        <td className="p-3">Surface elevation shadow and border style.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">hoverable</td>
                        <td className="p-3 font-mono text-muted-foreground">boolean</td>
                        <td className="p-3 font-mono">false</td>
                        <td className="p-3">Adds smooth vertical lift translation physics on hover.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeSection === "badge" && (
            <div className="space-y-8">
              <div className="space-y-2">
                <Badge variant="primary">Component</Badge>
                <h1 className="text-3xl font-extrabold tracking-tight">Badge</h1>
                <p className="text-muted-foreground text-sm">
                  Status indicators, live dot beacons, and removable tag pills with semantic color mapping.
                </p>
              </div>

              {/* Interactive Demo */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Interactive Preview</div>
                <div className="p-6 rounded-chella-lg border border-border bg-card space-y-4">
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-muted-foreground">1. Semantic Variants:</div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="primary">Primary</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="success">Success</Badge>
                      <Badge variant="warning">Warning</Badge>
                      <Badge variant="danger">Danger</Badge>
                      <Badge variant="outline">Outline</Badge>
                    </div>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-border">
                    <div className="text-xs font-semibold text-muted-foreground">2. Dot Beacons & Removable Tags:</div>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge dot variant="success">Operational</Badge>
                      <Badge dot variant="danger">Offline</Badge>
                      <Badge removable onRemove={() => alert("Removed React Tag")} variant="primary">React 18</Badge>
                      <Badge removable onRemove={() => alert("Removed Tailwind Tag")} variant="secondary">Tailwind CSS</Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Usage Example</div>
                <div className="relative rounded-chella-lg bg-muted/60 border border-border p-4 font-mono text-xs text-foreground">
                  <pre className="overflow-x-auto">
{`import { Badge } from "@chella/ui";

export function SystemStatus() {
  return (
    <div className="flex items-center gap-2">
      <Badge dot variant="success">Online</Badge>
      <Badge removable onRemove={() => handleRemove()} variant="outline">
        Production
      </Badge>
    </div>
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
                        <td className="p-3 font-mono text-primary">variant</td>
                        <td className="p-3 font-mono text-muted-foreground">"primary" | "secondary" | "success" | "warning" | "danger" | "outline"</td>
                        <td className="p-3 font-mono">"primary"</td>
                        <td className="p-3">Color theme token for the badge background and text.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">dot</td>
                        <td className="p-3 font-mono text-muted-foreground">boolean</td>
                        <td className="p-3 font-mono">false</td>
                        <td className="p-3">Renders a small circular status beacon before the label.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">removable</td>
                        <td className="p-3 font-mono text-muted-foreground">boolean</td>
                        <td className="p-3 font-mono">false</td>
                        <td className="p-3">Renders an accessible dismiss button with "x" icon.</td>
                      </tr>
                    </tbody>
                  </table>
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
                  Declarative data table supporting column sorting, custom cell rendering, row selection checkboxes, striped rows, and loading states.
                </p>
              </div>

              {/* Interactive Demo */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Interactive Preview</div>
                <div className="rounded-chella-lg border border-border bg-card p-4">
                  <Table
                    bordered
                    columns={[
                      { key: "name", title: "Microservice", dataIndex: "name", sorter: true },
                      { key: "role", title: "Cluster Role", dataIndex: "role" },
                      {
                        key: "status",
                        title: "Health",
                        dataIndex: "status",
                        render: (s) => (
                          <Badge dot variant={s === "Healthy" ? "success" : "warning"}>
                            {String(s)}
                          </Badge>
                        ),
                      },
                      { key: "latency", title: "p99 Latency", dataIndex: "latency", align: "right" },
                    ]}
                    dataSource={[
                      { id: "1", name: "auth-service", role: "Security Gateway", status: "Healthy", latency: "14ms" },
                      { id: "2", name: "billing-engine", role: "Payment Processing", status: "Healthy", latency: "28ms" },
                      { id: "3", name: "telemetry-stream", role: "Event Bus", status: "Degraded", latency: "142ms" },
                    ]}
                  />
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Usage Example</div>
                <div className="relative rounded-chella-lg bg-muted/60 border border-border p-4 font-mono text-xs text-foreground">
                  <pre className="overflow-x-auto">
{`import { Table, Badge } from "@chella/ui";

const columns = [
  { key: "name", title: "Service", dataIndex: "name", sorter: true },
  { key: "role", title: "Role", dataIndex: "role" },
  {
    key: "status",
    title: "Status",
    dataIndex: "status",
    render: (val) => <Badge dot variant="success">{String(val)}</Badge>,
  },
];

const dataSource = [
  { id: "1", name: "auth-service", role: "Gateway", status: "Active" },
  { id: "2", name: "billing-api", role: "Fintech", status: "Active" },
];

export function ServiceTable() {
  return <Table columns={columns} dataSource={dataSource} bordered striped />;
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
                        <td className="p-3 font-mono text-primary">columns</td>
                        <td className="p-3 font-mono text-muted-foreground">TableColumn&lt;T&gt;[]</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Array of column definitions with sorters, alignments, and custom renders.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">dataSource</td>
                        <td className="p-3 font-mono text-muted-foreground">T[]</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Array of record data items to display.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">rowSelection</td>
                        <td className="p-3 font-mono text-muted-foreground">TableRowSelection&lt;T&gt;</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Checkbox row selection controller ({`{ selectedRowKeys, onChange }`}).</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">bordered</td>
                        <td className="p-3 font-mono text-muted-foreground">boolean</td>
                        <td className="p-3 font-mono">false</td>
                        <td className="p-3">Renders vertical cell borders and frame outline.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">striped</td>
                        <td className="p-3 font-mono text-muted-foreground">boolean</td>
                        <td className="p-3 font-mono">false</td>
                        <td className="p-3">Alternates background rows for enhanced legibility.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeSection === "tooltip" && (
            <div className="space-y-8">
              <div className="space-y-2">
                <Badge variant="primary">Component</Badge>
                <h1 className="text-3xl font-extrabold tracking-tight">Tooltip</h1>
                <p className="text-muted-foreground text-sm">
                  Floating contextual hint popup with directional arrow pointers, hover and focus triggers, keyboard dismiss, and accessible ARIA attributes.
                </p>
              </div>

              {/* Interactive Demo */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Interactive Preview</div>
                <div className="p-12 rounded-chella-lg border border-border bg-card max-w-lg mx-auto flex flex-wrap items-center justify-center gap-6">
                  <Tooltip content="Instantly provisions containerized staging nodes" placement="top">
                    <Button variant="primary">Top Tooltip</Button>
                  </Tooltip>

                  <Tooltip content="Configures TLS 1.3 encryption keys" placement="bottom" variant="dark">
                    <Button variant="secondary">Bottom (Dark)</Button>
                  </Tooltip>

                  <Tooltip content="Inspect active microservice traces" placement="left" variant="light">
                    <Button variant="outline">Left (Light)</Button>
                  </Tooltip>

                  <Tooltip content="Dispatches webhook event payloads" placement="right" variant="primary">
                    <Button variant="ghost">Right (Primary)</Button>
                  </Tooltip>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Usage Example</div>
                <div className="relative rounded-chella-lg bg-muted/60 border border-border p-4 font-mono text-xs text-foreground">
                  <pre className="overflow-x-auto">
{`import { Tooltip, Button } from "@chella/ui";

export default function ActionToolbar() {
  return (
    <Tooltip content="Deploy application to production cluster" placement="top">
      <Button variant="primary">Deploy Service</Button>
    </Tooltip>
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
                        <td className="p-3 font-mono text-primary">content</td>
                        <td className="p-3 font-mono text-muted-foreground">ReactNode</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">The textual or JSX content displayed inside the popup.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">placement</td>
                        <td className="p-3 font-mono text-muted-foreground">"top" | "bottom" | "left" | "right"</td>
                        <td className="p-3 font-mono">"top"</td>
                        <td className="p-3">Orientation relative to the trigger element.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">variant</td>
                        <td className="p-3 font-mono text-muted-foreground">"default" | "dark" | "light" | "primary"</td>
                        <td className="p-3 font-mono">"default"</td>
                        <td className="p-3">Color theme styling variant.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">arrow</td>
                        <td className="p-3 font-mono text-muted-foreground">boolean</td>
                        <td className="p-3 font-mono">true</td>
                        <td className="p-3">Whether to display directional pointer arrow.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">delayDuration</td>
                        <td className="p-3 font-mono text-muted-foreground">number</td>
                        <td className="p-3 font-mono">100</td>
                        <td className="p-3">Hover delay in milliseconds before showing tooltip.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">disabled</td>
                        <td className="p-3 font-mono text-muted-foreground">boolean</td>
                        <td className="p-3 font-mono">false</td>
                        <td className="p-3">Prevents tooltip from displaying.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeSection === "popover" && (
            <div className="space-y-8">
              <div className="space-y-2">
                <Badge variant="primary">Component</Badge>
                <h1 className="text-3xl font-extrabold tracking-tight">Popover</h1>
                <p className="text-muted-foreground text-sm">
                  Rich interactive popup card triggered by click, with outside-click dismissal, Escape key handling, and accessible dialog attributes.
                </p>
              </div>

              {/* Semantic comparison note */}
              <div className="p-4 rounded-chella-md bg-primary/10 border border-primary/20 text-xs leading-relaxed space-y-1">
                <span className="font-bold text-primary block">Tooltip vs Popover:</span>
                <p className="text-foreground/90">
                  Use <strong>Tooltip</strong> for brief, non-interactive text labels on hover/focus. Use <strong>Popover</strong> for interactive cards containing form controls, action buttons, filter settings, or menus on click.
                </p>
              </div>

              {/* Interactive Demo */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Interactive Preview</div>
                <div className="p-12 rounded-chella-lg border border-border bg-card max-w-lg mx-auto flex flex-wrap items-center justify-center gap-6">
                  <Popover
                    showCloseButton
                    content={
                      <div className="space-y-3 w-64">
                        <div className="font-semibold text-sm">Filter Deployment Metrics</div>
                        <p className="text-xs text-muted-foreground">Filter telemetry by compute cluster architecture.</p>
                        <div className="space-y-2 pt-1">
                          <Switch label="Include ARM64 Nodes" defaultChecked size="small" />
                          <Switch label="Show Degraded Pods" size="small" />
                        </div>
                        <div className="pt-2 flex justify-end">
                          <Button size="small" variant="primary">Apply Settings</Button>
                        </div>
                      </div>
                    }
                  >
                    <Button variant="primary">Cluster Filters</Button>
                  </Popover>

                  <Popover
                    placement="bottom-end"
                    showCloseButton
                    content={
                      <div className="space-y-3 w-64">
                        <div className="font-semibold text-sm">Quick Deploy Hotfix</div>
                        <Input label="Container Tag" defaultValue="v1.4.2-patch.1" size="small" />
                        <div className="flex justify-end gap-2 pt-1">
                          <Button size="small" variant="danger">Deploy Now</Button>
                        </div>
                      </div>
                    }
                  >
                    <Button variant="outline">Deploy Hotfix</Button>
                  </Popover>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Usage Example</div>
                <div className="relative rounded-chella-lg bg-muted/60 border border-border p-4 font-mono text-xs text-foreground">
                  <pre className="overflow-x-auto">
{`import { Popover, Button, Switch } from "@chella/ui";

export default function FilterPopover() {
  return (
    <Popover
      showCloseButton
      content={
        <div className="space-y-3 w-64">
          <h4 className="font-semibold text-sm">Filter Options</h4>
          <Switch label="Enable Real-Time Telemetry" defaultChecked size="small" />
          <Button size="small" variant="primary" className="w-full">
            Apply Filters
          </Button>
        </div>
      }
    >
      <Button variant="outline">Filter Traces</Button>
    </Popover>
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
                        <td className="p-3 font-mono text-primary">content</td>
                        <td className="p-3 font-mono text-muted-foreground">ReactNode</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">The rich interactive JSX content rendered inside the card.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">placement</td>
                        <td className="p-3 font-mono text-muted-foreground">"top" | "bottom" | "left" | "right" | ...</td>
                        <td className="p-3 font-mono">"bottom-start"</td>
                        <td className="p-3">Alignment placement relative to the trigger.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">showCloseButton</td>
                        <td className="p-3 font-mono text-muted-foreground">boolean</td>
                        <td className="p-3 font-mono">false</td>
                        <td className="p-3">Displays a dismiss 'X' button in the top right.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">closeOnOutsideClick</td>
                        <td className="p-3 font-mono text-muted-foreground">boolean</td>
                        <td className="p-3 font-mono">true</td>
                        <td className="p-3">Closes popover when clicking outside its bounds.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">closeOnEscape</td>
                        <td className="p-3 font-mono text-muted-foreground">boolean</td>
                        <td className="p-3 font-mono">true</td>
                        <td className="p-3">Closes popover on Escape key press.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">open</td>
                        <td className="p-3 font-mono text-muted-foreground">boolean</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Controlled open state of the popover.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">onOpenChange</td>
                        <td className="p-3 font-mono text-muted-foreground">(open: boolean) =&gt; void</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Callback fired when open state changes.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeSection === "dropdown" && (
            <div className="space-y-8">
              <div className="space-y-2">
                <Badge variant="primary">Component</Badge>
                <h1 className="text-3xl font-extrabold tracking-tight">Dropdown Menu</h1>
                <p className="text-muted-foreground text-sm">
                  Accessible action and navigation menu triggered by click, with arrow key traversal, divider lines, and destructive danger states.
                </p>
              </div>

              {/* Interactive Demo */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Interactive Preview</div>
                <div className="p-12 rounded-chella-lg border border-border bg-card max-w-lg mx-auto flex flex-wrap items-center justify-center gap-6">
                  <Dropdown
                    trigger={
                      <Button variant="primary">
                        Declarative Menu
                      </Button>
                    }
                    items={[
                      { key: "edit", label: "Edit Service Configuration" },
                      { key: "clone", label: "Clone Deployment" },
                      { key: "share", label: "Share Access URL" },
                      { key: "div1", divider: true },
                      { key: "export", label: "Export Metrics JSON" },
                      { key: "archive", label: "Archive Service" },
                      { key: "div2", divider: true },
                      { key: "delete", label: "Delete Cluster Node", variant: "danger" },
                    ]}
                  />

                  <Dropdown
                    placement="bottom-end"
                    trigger={
                      <Button variant="outline">
                        Compound Menu
                      </Button>
                    }
                  >
                    <Dropdown.Header>Deployment Actions</Dropdown.Header>
                    <Dropdown.Item>Edit Settings</Dropdown.Item>
                    <Dropdown.Item>Duplicate Workspace</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Danger Zone</Dropdown.Header>
                    <Dropdown.Item variant="danger">
                      Terminate Cluster
                    </Dropdown.Item>
                  </Dropdown>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Usage Example</div>
                <div className="relative rounded-chella-lg bg-muted/60 border border-border p-4 font-mono text-xs text-foreground">
                  <pre className="overflow-x-auto">
{`import { Dropdown, Button } from "@chella/ui";

export default function RecordActions() {
  return (
    <Dropdown
      trigger={<Button variant="secondary">Actions</Button>}
      items={[
        { key: "edit", label: "Edit Record", onClick: () => console.log("edit") },
        { key: "duplicate", label: "Duplicate Record" },
        { key: "sep", divider: true },
        { key: "delete", label: "Delete", variant: "danger" },
      ]}
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
                        <td className="p-3 font-mono text-primary">trigger</td>
                        <td className="p-3 font-mono text-muted-foreground">ReactNode</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">The interactive element that toggles the menu on click.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">items</td>
                        <td className="p-3 font-mono text-muted-foreground">DropdownMenuItem[]</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Declarative array of items, dividers, and actions.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">placement</td>
                        <td className="p-3 font-mono text-muted-foreground">"bottom-start" | "bottom-end" | ...</td>
                        <td className="p-3 font-mono">"bottom-start"</td>
                        <td className="p-3">Alignment placement relative to the trigger.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">closeOnSelect</td>
                        <td className="p-3 font-mono text-muted-foreground">boolean</td>
                        <td className="p-3 font-mono">true</td>
                        <td className="p-3">Automatically closes dropdown after selecting an item.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeSection === "toast" && (
            <div className="space-y-8">
              <div className="space-y-2">
                <Badge variant="primary">Component & Context</Badge>
                <h1 className="text-3xl font-extrabold tracking-tight">Toast Notifications</h1>
                <p className="text-muted-foreground text-sm">
                  Global non-blocking notification alerts with auto-dismiss timers, semantic variants (success, error, warning, info), custom actions, and accessible ARIA attributes.
                </p>
              </div>

              {/* Interactive Demo */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Interactive Trigger Preview</div>
                <div className="p-8 rounded-chella-lg border border-border bg-card max-w-xl mx-auto flex flex-wrap items-center justify-center gap-3">
                  <Button
                    variant="primary"
                    onClick={() =>
                      toast.success("Deployment Succeeded", "All 12 microservice instances are healthy.")
                    }
                  >
                    Success Toast
                  </Button>

                  <Button
                    variant="danger"
                    onClick={() =>
                      toast.error("Database Connection Lost", "Retrying automatic TLS reconnect in 5s.")
                    }
                  >
                    Error Toast
                  </Button>

                  <Button
                    variant="secondary"
                    onClick={() =>
                      toast.warning("High Memory Usage", "Worker node memory consumption reached 87%.")
                    }
                  >
                    Warning Toast
                  </Button>

                  <Button
                    variant="outline"
                    onClick={() =>
                      toast.info("Cache Invalidation", "Distributed Redis key cache cleared.")
                    }
                  >
                    Info Toast
                  </Button>

                  <Button
                    variant="ghost"
                    onClick={() =>
                      toast({
                        title: "Node Drained",
                        description: "Workloads rescheduled to pool-2.",
                        action: {
                          label: "Undo",
                          onClick: () => toast.success("Drain Cancelled"),
                        },
                      })
                    }
                  >
                    With Action Button
                  </Button>

                  <Button variant="outline" onClick={() => toast.clear()}>
                    Clear All
                  </Button>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Usage Example</div>
                <div className="relative rounded-chella-lg bg-muted/60 border border-border p-4 font-mono text-xs text-foreground">
                  <pre className="overflow-x-auto">
{`import { ToastProvider, useToast, Button } from "@chella/ui";

// 1. Wrap your application in ToastProvider (e.g. in App.tsx or RootLayout)
export function App() {
  return (
    <ToastProvider placement="top-right" maxToasts={5}>
      <DeployToolbar />
    </ToastProvider>
  );
}

// 2. Consume useToast() in any child component
export function DeployToolbar() {
  const toast = useToast();

  const handleDeploy = async () => {
    try {
      await deployCluster();
      toast.success("Deployment Complete", "Cluster nodes live at api.internal:8080");
    } catch (err) {
      toast.error("Deployment Failed", "Check telemetry logs for stacktrace.");
    }
  };

  return <Button onClick={handleDeploy}>Deploy App</Button>;
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
                        <th className="p-3 font-semibold">Method / Prop</th>
                        <th className="p-3 font-semibold">Type</th>
                        <th className="p-3 font-semibold">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="p-3 font-mono text-primary">toast.success(title, desc?)</td>
                        <td className="p-3 font-mono text-muted-foreground">Function</td>
                        <td className="p-3">Dispatches a green success banner with checkmark icon.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">toast.error(title, desc?)</td>
                        <td className="p-3 font-mono text-muted-foreground">Function</td>
                        <td className="p-3">Dispatches a red destructive alert banner (role="alert").</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">toast.warning(title, desc?)</td>
                        <td className="p-3 font-mono text-muted-foreground">Function</td>
                        <td className="p-3">Dispatches an amber warning notification.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">toast.info(title, desc?)</td>
                        <td className="p-3 font-mono text-muted-foreground">Function</td>
                        <td className="p-3">Dispatches a brand primary informational alert.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">toast.dismiss(id)</td>
                        <td className="p-3 font-mono text-muted-foreground">Function</td>
                        <td className="p-3">Closes an active toast by its unique ID.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">toast.clear()</td>
                        <td className="p-3 font-mono text-muted-foreground">Function</td>
                        <td className="p-3">Dismisses all currently visible toasts at once.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">placement</td>
                        <td className="p-3 font-mono text-muted-foreground">"top-right" | "top-left" | "bottom-right" | ...</td>
                        <td className="p-3">Fixed viewport corner positioning for the toast stack.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeSection === "tabs" && (
            <div className="space-y-8">
              <div className="space-y-2">
                <Badge variant="primary">Component</Badge>
                <h1 className="text-3xl font-extrabold tracking-tight">Tabs</h1>
                <p className="text-muted-foreground text-sm">
                  Accessible tabbed interface for switching between views and sections, with keyboard arrow navigation, multiple visual variants (line, pill, card), and orientation support.
                </p>
              </div>

              {/* Interactive Demo */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Interactive Preview</div>
                <div className="p-8 rounded-chella-lg border border-border bg-card max-w-xl mx-auto space-y-6">
                  {/* Line Variant */}
                  <Tabs defaultValue="specs" variant="line">
                    <Tabs.List>
                      <Tabs.Trigger value="specs">Cluster Specs</Tabs.Trigger>
                      <Tabs.Trigger value="security">Security</Tabs.Trigger>
                      <Tabs.Trigger value="telemetry">Telemetry</Tabs.Trigger>
                      <Tabs.Trigger value="disabled" disabled>Logs (Off)</Tabs.Trigger>
                    </Tabs.List>

                    <Tabs.Content value="specs" className="space-y-3 pt-2">
                      <div className="text-xs text-muted-foreground">Active node configuration</div>
                      <Input label="Worker Pool Node" defaultValue="node-us-east-4a" size="small" />
                      <Button size="small" variant="primary">Update Cluster</Button>
                    </Tabs.Content>

                    <Tabs.Content value="security" className="space-y-2 pt-2">
                      <Switch label="Enforce TLS 1.3 mTLS" defaultChecked size="small" />
                      <Switch label="Strict IAM Pod Identity" defaultChecked size="small" />
                    </Tabs.Content>

                    <Tabs.Content value="telemetry" className="p-3 text-xs text-muted-foreground bg-muted/40 rounded-chella-md">
                      Live Telemetry Stream: 99.98% availability | 14ms latency
                    </Tabs.Content>
                  </Tabs>

                  {/* Pill Variant */}
                  <div className="pt-4 border-t border-border">
                    <div className="text-xs font-semibold text-muted-foreground mb-3">Pill Variant</div>
                    <Tabs defaultValue="day" variant="pill">
                      <Tabs.List>
                        <Tabs.Trigger value="day">24 Hours</Tabs.Trigger>
                        <Tabs.Trigger value="week">7 Days</Tabs.Trigger>
                        <Tabs.Trigger value="month">30 Days</Tabs.Trigger>
                      </Tabs.List>
                      <Tabs.Content value="day" className="p-3 text-xs text-muted-foreground bg-muted/30 rounded-chella-md">
                        24-Hour Traffic: 42,910 req/sec | Error Rate: 0.001%
                      </Tabs.Content>
                      <Tabs.Content value="week" className="p-3 text-xs text-muted-foreground bg-muted/30 rounded-chella-md">
                        7-Day Traffic: 310,400 req/sec | Error Rate: 0.003%
                      </Tabs.Content>
                      <Tabs.Content value="month" className="p-3 text-xs text-muted-foreground bg-muted/30 rounded-chella-md">
                        30-Day Traffic: 1,420,000 req/sec | Error Rate: 0.002%
                      </Tabs.Content>
                    </Tabs>
                  </div>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Usage Example</div>
                <div className="relative rounded-chella-lg bg-muted/60 border border-border p-4 font-mono text-xs text-foreground">
                  <pre className="overflow-x-auto">
{`import { Tabs } from "@chella/ui";

// 1. Compound Component Syntax
export function SettingsView() {
  return (
    <Tabs defaultValue="account" variant="line">
      <Tabs.List>
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="security">Security</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="account">Account details...</Tabs.Content>
      <Tabs.Content value="security">Security settings...</Tabs.Content>
    </Tabs>
  );
}

// 2. Declarative Items Array
export function QuickTabs() {
  return (
    <Tabs
      variant="pill"
      items={[
        { key: "db", label: "Database", children: <div>Database Stats</div> },
        { key: "cache", label: "Cache", children: <div>Redis Cache</div> },
      ]}
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
                        <td className="p-3 font-mono text-primary">variant</td>
                        <td className="p-3 font-mono text-muted-foreground">"line" | "pill" | "card"</td>
                        <td className="p-3 font-mono">"line"</td>
                        <td className="p-3">Visual style variant for the tab trigger list.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">orientation</td>
                        <td className="p-3 font-mono text-muted-foreground">"horizontal" | "vertical"</td>
                        <td className="p-3 font-mono">"horizontal"</td>
                        <td className="p-3">Horizontal or vertical layout arrangement.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">value</td>
                        <td className="p-3 font-mono text-muted-foreground">string</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Controlled value of the active tab.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">defaultValue</td>
                        <td className="p-3 font-mono text-muted-foreground">string</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Initial active tab value in uncontrolled mode.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">onValueChange</td>
                        <td className="p-3 font-mono text-muted-foreground">(value: string) =&gt; void</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Callback fired when active tab changes.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeSection === "accordion" && (
            <div className="space-y-8">
              <div className="space-y-2">
                <Badge variant="primary">Component</Badge>
                <h1 className="text-3xl font-extrabold tracking-tight">Accordion</h1>
                <p className="text-muted-foreground text-sm">
                  Vertically stacked collapsible disclosure panels with animated chevron indicators, single/multiple expansion modes, and accessible WAI-ARIA region semantics.
                </p>
              </div>

              {/* Interactive Demo */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Interactive Preview</div>
                <div className="p-8 rounded-chella-lg border border-border bg-card max-w-xl mx-auto space-y-6">
                  {/* Single Collapsible Demo */}
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground mb-2">Single Expansion Mode (Collapsible)</div>
                    <Accordion type="single" collapsible defaultValue="item-1">
                      <Accordion.Item value="item-1">
                        <Accordion.Trigger>What is Chella UI?</Accordion.Trigger>
                        <Accordion.Content>
                          Chella UI is a high-performance, accessible React component library inspired by Ant Design, Material UI, and Radix UI, styled with customizable Tailwind CSS tokens.
                        </Accordion.Content>
                      </Accordion.Item>

                      <Accordion.Item value="item-2">
                        <Accordion.Trigger>How does runtime theming work?</Accordion.Trigger>
                        <Accordion.Content>
                          Chella UI leverages HSL CSS variables configured in Tailwind. Switching between Light, Dark, System, and brand presets updates token values instantaneously with zero layout thrashing.
                        </Accordion.Content>
                      </Accordion.Item>

                      <Accordion.Item value="item-3">
                        <Accordion.Trigger>Is Chella UI enterprise ready?</Accordion.Trigger>
                        <Accordion.Content>
                          Yes! Every component is backed by 100% strict TypeScript types, RTL testing suites, Storybook docs, and zero-purge Tailwind architecture.
                        </Accordion.Content>
                      </Accordion.Item>
                    </Accordion>
                  </div>

                  {/* Separated Cards Demo */}
                  <div className="pt-4 border-t border-border">
                    <div className="text-xs font-semibold text-muted-foreground mb-2">Separated Cards (Multiple Expansion)</div>
                    <Accordion type="multiple" variant="separated" defaultValue={["sec-1"]}>
                      <Accordion.Item value="sec-1">
                        <Accordion.Trigger>Zero-Trust Mesh Security</Accordion.Trigger>
                        <Accordion.Content>
                          All ingress and inter-pod RPC calls are strictly encrypted with TLS 1.3 mTLS and verified through SPIFFE identity tokens.
                        </Accordion.Content>
                      </Accordion.Item>

                      <Accordion.Item value="sec-2">
                        <Accordion.Trigger>Automated Cluster Failover</Accordion.Trigger>
                        <Accordion.Content>
                          If node heartbeat fails for &gt;15s, pod scheduling dynamically reroutes to backup availability zones.
                        </Accordion.Content>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Usage Example</div>
                <div className="relative rounded-chella-lg bg-muted/60 border border-border p-4 font-mono text-xs text-foreground">
                  <pre className="overflow-x-auto">
{`import { Accordion } from "@chella/ui";

// 1. Compound Component Syntax
export function FAQ() {
  return (
    <Accordion type="single" collapsible defaultValue="q1">
      <Accordion.Item value="q1">
        <Accordion.Trigger>Can I customize design tokens?</Accordion.Trigger>
        <Accordion.Content>Yes, via ThemeProvider and Tailwind CSS variables.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="q2">
        <Accordion.Trigger>Is TypeScript required?</Accordion.Trigger>
        <Accordion.Content>Chella UI is written 100% in TypeScript.</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
}

// 2. Declarative Items Array
export function QuickAccordion() {
  return (
    <Accordion
      variant="bordered"
      items={[
        { value: "1", title: "Item 1", content: "Details 1" },
        { value: "2", title: "Item 2", content: "Details 2" },
      ]}
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
                        <td className="p-3 font-mono text-primary">type</td>
                        <td className="p-3 font-mono text-muted-foreground">"single" | "multiple"</td>
                        <td className="p-3 font-mono">"single"</td>
                        <td className="p-3">Whether one or multiple panels can be opened simultaneously.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">variant</td>
                        <td className="p-3 font-mono text-muted-foreground">"default" | "bordered" | "separated"</td>
                        <td className="p-3 font-mono">"default"</td>
                        <td className="p-3">Visual styling variant for container and item cards.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">collapsible</td>
                        <td className="p-3 font-mono text-muted-foreground">boolean</td>
                        <td className="p-3 font-mono">true</td>
                        <td className="p-3">In single mode, allows collapsing an already open panel.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">value</td>
                        <td className="p-3 font-mono text-muted-foreground">string | string[]</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Controlled value of expanded accordion item(s).</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">onValueChange</td>
                        <td className="p-3 font-mono text-muted-foreground">(value: string | string[]) =&gt; void</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Callback fired when expanded state changes.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeSection === "avatar" && (
            <div className="space-y-8">
              <div className="space-y-2">
                <Badge variant="primary">Component</Badge>
                <h1 className="text-3xl font-extrabold tracking-tight">Avatar & AvatarGroup</h1>
                <p className="text-muted-foreground text-sm">
                  User profile images with automatic 2-letter uppercase initials extraction, graceful load-error fallbacks, status indicator dots, and overlapping avatar group stacks.
                </p>
              </div>

              {/* Interactive Demo */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Interactive Preview</div>
                <div className="p-8 rounded-chella-lg border border-border bg-card max-w-xl mx-auto space-y-6">
                  {/* Status & Initials */}
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground mb-3">Status Badges & Auto-Initials</div>
                    <div className="flex items-center gap-4">
                      <Avatar name="Kumar Selvan" size="large" status="online" />
                      <Avatar name="Ravi Chandran" size="medium" status="busy" />
                      <Avatar name="Priya Sundar" size="medium" status="away" />
                      <Avatar name="Anand Natarajan" size="small" status="offline" />
                    </div>
                  </div>

                  {/* Shapes and Sizes */}
                  <div className="pt-4 border-t border-border">
                    <div className="text-xs font-semibold text-muted-foreground mb-3">Shapes & Geometric Variants</div>
                    <div className="flex items-center gap-4">
                      <Avatar name="Circle" shape="circle" size="large" />
                      <Avatar name="Rounded" shape="rounded" size="large" />
                      <Avatar name="Square" shape="square" size="large" />
                    </div>
                  </div>

                  {/* Avatar Group */}
                  <div className="pt-4 border-t border-border">
                    <div className="text-xs font-semibold text-muted-foreground mb-3">Avatar Group Stack (+N Overlap)</div>
                    <AvatarGroup max={4} size="medium">
                      <Avatar name="Alex Rivera" />
                      <Avatar name="Bianca Vance" />
                      <Avatar name="Carlos Mendoza" />
                      <Avatar name="Diana Prince" />
                      <Avatar name="Evan Wright" />
                      <Avatar name="Fiona Gallagher" />
                    </AvatarGroup>
                  </div>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Usage Example</div>
                <div className="relative rounded-chella-lg bg-muted/60 border border-border p-4 font-mono text-xs text-foreground">
                  <pre className="overflow-x-auto">
{`import { Avatar, AvatarGroup } from "@chella/ui";

// 1. Single Profile Avatar with Status
export function UserProfile() {
  return (
    <Avatar
      src="/avatars/kumar.jpg"
      name="Kumar Selvan"
      size="large"
      status="online"
    />
  );
}

// 2. Overlapping Avatar Group Stack
export function TeamStack() {
  return (
    <AvatarGroup max={3} size="medium">
      <Avatar name="Alice Green" />
      <Avatar name="Bob Vance" />
      <Avatar name="Charlie Kelly" />
      <Avatar name="Dennis Reynolds" />
    </AvatarGroup>
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
                        <td className="p-3 font-mono text-primary">name</td>
                        <td className="p-3 font-mono text-muted-foreground">string</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">User name used for fallback initials and accessible aria-label.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">src</td>
                        <td className="p-3 font-mono text-muted-foreground">string</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Image URL source (falls back gracefully to initials on load failure).</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">size</td>
                        <td className="p-3 font-mono text-muted-foreground">"xs" | "small" | "medium" | "large" | "xl" | "2xl"</td>
                        <td className="p-3 font-mono">"medium"</td>
                        <td className="p-3">Dimension scale of the avatar circle.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">shape</td>
                        <td className="p-3 font-mono text-muted-foreground">"circle" | "square" | "rounded"</td>
                        <td className="p-3 font-mono">"circle"</td>
                        <td className="p-3">Corner radius curvature styling.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">status</td>
                        <td className="p-3 font-mono text-muted-foreground">"online" | "offline" | "busy" | "away"</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Status dot indicator with contrasting ring.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeSection === "skeleton" && (
            <div className="space-y-8">
              <div className="space-y-2">
                <Badge variant="primary">Component</Badge>
                <h1 className="text-3xl font-extrabold tracking-tight">Skeleton</h1>
                <p className="text-muted-foreground text-sm">
                  Content loading placeholders with pulse or wave shimmer animations, multiple geometric variants (text, circular, rounded, rectangular), multiline paragraph generation, and conditional wrapper mode.
                </p>
              </div>

              {/* Interactive Demo */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Interactive Preview</div>
                <div className="p-8 rounded-chella-lg border border-border bg-card max-w-xl mx-auto space-y-6">
                  {/* Card Placeholder */}
                  <div className="space-y-3 p-4 border border-border rounded-chella-lg bg-card">
                    <div className="flex items-center gap-3">
                      <Skeleton variant="circular" width={42} height={42} />
                      <div className="space-y-1.5 flex-1">
                        <Skeleton variant="text" width="60%" />
                        <Skeleton variant="text" width="35%" height={12} />
                      </div>
                    </div>
                    <Skeleton variant="rounded" height={60} />
                    <div className="flex justify-end gap-2 pt-1">
                      <Skeleton variant="rounded" width={64} height={28} />
                      <Skeleton variant="rounded" width={80} height={28} />
                    </div>
                  </div>

                  {/* Multiline Paragraph */}
                  <div className="pt-2">
                    <div className="text-xs font-semibold text-muted-foreground mb-2">Multiline Paragraph Lines</div>
                    <Skeleton variant="text" lines={3} />
                  </div>

                  {/* Animation Variants */}
                  <div className="pt-4 border-t border-border space-y-3">
                    <div className="text-xs font-semibold text-muted-foreground">Animation Modes</div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Pulse (Default)</span>
                        <Skeleton variant="rounded" width={140} height={24} animation="pulse" />
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Wave / Shimmer</span>
                        <Skeleton variant="rounded" width={140} height={24} animation="wave" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Usage Example</div>
                <div className="relative rounded-chella-lg bg-muted/60 border border-border p-4 font-mono text-xs text-foreground">
                  <pre className="overflow-x-auto">
{`import { Skeleton, Card } from "@chella/ui";

// 1. Standalone Placeholders
export function LoadingCard() {
  return (
    <Card className="w-80 p-4 space-y-3">
      <div className="flex items-center gap-3">
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="text" width="50%" />
      </div>
      <Skeleton variant="text" lines={3} />
    </Card>
  );
}

// 2. Conditional Wrapper Mode
export function UserProfile({ isLoading, user }) {
  return (
    <Skeleton loading={isLoading}>
      <div>{user?.name}</div>
    </Skeleton>
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
                        <td className="p-3 font-mono text-primary">variant</td>
                        <td className="p-3 font-mono text-muted-foreground">"text" | "circular" | "rectangular" | "rounded"</td>
                        <td className="p-3 font-mono">"text"</td>
                        <td className="p-3">Geometric silhouette shape of the placeholder.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">animation</td>
                        <td className="p-3 font-mono text-muted-foreground">"pulse" | "wave" | "none"</td>
                        <td className="p-3 font-mono">"pulse"</td>
                        <td className="p-3">Motion effect applied to the loading surface.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">lines</td>
                        <td className="p-3 font-mono text-muted-foreground">number</td>
                        <td className="p-3 font-mono">1</td>
                        <td className="p-3">When &gt;1 with variant="text", renders stacked paragraph lines.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">width / height</td>
                        <td className="p-3 font-mono text-muted-foreground">string | number</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Custom dimensions (converts numbers to pixels).</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">loading</td>
                        <td className="p-3 font-mono text-muted-foreground">boolean</td>
                        <td className="p-3 font-mono">true</td>
                        <td className="p-3">In wrapper mode, renders children when loading is false.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeSection === "progress" && (
            <div className="space-y-8">
              <div className="space-y-2">
                <Badge variant="primary">Component</Badge>
                <h1 className="text-3xl font-extrabold tracking-tight">Progress & CircularProgress</h1>
                <p className="text-muted-foreground text-sm">
                  Linear progress bars and circular SVG gauge meters supporting determinate/indeterminate states, semantic color variants, gradient fills, and custom percentage labels.
                </p>
              </div>

              {/* Interactive Demo */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Interactive Preview</div>
                <div className="p-8 rounded-chella-lg border border-border bg-card max-w-xl mx-auto space-y-6">
                  {/* Linear Progress Bars */}
                  <div className="space-y-4">
                    <div className="text-xs font-semibold text-muted-foreground">Linear Indicators</div>
                    <Progress value={68} showLabel label="Cluster Memory Allocation" />
                    <Progress value={92} variant="danger" showLabel label="Storage Threshold Alert" />
                    <Progress value={100} variant="success" showLabel label="Database Migration Complete" />
                    <Progress value={45} variant="gradient" showLabel label="Model Checkpoint Synced" />
                    <Progress indeterminate variant="info" />
                  </div>

                  {/* Circular Gauges */}
                  <div className="pt-4 border-t border-border space-y-3">
                    <div className="text-xs font-semibold text-muted-foreground">Circular SVG Gauges</div>
                    <div className="flex flex-wrap items-center justify-around gap-6 pt-2">
                      <CircularProgress value={74} showLabel size="medium" />
                      <CircularProgress value={96} variant="success" showLabel size="large" />
                      <CircularProgress value={32} variant="warning" showLabel size="small" />
                      <CircularProgress indeterminate variant="info" size="medium" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Usage Example</div>
                <div className="relative rounded-chella-lg bg-muted/60 border border-border p-4 font-mono text-xs text-foreground">
                  <pre className="overflow-x-auto">
{`import { Progress, CircularProgress } from "@chella/ui";

// 1. Linear Progress with Labels
export function TaskProgress() {
  return (
    <Progress
      value={68}
      variant="default"
      showLabel
      label="Uploading Dataset"
    />
  );
}

// 2. Indeterminate Linear Bar
<Progress indeterminate variant="info" />

// 3. Circular SVG Meter
<CircularProgress
  value={84}
  variant="success"
  showLabel
  size="large"
/>`}
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
                        <td className="p-3 font-mono text-primary">value</td>
                        <td className="p-3 font-mono text-muted-foreground">number</td>
                        <td className="p-3 font-mono">0</td>
                        <td className="p-3">Current progress numerical value (0 to max).</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">max</td>
                        <td className="p-3 font-mono text-muted-foreground">number</td>
                        <td className="p-3 font-mono">100</td>
                        <td className="p-3">Maximum possible value for completion calculation.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">variant</td>
                        <td className="p-3 font-mono text-muted-foreground">"default" | "success" | "warning" | "danger" | "info" | "gradient"</td>
                        <td className="p-3 font-mono">"default"</td>
                        <td className="p-3">Semantic token color fill applied to the active indicator.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">size</td>
                        <td className="p-3 font-mono text-muted-foreground">"small" | "medium" | "large"</td>
                        <td className="p-3 font-mono">"medium"</td>
                        <td className="p-3">Thickness of the track bar or diameter of circular gauge.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">indeterminate</td>
                        <td className="p-3 font-mono text-muted-foreground">boolean</td>
                        <td className="p-3 font-mono">false</td>
                        <td className="p-3">Renders continuous animated loop for unquantified loading.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeSection === "drawer" && (
            <div className="space-y-8">
              <div className="space-y-2">
                <Badge variant="primary">Component</Badge>
                <h1 className="text-3xl font-extrabold tracking-tight">Drawer / Sheet</h1>
                <p className="text-muted-foreground text-sm">
                  Slide-over overlay panel anchored to any screen edge (right, left, top, bottom), supporting compound headers, scrollable body content, action footers, outside-click backdrop dismissal, and Escape key handling.
                </p>
              </div>

              {/* Interactive Demo */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Interactive Preview</div>
                <div className="p-8 rounded-chella-lg border border-border bg-card max-w-xl mx-auto space-y-4">
                  <div className="text-xs font-semibold text-muted-foreground">Choose Slide Anchor Position:</div>
                  <div className="flex flex-wrap gap-2.5">
                    {(["right", "left", "top", "bottom"] as const).map((pos) => (
                      <Button
                        key={pos}
                        variant={drawerPos === pos ? "primary" : "secondary"}
                        size="small"
                        onClick={() => {
                          setDrawerPos(pos);
                          setIsDrawerOpen(true);
                        }}
                      >
                        Slide from {pos.toUpperCase()}
                      </Button>
                    ))}
                  </div>

                  <Drawer
                    open={isDrawerOpen}
                    onClose={() => setIsDrawerOpen(false)}
                    position={drawerPos}
                    size="medium"
                  >
                    <Drawer.Header>
                      <Drawer.Title>Configure Ingress Gateway</Drawer.Title>
                      <Drawer.Description>
                        Modify proxy routing and security parameters.
                      </Drawer.Description>
                    </Drawer.Header>
                    <Drawer.Body>
                      <div className="space-y-4">
                        <Input label="Domain Routing Host" defaultValue="api.gateway.internal" />
                        <Input label="Target Port" defaultValue="8443" />
                        <div className="pt-2 border-t border-border">
                          <Switch label="Strict TLS 1.3 Mutual Authentication" defaultChecked />
                        </div>
                      </div>
                    </Drawer.Body>
                    <Drawer.Footer>
                      <Button variant="secondary" onClick={() => setIsDrawerOpen(false)}>
                        Cancel
                      </Button>
                      <Button variant="primary" onClick={() => setIsDrawerOpen(false)}>
                        Save Configuration
                      </Button>
                    </Drawer.Footer>
                  </Drawer>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Usage Example</div>
                <div className="relative rounded-chella-lg bg-muted/60 border border-border p-4 font-mono text-xs text-foreground">
                  <pre className="overflow-x-auto">
{`import { useState } from "react";
import { Drawer, Button, Input, Switch } from "@chella/ui";

export function SettingsDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Settings</Button>

      <Drawer open={open} onClose={() => setOpen(false)} position="right" size="medium">
        <Drawer.Header>
          <Drawer.Title>Cluster Ingress Settings</Drawer.Title>
          <Drawer.Description>Fine-tune reverse proxy parameters.</Drawer.Description>
        </Drawer.Header>
        <Drawer.Body>
          <Input label="Gateway Host" defaultValue="mesh.corp.internal" />
          <Switch label="Enable mTLS Encryption" defaultChecked />
        </Drawer.Body>
        <Drawer.Footer>
          <Button variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="primary" onClick={() => setOpen(false)}>Save Changes</Button>
        </Drawer.Footer>
      </Drawer>
    </>
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
                        <td className="p-3 font-mono text-primary">open</td>
                        <td className="p-3 font-mono text-muted-foreground">boolean</td>
                        <td className="p-3 font-mono">false</td>
                        <td className="p-3">Controlled open state of the drawer sheet.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">onClose</td>
                        <td className="p-3 font-mono text-muted-foreground">() =&gt; void</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Callback fired on backdrop click, Escape key, or close button.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">position</td>
                        <td className="p-3 font-mono text-muted-foreground">"right" | "left" | "top" | "bottom"</td>
                        <td className="p-3 font-mono">"right"</td>
                        <td className="p-3">Edge anchor point from which the drawer slides into view.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">size</td>
                        <td className="p-3 font-mono text-muted-foreground">"small" | "medium" | "large" | "full"</td>
                        <td className="p-3 font-mono">"medium"</td>
                        <td className="p-3">Dimension scaling for width (left/right) or height (top/bottom).</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">closeOnOverlayClick</td>
                        <td className="p-3 font-mono text-muted-foreground">boolean</td>
                        <td className="p-3 font-mono">true</td>
                        <td className="p-3">Whether clicking the dim backdrop overlay closes the drawer.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">closeOnEsc</td>
                        <td className="p-3 font-mono text-muted-foreground">boolean</td>
                        <td className="p-3 font-mono">true</td>
                        <td className="p-3">Whether pressing the Escape key closes the drawer.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeSection === "alert" && (
            <div className="space-y-8">
              <div className="space-y-2">
                <Badge variant="primary">Component</Badge>
                <h1 className="text-3xl font-extrabold tracking-tight">Alert</h1>
                <p className="text-muted-foreground text-sm">
                  Contextual feedback messages and callout banners with automated semantic icons, multiple visual styling tiers (subtle, outline, solid), action slots, and interactive dismissal buttons.
                </p>
              </div>

              {/* Interactive Demo */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Interactive Preview</div>
                <div className="p-8 rounded-chella-lg border border-border bg-card max-w-xl mx-auto space-y-4">
                  {/* Semantic Variants */}
                  <Alert
                    variant="info"
                    title="Control Plane Maintenance"
                    description="Scheduled telemetry service restart tonight at 02:00 UTC."
                  />
                  <Alert
                    variant="success"
                    closable
                    title="Cluster Successfully Provisioned"
                    description="12 worker nodes (ARM64) online in region us-east-1."
                  />
                  <Alert
                    variant="warning"
                    title="High Memory Pressure"
                    description="Node pool memory consumption has exceeded 85%."
                    action={
                      <Button size="small" variant="secondary">
                        Scale Pods
                      </Button>
                    }
                  />
                  <Alert
                    variant="danger"
                    title="mTLS Handshake Failed"
                    description="Service mesh proxy rejected certificate with invalid SAN."
                  />
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Usage Example</div>
                <div className="relative rounded-chella-lg bg-muted/60 border border-border p-4 font-mono text-xs text-foreground">
                  <pre className="overflow-x-auto">
{`import { Alert, Button } from "@chella/ui";

// 1. Shorthand Props
export function NotificationBanner() {
  return (
    <Alert
      variant="success"
      closable
      title="Release Deployed"
      description="v2.4.0 is now live on edge servers."
      action={<Button size="small" variant="secondary">View</Button>}
    />
  );
}

// 2. Compound Component Syntax
export function WarningAlert() {
  return (
    <Alert variant="warning" styleVariant="outline">
      <Alert.Title>Elevated Error Rate</Alert.Title>
      <Alert.Description>HTTP 502 responses increased by 14%.</Alert.Description>
    </Alert>
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
                        <td className="p-3 font-mono text-primary">variant</td>
                        <td className="p-3 font-mono text-muted-foreground">"info" | "success" | "warning" | "danger" | "default"</td>
                        <td className="p-3 font-mono">"info"</td>
                        <td className="p-3">Semantic tone governing colors and default icons.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">styleVariant</td>
                        <td className="p-3 font-mono text-muted-foreground">"subtle" | "outline" | "solid"</td>
                        <td className="p-3 font-mono">"subtle"</td>
                        <td className="p-3">Visual treatment and background saturation style.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">title / description</td>
                        <td className="p-3 font-mono text-muted-foreground">ReactNode</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Shorthand text or markup rendered in header and body.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">icon</td>
                        <td className="p-3 font-mono text-muted-foreground">ReactNode | boolean</td>
                        <td className="p-3 font-mono">true</td>
                        <td className="p-3">Custom icon element or false to suppress icon.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">closable</td>
                        <td className="p-3 font-mono text-muted-foreground">boolean</td>
                        <td className="p-3 font-mono">false</td>
                        <td className="p-3">Renders an interactive dismiss button with X icon.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">action</td>
                        <td className="p-3 font-mono text-muted-foreground">ReactNode</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Interactive button or link rendered on right edge.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeSection === "form" && (
            <div className="space-y-8">
              <div className="space-y-2">
                <Badge variant="primary">Component</Badge>
                <h1 className="text-3xl font-extrabold tracking-tight">Form & FormField</h1>
                <p className="text-muted-foreground text-sm">
                  Accessible form layout wrappers coordinating linked labels, required asterisks, help descriptions, and validation error messages with auto-generated IDs and aria-describedby binding.
                </p>
              </div>

              {/* Interactive Demo */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Interactive Preview</div>
                <div className="p-8 rounded-chella-lg border border-border bg-card max-w-xl mx-auto space-y-6">
                  <Form layout="vertical" className="space-y-4">
                    <FormField
                      label="Service Cluster Identifier"
                      required
                      helpText="Unique DNS-compliant service moniker."
                    >
                      <Input placeholder="e.g. auth-gateway-prod" />
                    </FormField>

                    <FormField
                      label="Corporate Email Address"
                      required
                      error="Please enter a valid company address ending in @corp.internal"
                    >
                      <Input defaultValue="kumar@external.org" />
                    </FormField>

                    <FormField label="Deployment Environment">
                      <Select
                        options={[
                          { label: "Production (us-east-1)", value: "prod" },
                          { label: "Staging (us-west-2)", value: "stage" },
                          { label: "Development (local)", value: "dev" },
                        ]}
                      />
                    </FormField>

                    <div className="pt-2 flex justify-end gap-2">
                      <Button variant="secondary">Reset</Button>
                      <Button variant="primary">Submit Service</Button>
                    </div>
                  </Form>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Usage Example</div>
                <div className="relative rounded-chella-lg bg-muted/60 border border-border p-4 font-mono text-xs text-foreground">
                  <pre className="overflow-x-auto">
{`import { Form, FormField, Input, Button } from "@chella/ui";

// 1. Shorthand FormField Syntax
export function QuickForm() {
  return (
    <Form onSubmit={(e) => { e.preventDefault(); console.log("Submitted"); }}>
      <FormField
        label="Cluster Name"
        required
        helpText="Letters, numbers, and hyphens only."
      >
        <Input placeholder="prod-cluster-01" />
      </FormField>

      <FormField
        label="Admin Email"
        required
        error="Invalid domain"
      >
        <Input type="email" />
      </FormField>

      <Button type="submit" variant="primary">Submit</Button>
    </Form>
  );
}

// 2. Compound Component Syntax
export function CustomField() {
  return (
    <FormField id="custom-field">
      <FormField.Label>Custom Token</FormField.Label>
      <FormField.Control>
        <Input />
      </FormField.Control>
      <FormField.HelpText>Enter your 32-character API secret.</FormField.HelpText>
    </FormField>
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
                        <td className="p-3 font-mono text-primary">label</td>
                        <td className="p-3 font-mono text-muted-foreground">ReactNode</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Label element automatically linked to control via htmlFor.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">required</td>
                        <td className="p-3 font-mono text-muted-foreground">boolean</td>
                        <td className="p-3 font-mono">false</td>
                        <td className="p-3">Appends a red required asterisk (*) to the label.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">error</td>
                        <td className="p-3 font-mono text-muted-foreground">ReactNode</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Error message rendered with role="alert" and sets aria-invalid.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">helpText</td>
                        <td className="p-3 font-mono text-muted-foreground">ReactNode</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Supporting instructional text linked via aria-describedby.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">layout (Form)</td>
                        <td className="p-3 font-mono text-muted-foreground">"vertical" | "horizontal" | "inline"</td>
                        <td className="p-3 font-mono">"vertical"</td>
                        <td className="p-3">Layout grid alignment across nested FormFields.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeSection === "breadcrumb" && (
            <div className="space-y-8">
              <div className="space-y-2">
                <Badge variant="primary">Component</Badge>
                <h1 className="text-3xl font-extrabold tracking-tight">Breadcrumb</h1>
                <p className="text-muted-foreground text-sm">
                  Hierarchical navigation trail indicating user location within application structure, supporting custom separators, automated ellipsis collapse, and WAI-ARIA breadcrumb landmarks.
                </p>
              </div>

              {/* Interactive Demo */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Interactive Preview</div>
                <div className="p-8 rounded-chella-lg border border-border bg-card max-w-xl mx-auto space-y-6">
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-muted-foreground">1. Declarative Items Navigation</div>
                    <Breadcrumb
                      items={[
                        { label: "Console", href: "#" },
                        { label: "Clusters", href: "#" },
                        { label: "us-east-1-primary", href: "#" },
                        { label: "Deployments" },
                      ]}
                    />
                  </div>

                  <div className="space-y-2 pt-3 border-t border-border">
                    <div className="text-xs font-semibold text-muted-foreground">2. Collapsed Long Path (maxItems=3)</div>
                    <Breadcrumb
                      maxItems={3}
                      items={[
                        { label: "Root", href: "#" },
                        { label: "Organizations", href: "#" },
                        { label: "Chella Corp", href: "#" },
                        { label: "Pipelines", href: "#" },
                        { label: "Build #8491" },
                      ]}
                    />
                  </div>

                  <div className="space-y-2 pt-3 border-t border-border">
                    <div className="text-xs font-semibold text-muted-foreground">3. Custom Slash Separator</div>
                    <Breadcrumb
                      separator="/"
                      items={[
                        { label: "workspace", href: "#" },
                        { label: "packages", href: "#" },
                        { label: "ui", href: "#" },
                        { label: "src" },
                      ]}
                    />
                  </div>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Usage Example</div>
                <div className="relative rounded-chella-lg bg-muted/60 border border-border p-4 font-mono text-xs text-foreground">
                  <pre className="overflow-x-auto">
{`import { Breadcrumb } from "@chella/ui";

// 1. Declarative Mode
export function PageHeader() {
  return (
    <Breadcrumb
      items={[
        { label: "Dashboard", href: "/dashboard" },
        { label: "Clusters", href: "/clusters" },
        { label: "Production Ingress" },
      ]}
    />
  );
}

// 2. Compound Component Syntax
export function CustomBreadcrumb() {
  return (
    <Breadcrumb separator="/">
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Link href="/projects">Projects</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Page>Chella UI</Breadcrumb.Page>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb>
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
                        <td className="p-3 font-mono text-primary">items</td>
                        <td className="p-3 font-mono text-muted-foreground">BreadcrumbItemData[]</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Declarative array of breadcrumb links and active labels.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">separator</td>
                        <td className="p-3 font-mono text-muted-foreground">ReactNode</td>
                        <td className="p-3 font-mono">&lt;ChevronRight /&gt;</td>
                        <td className="p-3">Custom separator divider rendered between navigation steps.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">maxItems</td>
                        <td className="p-3 font-mono text-muted-foreground">number</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Maximum items to display before collapsing middle items into ellipsis.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">size</td>
                        <td className="p-3 font-mono text-muted-foreground">"small" | "medium" | "large"</td>
                        <td className="p-3 font-mono">"medium"</td>
                        <td className="p-3">Typography and spacing scale for breadcrumb chain.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeSection === "pagination" && (
            <div className="space-y-8">
              <div className="space-y-2">
                <Badge variant="primary">Component</Badge>
                <h1 className="text-3xl font-extrabold tracking-tight">Pagination</h1>
                <p className="text-muted-foreground text-sm">
                  Responsive multi-page navigation controller featuring automatic window ellipsis calculation, boundary controls, styling variants (default, outline, ghost, pills), and full keyboard navigation.
                </p>
              </div>

              {/* Interactive Demo */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Interactive Preview</div>
                <div className="p-8 rounded-chella-lg border border-border bg-card max-w-xl mx-auto space-y-6">
                  <div className="text-center space-y-1">
                    <div className="text-xs font-semibold text-muted-foreground">Active Page:</div>
                    <div className="text-2xl font-black text-primary">{docPage}</div>
                  </div>

                  <div className="flex justify-center">
                    <Pagination
                      page={docPage}
                      totalPages={18}
                      showEdges
                      onPageChange={setDocPage}
                    />
                  </div>

                  <div className="pt-4 border-t border-border space-y-3">
                    <div className="text-xs font-semibold text-muted-foreground text-center">Styling Variants:</div>
                    <div className="space-y-2 flex flex-col items-center">
                      <Pagination variant="outline" page={docPage} totalPages={6} onPageChange={setDocPage} />
                      <Pagination variant="pills" page={docPage} totalPages={6} onPageChange={setDocPage} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Usage Example</div>
                <div className="relative rounded-chella-lg bg-muted/60 border border-border p-4 font-mono text-xs text-foreground">
                  <pre className="overflow-x-auto">
{`import { useState } from "react";
import { Pagination } from "@chella/ui";

// 1. Declarative Mode with Boundary Controls
export function DataTablePagination() {
  const [page, setPage] = useState(1);

  return (
    <Pagination
      page={page}
      totalPages={24}
      showEdges
      onPageChange={setPage}
    />
  );
}

// 2. Compound Component Syntax
export function CustomPagination() {
  return (
    <Pagination>
      <Pagination.Content>
        <Pagination.Prev />
        <Pagination.Item active>1</Pagination.Item>
        <Pagination.Item>2</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item>12</Pagination.Item>
        <Pagination.Next />
      </Pagination.Content>
    </Pagination>
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
                        <td className="p-3 font-mono text-primary">page</td>
                        <td className="p-3 font-mono text-muted-foreground">number</td>
                        <td className="p-3 font-mono">1</td>
                        <td className="p-3">Current active page (controlled).</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">totalPages</td>
                        <td className="p-3 font-mono text-muted-foreground">number</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Total count of pages available.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">onPageChange</td>
                        <td className="p-3 font-mono text-muted-foreground">(page: number) =&gt; void</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Callback fired when a page is selected.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">showEdges</td>
                        <td className="p-3 font-mono text-muted-foreground">boolean</td>
                        <td className="p-3 font-mono">false</td>
                        <td className="p-3">Renders First (&lt;&lt;) and Last (&gt;&gt;) jump buttons.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">variant</td>
                        <td className="p-3 font-mono text-muted-foreground">"default" | "outline" | "ghost" | "pills"</td>
                        <td className="p-3 font-mono">"default"</td>
                        <td className="p-3">Visual styling shape and background treatment.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">size</td>
                        <td className="p-3 font-mono text-muted-foreground">"small" | "medium" | "large"</td>
                        <td className="p-3 font-mono">"medium"</td>
                        <td className="p-3">Button sizing and padding dimension scale.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeSection === "divider" && (
            <div className="space-y-8">
              <div className="space-y-2">
                <Badge variant="primary">Component</Badge>
                <h1 className="text-3xl font-extrabold tracking-tight">Divider / Separator</h1>
                <p className="text-muted-foreground text-sm">
                  Visual boundary line separating content blocks, supporting horizontal and vertical orientations, decorative label text with alignment, and border variants (solid, dashed, dotted).
                </p>
              </div>

              {/* Interactive Demo */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Interactive Preview</div>
                <div className="p-8 rounded-chella-lg border border-border bg-card max-w-xl mx-auto space-y-6">
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-muted-foreground">1. Horizontal Separator with Centered Text:</div>
                    <div className="p-4 bg-muted/20 border border-border/70 rounded-chella-lg space-y-3">
                      <Button variant="primary" className="w-full">Sign in with SSO</Button>
                      <Divider>OR CONTINUE WITH</Divider>
                      <Button variant="outline" className="w-full">Sign in with Email</Button>
                    </div>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-border">
                    <div className="text-xs font-semibold text-muted-foreground">2. Aligned Labels & Dashed / Dotted Variants:</div>
                    <div className="space-y-3">
                      <Divider align="start" variant="dashed">START ALIGNED DASHED</Divider>
                      <Divider align="end" variant="dotted">END ALIGNED DOTTED</Divider>
                    </div>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-border">
                    <div className="text-xs font-semibold text-muted-foreground">3. Vertical Inline Divider:</div>
                    <div className="flex items-center h-8 gap-2">
                      <Button variant="ghost" size="small">Overview</Button>
                      <Divider orientation="vertical" />
                      <Button variant="ghost" size="small">Clusters</Button>
                      <Divider orientation="vertical" />
                      <Button variant="ghost" size="small">Settings</Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Usage Example</div>
                <div className="relative rounded-chella-lg bg-muted/60 border border-border p-4 font-mono text-xs text-foreground">
                  <pre className="overflow-x-auto">
{`import { Divider, Button } from "@chella/ui";

// 1. Horizontal with Text
export function LoginCard() {
  return (
    <div>
      <Button variant="primary">Single Sign-On</Button>
      <Divider>OR</Divider>
      <Button variant="outline">Email Login</Button>
    </div>
  );
}

// 2. Vertical Inline Toolbar Divider
export function Toolbar() {
  return (
    <div className="flex items-center h-8">
      <Button size="small" variant="ghost">Edit</Button>
      <Divider orientation="vertical" />
      <Button size="small" variant="ghost">Delete</Button>
    </div>
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
                        <td className="p-3 font-mono text-primary">orientation</td>
                        <td className="p-3 font-mono text-muted-foreground">"horizontal" | "vertical"</td>
                        <td className="p-3 font-mono">"horizontal"</td>
                        <td className="p-3">Directional alignment axis of the boundary line.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">variant</td>
                        <td className="p-3 font-mono text-muted-foreground">"solid" | "dashed" | "dotted"</td>
                        <td className="p-3 font-mono">"solid"</td>
                        <td className="p-3">Border line style pattern.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">align</td>
                        <td className="p-3 font-mono text-muted-foreground">"center" | "start" | "end"</td>
                        <td className="p-3 font-mono">"center"</td>
                        <td className="p-3">Positioning of text label when children are provided.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">spacing</td>
                        <td className="p-3 font-mono text-muted-foreground">"none" | "small" | "medium" | "large"</td>
                        <td className="p-3 font-mono">"medium"</td>
                        <td className="p-3">Outer margin applied along the orientation axis.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeSection === "spinner" && (
            <div className="space-y-8">
              <div className="space-y-2">
                <Badge variant="primary">Component</Badge>
                <h1 className="text-3xl font-extrabold tracking-tight">Spinner</h1>
                <p className="text-muted-foreground text-sm">
                  Animated indeterminate circular loading indicator with custom sizing tokens, semantic color themes, screen reader accessibility labels, and visible text support.
                </p>
              </div>

              {/* Interactive Demo */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Interactive Preview</div>
                <div className="p-8 rounded-chella-lg border border-border bg-card max-w-xl mx-auto space-y-6">
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-muted-foreground">1. Sizing Scale (xs, sm, md, lg, xl):</div>
                    <div className="flex items-center gap-4 p-4 bg-muted/20 border border-border/70 rounded-chella-lg">
                      <Spinner size="xs" />
                      <Spinner size="small" />
                      <Spinner size="medium" />
                      <Spinner size="large" />
                      <Spinner size="xl" />
                    </div>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-border">
                    <div className="text-xs font-semibold text-muted-foreground">2. Semantic Color Variants:</div>
                    <div className="flex items-center gap-4 p-4 bg-muted/20 border border-border/70 rounded-chella-lg">
                      <Spinner variant="primary" />
                      <Spinner variant="success" />
                      <Spinner variant="warning" />
                      <Spinner variant="danger" />
                      <Spinner variant="info" />
                    </div>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-border">
                    <div className="text-xs font-semibold text-muted-foreground">3. With Visible Progress Label:</div>
                    <div className="p-4 bg-muted/20 border border-border/70 rounded-chella-lg space-y-3">
                      <Spinner showLabel label="Syncing telemetry stream..." size="small" variant="info" />
                      <Spinner showLabel label="Deploying Helm release..." size="medium" variant="success" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Usage Example</div>
                <div className="relative rounded-chella-lg bg-muted/60 border border-border p-4 font-mono text-xs text-foreground">
                  <pre className="overflow-x-auto">
{`import { Spinner } from "@chella/ui";

// 1. Basic Spinner
export function LoadingState() {
  return <Spinner size="medium" variant="primary" />;
}

// 2. Visible Label Loader
export function SyncIndicator() {
  return (
    <Spinner
      showLabel
      label="Provisioning database cluster..."
      size="small"
      variant="info"
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
                        <td className="p-3 font-mono text-primary">size</td>
                        <td className="p-3 font-mono text-muted-foreground">"xs" | "small" | "medium" | "large" | "xl"</td>
                        <td className="p-3 font-mono">"medium"</td>
                        <td className="p-3">Dimensions of the animated SVG spinner.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">variant</td>
                        <td className="p-3 font-mono text-muted-foreground">"primary" | "secondary" | "success" | "warning" | "danger" | "info" | "white"</td>
                        <td className="p-3 font-mono">"primary"</td>
                        <td className="p-3">Color theme applied to the rotating indicator arc.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">label</td>
                        <td className="p-3 font-mono text-muted-foreground">string</td>
                        <td className="p-3 font-mono">"Loading..."</td>
                        <td className="p-3">Accessible label for screen readers or visible text.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">showLabel</td>
                        <td className="p-3 font-mono text-muted-foreground">boolean</td>
                        <td className="p-3 font-mono">false</td>
                        <td className="p-3">Displays visible text label next to the rotating spinner.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeSection === "emptystate" && (
            <div className="space-y-8">
              <div className="space-y-2">
                <Badge variant="primary">Component</Badge>
                <h1 className="text-3xl font-extrabold tracking-tight">EmptyState</h1>
                <p className="text-muted-foreground text-sm">
                  Placeholder surface for zero-data views, search misses, first-time user onboarding, and system error scenarios with both shorthand props and compound component syntax.
                </p>
              </div>

              {/* Interactive Demo */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Interactive Preview</div>
                <div className="p-8 rounded-chella-lg border border-border bg-card max-w-xl mx-auto space-y-6">
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-muted-foreground">1. Dashed Border Empty State:</div>
                    <EmptyState
                      variant="dashed"
                      icon={<Search className="w-6 h-6" />}
                      title="No Services Found"
                      description="No microservices matched your search criteria. Try removing or resetting active filters."
                      action={<Button variant="secondary" size="small">Clear Filters</Button>}
                    />
                  </div>

                  <div className="space-y-2 pt-4 border-t border-border">
                    <div className="text-xs font-semibold text-muted-foreground">2. Card Variant with Compound Syntax:</div>
                    <EmptyState variant="card">
                      <EmptyState.Icon>
                        <UserPlus className="w-6 h-6" />
                      </EmptyState.Icon>
                      <EmptyState.Title>No Team Members</EmptyState.Title>
                      <EmptyState.Description>
                        Invite coworkers to collaborate and manage Kubernetes clusters together.
                      </EmptyState.Description>
                      <EmptyState.Action>
                        <Button variant="primary" size="small">Invite Member</Button>
                      </EmptyState.Action>
                    </EmptyState>
                  </div>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Usage Example</div>
                <div className="relative rounded-chella-lg bg-muted/60 border border-border p-4 font-mono text-xs text-foreground">
                  <pre className="overflow-x-auto">
{`import { EmptyState, Button } from "@chella/ui";
import { FolderSearch, Plus } from "lucide-react";

// 1. Shorthand Syntax
export function NoClustersFound() {
  return (
    <EmptyState
      variant="dashed"
      icon={<FolderSearch />}
      title="No Clusters Deployed"
      description="Deploy a new cluster to begin orchestrating container workloads."
      action={
        <Button variant="primary">
          <Plus className="w-4 h-4 mr-1.5" /> Deploy Cluster
        </Button>
      }
    />
  );
}

// 2. Compound Component Syntax
export function CustomEmptyState() {
  return (
    <EmptyState variant="card">
      <EmptyState.Icon><FolderSearch /></EmptyState.Icon>
      <EmptyState.Title>Zero Telemetry Traces</EmptyState.Title>
      <EmptyState.Description>Configure OpenTelemetry SDK to start streaming metrics.</EmptyState.Description>
      <EmptyState.Action>
        <Button variant="outline">Read Documentation</Button>
      </EmptyState.Action>
    </EmptyState>
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
                        <td className="p-3 font-mono text-primary">variant</td>
                        <td className="p-3 font-mono text-muted-foreground">"default" | "card" | "dashed"</td>
                        <td className="p-3 font-mono">"default"</td>
                        <td className="p-3">Container styling border and background treatment.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">size</td>
                        <td className="p-3 font-mono text-muted-foreground">"small" | "medium" | "large"</td>
                        <td className="p-3 font-mono">"medium"</td>
                        <td className="p-3">Spacing scale and font sizing for empty state layout.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">icon</td>
                        <td className="p-3 font-mono text-muted-foreground">ReactNode</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Decorative illustration or icon graphic.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">title</td>
                        <td className="p-3 font-mono text-muted-foreground">ReactNode</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Main headline describing the empty condition.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">description</td>
                        <td className="p-3 font-mono text-muted-foreground">ReactNode</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Supplemental helper copy suggesting corrective action.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">action</td>
                        <td className="p-3 font-mono text-muted-foreground">ReactNode</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">CTA buttons or interactive trigger controls.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeSection === "statcard" && (
            <div className="space-y-8">
              <div className="space-y-2">
                <Badge variant="primary">Component</Badge>
                <h1 className="text-3xl font-extrabold tracking-tight">StatCard / Metric Card</h1>
                <p className="text-muted-foreground text-sm">
                  Executive analytics metric card for tracking KPIs, telemetry rates, growth trajectories, and trend shifts with automatic delta indicator badges and hover micro-interactions.
                </p>
              </div>

              {/* Interactive Demo */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Interactive Preview</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-8 rounded-chella-lg border border-border bg-card max-w-2xl mx-auto">
                  <StatCard
                    variant="elevated"
                    hoverable
                    title="Total ARR Revenue"
                    value="$128,450.00"
                    trend={{ value: "+24.5%", direction: "up", label: "vs last month" }}
                  />

                  <StatCard
                    variant="default"
                    hoverable
                    title="Cluster Incident Rate"
                    value="0.04%"
                    trend={{ value: "-12.0%", direction: "down", label: "improvement" }}
                  />
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Usage Example</div>
                <div className="relative rounded-chella-lg bg-muted/60 border border-border p-4 font-mono text-xs text-foreground">
                  <pre className="overflow-x-auto">
{`import { StatCard } from "@chella/ui";
import { DollarSign } from "lucide-react";

// 1. Shorthand Metric Card
export function RevenueMetric() {
  return (
    <StatCard
      hoverable
      variant="elevated"
      title="Total ARR Revenue"
      value="$128,450.00"
      icon={<DollarSign />}
      trend={{ value: "+24.5%", direction: "up", label: "vs last quarter" }}
    />
  );
}

// 2. Compound Component Syntax
export function CustomStatCard() {
  return (
    <StatCard variant="outline">
      <StatCard.Header>
        <StatCard.Title>Active Microservices</StatCard.Title>
        <StatCard.Icon><DollarSign /></StatCard.Icon>
      </StatCard.Header>
      <StatCard.Value>148 Services</StatCard.Value>
      <StatCard.Trend direction="up" value="+12" label="deployed this sprint" />
    </StatCard>
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
                        <td className="p-3 font-mono text-primary">title</td>
                        <td className="p-3 font-mono text-muted-foreground">ReactNode</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Header label defining the KPI metric.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">value</td>
                        <td className="p-3 font-mono text-muted-foreground">ReactNode</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Primary formatted statistical metric number.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">trend</td>
                        <td className="p-3 font-mono text-muted-foreground">{`{ value, direction, label }`}</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Trend delta indicator with direction icon ("up", "down", "neutral").</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">variant</td>
                        <td className="p-3 font-mono text-muted-foreground">"default" | "elevated" | "outline" | "subtle"</td>
                        <td className="p-3 font-mono">"default"</td>
                        <td className="p-3">Elevation shadow and border frame styling.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">hoverable</td>
                        <td className="p-3 font-mono text-muted-foreground">boolean</td>
                        <td className="p-3 font-mono">false</td>
                        <td className="p-3">Enables smooth hover lift translation and border accenting.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeSection === "kbd" && (
            <div className="space-y-8">
              <div className="space-y-2">
                <Badge variant="primary">Component</Badge>
                <h1 className="text-3xl font-extrabold tracking-tight">Kbd / Keyboard Key</h1>
                <p className="text-muted-foreground text-sm">
                  Hardware keyboard key and hotkey shortcut badge with automatic modifier mapping (⌘, ⇧, ⌥, Ctrl, ↵), combination grouping, and styling variants.
                </p>
              </div>

              {/* Interactive Demo */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Interactive Preview</div>
                <div className="p-8 rounded-chella-lg border border-border bg-card max-w-xl mx-auto space-y-6">
                  <div className="space-y-3">
                    <div className="text-xs font-semibold text-muted-foreground">1. Hotkey Shortcuts (Automatic Key Mapping):</div>
                    <div className="space-y-2.5 p-4 bg-muted/20 border border-border/70 rounded-chella-lg">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Quick Search:</span>
                        <Kbd keys={["cmd", "k"]} />
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Command Palette:</span>
                        <Kbd keys={["cmd", "shift", "p"]} />
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Force Deploy:</span>
                        <Kbd keys={["ctrl", "shift", "enter"]} separator="+" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-border">
                    <div className="text-xs font-semibold text-muted-foreground">2. Sizing & Styling Variants:</div>
                    <div className="flex items-center justify-between gap-2 p-4 bg-muted/20 border border-border/70 rounded-chella-lg">
                      <Kbd size="xs">XS</Kbd>
                      <Kbd size="small">SM</Kbd>
                      <Kbd size="medium" variant="outline">Outline</Kbd>
                      <Kbd size="large" variant="subtle">Subtle</Kbd>
                    </div>
                  </div>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Usage Example</div>
                <div className="relative rounded-chella-lg bg-muted/60 border border-border p-4 font-mono text-xs text-foreground">
                  <pre className="overflow-x-auto">
{`import { Kbd } from "@chella/ui";

// 1. Shorthand Keys Mapping
export function SearchShortcut() {
  return (
    <div className="flex items-center gap-2">
      <span>Search</span>
      <Kbd keys={["cmd", "k"]} />
    </div>
  );
}

// 2. Multi-Key Combinations
export function HotkeyCombinations() {
  return (
    <Kbd.Group separator="+">
      <Kbd>Ctrl</Kbd>
      <Kbd>Shift</Kbd>
      <Kbd>P</Kbd>
    </Kbd.Group>
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
                        <td className="p-3 font-mono text-primary">keys</td>
                        <td className="p-3 font-mono text-muted-foreground">string[]</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Array of key names automatically converted to keyboard glyphs.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">separator</td>
                        <td className="p-3 font-mono text-muted-foreground">string</td>
                        <td className="p-3 font-mono">""</td>
                        <td className="p-3">Separator glyph (such as "+") rendered between keys.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">variant</td>
                        <td className="p-3 font-mono text-muted-foreground">"default" | "outline" | "subtle" | "ghost"</td>
                        <td className="p-3 font-mono">"default"</td>
                        <td className="p-3">Key border, shadow, and background elevation style.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">size</td>
                        <td className="p-3 font-mono text-muted-foreground">"xs" | "small" | "medium" | "large"</td>
                        <td className="p-3 font-mono">"medium"</td>
                        <td className="p-3">Key height and typography scale step.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeSection === "timeline" && (
            <div className="space-y-8">
              <div className="space-y-2">
                <Badge variant="primary">Component</Badge>
                <h1 className="text-3xl font-extrabold tracking-tight">Timeline</h1>
                <p className="text-muted-foreground text-sm">
                  Chronological sequence of milestone events, deployment audit logs, workflow stages, and execution traces with connector lines, status points, and custom icons.
                </p>
              </div>

              {/* Interactive Demo */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Interactive Preview</div>
                <div className="p-8 rounded-chella-lg border border-border bg-card max-w-xl mx-auto space-y-6">
                  <Timeline
                    items={[
                      {
                        title: "Build Succeeded",
                        time: "10:15 AM",
                        description: "Container artifact tagged sha256:7f4a.",
                        status: "success",
                      },
                      {
                        title: "Security Scan",
                        time: "10:18 AM",
                        description: "0 critical vulnerabilities detected.",
                        status: "success",
                      },
                      {
                        title: "Rolling Cluster Deployment",
                        time: "10:22 AM",
                        description: "Deploying pods across 4 worker nodes.",
                        status: "processing",
                      },
                      {
                        title: "Traffic Migration",
                        time: "10:25 AM",
                        description: "Awaiting green canary deployment healthcheck.",
                        status: "default",
                      },
                    ]}
                  />
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Usage Example</div>
                <div className="relative rounded-chella-lg bg-muted/60 border border-border p-4 font-mono text-xs text-foreground">
                  <pre className="overflow-x-auto">
{`import { Timeline } from "@chella/ui";

// 1. Declarative Mode
export function DeploymentLogs() {
  return (
    <Timeline
      items={[
        { title: "Artifact Built", time: "10:00 AM", status: "success" },
        { title: "Pushing to Registry", time: "10:05 AM", status: "processing" },
        { title: "Live Routing", time: "10:10 AM", status: "default" },
      ]}
    />
  );
}

// 2. Compound Component Syntax
export function CustomTimeline() {
  return (
    <Timeline>
      <Timeline.Item status="success">
        <Timeline.Time>12:00 PM</Timeline.Time>
        <Timeline.Title>System Backup Complete</Timeline.Title>
        <Timeline.Description>Encrypted snapshot pushed to cold storage.</Timeline.Description>
      </Timeline.Item>
    </Timeline>
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
                        <td className="p-3 font-mono text-primary">items</td>
                        <td className="p-3 font-mono text-muted-foreground">TimelineItemData[]</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Declarative array of timestamped milestone items.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">status</td>
                        <td className="p-3 font-mono text-muted-foreground">"default" | "primary" | "success" | "warning" | "danger" | "processing"</td>
                        <td className="p-3 font-mono">"default"</td>
                        <td className="p-3">Status coloration and pulsating animation on milestone points.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">mode</td>
                        <td className="p-3 font-mono text-muted-foreground">"left" | "right" | "alternate"</td>
                        <td className="p-3 font-mono">"left"</td>
                        <td className="p-3">Alignment placement of the milestone connector line.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeSection === "tag" && (
            <div className="space-y-8">
              <div className="space-y-2">
                <Badge variant="primary">Component</Badge>
                <h1 className="text-3xl font-extrabold tracking-tight">Tag / Chip</h1>
                <p className="text-muted-foreground text-sm">
                  Interactive, selectable, and dismissible chips for category classification, filtering facet toggles, keyword metadata, and dynamic input badges.
                </p>
              </div>

              {/* Interactive Demo */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Interactive Preview</div>
                <div className="p-8 rounded-chella-lg border border-border bg-card max-w-xl mx-auto space-y-6">
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-muted-foreground">1. Semantic Variants:</div>
                    <div className="flex flex-wrap items-center gap-2 p-4 bg-muted/20 border border-border/70 rounded-chella-lg">
                      <Tag variant="default">Default</Tag>
                      <Tag variant="primary">Primary</Tag>
                      <Tag variant="success">Healthy</Tag>
                      <Tag variant="warning">Degraded</Tag>
                      <Tag variant="danger">Critical</Tag>
                      <Tag variant="info">Info</Tag>
                      <Tag variant="outline">Outline</Tag>
                    </div>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-border">
                    <div className="text-xs font-semibold text-muted-foreground">2. Dismissible & Selectable Filter Chips:</div>
                    <div className="flex flex-wrap items-center gap-2 p-4 bg-muted/20 border border-border/70 rounded-chella-lg">
                      <Tag variant="primary" closable onClose={() => alert("Tag removed")}>
                        Kubernetes
                      </Tag>
                      <Tag selectable selected={true}>
                        Active Filter
                      </Tag>
                      <Tag selectable selected={false}>
                        Inactive Facet
                      </Tag>
                    </div>
                  </div>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Usage Example</div>
                <div className="relative rounded-chella-lg bg-muted/60 border border-border p-4 font-mono text-xs text-foreground">
                  <pre className="overflow-x-auto">
{`import { useState } from "react";
import { Tag } from "@chella/ui";

// 1. Closable Metadata Tag
export function TagList() {
  const [tags, setTags] = useState(["React", "Vite", "Tailwind"]);

  return (
    <div className="flex gap-2">
      {tags.map((tag) => (
        <Tag
          key={tag}
          variant="primary"
          closable
          onClose={() => setTags(tags.filter((t) => t !== tag))}
        >
          {tag}
        </Tag>
      ))}
    </div>
  );
}

// 2. Selectable Filter Facet
export function FilterChip() {
  const [selected, setSelected] = useState(false);

  return (
    <Tag
      selectable
      selected={selected}
      onClick={() => setSelected(!selected)}
    >
      Production Nodes
    </Tag>
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
                        <td className="p-3 font-mono text-primary">variant</td>
                        <td className="p-3 font-mono text-muted-foreground">"default" | "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "outline"</td>
                        <td className="p-3 font-mono">"default"</td>
                        <td className="p-3">Visual tint and border coloration styling.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">closable</td>
                        <td className="p-3 font-mono text-muted-foreground">boolean</td>
                        <td className="p-3 font-mono">false</td>
                        <td className="p-3">Renders an accessible "x" dismiss button on the tag.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">selectable</td>
                        <td className="p-3 font-mono text-muted-foreground">boolean</td>
                        <td className="p-3 font-mono">false</td>
                        <td className="p-3">Enables interactive checkbox role with focus ring.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">selected</td>
                        <td className="p-3 font-mono text-muted-foreground">boolean</td>
                        <td className="p-3 font-mono">false</td>
                        <td className="p-3">Active selected state for toggleable filter chips.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeSection === "banner" && (
            <div className="space-y-8">
              <div className="space-y-2">
                <Badge variant="primary">Component</Badge>
                <h1 className="text-3xl font-extrabold tracking-tight">Banner</h1>
                <p className="text-muted-foreground text-sm">
                  Full-width announcement bar for major releases, scheduled maintenance windows, system advisories, and promotional campaigns.
                </p>
              </div>

              {/* Interactive Demo */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Interactive Preview</div>
                <div className="p-6 rounded-chella-lg border border-border bg-card space-y-4">
                  <Banner
                    variant="gradient"
                    badge={<Badge variant="secondary" size="small">RELEASE</Badge>}
                    action={
                      <Button size="small" variant="secondary" className="h-6 text-[11px] px-2">
                        Read Changelog
                      </Button>
                    }
                    closable
                  >
                    Chella UI v1.0 is officially released with 33 production primitives!
                  </Banner>

                  <Banner
                    variant="warning"
                    action={
                      <Button size="small" variant="primary" className="h-6 text-[11px] px-2">
                        Status Page
                      </Button>
                    }
                    closable
                  >
                    Scheduled database migration tonight at 02:00 UTC.
                  </Banner>

                  <Banner
                    variant="danger"
                    action={
                      <Button size="small" variant="secondary" className="h-6 text-[11px] px-2">
                        Rotate Token
                      </Button>
                    }
                    closable
                  >
                    Critical: 1 production API key expired.
                  </Banner>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Usage Example</div>
                <div className="relative rounded-chella-lg bg-muted/60 border border-border p-4 font-mono text-xs text-foreground">
                  <pre className="overflow-x-auto">
{`import { Banner, Button, Badge } from "@chella/ui";

export function SystemAnnouncement() {
  return (
    <Banner
      variant="gradient"
      badge={<Badge variant="secondary" size="small">v1.2.0</Badge>}
      action={<Button size="small" variant="secondary">Explore</Button>}
      closable
    >
      Chella UI v1.2.0 is now live!
    </Banner>
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
                        <td className="p-3 font-mono text-primary">variant</td>
                        <td className="p-3 font-mono text-muted-foreground">"default" | "primary" | "info" | "success" | "warning" | "danger" | "gradient"</td>
                        <td className="p-3 font-mono">"gradient"</td>
                        <td className="p-3">Color theme and linear gradient styling for the banner.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">position</td>
                        <td className="p-3 font-mono text-muted-foreground">"static" | "top" | "bottom"</td>
                        <td className="p-3 font-mono">"static"</td>
                        <td className="p-3">Fixed screen anchorage or relative in-flow positioning.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">action</td>
                        <td className="p-3 font-mono text-muted-foreground">ReactNode</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Call-to-action button or link displayed on the right edge.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">closable</td>
                        <td className="p-3 font-mono text-muted-foreground">boolean</td>
                        <td className="p-3 font-mono">false</td>
                        <td className="p-3">Renders an accessible "x" dismiss button on the banner.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeSection === "rating" && (
            <div className="space-y-8">
              <div className="space-y-2">
                <Badge variant="primary">Component</Badge>
                <h1 className="text-3xl font-extrabold tracking-tight">Rating</h1>
                <p className="text-muted-foreground text-sm">
                  Interactive score selector and read-only rating indicator with keyboard navigation, hover preview tracking, custom icons, and sizing scales.
                </p>
              </div>

              {/* Interactive Demo */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Interactive Preview</div>
                <div className="p-8 rounded-chella-lg border border-border bg-card max-w-xl mx-auto space-y-6">
                  <div className="space-y-3">
                    <div className="text-xs font-semibold text-muted-foreground">1. Interactive Star Rating (Click or Use Arrow Keys):</div>
                    <div className="p-4 bg-muted/20 border border-border/70 rounded-chella-lg flex items-center justify-between">
                      <Rating defaultValue={4} showValueText size="medium" />
                      <Rating defaultValue={5} showValueText size="medium" color="emerald" />
                    </div>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-border">
                    <div className="text-xs font-semibold text-muted-foreground">2. Read-Only Indicator & Sizing:</div>
                    <div className="p-4 bg-muted/20 border border-border/70 rounded-chella-lg space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Small:</span>
                        <Rating value={5} readOnly size="small" />
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Medium:</span>
                        <Rating value={4} readOnly size="medium" />
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Large:</span>
                        <Rating value={3} readOnly size="large" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Usage Example</div>
                <div className="relative rounded-chella-lg bg-muted/60 border border-border p-4 font-mono text-xs text-foreground">
                  <pre className="overflow-x-auto">
{`import { useState } from "react";
import { Rating } from "@chella/ui";

// 1. Controlled Interactive Rating
export function ReviewForm() {
  const [score, setScore] = useState(4);

  return (
    <Rating
      value={score}
      onChange={setScore}
      showValueText
    />
  );
}

// 2. Read-Only Score Indicator
export function ProductScore() {
  return (
    <Rating
      value={4.5}
      readOnly
      showValueText
      color="emerald"
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
                        <td className="p-3 font-mono text-primary">value</td>
                        <td className="p-3 font-mono text-muted-foreground">number</td>
                        <td className="p-3 font-mono">-</td>
                        <td className="p-3">Controlled current rating score.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">defaultValue</td>
                        <td className="p-3 font-mono text-muted-foreground">number</td>
                        <td className="p-3 font-mono">0</td>
                        <td className="p-3">Initial score value for uncontrolled rating.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">max</td>
                        <td className="p-3 font-mono text-muted-foreground">number</td>
                        <td className="p-3 font-mono">5</td>
                        <td className="p-3">Maximum number of stars/icons in the rating scale.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">readOnly</td>
                        <td className="p-3 font-mono text-muted-foreground">boolean</td>
                        <td className="p-3 font-mono">false</td>
                        <td className="p-3">Prevents user interaction and renders semantic role="img".</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">showValueText</td>
                        <td className="p-3 font-mono text-muted-foreground">boolean</td>
                        <td className="p-3 font-mono">false</td>
                        <td className="p-3">Displays numeric ratio label (e.g. "(4/5)") alongside stars.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeSection === "command" && (
            <div className="space-y-8">
              <div className="space-y-2">
                <Badge variant="primary">Component</Badge>
                <h1 className="text-3xl font-extrabold tracking-tight">Command Palette</h1>
                <p className="text-muted-foreground text-sm">
                  Fast, accessible command menu and quick switcher with real-time fuzzy filtering, keyboard navigation (Arrow keys, Enter, Esc), group categorization, and shortcut badges.
                </p>
              </div>

              {/* Interactive Demo */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Interactive Preview</div>
                <div className="p-8 rounded-chella-lg border border-border bg-card max-w-xl mx-auto space-y-6">
                  <Command>
                    <Command.Input placeholder="Search command actions..." />
                    <Command.List>
                      <Command.Empty>No commands match your query.</Command.Empty>
                      <Command.Group heading="Navigation">
                        <Command.Item shortcut="⌘D" onSelect={() => alert("Navigating to Dashboard")}>
                          Dashboard View
                        </Command.Item>
                        <Command.Item shortcut="⌘S" onSelect={() => alert("Opening Settings")}>
                          Settings & Preferences
                        </Command.Item>
                      </Command.Group>
                      <Command.Separator />
                      <Command.Group heading="Microservice Actions">
                        <Command.Item shortcut="⌘N" onSelect={() => alert("Create Microservice triggered")}>
                          Create Microservice
                        </Command.Item>
                        <Command.Item shortcut="⌘R" onSelect={() => alert("Reload Cluster triggered")}>
                          Reload Cluster Registry
                        </Command.Item>
                      </Command.Group>
                    </Command.List>
                  </Command>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="space-y-3">
                <div className="text-sm font-bold">Usage Example</div>
                <div className="relative rounded-chella-lg bg-muted/60 border border-border p-4 font-mono text-xs text-foreground">
                  <pre className="overflow-x-auto">
{`import { Command } from "@chella/ui";

export function QuickCommandMenu() {
  return (
    <Command>
      <Command.Input placeholder="Type a command..." />
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>
        <Command.Group heading="Navigation">
          <Command.Item shortcut="⌘D" onSelect={() => navigate("/dashboard")}>
            Dashboard
          </Command.Item>
          <Command.Item shortcut="⌘S" onSelect={() => navigate("/settings")}>
            Settings
          </Command.Item>
        </Command.Group>
        <Command.Separator />
        <Command.Group heading="Actions">
          <Command.Item shortcut="⌘N" onSelect={() => createService()}>
            Create Service
          </Command.Item>
        </Command.Group>
      </Command.List>
    </Command>
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
                        <th className="p-3 font-semibold">Subcomponent</th>
                        <th className="p-3 font-semibold">Key Props</th>
                        <th className="p-3 font-semibold">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="p-3 font-mono text-primary">Command</td>
                        <td className="p-3 font-mono text-muted-foreground">size, children</td>
                        <td className="p-3">Root state provider managing real-time filtering and key navigation.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">Command.Input</td>
                        <td className="p-3 font-mono text-muted-foreground">placeholder, value, onValueChange</td>
                        <td className="p-3">Search input field with clear button and magnifying glass icon.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">Command.Group</td>
                        <td className="p-3 font-mono text-muted-foreground">heading, children</td>
                        <td className="p-3">Categorized section container automatically hidden when all items filter out.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">Command.Item</td>
                        <td className="p-3 font-mono text-muted-foreground">onSelect, shortcut, icon, disabled</td>
                        <td className="p-3">Selectable menu option with keyboard focus and Kbd shortcut display.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-primary">Command.Dialog</td>
                        <td className="p-3 font-mono text-muted-foreground">open, onOpenChange</td>
                        <td className="p-3">Floating modal dialog overlay with ⌘K hotkey listener.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
