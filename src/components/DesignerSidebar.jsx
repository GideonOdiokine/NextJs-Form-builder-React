import React from "react";
import SidebarBtnElement from "./SidebarBtnElement";
import { FormElements } from "./FormElements";
import useDesigner from "./hooks/useDesigner";
import FormElementSidebar from "./FormElementSidebar";
import PropertiesFormSidebar from './PropertiesFormSidebar';

function DesignerSidebar() {
  const { selectedElement } = useDesigner();
  return (
    <aside className="w-[400px] max-w-[400px] flex flex-col flex-grow gap-2 border-l-2 border-muted p-4 bg-background overflow-auto ">
      {!selectedElement && <FormElementSidebar />}
      {selectedElement && (
        <PropertiesFormSidebar selectedElement={selectedElement} />
      )}
    </aside>
  );
}

export default DesignerSidebar;
