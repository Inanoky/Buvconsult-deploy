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
import {InvoiceItemsDataTable} from "@/components/InvoiceItemsDataTable";
import { InvoicesDataTable } from "@/components/InvoicesDataTable";
import {InvoiceChatBox} from "@/components/AI/InvoiceChatBox";
import AIassistant from "@/components/AI/aiAssistant";

export default async function InvoiceRoute({params}:

{params : Promise <{siteId:string}>

}){

    const {siteId} = await params
    const invoices = await GetInvoicesFromDB(siteId)
    let invoiceItems = await GetInvoiceItemsFromDB(siteId);
    invoiceItems = invoiceItems.filter(item => item.invoice?.isInvoice !== false); // filter out items with invoice.isInvoice === false




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
    <InvoicesDataTable data={invoices} siteId={siteId} />
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
                          <div className="min-h-[300px]">
                        <InvoiceItemsDataTable data={invoiceItems} siteId={siteId} />
                          </div>

                      </CardContent>
                    </Card>
          </div>

      </>
  );

}