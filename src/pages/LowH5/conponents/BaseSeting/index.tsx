import React, { useState } from 'react';
import styles from './index.less';

const LowWarp: React.FC = () => {
  const [userLoginState, setUserLoginState] = useState<API.LoginResult>({});
  const [type, setType] = useState<string>('account');

  return <div className={styles.container}>2222</div>;
};

export default LowWarp;
