import React from "react";
import { FormElements } from "./FormElements";

const DesignerElementWrapper = ({ element }) => {
  const DesignerElement = FormElements[element.type]?.designerComponent;

  return <DesignerElement elementInstance={element} />;
};

export default DesignerElementWrapper;
