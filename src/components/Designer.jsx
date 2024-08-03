"use client";
import React from "react";
import DesignerSidebar from "./DesignerSidebar";
import { useDndMonitor, useDroppable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";
import useDesigner from "./hooks/useDesigner";
import { FormElements } from "./FormElements";
import { idGenerator } from "@/lib/idGenerator";
import DesignerElementWrapper from "./DesignerElementWrapper";

const Designer = () => {
  const { elements, addElement, setSelectedElement, selectedElement } =
    useDesigner();

  const droppable = useDroppable({
    id: "designer-drop-area",
    data: {
      isDesignerDropArea: true,
    },
  });

  useDndMonitor({
    onDragEnd: (event) => {
      const { active, over } = event;
      if (!active || !over) return;

      const isDesignerBtnElement = active.data?.current?.isDesignerBtnElement;

      if (isDesignerBtnElement) {
        const type = active?.data?.current?.type;
        const newElement = FormElements[type].construct(idGenerator());
        addElement(0, newElement);
      }
    },
  });

  return (
    <div className="flex w-full h-full">
      <div
        className="w-full p-4"
        onClick={() => {
          if (selectedElement) setSelectedElement(null);
        }}
      >
        <div
          ref={droppable.setNodeRef}
          className={cn(
            "bg-background h-full m-auto rounded-xl flex flex-col flex-grow items center justify-start flex-1 max-w-[920px]",
            droppable.isOver && "ring-2 ring-primary/20"
          )}
        >
          {!droppable.isOver && elements.length === 0 && (
            <p className="text-3xl text-muted-foreground flex flex-grow items-center justify-center font-bold">
              Drop here
            </p>
          )}
          {droppable.isOver && elements.length === 0 && (
            <div className="p-4 w-full">
              <div className="h-[120px] rounded-md bg-primary/20"></div>
            </div>
          )}
          {elements.length > 0 && (
            <div className="flex flex-col  w-full gap-2 p-4">
              {elements.map((element) => (
                <DesignerElementWrapper key={element.id} element={element} />
              ))}
            </div>
          )}
        </div>
      </div>
      <DesignerSidebar />
    </div>
  );
};

export default Designer;
