"use client";

import { useState } from "react";
import { UploadDropzone } from "@/app/utils/UploadthingsComponents";
import { toast } from "sonner";

export default function UploadImageOnly() {
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);

  return (
    <div className="max-w-md mx-auto mt-10">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Uploaded"
          className="w-full h-auto rounded-lg shadow"
        />
      ) : (
        <UploadDropzone
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            setImageUrl(res?.[0]?.url);
            toast.success("Image has been uploaded");
          }}
          onUploadError={() => toast.error("Upload failed")}
          appearance={{
            container:
              "border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition",
          }}
        />
      )}
    </div>
  );
}