import { getMonthlySpendings} from "@/app/AnalyticsActions";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MonthlySpendingsChart} from "@/app/components/frontend/analytics/MonthlySpendingsChart";

export default async function Analytics({params}:

{params : Promise <{siteId:string}>

}) {

     const {siteId} = await params
    const data = await getMonthlySpendings(siteId)

  return (
      <>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 auto-rows-fr">
                  <MonthlySpendingsChart data={data}/>

                </div>

          </>

     );
}