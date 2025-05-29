// This starts from 05:12:45
"use client"



import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Atom} from "lucide-react";
import {Textarea} from "@/components/ui/textarea";
import Image from "next/image";
import {UploadDropzone} from "@/app/utils/UploadthingsComponents";
import {toast} from "sonner";
import TailwindEditor from "@/app/components/dashboard/EditorWrapper";
import {SubmitButton} from "@/app/components/dashboard/SubmitButtons";
import React from "react";

export function EditArticleForm(){

    return(

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
                    <form className = "flex flex-col gap-6"
                          id={form.id}
                          onSubmit={form.onSubmit}
                          action={action}>  {/*this is a form submission*/}

                        <input
                            type="hidden"
                            name="siteId"
                            value={params.siteId}
                        />

                        <div className="grid gap-2">

                            <Label>Title</Label>
                            <Input  //*all this inside <Input> is connection to conform I think
                                key={fields.title.key}

                                name={fields.title.name}
                                defaultValue={fields.title.initialValue}
                                placeholder="Next js blogging application"
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                            />
                            <p className="text-red-500 text-sm">{fields.title.errors}</p>
                        </div>
                        <div className="grid gap-2">
                            <Label>Slug</Label>
                            <Input
                                key={fields.slug.key}
                                name={fields.slug.name}
                                defaultValue={fields.slug.initialValue}
                                placeholder="Article Slug"
                                onChange={(e) => setSlugValue(e.target.value)}
                                value={slug}

                            />
                            <p className="text-red-500 text-sm">{fields.slug.errors}</p>
                            <Button onClick={handleSlugGeneration} className="w-fit" variant="secondary" type="button">
                                <Atom className="size-4 mr-2"/> Generate Slug
                            </Button>
                        </div>

                        <div className="grid gap-2">

                            <Label>Small Description</Label>
                            <Textarea
                                key={fields.smallDescription.key}
                                name={fields.smallDescription.name}
                                defaultValue={fields.smallDescription.initialValue}
                                placeholder="Small description for your blog..."
                                className="h-32"/>
                            <p className="text-red-500 text-sm">{fields.smallDescription.errors}</p>
                        </div>

                        <div className="grid gap-2">
                        <Label>Cover Image</Label>
                        <input
                            type="hidden"
                            name={fields.coverImage.name}
                            key={fields.coverImage.key}
                            defaultValue={fields.coverImage.initialValue}
                            value={imageUrl}
                        />

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

                            <p className="text-red-500 text-sm">{fields.coverImage.errors}</p>

                        </div>

                    <div className="grid gap-2">
                        <Label> Article Content </Label>
                        <input type="hidden"
                               name={fields.articleContent.name}
                               key={fields.articleContent.key}
                               defaultValue={fields.articleContent.initialValue}
                               value={JSON.stringify(value)} //here some weird sheaningas, i guess we stringify first, pass through zod? then json again before uploading to database.
                               />
                        <TailwindEditor onChange={setValue} initialValue={value}/> {/*Here we have a setter which sets value of value to the text inside Tailwind editor*/}
                        <p className="text-red-500 text-sm">
                            {fields.articleContent.errors}
                        </p>


                    </div>
                        <SubmitButton text={"Create Article"} />

                    </form>
                </CardContent >

            </Card>



    )


}

