import { useState } from "react";
import {
  Button,
  Input,
  Card,
  Badge,
  Switch,
  Rating,
  Table,
  Modal,
} from "@chellaa/ui";

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [rating, setRating] = useState(5);
  const [active, setActive] = useState(true);

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <header style={{ marginBottom: "1.5rem" }}>
        <h1>Test Consumer Application</h1>
        <p>Validating @chellaa/ui external packaging and styles</p>
        <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
          <Badge variant="primary">Consumer Mode</Badge>
          <Badge dot variant="success">Zero-Purge CSS</Badge>
        </div>
      </header>

      <Card variant="elevated" hoverable>
        <Card.Header>
          <Card.Title>Consumer Integration Test</Card.Title>
          <Card.Description>Components imported via package boundary</Card.Description>
        </Card.Header>
        <Card.Content>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Input label="Consumer Input" placeholder="Type here..." defaultValue="Validated" />
            <Switch
              label="Live Sync"
              description="Toggle consumer sync state"
              checked={active}
              onCheckedChange={setActive}
            />
            <div>
              <div style={{ fontSize: "0.875rem", marginBottom: "0.25rem" }}>Rating Component:</div>
              <Rating value={rating} onChange={setRating} showValueText />
            </div>
            <Table
              columns={[
                { key: "service", title: "Microservice", dataIndex: "service" },
                { key: "status", title: "Status", dataIndex: "status", render: (s) => <Badge dot variant="success">{String(s)}</Badge> },
              ]}
              dataSource={[
                { id: "1", service: "auth-gateway", status: "Healthy" },
                { id: "2", service: "billing-core", status: "Healthy" },
              ]}
            />
          </div>
        </Card.Content>
        <Card.Footer>
          <Button variant="primary" onClick={() => setModalOpen(true)}>
            Open Consumer Modal
          </Button>
        </Card.Footer>
      </Card>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Consumer Validation Dialog"
        description="Verifies modal portal, focus trapping, and backdrop overlay in external apps."
        footer={
          <Button variant="secondary" onClick={() => setModalOpen(false)}>
            Close
          </Button>
        }
      >
        <p>The consumer modal is working properly!</p>
      </Modal>
    </div>
  );
}

export default App;
