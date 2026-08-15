import type { ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import type { tableVariants } from "./Table.variants";

export type SortOrder = "ascend" | "descend" | null;

export interface TableColumn<T extends object = Record<string, unknown>> {
  key: string;
  title: ReactNode;
  dataIndex?: keyof T | string;
  render?: (value: unknown, record: T, index: number) => ReactNode;
  sorter?: boolean | ((a: T, b: T) => number);
  align?: "left" | "center" | "right";
  width?: string | number;
  className?: string;
}

export interface TableRowSelection<T extends object = Record<string, unknown>> {
  selectedRowKeys: (string | number)[];
  onChange: (selectedRowKeys: (string | number)[], selectedRows: T[]) => void;
}

export interface TableProps<T extends object = Record<string, unknown>>
  extends VariantProps<typeof tableVariants> {
  columns: TableColumn<T>[];
  dataSource: T[];
  rowKey?: keyof T | string | ((record: T) => string | number);
  loading?: boolean;
  emptyText?: ReactNode;
  rowSelection?: TableRowSelection<T>;
  onRowClick?: (record: T, index: number) => void;
  className?: string;
  bordered?: boolean;
  striped?: boolean;
}
