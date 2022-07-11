import React, { useState, useRef } from 'react';
import { useDrag, DragPreviewImage } from 'react-dnd';
import second from '@/accets/images/pay-icon3.png';
export default function DorgWarp(props) {
  const { label, itemType } = props;

  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: 'drop', label, itemType, select: true },
    type: 'drop',
  });

  return (
    <>
      {/* <DragPreviewImage connect={preview} src={second} /> */}
      <div ref={drag}>{props.children}</div>
    </>
  );
}
