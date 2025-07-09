import { prisma } from "@/app/utils/db";

// Helper to get all months, to show 0 if no spendings that month
const MONTHS = [
  "Jan", "Feb", "Mar", "Apr",
  "May", "Jun", "Jul", "Aug",
  "Sep", "Oct", "Nov", "Dec"
];

export async function getMonthlySpendings(siteId) {
  // Raw SQL for performance & grouping by month
  // This works for PostgreSQL; adjust if using MySQL/SQLite

 const data = await prisma.$queryRaw`
    SELECT
      EXTRACT(YEAR FROM TO_DATE("invoiceDate", 'YYYY-MM-DD')) AS year,
      EXTRACT(MONTH FROM TO_DATE("invoiceDate", 'YYYY-MM-DD')) AS month,
      SUM(COALESCE("sum",0)) AS spendings
    FROM "InvoiceItems"
    WHERE "invoiceDate" IS NOT NULL
      AND "siteId" = ${siteId}
    GROUP BY year, month
    ORDER BY year, month;
  `;

  console.log(`this is from SQL ${JSON.stringify(data)}`)

  // Format result as required
   const chartData = data.map(d => ({
    month: `${MONTHS[d.month - 1]} ${String(d.year).slice(-2)}`,
    spendings: Number(d.spendings).toFixed(0)
}));

  console.log(`this is after format  ${JSON.stringify(chartData)}`)

  return chartData;
}