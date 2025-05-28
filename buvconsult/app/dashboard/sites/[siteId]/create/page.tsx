"use client"


import {Button} from "@/components/ui/button";
import Link from "next/link";
import {ArrowLeft, Atom} from "lucide-react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import React, {ReactNode, useState} from "react";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import Image from "next/image"
import {UploadDropzone} from "@/app/utils/UploadthingsComponents";
import {toast} from "sonner";
import {JSONContent} from "novel";
import TailwindEditor from "@/app/components/dashboard/EditorWrapper";



export default function ArticleCreationRoute({params,}:{params: {siteId:string}}){

    const [imageUrl, setImageUrl] = useState<undefined | string > (undefined)
    const [value, setValue] = useState<JSONContent | undefined >(undefined)


    return (
        <>
    <div className="flex items-center">
        <Button size ="icon" variant="outline" className="mr-3" asChild>
            <Link href={`/dashboard/sites/${params.siteId}`}>

                <ArrowLeft className="size-4"/>

            </Link>
        </Button>
        <h1 className="text-xl font-semibold">Create Article</h1>

    </div>

            <Card>
                <CardHeader>
                    <CardTitle>
                        Article Details
                    </CardTitle>
                    <CardDescription>
                        Lipsum whatever bla bla this is ok project
                    </CardDescription>
               </CardHeader>
                <CardContent>
                    <form className = "flex flex-col gap-6">

                        <div className="grid gap-2">

                            <Label>Title</Label>
                            <Input placeholder="Next js blogging application"/>
                        </div>
                        <div className="grid gap-2">
                            <Label>Slug</Label>
                            <Input placeholder="Article Slug"/>
                            <Button className="w-fit" variant="secondary" type="button">
                                <Atom className="size-4 mr-2"/> Generate Slug
                            </Button>
                        </div>

                        <div className="grid gap-2">

                            <Label>Small Description</Label>
                            <Textarea placeholder="Small description for your blog..."
                            className="h-32"/>
                        </div>

                        <div className="grid gap-2">
                            <Label>Cover Image</Label>


                            {imageUrl ? (
                                 <Image
                                src={imageUrl}
                                alt="Uploaded Image"
                                className="object-cover w-[200px] h-[200px] rounded-lg"
                                width = {200}
                                height = {400}
                                />

                            ):(


                                <UploadDropzone onClientUploadComplete={(res) => {
                                setImageUrl(res[0].url)
                                    toast.success('Image has been uploaded')
                                }}
                                endpoint="imageUploader"
                                onUploadError={() => {
                                    toast.error('Something went wrong')
                                }}

                                />

                            ) }

                        </div>

                    <div className="grid gap-2">
                        <Label> Article Content </Label>
                        <TailwindEditor onChange={setValue} initialValue={value}/>


                    </div>

                    </form>
                </CardContent>

            </Card>

    </>)}
