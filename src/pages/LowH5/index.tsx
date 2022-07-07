import React, { useState } from 'react';
import BaseDorp from './conponents/BaseDorp';
import BaseSeting from './conponents/BaseSeting';
import { useDrop, useDrag } from 'react-dnd';
import { Input, Button } from 'antd';
import styles from './index.less';

const LowWarp: React.FC = () => {
  const [list, setList] = useState([]);
  const [srcString, setSrcString] = useState('');
  const [urlIpt, setUrlIpt] = useState('https://frontend-cdn.henhenchina.com/image/starWorker.jpg');

  const [{ isOver, isOverCurrent }, drop] = useDrop({
    accept: 'drop',
    drop(item, monitor) {
      setList([...list, item]);
    },
    hover(item, monitor) {},
  });
  const handleUrlTextChange = (e) => {
    setUrlIpt(e.target.value);
  };
  const handleAddImgSrc = () => {
    setSrcString(urlIpt);
  };
  const handleClearImgSrc = () => {
    setSrcString('');
  };
  return (
    <div className={styles.container}>
      <div className={styles['img-url']}>
        <Input
          value={urlIpt}
          className={styles['url-card']}
          onInput={handleUrlTextChange}
          placeholder="请输入图片URL"
        />
        <Button type="primary" onClick={handleAddImgSrc}>
          添加图片
        </Button>
        <Button type="primary" onClick={handleClearImgSrc}>
          清除
        </Button>
      </div>
      <div className={styles.content}>
        <BaseDorp />
        <div ref={drop} className={styles.center}>
          {srcString && <img className="img-warp" src={srcString} alt="" />}
          <div className={styles['drop-warp']}>
            {list.map((l, i) => (
              <div key={l.label + i}>{l.label}</div>
            ))}
          </div>
        </div>
        <BaseSeting />
      </div>
    </div>
  );
};

export default LowWarp;
