"use client";

import { ElementsType, FormElement, FormElementInstance } from "../FormElements";
import { Label } from "../ui/label";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import useDesigner from "../hooks/useDesigner";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { BsTextParagraph } from "react-icons/bs";
import { Textarea } from "../ui/textarea";


const extraAttributes = {
  text: "Text here",
};

const propertiesSchema = z.object({
  text: z.string().min(2).max(500),
});

export const ParagprahFieldFormElement = {
  type:'ParagraphField',
  construct: (id) => ({
    id,
    type:"ParagraphField",
    extraAttributes,
  }),
  designerBtnElement: {
    icon: BsTextParagraph,
    label: "Paragraph field",
  },
  designerComponent: DesignerComponent,
  formComponent: FormComponent,
  propertiesComponent: PropertiesComponent,

  validate: () => true,
};


function DesignerComponent({ elementInstance }) {
  const element = elementInstance;
  const { text } = element.extraAttributes;
  return (
    <div className="flex flex-col gap-2 w-full">
      <Label className="text-muted-foreground">Paragraph field</Label>
      <p className="truncate">{text}</p>
    </div>
  );
}

function FormComponent({ elementInstance }) {
  const element = elementInstance;

  const { text } = element.extraAttributes;
  return <p className="text-muted-foreground">{text}</p>;
}


function PropertiesComponent({ elementInstance }) {
  const element = elementInstance;
  const { updateElement } = useDesigner();
  const form = useForm<propertiesFormSchemaType>({
    resolver: zodResolver(propertiesSchema),
    mode: "onBlur",
    defaultValues: {
      text: element.extraAttributes.text,
    },
  });

  useEffect(() => {
    form.reset(element.extraAttributes);
  }, [element, form]);

  function applyChanges(values) {
    const { text } = values;
    updateElement(element.id, {
      ...element,
      extraAttributes: {
        text,
      },
    });
  }

  return (
    <Form {...form}>
      <form
        onBlur={form.handleSubmit(applyChanges)}
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="space-y-3"
      >
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Text</FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  {...field}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") e.currentTarget.blur();
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
