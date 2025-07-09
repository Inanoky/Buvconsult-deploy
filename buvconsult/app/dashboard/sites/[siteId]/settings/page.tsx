export const revalidate = 0

import {ChevronLeft} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {SubmitButton} from "@/app/components/dashboard/SubmitButtons";
import {UploadImageForm} from "@/app/components/dashboard/forms/UploadImageForm";
import {DeleteSite} from "@/app/actions";
import {updateSiteAction} from "@/app/actions";
import {prisma} from "@/app/utils/db";

export default async function SettingsSiteRoute({ params }: { params: Promise<{ siteId: string }> }) {
    const { siteId } = await params;

    // Fetch current site data
    const site = await prisma.site.findUnique({ where: { id: siteId } });

    return (
        <>
            <div className="flex items-center gap-x-2 mb-6">
                <Button variant="outline" size="icon" asChild>
                    <Link href={`/dashboard/sites/${siteId}/analytics`}>
                        <ChevronLeft className="size-4" />
                    </Link>
                </Button>
                <h3 className="text-xl font-semibold">Go Back</h3>
            </div>

            <UploadImageForm siteId={siteId} />

            {/* Edit Site Info Card */}
            <Card className="mb-6">
                <CardHeader>
                    <CardTitle>Edit Site Info</CardTitle>
                    <CardDescription>
                        Update your site’s name, description, or subdirectory.
                    </CardDescription>
                </CardHeader>
                <form action={updateSiteAction}>
                    <input type="hidden" name="siteId" value={siteId} />
                    <div className="px-6 pb-2 flex flex-col gap-4">
                        <div>
                            <label className="block mb-1 text-sm font-medium" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="w-full border rounded-lg px-3 py-2 text-base"
                                name="name"
                                id="name"
                                type="text"
                                required
                                defaultValue={site?.name || ""}
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm font-medium" htmlFor="description">
                                Description
                            </label>
                            <input
                                className="w-full border rounded-lg px-3 py-2 text-base"
                                name="description"
                                id="description"
                                type="text"
                                required
                                defaultValue={site?.description || ""}
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm font-medium" htmlFor="subdirectory">
                                Subdirectory
                            </label>
                            <input
                                className="w-full border rounded-lg px-3 py-2 text-base"
                                name="subdirectory"
                                id="subdirectory"
                                type="text"
                                required
                                defaultValue={site?.subdirectory || ""}
                            />
                        </div>
                    </div>
                    <CardFooter>
                        <SubmitButton text="Save Changes" />
                    </CardFooter>
                </form>
            </Card>

            {/* Danger Card */}
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
                        <input type="hidden" name="siteId" value={siteId} />
                        <SubmitButton text="Delete Everything" variant="destructive" />
                    </form>
                </CardFooter>
            </Card>
        </>
    );
}
