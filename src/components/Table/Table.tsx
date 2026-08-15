import { useState, useMemo } from "react";
import { cn } from "../../utils/cn";
import { tableVariants } from "./Table.variants";
import type { TableProps, SortOrder, TableColumn } from "./Table.types";
import { ArrowUpDown, ArrowUp, ArrowDown, Loader2 } from "lucide-react";

export function Table<T extends object = Record<string, unknown>>({
  columns,
  dataSource,
  rowKey = "id",
  loading = false,
  emptyText = "No data available",
  rowSelection,
  onRowClick,
  className,
  size = "medium",
  bordered = false,
  striped = false,
}: TableProps<T>) {
  const [sortColumnKey, setSortColumnKey] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>(null);

  const getRowId = (record: T, index: number): string | number => {
    if (typeof rowKey === "function") {
      return rowKey(record);
    }
    const val = record[rowKey as keyof T];
    return val !== undefined ? (val as string | number) : index;
  };

  const handleSort = (column: TableColumn<T>) => {
    if (!column.sorter) return;

    if (sortColumnKey !== column.key) {
      setSortColumnKey(column.key);
      setSortOrder("ascend");
    } else if (sortOrder === "ascend") {
      setSortOrder("descend");
    } else {
      setSortColumnKey(null);
      setSortOrder(null);
    }
  };

  const sortedData = useMemo(() => {
    if (!sortColumnKey || !sortOrder) return dataSource;

    const column = columns.find((c) => c.key === sortColumnKey);
    if (!column || !column.sorter) return dataSource;

    return [...dataSource].sort((a, b) => {
      if (typeof column.sorter === "function") {
        const result = column.sorter(a, b);
        return sortOrder === "ascend" ? result : -result;
      }

      if (column.dataIndex) {
        const valA = a[column.dataIndex as keyof T];
        const valB = b[column.dataIndex as keyof T];
        if (valA === valB) return 0;
        if (valA === undefined || valA === null) return 1;
        if (valB === undefined || valB === null) return -1;
        if (valA < valB) return sortOrder === "ascend" ? -1 : 1;
        if (valA > valB) return sortOrder === "ascend" ? 1 : -1;
      }
      return 0;
    });
  }, [dataSource, sortColumnKey, sortOrder, columns]);

  const allRowKeys = useMemo(
    () => sortedData.map((item, idx) => getRowId(item, idx)),
    [sortedData]
  );

  const isAllSelected =
    rowSelection &&
    allRowKeys.length > 0 &&
    allRowKeys.every((key) => rowSelection.selectedRowKeys.includes(key));

  const handleSelectAll = () => {
    if (!rowSelection) return;
    if (isAllSelected) {
      rowSelection.onChange([], []);
    } else {
      rowSelection.onChange(allRowKeys, sortedData);
    }
  };

  const handleSelectRow = (_record: T, rowId: string | number) => {
    if (!rowSelection) return;
    const isSelected = rowSelection.selectedRowKeys.includes(rowId);
    const newKeys = isSelected
      ? rowSelection.selectedRowKeys.filter((k) => k !== rowId)
      : [...rowSelection.selectedRowKeys, rowId];

    const newRows = sortedData.filter((item, idx) => newKeys.includes(getRowId(item, idx)));
    rowSelection.onChange(newKeys, newRows);
  };

  return (
    <div className="w-full overflow-x-auto rounded-chella-lg border border-border bg-card shadow-xs">
      <table className={cn(tableVariants({ size, bordered, striped }), className)}>
        <thead className="bg-muted/50 border-b border-border text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          <tr>
            {rowSelection && (
              <th className="w-12 text-center">
                <input
                  type="checkbox"
                  checked={isAllSelected}
                  onChange={handleSelectAll}
                  aria-label="Select all rows"
                  className="rounded-chella-sm border-input text-primary focus:ring-primary h-4 w-4 cursor-pointer"
                />
              </th>
            )}

            {columns.map((column) => {
              const isSorting = sortColumnKey === column.key;
              return (
                <th
                  key={column.key}
                  style={{ width: column.width }}
                  onClick={() => handleSort(column)}
                  className={cn(
                    "font-semibold select-none",
                    column.align === "center" && "text-center",
                    column.align === "right" && "text-right",
                    column.sorter && "cursor-pointer hover:text-foreground transition-colors",
                    column.className
                  )}
                >
                  <div
                    className={cn(
                      "inline-flex items-center gap-1.5",
                      column.align === "center" && "justify-center",
                      column.align === "right" && "justify-end"
                    )}
                  >
                    <span>{column.title}</span>
                    {column.sorter && (
                      <span className="text-muted-foreground/60">
                        {isSorting && sortOrder === "ascend" && (
                          <ArrowUp className="w-3.5 h-3.5 text-primary" />
                        )}
                        {isSorting && sortOrder === "descend" && (
                          <ArrowDown className="w-3.5 h-3.5 text-primary" />
                        )}
                        {(!isSorting || !sortOrder) && (
                          <ArrowUpDown className="w-3.5 h-3.5 hover:text-foreground" />
                        )}
                      </span>
                    )}
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody className="divide-y divide-border">
          {loading ? (
            <tr>
              <td
                colSpan={columns.length + (rowSelection ? 1 : 0)}
                className="py-12 text-center text-muted-foreground"
              >
                <div className="flex flex-col items-center justify-center gap-2">
                  <Loader2 className="w-6 h-6 animate-spin text-primary" />
                  <span className="text-xs">Loading data...</span>
                </div>
              </td>
            </tr>
          ) : sortedData.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length + (rowSelection ? 1 : 0)}
                className="py-12 text-center text-muted-foreground"
              >
                {emptyText}
              </td>
            </tr>
          ) : (
            sortedData.map((record, index) => {
              const rowId = getRowId(record, index);
              const isSelected = rowSelection?.selectedRowKeys.includes(rowId);

              return (
                <tr
                  key={rowId}
                  onClick={() => onRowClick?.(record, index)}
                  className={cn(
                    "transition-colors hover:bg-muted/40",
                    isSelected && "bg-primary/5 hover:bg-primary/10",
                    onRowClick && "cursor-pointer"
                  )}
                >
                  {rowSelection && (
                    <td className="w-12 text-center" onClick={(e) => e.stopPropagation()}>
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => handleSelectRow(record, rowId)}
                        aria-label={`Select row ${rowId}`}
                        className="rounded-chella-sm border-input text-primary focus:ring-primary h-4 w-4 cursor-pointer"
                      />
                    </td>
                  )}

                  {columns.map((col) => {
                    const rawValue = col.dataIndex
                      ? record[col.dataIndex as keyof T]
                      : undefined;
                    const renderedValue = col.render
                      ? col.render(rawValue, record, index)
                      : (rawValue as React.ReactNode);

                    return (
                      <td
                        key={col.key}
                        className={cn(
                          col.align === "center" && "text-center",
                          col.align === "right" && "text-right",
                          col.className
                        )}
                      >
                        {renderedValue}
                      </td>
                    );
                  })}
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}
