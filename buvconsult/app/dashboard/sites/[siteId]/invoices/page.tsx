import InvoiceUpload from "@/components/InvoiceUpload";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import Image from "next/image";
import {Badge} from "@/components/ui/badge";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {MoreHorizontal} from "lucide-react";
import Link from "next/link";
import {GetInvoiceItemsFromDB, GetInvoicesFromDB} from "@/app/actions";
import {InvoiceHoverPreview} from "@/components/ui/InvoiceHoverPreview";


export default async function InvoiceRoute({params}:

{params : Promise <{siteId:string}>

}){

    const {siteId} = await params
    const invoices = await GetInvoicesFromDB(siteId)
    const invoiceItems = await GetInvoiceItemsFromDB(siteId)

    //columns for the second table

      const columns = [
    { key: "date", label: "Date" },
    { key: "invoiceNumber", label: "Invoice #" },
    { key: "sellerName", label: "Seller" },
    { key: "buyerName", label: "Buyer" },
    { key: "item", label: "Item" },
    { key: "quantity", label: "Qty" },
    { key: "unitOfMeasure", label: "Unit" },
    { key: "pricePerUnitOfMeasure", label: "Unit Price" },
    { key: "sum", label: "Sum" },
    { key: "currency", label: "Currency" },
    { key: "category", label: "Category" },

    { key: "isInvoice", label: "Is Invoice" },
  ];





  return (
      <>
          {/* 2️⃣ Your client upload form */}

          <InvoiceUpload params={Promise.resolve({siteId})}/>
          <div>
              <Card className="mt-10">
                  <CardHeader>
                      <CardTitle>Invoices</CardTitle>
                      <CardDescription>
                          Manage your invoices for site <strong>{siteId}</strong>
                      </CardDescription>
                  </CardHeader>
                  <CardContent>
                      <Table>
                          <TableHeader>
                              <TableRow>
                                  <TableHead>Invoice Number</TableHead>
                                  <TableHead>Seller</TableHead>
                                  <TableHead>Invoice Date</TableHead>
                                  <TableHead>Payment Date</TableHead>
                                  <TableHead>Type</TableHead>
                                  <TableHead>Is Invoice</TableHead>
                                  <TableHead>Uploaded At</TableHead>
                                  <TableHead className="text-right">Actions</TableHead>
                              </TableRow>
                          </TableHeader>
                          <TableBody>
                              {invoices.map((inv) => (
                                  <TableRow key={inv.id}>
                                      {/* Preview PDF */}
                                      <TableCell>
                                          <InvoiceHoverPreview url={inv.url} label={inv.invoiceNumber || inv.url}/>
                                      </TableCell>
                                      <TableCell>{inv.sellerName || ""}</TableCell>
                                      <TableCell>{inv.invoiceDate || ""}</TableCell>
                                      <TableCell>{inv.paymentDate || ""}</TableCell>
                                      <TableCell>
                                          <Badge variant="outline" className="capitalize">
                                              {inv.isCreditDebitOrProforma ? inv.isCreditDebitOrProforma : "-"}
                                          </Badge>
                                      </TableCell>
                                      <TableCell>
                                          <Badge variant={inv.isInvoice ? "default" : "outline"}>
                                              {inv.isInvoice ? "Yes" : "No"}
                                          </Badge>
                                      </TableCell>
                                      <TableCell>
                                          {new Date(inv.uploadedAt).toLocaleDateString("en-US", {
                                              dateStyle: "medium",
                                          })}
                                      </TableCell>
                                      <TableCell className="text-right">
                                          <DropdownMenu>
                                              <DropdownMenuTrigger asChild>
                                                  <Button size="icon" variant="ghost">
                                                      <MoreHorizontal/>
                                                  </Button>
                                              </DropdownMenuTrigger>
                                              <DropdownMenuContent align="end">
                                                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                  <DropdownMenuSeparator/>
                                                  <DropdownMenuItem asChild>
                                                      <Link href={`/dashboard/sites/${siteId}/${inv.id}`}>Edit</Link>
                                                  </DropdownMenuItem>
                                                  <DropdownMenuItem asChild>
                                                      <Link
                                                          href={`/dashboard/sites/${siteId}/${inv.id}/delete`}>Delete</Link>
                                                  </DropdownMenuItem>
                                              </DropdownMenuContent>
                                          </DropdownMenu>
                                      </TableCell>
                                  </TableRow>
                              ))}
                              {invoices.length === 0 && (
                                  <TableRow>
                                      <TableCell colSpan={8} className="text-center">
                                          No invoices found.
                                      </TableCell>
                                  </TableRow>
                              )}
                          </TableBody>
                      </Table>
                  </CardContent>
              </Card>
          </div>
          <div>
              <Card className="mt-10">
                  <CardHeader>
                      <CardTitle>Invoice Items</CardTitle>
                      <CardDescription>
                          Manage your invoice items for site <strong>{siteId}</strong>
                      </CardDescription>
                  </CardHeader>
                  <CardContent>
                      <div className="w-full overflow-x-auto">
                          <Table>
                              <TableHeader>
                                  <TableRow>
                                      {columns.map(col => (
                                          <TableHead key={col.key}>{col.label}</TableHead>
                                      ))}
                                      <TableHead className="text-right">Actions</TableHead>
                                  </TableRow>
                              </TableHeader>
                              <TableBody>
                                  {invoiceItems.length > 0 ? (
                                      invoiceItems.map((item) => (
                                          <TableRow key={item.id}>

                                              {/* First column (e.g. Date) */}
                                              <TableCell className="whitespace-normal">
                                                  {item[columns[0].key] || ""}
                                              </TableCell>

                                              <TableCell className="whitespace-normal">
                                                  {item.invoice?.url ? (
                                                      <InvoiceHoverPreview url={item.invoice.url}
                                                                           label={item.invoiceNumber || "Invoice"}/>
                                                  ) : (
                                                      item[columns[1].key] || ""
                                                  )}
                                              </TableCell>


                                              {columns.slice(2).map((col) => (
                                                  <TableCell key={col.key} className="whitespace-normal">
                                                      {item[col.key] || ""}
                                                  </TableCell>
                                              ))}


                                              <TableCell className="text-right">
                                                  <DropdownMenu>
                                                      <DropdownMenuTrigger asChild>
                                                          <Button size="icon" variant="ghost">
                                                              <MoreHorizontal/>
                                                          </Button>
                                                      </DropdownMenuTrigger>
                                                      <DropdownMenuContent align="end">
                                                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                          <DropdownMenuSeparator/>
                                                          <DropdownMenuItem asChild>
                                                              <Link
                                                                  href={`/dashboard/sites/${siteId}/${item.id}`}>Edit</Link>
                                                          </DropdownMenuItem>
                                                          <DropdownMenuItem asChild>
                                                              <Link
                                                                  href={`/dashboard/sites/${siteId}/${item.id}/delete`}>Delete</Link>
                                                          </DropdownMenuItem>
                                                      </DropdownMenuContent>
                                                  </DropdownMenu>
                                              </TableCell>
                                          </TableRow>
                                      ))
                                  ) : (
                                      <TableRow>
                                          <TableCell colSpan={columns.length + 1} className="text-center">
                                              No invoice items found.
                                          </TableCell>
                                      </TableRow>
                                  )}
                              </TableBody>
                          </Table>
                           </div>
                  </CardContent>
              </Card>
          </div>

      </>
  );

}