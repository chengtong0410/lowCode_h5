import React, { useState } from 'react';
import styles from './index.less';

const LowWarp: React.FC = () => {
  const [userLoginState, setUserLoginState] = useState<API.LoginResult>({});
  const [type, setType] = useState<string>('account');

  return (
    <div className={styles.container}>
      <div className={styles.header}>组件配置</div>
      <div className={styles.block} />
    </div>
  );
};

export default LowWarp;
