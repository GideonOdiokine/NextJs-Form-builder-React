"use client";

import { Label } from "../ui/label";
import { RiSeparator } from "react-icons/ri";
import { Separator } from "../ui/separator";



export const SeparatorFieldFormElement = {
  type: "SeparatorField",
  construct: (id) => ({
    id,
    type: "SeparatorField",
  }),
  designerBtnElement: {
    icon: RiSeparator,
    label: "Separator field",
  },
  designerComponent: DesignerComponent,
  formComponent: FormComponent,
  propertiesComponent: PropertiesComponent,

  validate: () => true,
};

function DesignerComponent({
  elementInstance,
}) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <Label className="text-muted-foreground">Separator field</Label>
      <Separator />
    </div>
  );
}

function FormComponent({
  elementInstance,
}) {
  return <Separator />;
}

function PropertiesComponent({
  elementInstance,
}) {
  return <p>No properties for this element</p>;
}
