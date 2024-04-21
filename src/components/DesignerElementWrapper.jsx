import React from "react";
import { FormElements } from "./FormElements";

const DesignerElementWrapper = ({ element }) => {
  const DesignerElement = FormElements[element.type]?.designerComponent;

  return (
    <div className="flex w-full h-[120px] items-center rounded-md bg-accent/40 px-4 py-2 pointer-events-none">
      <DesignerElement elementInstance={element} />
    </div>
  );
};

export default DesignerElementWrapper;
