import React, { useState } from 'react';
import { dorpList } from '../../index.data';

import DorgWarp from '../DorgWarp';
import styles from './index.less';

const LowWarp: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>基础组件</div>
      <div className={styles.block} />
      <div className={styles['dorg-list']}>
        {dorpList.map((c) => (
          <DorgWarp {...c} key={c.label}>
            <div className={styles['dorg-item']}>{c.label}</div>
          </DorgWarp>
        ))}
      </div>
    </div>
  );
};

export default LowWarp;
