"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ElementsType, FormElement, FormElementInstance } from "../FormElements";
import useDesigner from "../hooks/useDesigner";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import { LuHeading2 } from "react-icons/lu";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";



const extraAttributes = {
  title: "SubTitle field",
};

const propertiesSchema = z.object({
  title: z.string().min(2).max(50),
});

export const SubTitleFieldFormElement = {
  type: "SubTitleField",
  construct: (id) => ({
    id,
    type: "SubTitleField",
    extraAttributes,
  }),
  designerBtnElement: {
    icon: LuHeading2,
    label: "SubTitle field",
  },
  designerComponent: DesignerComponent,
  formComponent: FormComponent,
  propertiesComponent: PropertiesComponent,

  validate: () => true,
};


function DesignerComponent({ elementInstance }) {
  const element = elementInstance;
  const { title } = element.extraAttributes;
  return (
    <div className="flex flex-col gap-2 w-full">
      <Label className="text-muted-foreground">SubTitle field</Label>
      <p className="text-lg">{title}</p>
    </div>
  );
}

function FormComponent({ elementInstance }) {
  const element = elementInstance;

  const { title } = element.extraAttributes;
  return <p className="text-lg">{title}</p>;
}


function PropertiesComponent({ elementInstance }) {
  const element = elementInstance;
  const { updateElement } = useDesigner();
  const form = useForm<propertiesFormSchemaType>({
    resolver: zodResolver(propertiesSchema),
    mode: "onBlur",
    defaultValues: {
      title: element.extraAttributes.title,
    },
  });

  useEffect(() => {
    form.reset(element.extraAttributes);
  }, [element, form]);

  function applyChanges(values) {
    const { title } = values;
    updateElement(element.id, {
      ...element,
      extraAttributes: {
        title,
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
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
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
