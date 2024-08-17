import { GetFormContentByUrl } from "@/actions/form";
import FormSubmitComponent from "@/components/FormSubmitComponent";
import React from "react";

async function SubmitPage({
  params,
}) {
  const form = await GetFormContentByUrl(params.formUrl);

  if (!form) {
    throw new Error("form not found");
  }

  const formContent = JSON.parse(form.content)

  return <FormSubmitComponent formUrl={params.formUrl} content={formContent} />;

}

export default SubmitPage;
