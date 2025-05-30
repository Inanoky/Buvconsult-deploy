
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image"
import {FileIcon, PlusCircle} from "lucide-react";
import {prisma} from "@/app/utils/db";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect} from "next/navigation";
import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import DefaultImage from "@/public/default.png"

import React from "react";
import {EmptyState} from "@/app/components/dashboard/EmptyState";



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
                <EmptyState
                    title="You don't have any Sites created"
                    description="You currently don't have any Projects. Please create some so that you can see them right here"
                    buttonText="Create site"
                    href="/dashboard/sites/new"
                />

            ): (
               <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
                   {data.map((item) =>(
                <Card key={item.id}>
                 <Image
                     src={item.imageUrl ?? DefaultImage}
                     alt={item.name}
                     className = "rounded-t-lg object-cover w-full h-[200px]"
                     width = {400}
                     height = {200}
                    />
                    <CardHeader>


                        <CardTitle>{item.name}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>



                    </CardHeader>
                    <CardFooter className="flex justify-between">

                            <Button asChild>

                                <Link href={`/dashboard/sites/${item.id}`}>View Articles</Link>

                            </Button>

                    </CardFooter>
                </Card>


                       )

                   )}
               </div>
            )}
        </>

    )

}