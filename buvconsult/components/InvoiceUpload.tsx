"use client";

import {use, useActionState, useState} from "react";
import { UploadDropzone } from "@/app/utils/UploadthingsComponents";
import { toast } from "sonner";
import {saveInvoiceToDB} from "@/app/actions";
import {SubmitButton} from "@/app/components/dashboard/SubmitButtons";


export default function InvoiceUpload({params}:
{params: Promise<{siteId:string}>
}){
    const {siteId} = use(params)
    const [fileUrls, setFileUrls] = useState<string []>([]);
    const [_, action] = useActionState(saveInvoiceToDB, undefined);

  return (

      <div>

          <form

              action={action}>

              <input type="hidden" name="siteId" value={siteId}/>
              <input type="hidden" name="fileUrls" value={JSON.stringify(fileUrls)}/>


              <div className="max-w-md mb-10 mx-auto mt-10">

                  <UploadDropzone
                      endpoint="fileUploader"
                      onClientUploadComplete={(res) => {
                          setFileUrls(res.map((file) => file.url));
                          toast.success("Image has been uploaded");
                      }}
                      onUploadError={() => toast.error("Upload failed")}
                      appearance={{
                          container:
                              "border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition",
                      }}
                  />

              </div>
              <div className = "flex justify-center">
              <SubmitButton text={"save to database"}/>
                  </div>
          </form>




      </div>

  );
}