import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useMemo } from "react";
import { cn } from "../../utils/cn";
import { tableVariants } from "./Table.variants";
import { ArrowUpDown, ArrowUp, ArrowDown, Loader2 } from "lucide-react";
export function Table({ columns, dataSource, rowKey = "id", loading = false, emptyText = "No data available", rowSelection, onRowClick, className, size = "medium", bordered = false, striped = false, }) {
    const [sortColumnKey, setSortColumnKey] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);
    const getRowId = (record, index) => {
        if (typeof rowKey === "function") {
            return rowKey(record);
        }
        const val = record[rowKey];
        return val !== undefined ? val : index;
    };
    const handleSort = (column) => {
        if (!column.sorter)
            return;
        if (sortColumnKey !== column.key) {
            setSortColumnKey(column.key);
            setSortOrder("ascend");
        }
        else if (sortOrder === "ascend") {
            setSortOrder("descend");
        }
        else {
            setSortColumnKey(null);
            setSortOrder(null);
        }
    };
    const sortedData = useMemo(() => {
        if (!sortColumnKey || !sortOrder)
            return dataSource;
        const column = columns.find((c) => c.key === sortColumnKey);
        if (!column || !column.sorter)
            return dataSource;
        return [...dataSource].sort((a, b) => {
            if (typeof column.sorter === "function") {
                const result = column.sorter(a, b);
                return sortOrder === "ascend" ? result : -result;
            }
            if (column.dataIndex) {
                const valA = a[column.dataIndex];
                const valB = b[column.dataIndex];
                if (valA === valB)
                    return 0;
                if (valA === undefined || valA === null)
                    return 1;
                if (valB === undefined || valB === null)
                    return -1;
                if (valA < valB)
                    return sortOrder === "ascend" ? -1 : 1;
                if (valA > valB)
                    return sortOrder === "ascend" ? 1 : -1;
            }
            return 0;
        });
    }, [dataSource, sortColumnKey, sortOrder, columns]);
    const allRowKeys = useMemo(() => sortedData.map((item, idx) => getRowId(item, idx)), [sortedData]);
    const isAllSelected = rowSelection &&
        allRowKeys.length > 0 &&
        allRowKeys.every((key) => rowSelection.selectedRowKeys.includes(key));
    const handleSelectAll = () => {
        if (!rowSelection)
            return;
        if (isAllSelected) {
            rowSelection.onChange([], []);
        }
        else {
            rowSelection.onChange(allRowKeys, sortedData);
        }
    };
    const handleSelectRow = (_record, rowId) => {
        if (!rowSelection)
            return;
        const isSelected = rowSelection.selectedRowKeys.includes(rowId);
        const newKeys = isSelected
            ? rowSelection.selectedRowKeys.filter((k) => k !== rowId)
            : [...rowSelection.selectedRowKeys, rowId];
        const newRows = sortedData.filter((item, idx) => newKeys.includes(getRowId(item, idx)));
        rowSelection.onChange(newKeys, newRows);
    };
    return (_jsx("div", { className: "w-full overflow-x-auto rounded-chellaa-lg border border-border bg-card shadow-xs", children: _jsxs("table", { className: cn(tableVariants({ size, bordered, striped }), className), children: [_jsx("thead", { className: "bg-muted/50 border-b border-border text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: _jsxs("tr", { children: [rowSelection && (_jsx("th", { className: "w-12 text-center", children: _jsx("input", { type: "checkbox", checked: isAllSelected, onChange: handleSelectAll, "aria-label": "Select all rows", className: "rounded-chellaa-sm border-input text-primary focus:ring-primary h-4 w-4 cursor-pointer" }) })), columns.map((column) => {
                                const isSorting = sortColumnKey === column.key;
                                return (_jsx("th", { style: { width: column.width }, onClick: () => handleSort(column), className: cn("font-semibold select-none", column.align === "center" && "text-center", column.align === "right" && "text-right", column.sorter && "cursor-pointer hover:text-foreground transition-colors", column.className), children: _jsxs("div", { className: cn("inline-flex items-center gap-1.5", column.align === "center" && "justify-center", column.align === "right" && "justify-end"), children: [_jsx("span", { children: column.title }), column.sorter && (_jsxs("span", { className: "text-muted-foreground/60", children: [isSorting && sortOrder === "ascend" && (_jsx(ArrowUp, { className: "w-3.5 h-3.5 text-primary" })), isSorting && sortOrder === "descend" && (_jsx(ArrowDown, { className: "w-3.5 h-3.5 text-primary" })), (!isSorting || !sortOrder) && (_jsx(ArrowUpDown, { className: "w-3.5 h-3.5 hover:text-foreground" }))] }))] }) }, column.key));
                            })] }) }), _jsx("tbody", { className: "divide-y divide-border", children: loading ? (_jsx("tr", { children: _jsx("td", { colSpan: columns.length + (rowSelection ? 1 : 0), className: "py-12 text-center text-muted-foreground", children: _jsxs("div", { className: "flex flex-col items-center justify-center gap-2", children: [_jsx(Loader2, { className: "w-6 h-6 animate-spin text-primary" }), _jsx("span", { className: "text-xs", children: "Loading data..." })] }) }) })) : sortedData.length === 0 ? (_jsx("tr", { children: _jsx("td", { colSpan: columns.length + (rowSelection ? 1 : 0), className: "py-12 text-center text-muted-foreground", children: emptyText }) })) : (sortedData.map((record, index) => {
                        const rowId = getRowId(record, index);
                        const isSelected = rowSelection?.selectedRowKeys.includes(rowId);
                        return (_jsxs("tr", { onClick: () => onRowClick?.(record, index), className: cn("transition-colors hover:bg-muted/40", isSelected && "bg-primary/5 hover:bg-primary/10", onRowClick && "cursor-pointer"), children: [rowSelection && (_jsx("td", { className: "w-12 text-center", onClick: (e) => e.stopPropagation(), children: _jsx("input", { type: "checkbox", checked: isSelected, onChange: () => handleSelectRow(record, rowId), "aria-label": `Select row ${rowId}`, className: "rounded-chellaa-sm border-input text-primary focus:ring-primary h-4 w-4 cursor-pointer" }) })), columns.map((col) => {
                                    const rawValue = col.dataIndex
                                        ? record[col.dataIndex]
                                        : undefined;
                                    const renderedValue = col.render
                                        ? col.render(rawValue, record, index)
                                        : rawValue;
                                    return (_jsx("td", { className: cn(col.align === "center" && "text-center", col.align === "right" && "text-right", col.className), children: renderedValue }, col.key));
                                })] }, rowId));
                    })) })] }) }));
}
