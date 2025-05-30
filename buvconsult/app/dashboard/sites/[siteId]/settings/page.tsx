

//05:51

import {ChevronLeft} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {SubmitButton} from "@/app/components/dashboard/SubmitButtons";
import {UploadImageForm} from "@/app/components/dashboard/forms/UploadImageForm";
import {DeleteSite} from "@/app/actions";

export default function SettingsSiteRoute({params}: {params:{

    siteId: string

    }}){

    return(

        <>
            <div className="flex items-center gap-x-2">
                <Button variant="outline" size="icon">
                    <Link href={`/dashboard/sites/${params.siteId}`}>
                    <ChevronLeft className="size-4"/>
                        </Link>
                </Button>
                <h3 className="text-xl font-semibold">Go Back</h3>

            </div>
            {/* 06:05 */}
            <UploadImageForm siteId={params.siteId}/>


            {/* 05:58 */}
            <Card className="border-red-500 bg-red-500/10">
                <CardHeader>
                    <CardTitle className="text-red-500">
                        Danger
                    </CardTitle>
                    <CardDescription>
                        This will delete your site and all articles associated with it.
                        Click the button below to delete everything.
                    </CardDescription>
                </CardHeader>
                <CardFooter>
                    <form action={DeleteSite}>
                    <input type="hidden" name="siteId" value={params.siteId}/>

                    <SubmitButton text="Delete Everything" variant="destructive"/>
                     </form>
                    </CardFooter>
            </Card>

        </>
    )

}
