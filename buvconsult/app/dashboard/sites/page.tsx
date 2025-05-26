import {Button} from "@/components/ui/button";
import Link from "next/link";
import {FileIcon, PlusCircle} from "lucide-react";
import prisma from "@/app/utils/db";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect} from "next/navigation";
import {Card} from "@/components/ui/card";


async function getData(userId){

    const data = await prisma.site.findMany({
        where: {
            userId: userId,
        },
        orderBy: {
            createdAt: "desc"
        }   ,

    });

    return data;

}



export default async function SitesRoute(){
    const {getUser} = getKindeServerSession()
    const user = await getUser

    if(!user){
        return redirect("/api/auth/login")
    }

    const data = await getData(user.id)

    return(
        <>
        <div className="flex w-full justify-end">
            <Button asChild>
                <Link href={"/dashboard/sites/new"}>
                    <PlusCircle className="mr-2 size-4"/>
                    Create Project
                </Link>

            </Button>
        </div>



            {data === undefined || data.length === 0 ? (
                <div className="flex flex-col items-center justify-center rounded-md border
            border-dashed p-8 text-center animate-in fade-in-50">
                    <div className="flex size-20 items-center justify-center rounded-full bg-primary/10">
                        <FileIcon className="size-10 text-primary"/>
                    </div>
                    <h2 className="mt-6 text-xl font-semibold">You don't have any projects created</h2>
                    <p className="mb-8 mt-2 text-center test-small leading-tight text-muted-foreground max-w-sm mx-auto">You
                        currently don't have any Projects. Please create some so that you can see them right here!</p>
                    <Button asChild>
                        <Link href={"/dashboard/sites/new"}>
                            <PlusCircle className="mr-2 size-4"/>
                            Create Project
                        </Link>

                    </Button>


                </div>

            ): (
               <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
                   {data.map((item) =>(
                        <Card key={item.id}>
                            <h1>{item.name}</h1>

                        </Card>

                       )

                   )}
               </div>
            )}
        </>

    )

}