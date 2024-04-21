import React from "react";
import { FormElements } from "./FormElements";
import { useDroppable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";

const DesignerElementWrapper = ({ element }) => {
  const topHalf = useDroppable({
    id: element.id + "-top",
    data: {
      type: element.type,
      elementId: element.id,
      isTopHalfDesignerElement: true,
    },
  });
  const bottomHalf = useDroppable({
    id: element.id + "-bottom",
    data: {
      type: element.type,
      elementId: element.id,
      isBottomHalfDesignerElement: true,
    },
  });

  const DesignerElement = FormElements[element.type]?.designerComponent;

  return (
    <div className="relative h-[120px] flex flex-col text-foreground hover:cursor-pointer rounded-md ring-1 ring-accent ring-inset">
      <div
        ref={topHalf.setNodeRef}
        className="absolute w-full h-1/2 rounded-t-md"
      />
      <div
        ref={bottomHalf.setNodeRef}
        className="absolute  w-full bottom-0 h-1/2 rounded-b-md"
      />
      <div className="flex w-full h-[120px] items-center rounded-md bg-accent/40 px-4 py-2 pointer-events-none">
        {topHalf.isOver && (
          <div className="absolute top-0 w-full rounded-md h-[7px] bg-primary rounded-b-none" />
        )}
        <div
          className={cn(
            "flex w-full h-[120px] items-center rounded-md bg-accent/40 px-4 py-2 pointer-events-none opacity-100"
            // mouseIsOver && "opacity-30"
          )}
        >
          <DesignerElement elementInstance={element} />
        </div>
        {bottomHalf.isOver && (
          <div className="absolute bottom-0 w-full rounded-md h-[7px] bg-primary rounded-t-none" />
        )}
      </div>
    </div>
  );
};

export default DesignerElementWrapper;
