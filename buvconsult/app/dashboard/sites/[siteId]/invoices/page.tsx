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
import {GetInvoicesFromDB} from "@/app/actions";

export default async function InvoiceRoute({params}:

{params : Promise <{siteId:string}>

}){

    const {siteId} = await params
    const invoices = await GetInvoicesFromDB(siteId)
  return (
    <>
      {/* 2️⃣ Your client upload form */}
      <InvoiceUpload params={Promise.resolve({ siteId })} />

      {/* 3️⃣ Render the table of invoices */}
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
                <TableHead>Preview</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Size</TableHead>
                <TableHead>Uploaded At</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {invoices.map((inv) => (
                <TableRow key={inv.id}>
                  <TableCell>
                    <Image
                      src={inv.url}
                      width={64}
                      height={64}
                      alt={inv.name}
                      className="rounded-md object-cover"
                    />
                  </TableCell>
                  <TableCell>
                        <Link
                          href={inv.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {inv.name}
                        </Link>
                          </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="capitalize">
                      {inv.type}
                    </Badge>
                  </TableCell>
                  <TableCell>{inv.size.toLocaleString()} bytes</TableCell>
                  <TableCell>
                    {new Date(inv.uploadedAt).toLocaleDateString("en-US", {
                      dateStyle: "medium",
                    })}
                  </TableCell>
                  <TableCell className="text-right">
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
                          <Link href={`/dashboard/sites/${siteId}/${inv.id}`}>
                            Edit
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href={`/dashboard/sites/${siteId}/${inv.id}/delete`}>
                            Delete
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}

              {invoices.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} className="text-center">
                    No invoices found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );

}