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
  type TableColumn,
} from "@chella/ui";

interface OrderItem {
  id: string;
  item: string;
  qty: number;
  price: number;
  status: "shipped" | "pending" | "processing";
}

const sampleOrders: OrderItem[] = [
  { id: "ORD-101", item: "Enterprise License", qty: 5, price: 2499, status: "shipped" },
  { id: "ORD-102", item: "Cloud Storage Addon", qty: 2, price: 450, status: "processing" },
  { id: "ORD-103", item: "Priority Support SLA", qty: 1, price: 1200, status: "pending" },
];

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [customerName, setCustomerName] = useState("Acme Global Corp");
  const [selectedPlan, setSelectedPlan] = useState<string | string[]>("pro");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns: TableColumn<OrderItem>[] = [
    { key: "id", title: "Order ID", dataIndex: "id", sorter: true },
    { key: "item", title: "Product / Service", dataIndex: "item" },
    { key: "qty", title: "Qty", dataIndex: "qty", align: "center" },
    {
      key: "status",
      title: "Status",
      dataIndex: "status",
      render: (status) => {
        const variant =
          status === "shipped" ? "success" : status === "processing" ? "primary" : "warning";
        return <Badge dot variant={variant}>{String(status).toUpperCase()}</Badge>;
      },
    },
    {
      key: "price",
      title: "Amount",
      dataIndex: "price",
      align: "right",
      sorter: (a, b) => a.price - b.price,
      render: (val) => `$${Number(val).toLocaleString()}`,
    },
  ];

  return (
    <div style={{ minHeight: "100vh", padding: "2rem" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h1 style={{ fontSize: "1.75rem", fontWeight: "bold", margin: 0 }}>
              External Consumer App
            </h1>
            <p style={{ margin: "0.25rem 0 0", opacity: 0.7, fontSize: "0.875rem" }}>
              Verifying that @chella/ui renders with zero consumer Tailwind compiler setup.
            </p>
          </div>
          <Button variant="outline" size="small" onClick={toggleTheme}>
            Toggle {theme === "dark" ? "Light" : "Dark"} Mode
          </Button>
        </div>

        {/* Customer Card */}
        <Card variant="elevated">
          <Card.Header>
            <Card.Title>Customer Provisioning Form</Card.Title>
            <Card.Description>
              Testing form components imported directly from @chella/ui
            </Card.Description>
          </Card.Header>
          <Card.Content>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <Input
                label="Customer Account"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                clearable
              />
              <Select
                label="Subscription Tier"
                value={selectedPlan}
                onChange={setSelectedPlan}
                options={[
                  { label: "Starter ($29/mo)", value: "starter" },
                  { label: "Professional ($99/mo)", value: "pro" },
                  { label: "Enterprise Custom", value: "enterprise" },
                ]}
              />
            </div>
            <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <Checkbox
                label="Auto-Renew Annual Contract"
                description="Save 20% on all enterprise addons when billed annually."
                defaultChecked
              />
              <Checkbox
                label="Dedicated Solution Architect Support"
                size="small"
              />
              <div style={{ marginTop: "0.5rem", paddingTop: "0.5rem", borderTop: "1px solid rgba(128,128,128,0.2)" }}>
                <Switch
                  label="Instant Slack & PagerDuty Incident Routing"
                  description="Dispatches high-priority incident webhooks to configured channels."
                  defaultChecked
                />
              </div>
            </div>
          </Card.Content>
          <Card.Footer>
            <Button variant="secondary" onClick={() => alert("Discarded")}>
              Discard
            </Button>
            <Button variant="primary" onClick={() => setIsModalOpen(true)}>
              Review & Submit
            </Button>
          </Card.Footer>
        </Card>

        {/* Orders Table */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: "600", margin: 0 }}>
            Recent Orders
          </h2>
          <Table columns={columns} dataSource={sampleOrders} rowKey="id" />
        </div>

        {/* Modal Dialog */}
        <Modal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Confirm Provisioning"
          description={`Are you ready to provision ${customerName} on the selected plan?`}
          footer={
            <>
              <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
                Back
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  setIsModalOpen(false);
                  alert("Provisioned successfully via @chella/ui!");
                }}
              >
                Confirm Provisioning
              </Button>
            </>
          }
        >
          <p style={{ margin: 0, fontSize: "0.875rem" }}>
            The account credentials will be emailed to the primary technical contact immediately.
          </p>
        </Modal>
      </div>
    </div>
  );
}
