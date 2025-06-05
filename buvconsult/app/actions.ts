//All our server actions

"use server";


import {redirect} from "next/navigation";
import {parseWithZod} from '@conform-to/zod'
import {PostSchema, SiteCreationSchema, siteSchema} from "@/app/utils/zodSchemas";
import {prisma} from "@/app/utils/db";

import {requireUser} from "@/app/utils/requireUser";
import {stripe} from "@/app/utils/stripe";



export async function CreateSiteAction(prevState: any,formData: FormData){

    const user = await requireUser();



    //09:43 - subscription validation

    const [subStatus, sites] = await Promise.all([

        prisma.subscription.findUnique({
            where:{
                userId: user.id,
            },
            select:{

                status:true,

            },
        }),
        prisma.site.findMany({
            where: {
                userId: user.id,
            }
        })
    ])



    if(!subStatus || subStatus.status !== "active" ){

        if(sites.length < 1){
            //Allow creating a site
           await createSite()

        } else {
            //user already has one site don't allow
            return redirect("/dashboard/pricing")
        }

    } else if (subStatus.status === "active"){
        //user has an active plan he can create sites
        await createSite()
    }

    async function createSite(){

    const submission = await parseWithZod(formData, {
        schema: SiteCreationSchema({
            async isSubdirectoryUnique(){
                const existingSubDirectory = await prisma.site.findUnique({
                    where: {
                        subdirectory :formData.get('subdirectory') as string,

                    }
                });
                return !existingSubDirectory;
            }
        }),
        async: true,
    });

    if (submission.status !== "success" ){
        return submission.reply();
    }

    const response = await prisma.site.create({

        data : {
            description: submission.value.description,
            name: submission.value.name,
            subdirectory:submission.value.subdirectory,
            userId: user.id,
        }

    });


        }
     return redirect("/dashboard/sites")
}


export async function CreatePostAction(prevState: any,formData : FormData){

    const user = await requireUser(); //user validation

    const submission = parseWithZod(formData,{

        schema: PostSchema, //zod schema validation

    });

    if(submission.status !== "success"){
        return submission.reply();
    }

    const data = await prisma.post.create({ //this is databse mutation
        data : {
            title: submission.value.title,
            smallDescription :submission.value.smallDescription,
            slug :submission.value.slug,
            articleContent: JSON.parse(submission.value.articleContent),  //here interesting, some sheaningas with JSON.
            image: submission.value.coverImage,
            userId: user.id,
            siteId: formData.get("siteId") as string,
        },
    })

    return redirect(`/dashboard/sites/${formData.get("siteId")}`)
}


//this is for article edit. 05:24
export async function EditPostActions(prevState: any, formData: FormData){

    const user = await requireUser()

    const submission = parseWithZod(formData, { //this can yield 2 results, successful or not
        schema : PostSchema,
    })

    if(submission.status !== "success"){
        return submission.reply();

    }

    const data = await prisma.post.update({
        where: {
            userId: user.id,
            id: formData.get('articleId') as string,
        },
        data : {
            title: submission.value.title,
            smallDescription: submission.value.smallDescription,
            slug: submission.value.slug,
            articleContent: JSON.parse(submission.value.articleContent), //Stored in database as JSON object.
            image: submission.value.coverImage,


        },

    });

    return redirect(`/dashboard/sites/${formData.get("siteId")}`)
}


//this is for article delete 05:45

export async function DeletePost(formData: FormData){

    const user = await requireUser();

    const data = await prisma.post.delete({

        where: {
            userId: user.id,
            id: formData.get('articleId') as string,
        },


    })

    return redirect(`/dashboard/sites/${formData.get("siteId")}`)
}

//Update image from settings, 06:09
export async function UpdateImage(formData: FormData){

     const user = await requireUser();

     const data = await prisma.site.update({

         where: {

             userId: user.id,
             id: formData.get("siteId") as string,
         },
         data: {

             imageUrl: formData.get("imageUrl") as string,

         }

     })

    return redirect(`/dashboard/sites/${formData.get("siteId")}`)

}

//Delete site, 06:17

export async function DeleteSite(formData: FormData){

    const user = await requireUser();


    const data = await prisma.site.delete({
        where: {
            userId: user.id,
            id: formData.get('siteId') as string,

        },
    })
    return redirect("/dashboard/sites")
}

//Stipe 08:40

export async function CreateSubscription(){

    const user = await requireUser();

      let stripeUserId = await prisma.user.findUnique({
        where: {
            id: user.id,
        },
        select: {
            customerId: true,
            email: true,
            firstName : true,
        },
    });


    if(!stripeUserId?.customerId){
        const stripeCustomer = await stripe.customers.create({
            email: stripeUserId.email,
            name: stripeUserId?.firstName,


        });
        stripeUserId = await prisma.user.update({
            where: {
                id: user.id,
            },
            data:{
                customerId: stripeCustomer.id,
            },
        })
    }

    const session = await stripe.checkout.sessions.create({

        customer: stripeUserId.customerId as string,
        mode: 'subscription',
        billing_address_collection: 'auto',
        payment_method_types: ['card'],
        customer_update: {
            address: 'auto',
            name: "auto"
        },
        success_url: 'http://localhost:3000/dashboard/payment/success',
        cancel_url: 'http://localhost:3000/dashboard/payment/cancelled',
        line_items: [{price: process.env.STRIPE_PRICE_ID, quantity: 1}]
    });

    return redirect(session.url as string)


}