"use client";
import * as React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  RowSelectionState,
} from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { InvoiceHoverPreview } from "@/components/ui/InvoiceHoverPreview";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { deleteInvoice, bulkSetIsInvoice } from "@/app/actions";
import { InvoiceEditDialog } from "@/components/InvoiceEditDialog";

// Row actions for edit/delete
function RowActions({ siteId, id, onDelete, invoice, onEdit }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost">
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => onEdit(invoice)}>Edit</DropdownMenuItem>
        <DropdownMenuItem onClick={() => onDelete(id)} className="cursor-pointer text-red-600">
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function InvoicesDataTable({ data, siteId }) {
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [rowSelection, setRowSelection] = React.useState<RowSelectionState>({});
  const router = useRouter();

  // Add state for editing
  const [editInvoice, setEditInvoice] = React.useState(null);
  const [editOpen, setEditOpen] = React.useState(false);

  async function handleDeleteInvoice(id) {
    try {
      await deleteInvoice(id);
      toast.success("Invoice deleted");
      router.refresh();
    } catch (e) {
      toast.error("Delete failed");
    }
  }

  function handleEdit(invoice) {
    setEditInvoice(invoice);
    setEditOpen(true);
  }

  // Bulk actions
  async function handleBulkDelete() {
    const ids = table.getSelectedRowModel().rows.map((row) => row.original.id);
    if (ids.length === 0) return;
    if (!window.confirm(`Delete ${ids.length} selected items?`)) return;
    try {
      await Promise.all(ids.map(deleteInvoice));
      toast.success("Invoices deleted");
      setRowSelection({});
      router.refresh();
    } catch {
      toast.error("Bulk delete failed");
    }
  }

  async function handleBulkIsInvoice(value) {
    const ids = table.getSelectedRowModel().rows.map((row) => row.original.id);
    if (ids.length === 0) return;
    try {
      await bulkSetIsInvoice(ids, value); // You should implement this server action
      toast.success(`Invoices marked as isInvoice=${value}`);
      setRowSelection({});
      router.refresh();
    } catch {
      toast.error("Bulk update failed");
    }
  }

  const columns = React.useMemo(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={table.getIsAllPageRowsSelected()}
            indeterminate={table.getIsSomePageRowsSelected()}
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
      // ... your existing columns, e.g.
      {
        accessorKey: "invoiceDate",
        header: "Invoice Date",
        cell: info => info.getValue() || "",
      },
      {
        accessorKey: "paymentDate",
        header: "Payment Date",
        cell: info => info.getValue() || "",
      },
      {
        accessorKey: "invoiceNumber",
        header: "Invoice #",
        cell: info => (
          <InvoiceHoverPreview url={info.row.original.url} label={info.row.original.invoiceNumber || "Invoice"} />
        ),
      },
      {
        accessorKey: "sellerName",
        header: "Seller",
        cell: info => info.getValue() || "",
      },
      {
  accessorKey: "invoiceTotalSumNoVat",
  header: "Total excl. VAT",
  cell: info => {
    const value = info.getValue();
    return typeof value === "number"
      ? value.toLocaleString("fr-FR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
      : "";
  },
},
      {
        accessorKey: "isCreditDebitProformaOrAdvanced",
        header: "Type",
        cell: info => (
          <Badge variant="outline" className="capitalize">
            {info.getValue() || "-"}
          </Badge>
        ),
      },
      {
        accessorKey: "isInvoice",
        header: "Is Invoice",
        cell: info => (
          <Badge variant={info.getValue() ? "default" : "outline"}>
            {info.getValue() ? "Yes" : "No"}
          </Badge>
        ),
      },
      {
        accessorKey: "uploadedAt",
        header: "Uploaded At",
        cell: info =>
          info.getValue()
            ? new Date(info.getValue()).toLocaleString("en-GB", {
                dateStyle: "medium",
                timeStyle: "short",
              })
            : "",
      },
      {
        id: "actions",
        header: "Actions",
        cell: info => (
          <RowActions
            siteId={siteId}
            id={info.row.original.id}
            invoice={info.row.original}
            onDelete={handleDeleteInvoice}
            onEdit={handleEdit}
          />
        ),
        enableSorting: false,
        enableFiltering: false,
      },
    ],
    [siteId]
  );

  const table = useReactTable({
    data,
    columns,
    state: { globalFilter, rowSelection },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    onRowSelectionChange: setRowSelection,
    initialState: { pagination: { pageSize: 10 } },
  });

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex items-center py-4 gap-4">
        <Input
          placeholder="Search invoices..."
          value={globalFilter ?? ""}
          onChange={e => setGlobalFilter(e.target.value)}
          className="max-w-sm"
        />
        {/* Bulk actions */}
        {table.getSelectedRowModel().rows.length > 0 && (
          <div className="flex gap-2">
            <Button variant="destructive" onClick={handleBulkDelete}>
              Delete selected
            </Button>
            <Button variant="default" onClick={() => handleBulkIsInvoice(true)}>
              Mark as Invoice
            </Button>
            <Button variant="outline" onClick={() => handleBulkIsInvoice(false)}>
              Mark as Not Invoice
            </Button>
          </div>
        )}
      </div>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <TableHead
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler?.()}
                  className="cursor-pointer select-none whitespace-nowrap"
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                  {header.column.getIsSorted() === "asc" && " 🔼"}
                  {header.column.getIsSorted() === "desc" && " 🔽"}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map(row => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <TableCell key={cell.id} className="whitespace-normal">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="text-center">
                No invoices found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className="flex justify-end mt-4">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              />
            </PaginationItem>
            {Array.from({ length: table.getPageCount() }, (_, idx) => (
              <PaginationItem key={idx}>
                <PaginationLink
                  isActive={table.getState().pagination.pageIndex === idx}
                  onClick={() => table.setPageIndex(idx)}
                >
                  {idx + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>

      </div>
      {/* ...edit dialog code remains as before... */}
      {editInvoice && (
        <InvoiceEditDialog
          invoice={editInvoice}
          open={editOpen}
          onOpenChange={setEditOpen}
        />
      )}
    </div>
  );
}
