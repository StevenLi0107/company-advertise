import React, { memo, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

export const CardDnd = memo(({ moveCard, children, index, id }) => {
  const dragRef = useRef(null);

  const [, drop] = useDrop({
    accept: "Card",
    hover(item, monitor) {
      if (!dragRef.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = dragRef.current?.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveCard && moveCard(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  const [drag] = useDrag({
    //const [{ isDragging }, drag] = useDrag({
    type: "Card",
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  drag(drop(dragRef));

  return <div ref={dragRef}>{children}</div>;
});
