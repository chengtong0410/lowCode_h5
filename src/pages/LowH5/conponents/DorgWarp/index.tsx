import React, { useState, useRef } from 'react';
import { useDrag } from 'react-dnd';

export default function DorgWarp(props) {
  const { label, itemType } = props;

  const [{ isDragging }, drag] = useDrag({
    item: { type: 'drop', label, itemType },
    type: 'drop',
  });
  return <div ref={drag}>{props.children}</div>;
}
