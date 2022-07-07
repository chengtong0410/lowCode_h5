import React, { useState } from 'react';
import BaseDorp from './conponents/BaseDorp';
import BaseSeting from './conponents/BaseSeting';
import { useDrop, useDrag } from 'react-dnd';
import styles from './index.less';

const LowWarp: React.FC = () => {
  const [list, setList] = useState([]);

  const [{ isOver, isOverCurrent }, drop] = useDrop({
    accept: 'drop',
    drop(item, monitor) {},
    hover(item, monitor) {},
  });
  return (
    <div className={styles.container}>
      <BaseDorp />
      <div ref={drop} className={styles.center}>
        {list.map((l, i) => (
          <div key={l.label + i}>{l.label}</div>
        ))}
      </div>
      <BaseSeting />
    </div>
  );
};

export default LowWarp;
