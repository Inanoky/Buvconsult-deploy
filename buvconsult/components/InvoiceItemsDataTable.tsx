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
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
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
import {useRouter} from "next/navigation";
import { deleteInvoiceItem} from "@/app/actions";
import {toast} from "sonner";

import {InvoiceItemEditDialog} from "@/components/InvoiceItemEditDialog";




// --- Global Filter Function ---
const globalFilterFn: FilterFn<any> = (row, columnId, filterValue) => {
  if (!filterValue) return true;
  const flatString = [
    ...Object.values(row.original), // top-level fields
    ...(row.original.invoice ? Object.values(row.original.invoice) : [])
  ]
    .filter(v => typeof v === "string" || typeof v === "number" || typeof v === "boolean")
    .join(" ")
    .toLowerCase();
  return flatString.includes(filterValue.toLowerCase());
};











// Row actions for edit/delete
function RowActions({ siteId, id, item, onDelete, onEdit }) {
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
        <DropdownMenuItem onClick={() => onEdit(item)}>Edit</DropdownMenuItem>
        <DropdownMenuItem onClick={() => onDelete(id)} className="cursor-pointer text-red-600">
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}


export function InvoiceItemsDataTable({ data, siteId }) {
  const [globalFilter, setGlobalFilter] = React.useState("");


    const router = useRouter();
   // Add state for editing
    const [editItem, setEditItem] = React.useState(null);
    const [editOpen, setEditOpen] = React.useState(false);



  async function handleDeleteItem(id) {
    try {
      await deleteInvoiceItem(id);
      toast.success("Invoice item deleted");
      router.refresh();
    } catch (e) {
      toast.error("Delete failed");
    }
  }

  function handleEdit(item) {
    setEditItem(item);
    setEditOpen(true);
  }





















  const columns = React.useMemo(
    () => [
      {
          accessorKey: "invoice.invoiceDate", // This will NOT work by default!
          header: "Date",
          cell: info => info.row.original.invoice?.invoiceDate || "",
        },

     {
  header: "Invoice#",
  cell: info => {
    const invoice = info.row.original.invoice;
    return invoice?.url
      ? <InvoiceHoverPreview url={invoice.url} label={invoice.invoiceNumber || "Invoice"} />
      : invoice?.invoiceNumber || "";
  }
},
      {
        accessorKey: "sellerName",
        header: "Seller",
        cell: info => info.row.original.invoice?.sellerName || "",
      },

      {
        accessorKey: "item",
        header: "Item",
        cell: info => info.getValue() || "",
      },
      {
        accessorKey: "quantity",
        header: "Qty",
        cell: info => info.getValue() || "",
      },
      {
        accessorKey: "unitOfMeasure",
        header: "Unit",
        cell: info => info.getValue() || "",
      },
      {
        accessorKey: "pricePerUnitOfMeasure",
        header: "Unit Price",
        cell: info => info.getValue() || "",
      },
      {
        accessorKey: "sum",
        header: "Sum",
        cell: info => info.getValue() || "",
      },
      {
        accessorKey: "currency",
        header: "Currency",
        cell: info => info.getValue() || "",
      },
      {
        accessorKey: "category",
        header: "Category",
        cell: info => info.getValue() || "",
      },
      {
        accessorKey: "isInvoice",
        header: "Is Invoice",
        cell: info =>
          info.getValue()
            ? <Badge variant="default">Yes</Badge>
            : <Badge variant="outline">No</Badge>
      },
      {
        id: "actions",
        header: "Actions",
        cell: info => (
          <RowActions
            siteId={siteId}
            id={info.row.original.id}
            item={info.row.original}
            onDelete={handleDeleteItem}
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
    state: { globalFilter },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn,
    // Set page size here if you want
    initialState: { pagination: { pageSize: 20 } },
  });

  return (
    <div className="w-full overflow-x-auto">
      {/* Filtering input */}
      <div className="flex items-center py-4">
        <Input
          placeholder="Search invoice items..."
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
                No invoice items found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Pagination always bottom right */}
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

     {/* ...table and pagination... */}
       {/* ...filter, table, pagination... */}
      {editItem && (
        <InvoiceItemEditDialog
          item={editItem}
          open={editOpen}
          onOpenChange={setEditOpen}
        />
      )}


    </div>
  );
}
