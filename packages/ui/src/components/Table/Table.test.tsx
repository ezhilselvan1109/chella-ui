import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Table } from "./Table";
import type { TableColumn } from "./Table.types";

interface UserRecord {
  id: string;
  name: string;
  role: string;
  age: number;
}

const mockData: UserRecord[] = [
  { id: "1", name: "Kumar", role: "Admin", age: 32 },
  { id: "2", name: "Ravi", role: "Developer", age: 28 },
  { id: "3", name: "Anand", role: "Designer", age: 35 },
];

const mockColumns: TableColumn<UserRecord>[] = [
  { key: "name", title: "Full Name", dataIndex: "name", sorter: true },
  { key: "role", title: "Job Role", dataIndex: "role" },
  {
    key: "age",
    title: "Age",
    dataIndex: "age",
    sorter: (a, b) => a.age - b.age,
  },
  {
    key: "actions",
    title: "Actions",
    render: (_, record) => <button type="button">Edit {record.name}</button>,
  },
];

describe("Table component", () => {
  it("renders table headers and rows correctly", () => {
    render(<Table columns={mockColumns} dataSource={mockData} rowKey="id" />);

    expect(screen.getByText("Full Name")).toBeInTheDocument();
    expect(screen.getByText("Job Role")).toBeInTheDocument();
    expect(screen.getByText("Age")).toBeInTheDocument();

    expect(screen.getByText("Kumar")).toBeInTheDocument();
    expect(screen.getByText("Ravi")).toBeInTheDocument();
    expect(screen.getByText("Anand")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /edit kumar/i })).toBeInTheDocument();
  });

  it("handles column sorting", async () => {
    const user = userEvent.setup();
    render(<Table columns={mockColumns} dataSource={mockData} rowKey="id" />);

    const nameHeader = screen.getByText("Full Name");
    await user.click(nameHeader); // Sort ascend: Anand, Kumar, Ravi

    const cells = screen.getAllByRole("cell");
    // Anand should now be first row
    expect(cells[0]).toHaveTextContent("Anand");
  });

  it("handles row selection", async () => {
    const user = userEvent.setup();
    const handleSelectionChange = vi.fn();

    render(
      <Table
        columns={mockColumns}
        dataSource={mockData}
        rowKey="id"
        rowSelection={{
          selectedRowKeys: ["1"],
          onChange: handleSelectionChange,
        }}
      />
    );

    const selectAllCheckbox = screen.getByLabelText("Select all rows");
    await user.click(selectAllCheckbox);

    expect(handleSelectionChange).toHaveBeenCalledWith(["1", "2", "3"], mockData);
  });

  it("renders empty state when dataSource is empty", () => {
    render(<Table columns={mockColumns} dataSource={[]} emptyText="No records found" />);
    expect(screen.getByText("No records found")).toBeInTheDocument();
  });

  it("renders loading state", () => {
    render(<Table columns={mockColumns} dataSource={mockData} loading />);
    expect(screen.getByText("Loading data...")).toBeInTheDocument();
  });
});
