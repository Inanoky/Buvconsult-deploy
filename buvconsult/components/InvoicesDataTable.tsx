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





// Row actions for edit/delete
function RowActions({ siteId, id }) {
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
        <DropdownMenuItem asChild>
          <Link href={`/dashboard/sites/${siteId}/${id}`}>Edit</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={`/dashboard/sites/${siteId}/${id}/delete`}>Delete</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function InvoicesDataTable({ data, siteId }) {
  const [globalFilter, setGlobalFilter] = React.useState("");
  const columns = React.useMemo(
    () => [
      {
        accessorKey: "url",
        header: "Preview",
        cell: info => (
          <InvoiceHoverPreview url={info.row.original.url} label={info.row.original.sellerName || "Invoice"} />
        ),
        enableSorting: false,
        enableFiltering: false,
      },
      {
        accessorKey: "sellerName",
        header: "Seller",
        cell: info => info.getValue() || "",
      },
      {
        accessorKey: "invoiceNumber",
        header: "Invoice #",
        cell: info => info.getValue() || "",
      },
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
        accessorKey: "isCreditDebitOrProforma",
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
            ? new Date(info.getValue()).toLocaleDateString("en-US", { dateStyle: "medium" })
            : "",
      },
      {
        id: "actions",
        header: "Actions",
        cell: info => <RowActions siteId={siteId} id={info.row.original.id} />,
        enableSorting: false,
        enableFiltering: false,
      },
    ],
    [siteId]
  );

  const table = useReactTable({
    data,
    columns,
    state: { globalFilter },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    initialState: { pagination: { pageSize: 10 } },
  });

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex items-center py-4">
        <Input
          placeholder="Search invoices..."
          value={globalFilter ?? ""}
          onChange={e => setGlobalFilter(e.target.value)}
          className="max-w-sm"
        />
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
    </div>
  );
}
