import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";

const SortableItem = ({
  stringImg,
  children,
}: {
  stringImg: string;
  children: React.ReactNode;
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: stringImg });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}>
      {children}
    </div>
  );
};

export default SortableItem;
