import {CloudRain} from "lucide-react";

const features = [

    {

        name: "Passive Data Capture",
        description: "Workers check in via selfie + location. No manual timekeeping.",
        icon: CloudRain
    },
    {

        name: "Invoice Auto-Parsing",
        description: "Send invoices to email or chat. Our AI does the rest.",
        icon: CloudRain
    },
    {

        name: "Visual Dashboards",
        description: "Insightful analytics for cost, hours, and progress.",
        icon: CloudRain
    },
     {

        name: "Custom AI solution",
        description: "We will tailor AI to your needs, so results are such as you expect",
        icon: CloudRain
    },

]




export function Features(){


    return (

        <div className="py-24 sm:py-32 ">

            <div className="max-w-2xl mx-auto lg:text-center">

                <p className="font-semibold leading-7 text-primary">Control, effortless</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Get your project setup in minutes</h1>
                <p className="mt-6 text-base leading-snug text-muted-foreground"></p>

            </div>

            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                <div className="grid max-w-xl gird-cols-1 gap-x-8 gap-y-10 lg:max-w-none
                lg:grid-cols-2 lg:gap-y-16">
                    {features.map((feature) => (

                        <div key={feature.name} className="relative pl-16">
                            <div className="text-bas font-semibold leading-7">

                                <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-primary">
                                    <feature.icon className="w-6 h-6 text-white"/>
                                </div>


                                {feature.name}
                            </div>

                            <p className="mt-2 text-sm text-muted-foreground leading-snug">{feature.description}</p>


                        </div>



                    ))}



                </div>


            </div>


        </div>
    )
}