"use client";

import { MdTextFields } from "react-icons/md";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

export const TextFieldFormElement = {
  type: "TextField",
  construct: (id) => ({
    id,
    type: "TextField",
    extraAttributes: {
      label: "Text field",
      helperText: "Helper text",
      required: false,
      placeHolder: "Value here...",
    },
  }),
  designerBtnElement: {
    icon: MdTextFields,
    label: "Text Field",
  },
  designerComponent: DesignerComponent,
  formComponent: () => <div>Form Component</div>,
  propertiesComponent: () => <div>Properties Component</div>,
};

function DesignerComponent({ elementInstance }) {
  const element = elementInstance;
  const { label, placeHolder, required, helperText } = element.extraAttributes;
  return (
    <div className="flex flex-col gap-2 w-full">
      <Label>
        {label}
        {required && "*"}
      </Label>
      <Input readOnly disabled placeholder={placeHolder} />
      {helperText && (
        <p className="text-muted-foreground text-[0.8rem]">{helperText}</p>
      )}
    </div>
  );
}
