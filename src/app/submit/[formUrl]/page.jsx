import { GetFormContentByUrl } from "@/actions/form";
// import FormSubmitComponent from "@/components/FormSubmitComponent";
import React from "react";

async function SubmitPage({
  params,
}) {
  const form = await GetFormContentByUrl(params.formUrl);

  console.log(params)
  if (!form) {
    throw new Error("form not found");
  }

  const formContent = JSON.parse(form.content)

//   return <FormSubmitComponent formUrl={params.formUrl} content={formContent} />;
return (
    <h2>Hello</h2>
)
}

export default SubmitPage;
