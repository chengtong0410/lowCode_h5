import React, { useState } from 'react';
import { dorpList } from '../../index.data';

import DorgWarp from '../DorgWarp';
import styles from './index.less';

const LowWarp: React.FC = () => {
  return (
    <div className={styles.container}>
      {dorpList.map((c) => (
        <DorgWarp {...c} key={c.label}>
          {c.label}
        </DorgWarp>
      ))}
    </div>
  );
};

export default LowWarp;
