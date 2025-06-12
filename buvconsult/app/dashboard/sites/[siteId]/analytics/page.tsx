

import gptResponse from "@/app/api/invoices/extract/route";


export default async function gptClient(){

  const response = await gptResponse()
  const data = JSON.parse(response);
  const pretty = JSON.stringify(data, null, 2);

  return (

      <pre>{pretty}</pre>
  )

}