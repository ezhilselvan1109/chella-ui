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
  type TableColumn,
} from "../index";
import {
  Sun,
  Moon,
  Laptop,
  Palette,
  Layers,
  Sparkles,
  Download,
  Trash2,
  CheckCircle2,
  Mail,
  Search,
  Lock,
  Plus,
  DollarSign,
  Users,
  Shield,
  Briefcase,
  Sliders,
  Check,
  LayoutGrid,
} from "lucide-react";

interface CustomerRecord {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive" | "pending";
  revenue: number;
}

const initialCustomers: CustomerRecord[] = [
  { id: "1", name: "Kumar Selvan", email: "kumar@chella.dev", role: "Frontend Lead", status: "active", revenue: 8450 },
  { id: "2", name: "Ravi Chandran", email: "ravi@chella.dev", role: "Backend Architect", status: "active", revenue: 6200 },
  { id: "3", name: "Anand Raj", email: "anand@chella.dev", role: "Product Designer", status: "pending", revenue: 3900 },
  { id: "4", name: "Deepa Narayanan", email: "deepa@chella.dev", role: "QA Engineer", status: "inactive", revenue: 1500 },
];

const PRESET_PALETTES = [
  { name: "Chella Blue", primary: "221.2 83.2% 53.3%", radius: "0.5rem" },
  { name: "Emerald Forest", primary: "158 64% 42%", radius: "0.75rem" },
  { name: "Royal Violet", primary: "262 83% 58%", radius: "0.5rem" },
  { name: "Sunset Amber", primary: "24 94% 50%", radius: "0.375rem" },
  { name: "Cyberpunk Rose", primary: "330 85% 55%", radius: "0.625rem" },
];

export default function App() {
  const { theme, resolvedTheme, setTheme, setCustomTokens } = useTheme();

  // Component Demo States
  const [buttonLoading, setButtonLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [dangerModalOpen, setDangerModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState<string | string[]>("1");
  const [selectedTags, setSelectedTags] = useState<string | string[]>(["1", "2"]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<(string | number)[]>(["1"]);
  const [activeTab, setActiveTab] = useState<"overview" | "components" | "tokens">("overview");
  const toast = useToast();

  // Token customizer
  const [activePreset, setActivePreset] = useState("Chella Blue");
  const [customPrimary, setCustomPrimary] = useState("221.2 83.2% 53.3%");
  const [customRadius, setCustomRadius] = useState("0.5rem");

  const applyPalette = (preset: typeof PRESET_PALETTES[0]) => {
    setActivePreset(preset.name);
    setCustomPrimary(preset.primary);
    setCustomRadius(preset.radius);
    setCustomTokens({
      light: { primary: preset.primary, radius: preset.radius },
      dark: { primary: preset.primary, radius: preset.radius },
    });
  };

  const handleCustomRadiusChange = (radius: string) => {
    setCustomRadius(radius);
    setCustomTokens({
      light: { primary: customPrimary, radius },
      dark: { primary: customPrimary, radius },
    });
  };

  const tableColumns: TableColumn<CustomerRecord>[] = [
    {
      key: "name",
      title: "Team Member",
      dataIndex: "name",
      sorter: true,
      render: (_, record) => (
        <div className="flex items-center gap-3 py-1">
          <div className="w-9 h-9 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-xs shrink-0 ring-1 ring-primary/20">
            {record.name.charAt(0)}
          </div>
          <div>
            <div className="font-semibold text-foreground text-sm leading-tight">{record.name}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{record.email}</div>
          </div>
        </div>
      ),
    },
    {
      key: "role",
      title: "Job Role",
      dataIndex: "role",
      render: (val) => <span className="text-sm font-medium text-foreground/90">{String(val)}</span>,
    },
    {
      key: "status",
      title: "Status",
      dataIndex: "status",
      align: "center",
      render: (val) => {
        const status = val as string;
        const variant = status === "active" ? "success" : status === "pending" ? "warning" : "secondary";
        return <Badge dot variant={variant}>{status.toUpperCase()}</Badge>;
      },
    },
    {
      key: "revenue",
      title: "ARR Contribution",
      dataIndex: "revenue",
      align: "right",
      sorter: (a, b) => a.revenue - b.revenue,
      render: (val) => <span className="font-semibold text-sm">${Number(val).toLocaleString()}</span>,
    },
    {
      key: "actions",
      title: "Actions",
      align: "right",
      render: (_, record) => (
        <div className="flex items-center justify-end gap-2">
          <Button variant="ghost" size="small" onClick={() => alert(`Editing ${record.name}`)}>
            Edit
          </Button>
          <Button
            variant="ghost"
            size="small"
            onClick={() => setDangerModalOpen(true)}
            className="text-danger hover:bg-danger/10 hover:text-danger h-8 w-8 p-0"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans transition-colors duration-200 antialiased">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur-md px-6 sm:px-8 py-3.5 flex items-center justify-between shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-chella-md bg-primary text-primary-foreground flex items-center justify-center shadow-md font-black text-lg">
            C
          </div>
          <div>
            <div className="flex items-center gap-2.5">
              <span className="text-lg font-extrabold tracking-tight">Chella UI</span>
              <Badge size="small" variant="primary">v0.1.0</Badge>
            </div>
            <p className="text-xs text-muted-foreground hidden sm:block">
              Production React Component Library + Tailwind CSS
            </p>
          </div>
        </div>

        {/* Navigation & Theme Controls */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden md:flex items-center bg-muted/60 p-1 rounded-chella-md border border-border/70">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-3.5 py-1 text-xs font-semibold rounded-chella-sm transition-all ${
                activeTab === "overview"
                  ? "bg-card text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Workbench
            </button>
            <button
              onClick={() => setActiveTab("components")}
              className={`px-3.5 py-1 text-xs font-semibold rounded-chella-sm transition-all ${
                activeTab === "components"
                  ? "bg-card text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Components
            </button>
            <button
              onClick={() => setActiveTab("tokens")}
              className={`px-3.5 py-1 text-xs font-semibold rounded-chella-sm transition-all ${
                activeTab === "tokens"
                  ? "bg-card text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Theme Tokens
            </button>
          </div>

          <div className="flex items-center bg-muted/60 p-1 rounded-chella-md border border-border/70">
            <button
              type="button"
              onClick={() => setTheme("light")}
              title="Light Mode"
              className={`p-1.5 rounded-chella-sm transition-all ${
                theme === "light" ? "bg-card text-primary shadow-xs" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Sun className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setTheme("dark")}
              title="Dark Mode"
              className={`p-1.5 rounded-chella-sm transition-all ${
                theme === "dark" ? "bg-card text-primary shadow-xs" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Moon className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setTheme("system")}
              title="System Theme"
              className={`p-1.5 rounded-chella-sm transition-all ${
                theme === "system" ? "bg-card text-primary shadow-xs" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Laptop className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Global Release Announcement Banner */}
      <Banner
        variant="gradient"
        icon={<Sparkles className="w-4 h-4" />}
        badge={<Badge variant="secondary" size="small">v0.1.0</Badge>}
        action={
          <Button size="small" variant="secondary" className="h-6 text-[11px] px-2">
            33 Primitives Live
          </Button>
        }
        closable
      >
        Chella UI Component Library is loaded with 33 production-ready components and full keyboard accessibility.
      </Banner>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Banner Hero */}
        <section className="relative overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-br from-primary/10 via-card to-background p-6 sm:p-10 shadow-xs">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-semibold border border-primary/20">
              <Sparkles className="w-3.5 h-3.5" /> Accessible • Themeable • Strictly Typed
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Design System Interactive Workbench
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Test and configure Chella UI components in real time. Switch themes, adjust brand color palettes, tweak border radius, and verify accessibility focus flows.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                variant="primary"
                leftIcon={<Plus className="w-4 h-4" />}
                onClick={() => setModalOpen(true)}
              >
                Open Customer Dialog
              </Button>
              <Button
                variant="outline"
                leftIcon={<Search className="w-4 h-4" />}
                rightIcon={<Kbd size="xs" variant="subtle">⌘K</Kbd>}
                onClick={() => setCommandOpen(true)}
              >
                Quick Palette
              </Button>
              <Button
                variant="secondary"
                leftIcon={<Download className="w-4 h-4" />}
                onClick={() => {
                  setButtonLoading(true);
                  setTimeout(() => setButtonLoading(false), 1200);
                }}
                loading={buttonLoading}
              >
                Export Report
              </Button>
            </div>
          </div>
        </section>

        {/* Command Palette Dialog */}
        <Command.Dialog open={commandOpen} onOpenChange={setCommandOpen}>
          <Command.Input placeholder="Type a command or search action..." />
          <Command.List>
            <Command.Empty>No commands found matching query.</Command.Empty>
            <Command.Group heading="Navigation">
              <Command.Item
                icon={<Search className="w-4 h-4" />}
                shortcut="⌘D"
                onSelect={() => {
                  toast.info("Navigated", "Switched to Telemetry Dashboard");
                  setCommandOpen(false);
                }}
              >
                Telemetry Dashboard
              </Command.Item>
              <Command.Item
                icon={<Sliders className="w-4 h-4" />}
                shortcut="⌘S"
                onSelect={() => {
                  toast.info("Preferences", "Opened System Configuration");
                  setCommandOpen(false);
                }}
              >
                Cluster Preferences
              </Command.Item>
            </Command.Group>
            <Command.Separator />
            <Command.Group heading="Microservice Operations">
              <Command.Item
                icon={<Plus className="w-4 h-4" />}
                shortcut="⌘N"
                onSelect={() => {
                  setModalOpen(true);
                  setCommandOpen(false);
                }}
              >
                Deploy New Microservice
              </Command.Item>
              <Command.Item
                icon={<Trash2 className="w-4 h-4" />}
                shortcut="⌘⌫"
                onSelect={() => {
                  setDangerModalOpen(true);
                  setCommandOpen(false);
                }}
              >
                Purge Inactive Clusters
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command.Dialog>

        {/* Live Token Customizer Section */}
        <section className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <Palette className="w-4 h-4 text-primary" />
              <h2 className="text-base font-bold tracking-tight text-foreground uppercase text-xs tracking-wider">
                Design Token Theme Engine
              </h2>
            </div>
            <span className="text-xs text-muted-foreground font-mono">
              Active: <span className="font-semibold text-primary">{resolvedTheme.toUpperCase()}</span>
            </span>
          </div>

          <Card variant="elevated" className="border-border/80">
            <Card.Content className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
                {/* Palette Presets */}
                <div className="space-y-2.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Color Presets
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {PRESET_PALETTES.map((preset) => (
                      <button
                        key={preset.name}
                        onClick={() => applyPalette(preset)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-chella-md text-xs font-medium border transition-all ${
                          activePreset === preset.name
                            ? "border-primary bg-primary/10 text-primary font-bold shadow-xs"
                            : "border-border/80 bg-background hover:bg-muted text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {activePreset === preset.name && <Check className="w-3 h-3 text-primary" />}
                        {preset.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Border Radius */}
                <div className="space-y-2.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Border Radius: <span className="font-mono text-foreground font-semibold">{customRadius}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {["0.25rem", "0.5rem", "0.75rem", "1rem"].map((r) => (
                      <button
                        key={r}
                        onClick={() => handleCustomRadiusChange(r)}
                        className={`px-3 py-1.5 text-xs font-medium rounded-chella-md border transition-all ${
                          customRadius === r
                            ? "border-primary bg-primary text-primary-foreground font-bold shadow-xs"
                            : "border-border/80 bg-background hover:bg-muted text-muted-foreground"
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Active Swatches */}
                <div className="space-y-2.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Active Swatches
                  </div>
                  <div className="flex items-center gap-2 pt-0.5">
                    <div className="w-7 h-7 rounded-chella-md bg-primary shadow-xs border border-white/20" title="Primary" />
                    <div className="w-7 h-7 rounded-chella-md bg-secondary shadow-xs border border-border" title="Secondary" />
                    <div className="w-7 h-7 rounded-chella-md bg-success shadow-xs border border-white/20" title="Success" />
                    <div className="w-7 h-7 rounded-chella-md bg-warning shadow-xs border border-white/20" title="Warning" />
                    <div className="w-7 h-7 rounded-chella-md bg-danger shadow-xs border border-white/20" title="Danger" />
                    <div className="w-7 h-7 rounded-chella-md bg-card shadow-xs border border-border" title="Card" />
                  </div>
                </div>

                {/* Package Compatibility */}
                <div className="space-y-2.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Zero Configuration
                  </div>
                  <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-500/10 p-2.5 rounded-chella-md border border-emerald-500/20">
                    <CheckCircle2 className="w-4 h-4 shrink-0" /> No consumer Tailwind scan required
                  </div>
                </div>
              </div>
            </Card.Content>
          </Card>
        </section>

        {/* Analytics Metric Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            variant="elevated"
            hoverable
            title="Total Revenue (ARR)"
            value="$128,450.00"
            icon={<DollarSign />}
            trend={{ value: "+24.5%", direction: "up", label: "compared to Q2" }}
          />

          <StatCard
            variant="elevated"
            hoverable
            title="Active Team Members"
            value="1,248"
            icon={<Users />}
            trend={{ value: "+32", direction: "up", label: "joined this week" }}
          />

          <StatCard
            variant="elevated"
            hoverable
            title="System Health"
            value="99.98%"
            icon={<Shield />}
            description="All 48 microservices operational"
          />
        </section>

        {/* Interactive Components 2-Column Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column: Button & Input Suite */}
          <Card variant="outlined" className="border-border/80 shadow-xs">
            <Card.Header className="border-b border-border/70 pb-4">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <Card.Title className="text-base font-bold">Button & Input Suite</Card.Title>
                  <Card.Description className="text-xs">Interactive button variants, sizes, and form field states.</Card.Description>
                </div>
              </div>
            </Card.Header>

            <Card.Content className="p-6 space-y-6">
              {/* Button Variants */}
              <div className="space-y-2.5">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Button Variants
                </div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="danger">Danger</Button>
                  <Button variant="link">Link Style</Button>
                </div>
              </div>

              {/* Button Sizes & States */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Sizes & Interactive States
                </div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <Button size="small">Small</Button>
                  <Button size="medium">Medium</Button>
                  <Button size="large">Large</Button>
                  <Button loading>Loading</Button>
                  <Button disabled>Disabled</Button>
                </div>
              </div>

              {/* Tooltip Contextual Helpers */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Tooltip Contextual Helpers
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Tooltip content="Promotes build artifact to production registry" placement="top">
                    <Button size="small" variant="primary">Top Tooltip</Button>
                  </Tooltip>
                  <Tooltip content="Download telemetry CSV dump" placement="bottom" variant="dark">
                    <Button size="small" variant="secondary">Bottom (Dark)</Button>
                  </Tooltip>
                  <Tooltip content="Inspect active health probes" placement="right" variant="light">
                    <Button size="small" variant="outline">Right (Light)</Button>
                  </Tooltip>
                </div>
              </div>

              {/* Popover Floating Controls */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Popover Interactive Cards
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Popover
                    showCloseButton
                    content={
                      <div className="space-y-3 w-64">
                        <div className="font-semibold text-sm">Cluster Filter Preferences</div>
                        <p className="text-xs text-muted-foreground">Filter telemetry by node architecture.</p>
                        <div className="space-y-2">
                          <Switch label="Show ARM64 Nodes" defaultChecked size="small" />
                          <Switch label="Show Degraded Pods" size="small" />
                        </div>
                        <div className="pt-2 flex justify-end">
                          <Button size="small" variant="primary">Apply</Button>
                        </div>
                      </div>
                    }
                  >
                    <Button size="small" variant="secondary">Filter Nodes</Button>
                  </Popover>

                  <Popover
                    placement="bottom-end"
                    showCloseButton
                    content={
                      <div className="space-y-3 w-64">
                        <div className="font-semibold text-sm">Deploy Patch</div>
                        <Input label="Container Tag" defaultValue="v1.4.2-patch.1" size="small" />
                        <div className="flex justify-end gap-2 pt-1">
                          <Button size="small" variant="danger">Deploy</Button>
                        </div>
                      </div>
                    }
                  >
                    <Button size="small" variant="outline">Quick Deploy</Button>
                  </Popover>

                  <Dropdown
                    trigger={
                      <Button size="small" variant="secondary">
                        Action Menu
                      </Button>
                    }
                    items={[
                      { key: "edit", label: "Edit Service Config" },
                      { key: "clone", label: "Clone Deployment" },
                      { key: "sep", divider: true },
                      { key: "delete", label: "Terminate Node", variant: "danger" },
                    ]}
                  />
                </div>
              </div>

              {/* Drawer Sheet Overlays */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Drawer Slide-Over Panels
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Button
                    size="small"
                    variant="outline"
                    onClick={() => setDrawerOpen(true)}
                  >
                    Open Settings Drawer
                  </Button>
                </div>
              </div>

              {/* Toast Notification Triggers */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Toast Notification Triggers
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Button
                    size="small"
                    variant="primary"
                    onClick={() =>
                      toast.success("Cluster Synced", "All nodes operational.")
                    }
                  >
                    Success Toast
                  </Button>
                  <Button
                    size="small"
                    variant="danger"
                    onClick={() =>
                      toast.error("Auth Token Expired", "Please re-authenticate.")
                    }
                  >
                    Error Toast
                  </Button>
                  <Button
                    size="small"
                    variant="secondary"
                    onClick={() =>
                      toast.warning("High Latency Detected", "p99 latency is 420ms.")
                    }
                  >
                    Warning Toast
                  </Button>
                </div>
              </div>

              {/* Divider Visual Boundaries */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Divider Separators
                </div>
                <div className="p-3.5 bg-muted/20 border border-border/70 rounded-chella-lg space-y-3">
                  <div className="text-xs text-muted-foreground">Standard & Labelled Dividers:</div>
                  <Divider />
                  <Divider>SECTION BREAK</Divider>
                  <Divider variant="dashed" align="start">DASHED START</Divider>
                </div>
              </div>

              {/* Breadcrumb Hierarchy Trail */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Breadcrumb Navigation
                </div>
                <div className="p-3 bg-muted/20 border border-border/70 rounded-chella-lg">
                  <Breadcrumb
                    items={[
                      { label: "Console", href: "#" },
                      { label: "Infrastructure", href: "#" },
                      { label: "Clusters", href: "#" },
                      { label: "us-east-1" },
                    ]}
                  />
                </div>
              </div>

              {/* Tabs Navigation Component */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Tabs Navigation Component
                </div>
                <div className="p-3 bg-muted/20 border border-border/70 rounded-chella-lg">
                  <Tabs defaultValue="nodes" variant="pill" size="small">
                    <Tabs.List>
                      <Tabs.Trigger value="nodes">Cluster Nodes</Tabs.Trigger>
                      <Tabs.Trigger value="mesh">Service Mesh</Tabs.Trigger>
                      <Tabs.Trigger value="metrics">Metrics</Tabs.Trigger>
                    </Tabs.List>
                    <Tabs.Content value="nodes" className="text-xs text-muted-foreground pt-1">
                      12 active worker nodes (ARM64)
                    </Tabs.Content>
                    <Tabs.Content value="mesh" className="text-xs text-muted-foreground pt-1">
                      Envoy proxy mesh v1.28.1 (mTLS enabled)
                    </Tabs.Content>
                    <Tabs.Content value="metrics" className="text-xs text-muted-foreground pt-1">
                      Throughput: 42.9k req/s | 99.99% uptime
                    </Tabs.Content>
                  </Tabs>
                </div>
              </div>

              {/* Accordion Disclosure Component */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Accordion Disclosure Component
                </div>
                <Accordion type="single" collapsible defaultValue="faq-1" variant="bordered" size="small">
                  <Accordion.Item value="faq-1">
                    <Accordion.Trigger>What is Chella UI?</Accordion.Trigger>
                    <Accordion.Content>
                      A production React design system inspired by Ant Design, Material UI, and Radix UI.
                    </Accordion.Content>
                  </Accordion.Item>
                  <Accordion.Item value="faq-2">
                    <Accordion.Trigger>How are tokens customized?</Accordion.Trigger>
                    <Accordion.Content>
                      Via Tailwind CSS HSL variables and the ThemeProvider context.
                    </Accordion.Content>
                  </Accordion.Item>
                </Accordion>
              </div>

              {/* Avatar & AvatarGroup Profiles */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Avatar & AvatarGroup System
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4 p-3 bg-muted/20 border border-border/70 rounded-chella-lg">
                  <div className="flex items-center gap-2.5">
                    <Avatar name="Kumar Selvan" size="medium" status="online" />
                    <Avatar name="Priya Sundar" size="medium" status="busy" />
                    <Avatar name="Ravi C" size="medium" shape="rounded" status="away" />
                  </div>
                  <AvatarGroup max={3} size="small">
                    <Avatar name="Alice J" />
                    <Avatar name="Bob S" />
                    <Avatar name="Charlie B" />
                    <Avatar name="David M" />
                    <Avatar name="Emma W" />
                  </AvatarGroup>
                </div>
              </div>

              {/* Skeleton Loading Surface */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Skeleton Loading Placeholders
                </div>
                <div className="p-3 bg-muted/20 border border-border/70 rounded-chella-lg space-y-2.5">
                  <div className="flex items-center gap-3">
                    <Skeleton variant="circular" width={36} height={36} />
                    <div className="space-y-1.5 flex-1">
                      <Skeleton variant="text" width="60%" />
                      <Skeleton variant="text" width="35%" height={10} />
                    </div>
                  </div>
                  <Skeleton variant="rounded" height={36} animation="wave" />
                </div>
              </div>

              {/* Progress & Circular Gauges */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Progress & Gauge Indicators
                </div>
                <div className="p-3.5 bg-muted/20 border border-border/70 rounded-chella-lg space-y-3">
                  <Progress value={76} showLabel label="Cluster Ingress Traffic" />
                  <Progress value={94} variant="danger" showLabel label="Storage Utilization" />
                  <div className="flex items-center justify-around pt-1.5 border-t border-border/60">
                    <CircularProgress value={78} showLabel size="small" />
                    <CircularProgress value={92} variant="success" showLabel size="medium" />
                    <CircularProgress indeterminate variant="info" size="small" />
                  </div>
                </div>
              </div>

              {/* Spinner Activity Indicators */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Spinner Activity Indicators
                </div>
                <div className="flex items-center justify-between p-3.5 bg-muted/20 border border-border/70 rounded-chella-lg">
                  <div className="flex items-center gap-3">
                    <Spinner size="small" variant="primary" />
                    <Spinner size="medium" variant="success" />
                    <Spinner size="large" variant="warning" />
                  </div>
                  <Spinner showLabel label="Syncing..." size="small" variant="info" />
                </div>
              </div>

              {/* Alert Feedback Banners */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Alert Feedback Banners
                </div>
                <div className="space-y-2.5">
                  <Alert
                    variant="info"
                    title="Control Plane Health"
                    description="12 nodes reporting healthy heartbeat signals."
                  />
                  <Alert
                    variant="warning"
                    closable
                    title="High Latency Warning"
                    description="p99 gateway latency reached 380ms."
                  />
                </div>
              </div>

              {/* FormField Wrappers */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  FormField & Validation Layout
                </div>
                <div className="p-3.5 bg-muted/20 border border-border/70 rounded-chella-lg">
                  <Form layout="vertical" className="space-y-3">
                    <FormField
                      label="Service Moniker"
                      required
                      helpText="DNS-compliant service prefix for mesh routing."
                    >
                      <Input placeholder="auth-service-prod" />
                    </FormField>
                    <FormField
                      label="Admin Contact"
                      required
                      error="Invalid domain: Must end in @corp.internal"
                    >
                      <Input defaultValue="admin@external.net" />
                    </FormField>
                  </Form>
                </div>
              </div>

              {/* EmptyState Surface */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  EmptyState Placeholders
                </div>
                <div className="p-3.5 bg-muted/20 border border-border/70 rounded-chella-lg">
                  <EmptyState
                    variant="dashed"
                    size="small"
                    icon={<Search className="w-5 h-5" />}
                    title="No Matching Microservices"
                    description="Try adjusting your filter keywords or active search query."
                    action={<Button variant="secondary" size="small">Clear Filter</Button>}
                  />
                </div>
              </div>

              {/* Timeline Audit Logs */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Timeline Audit Stream
                </div>
                <div className="p-3.5 bg-muted/20 border border-border/70 rounded-chella-lg">
                  <Timeline
                    items={[
                      {
                        title: "Cluster Auto-scaler Triggered",
                        time: "Just now",
                        description: "Scaled worker pool from 8 to 12 nodes.",
                        status: "processing",
                      },
                      {
                        title: "Security Patch v2.4.1",
                        time: "12m ago",
                        description: "All gateway pods updated cleanly.",
                        status: "success",
                      },
                    ]}
                  />
                </div>
              </div>

              {/* Form Inputs */}
              <div className="space-y-4 pt-4 border-t border-border/70">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Text Input Components
                </div>

                <div className="space-y-3.5">
                  <Input
                    label="Search Records"
                    placeholder="Search by name or invoice ID..."
                    prefix={<Search className="w-4 h-4" />}
                    suffix={<Kbd size="xs">⌘K</Kbd>}
                    clearable
                    defaultValue="INV-2026-904"
                  />

                  <Input
                    label="Corporate Email"
                    defaultValue="kumar@invalid"
                    error="Please provide a valid company email address"
                    prefix={<Mail className="w-4 h-4" />}
                  />

                  <Input
                    label="Secret Access Token"
                    type="password"
                    defaultValue="sk_live_99214710294"
                    prefix={<Lock className="w-4 h-4" />}
                    helperText="Stored securely with end-to-end encryption."
                  />
                </div>
              </div>
            </Card.Content>
          </Card>

          {/* Right Column: Select, Badges & Dialogs */}
          <Card variant="outlined" className="border-border/80 shadow-xs">
            <Card.Header className="border-b border-border/70 pb-4">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
                  <Sliders className="w-4 h-4" />
                </div>
                <div>
                  <Card.Title className="text-base font-bold">Select & Badge Systems</Card.Title>
                  <Card.Description className="text-xs">Combobox dropdowns, project tags, and status badges.</Card.Description>
                </div>
              </div>
            </Card.Header>

            <Card.Content className="p-6 space-y-6">
              {/* Single Select */}
              <div className="space-y-2">
                <Select
                  label="Primary Account Owner"
                  placeholder="Assign a team member..."
                  searchable
                  clearable
                  value={selectedUser}
                  onChange={setSelectedUser}
                  options={[
                    { label: "Kumar Selvan (Lead)", value: "1", icon: <Shield className="w-4 h-4 text-primary" /> },
                    { label: "Ravi Chandran (Arch)", value: "2", icon: <Briefcase className="w-4 h-4 text-emerald-500" /> },
                    { label: "Anand Raj (Design)", value: "3", icon: <Users className="w-4 h-4 text-amber-500" /> },
                  ]}
                  helperText="Selected team member receives all escalation notifications."
                />
              </div>

              {/* Multi Select */}
              <div className="space-y-2">
                <Select
                  label="Multi-Select Project Tags"
                  placeholder="Select project tags..."
                  multiple
                  clearable
                  value={selectedTags}
                  onChange={setSelectedTags}
                  options={[
                    { label: "Frontend", value: "1" },
                    { label: "Backend", value: "2" },
                    { label: "Microservice", value: "3" },
                    { label: "Security", value: "4" },
                    { label: "DevOps", value: "5" },
                  ]}
                />
              </div>

              {/* Badges & Tags */}
              <div className="space-y-3 pt-4 border-t border-border/70">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Status Indicators & Badges
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="primary">Primary</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge dot variant="success">Operational</Badge>
                  <Badge dot variant="warning">Degraded</Badge>
                  <Badge dot variant="danger">Offline</Badge>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <Badge removable onRemove={() => alert("Removed React Tag")} variant="outline">
                    React 18
                  </Badge>
                  <Badge removable onRemove={() => alert("Removed TypeScript Tag")} variant="secondary">
                    TypeScript
                  </Badge>
                  <Badge removable onRemove={() => alert("Removed Tailwind Tag")} variant="primary">
                    Tailwind CSS
                  </Badge>
                </div>
              </div>

              {/* Tag & Chip System */}
              <div className="space-y-3 pt-4 border-t border-border/70">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Interactive Tag & Filter Chips
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <Tag variant="primary" closable onClose={() => alert("Tag dismissed")}>
                    v1.4.0-rc
                  </Tag>
                  <Tag variant="success" shape="pill">
                    Healthy
                  </Tag>
                  <Tag selectable selected={true}>
                    Selected Filter
                  </Tag>
                  <Tag selectable selected={false} variant="outline">
                    Optional Filter
                  </Tag>
                </div>
              </div>

              {/* Rating System */}
              <div className="space-y-3 pt-4 border-t border-border/70">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Interactive Rating & Review Stars
                </div>

                <div className="flex items-center justify-between p-3 bg-muted/20 border border-border/70 rounded-chella-lg">
                  <div className="space-y-1">
                    <div className="text-xs font-medium text-foreground">Service Health Score</div>
                    <Rating defaultValue={5} showValueText size="small" color="emerald" />
                  </div>
                  <div className="space-y-1 text-right">
                    <div className="text-xs font-medium text-foreground">User Sentiment</div>
                    <Rating defaultValue={4} showValueText size="small" color="amber" />
                  </div>
                </div>
              </div>

              {/* Textarea Multi-line Control */}
              <div className="space-y-3 pt-4 border-t border-border/70">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Multi-line Textarea
                </div>

                <div className="flex flex-col gap-3">
                  <Textarea
                    label="Deployment Manifest Notes"
                    description="Include changelog notes for this version release."
                    placeholder="Enter manifest notes..."
                    showCount
                    maxLength={150}
                    rows={2}
                  />
                  <Textarea
                    placeholder="Auto-expanding system notes..."
                    autoResize
                    variant="filled"
                    size="small"
                  />
                </div>
              </div>

              {/* Checkbox Controls */}
              <div className="space-y-3 pt-4 border-t border-border/70">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Checkbox Form Controls
                </div>

                <div className="flex flex-col gap-2.5">
                  <Checkbox
                    label="Auto-Deploy to Staging"
                    description="Automatically trigger CI/CD deployment on git push to main."
                    defaultChecked
                  />
                  <Checkbox
                    label="Enforce Multi-Factor Authentication"
                    size="small"
                  />
                  <Checkbox
                    label="All Microservices Operational"
                    indeterminate
                    size="medium"
                  />
                </div>
              </div>

              {/* Switch Preferences */}
              <div className="space-y-3 pt-4 border-t border-border/70">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Switch Settings & Preferences
                </div>

                <div className="flex flex-col gap-3">
                  <Switch
                    label="Dark Mode Sync"
                    description="Automatically synchronize UI theme with operating system preference."
                    defaultChecked
                  />
                  <Switch
                    label="Real-time Telemetry Stream"
                    size="small"
                  />
                  <Switch
                    label="Maintenance Mode Lock"
                    error="Cannot enable maintenance mode while customer traffic is active."
                    size="medium"
                  />
                </div>
              </div>

              {/* Radio Group Selection */}
              <div className="space-y-3 pt-4 border-t border-border/70">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Radio Group Selection
                </div>

                <div className="flex flex-col gap-3">
                  <RadioGroup defaultValue="us-east" label="Cluster Deployment Region">
                    <Radio value="us-east" label="US-East (N. Virginia)" description="Primary latency optimized cluster." />
                    <Radio value="eu-central" label="EU-Central (Frankfurt)" description="GDPR compliant storage node." />
                    <Radio value="ap-south" label="AP-South (Mumbai)" size="small" />
                  </RadioGroup>

                  <div className="pt-2 border-t border-border/40">
                    <RadioGroup orientation="horizontal" defaultValue="pro" size="small" label="Billing Cadence">
                      <Radio value="monthly" label="Monthly" />
                      <Radio value="annual" label="Annual (Save 20%)" />
                    </RadioGroup>
                  </div>
                </div>
              </div>
            </Card.Content>
          </Card>
        </section>

        {/* Data Table Section */}
        <section className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <LayoutGrid className="w-4 h-4 text-primary" />
              <h2 className="text-base font-bold tracking-tight text-foreground uppercase text-xs tracking-wider">
                Data Table with Sorting & Selection
              </h2>
            </div>
            <Badge size="small" variant="secondary">
              Selected Rows: {selectedRowKeys.length} / {initialCustomers.length}
            </Badge>
          </div>

          <Table
            columns={tableColumns}
            dataSource={initialCustomers}
            rowKey="id"
            rowSelection={{
              selectedRowKeys: selectedRowKeys,
              onChange: (keys) => setSelectedRowKeys(keys),
            }}
          />

          <div className="pt-2 flex justify-center">
            <Pagination
              page={currentPage}
              totalPages={12}
              showEdges
              onPageChange={setCurrentPage}
            />
          </div>
        </section>
      </main>

      {/* Customer Modal Dialog */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Add New Team Member"
        description="Fill out the team member details to grant access to the Chella UI workspace."
        footer={
          <>
            <Button variant="secondary" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setModalOpen(false)}>
              Save Member
            </Button>
          </>
        }
      >
        <div className="space-y-4 py-2">
          <Input label="Full Name" placeholder="e.g. Anand Selvan" required />
          <Input label="Email Address" placeholder="anand@company.com" type="email" required />
          <Select
            label="Designated Role"
            options={[
              { label: "Frontend Engineer", value: "fe" },
              { label: "Backend Architect", value: "be" },
              { label: "Product Designer", value: "pd" },
            ]}
          />
        </div>
      </Modal>

      {/* Danger Confirmation Modal Dialog */}
      <Modal
        open={dangerModalOpen}
        size="small"
        onClose={() => setDangerModalOpen(false)}
        title="Delete Record"
        description="Are you sure you want to delete this record? This action is permanent and cannot be reversed."
        footer={
          <>
            <Button variant="secondary" onClick={() => setDangerModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={() => setDangerModalOpen(false)}>
              Delete Permanently
            </Button>
          </>
        }
      />

      {/* Settings Drawer Sheet */}
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        position="right"
        size="medium"
      >
        <Drawer.Header>
          <Drawer.Title>Platform Settings</Drawer.Title>
          <Drawer.Description>
            Manage cluster security parameters and runtime telemetry.
          </Drawer.Description>
        </Drawer.Header>
        <Drawer.Body>
          <div className="space-y-4">
            <Input label="Registry Domain" defaultValue="registry.corp.internal" />
            <Input label="Ingress Port" defaultValue="443" />
            <div className="pt-2 border-t border-border">
              <Switch label="Strict TLS 1.3 Mutual Authentication" defaultChecked />
            </div>
            <div className="pt-1">
              <Switch label="Enable OpenTelemetry Live Traces" defaultChecked />
            </div>
          </div>
        </Drawer.Body>
        <Drawer.Footer>
          <Button variant="secondary" onClick={() => setDrawerOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setDrawerOpen(false)}>
            Save Settings
          </Button>
        </Drawer.Footer>
      </Drawer>

      {/* Footer */}
      <footer className="mt-auto border-t border-border/80 bg-card py-6 text-center text-xs text-muted-foreground">
        Chella UI • Production-Grade React Component Library with Tailwind CSS & Design Tokens • MIT License
      </footer>
    </div>
  );
}
