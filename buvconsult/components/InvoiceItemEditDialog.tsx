"use client";
import * as React from "react";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { updateInvoiceItem } from "@/app/actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function InvoiceItemEditDialog({ item, open, onOpenChange }) {
  const [form, setForm] = React.useState({
    date: item.date || "",
    invoiceNumber: item.invoiceNumber || "",
    sellerName: item.sellerName || "",
    buyerName: item.buyerName || "",
    item: item.item || "",
    quantity: item.quantity || "",
    unitOfMeasure: item.unitOfMeasure || "",
    pricePerUnitOfMeasure: item.pricePerUnitOfMeasure || "",
    sum: item.sum || "",
    currency: item.currency || "",
    category: item.category || "",
    isInvoice: item.isInvoice ? "true" : "false",
  });
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSave() {
    setLoading(true);
    try {
      await updateInvoiceItem(item.id, {
        ...form,
        isInvoice: form.isInvoice === "true",
      });
      toast.success("Invoice item updated");
      onOpenChange(false);
      router.refresh();
    } catch (e) {
      toast.error("Failed to update item");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Invoice Item</DialogTitle>
        </DialogHeader>
        <div className="space-y-2 max-h-[50vh] overflow-auto">
          <Input name="date" value={form.date} onChange={handleChange} placeholder="Date" />
          <Input name="invoiceNumber" value={form.invoiceNumber} onChange={handleChange} placeholder="Invoice #" />
          <Input name="sellerName" value={form.sellerName} onChange={handleChange} placeholder="Seller" />
          <Input name="buyerName" value={form.buyerName} onChange={handleChange} placeholder="Buyer" />
          <Input name="item" value={form.item} onChange={handleChange} placeholder="Item" />
          <Input name="quantity" value={form.quantity} onChange={handleChange} placeholder="Quantity" />
          <Input name="unitOfMeasure" value={form.unitOfMeasure} onChange={handleChange} placeholder="Unit" />
          <Input name="pricePerUnitOfMeasure" value={form.pricePerUnitOfMeasure} onChange={handleChange} placeholder="Unit Price" />
          <Input name="sum" value={form.sum} onChange={handleChange} placeholder="Sum" />
          <Input name="currency" value={form.currency} onChange={handleChange} placeholder="Currency" />
          <Input name="category" value={form.category} onChange={handleChange} placeholder="Category" />
          <select name="isInvoice" value={form.isInvoice} onChange={handleChange} className="w-full border rounded px-2 py-1">
            <option value="true">Is Invoice</option>
            <option value="false">Not Invoice</option>
          </select>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">Cancel</Button>
          </DialogClose>
          <Button onClick={handleSave} loading={loading}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
