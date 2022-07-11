import React, { useState, useEffect } from 'react';
import BaseDorp from './conponents/BaseDorp';
import BaseSeting from './conponents/BaseSeting';
import { useDrop, useDrag } from 'react-dnd';
import { Input, Button } from 'antd';
import DordCardItem from './conponents/DordCardItem';
import styles from './index.less';

const LowWarp: React.FC = () => {
  const [list, setList] = useState([]);
  const [srcString, setSrcString] = useState('');
  const [selectItem, setSelectItem] = useState('');
  const [urlIpt, setUrlIpt] = useState('https://frontend-cdn.henhenchina.com/image/starWorker.jpg');

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: 'drop',
    drop(item, monitor) {
      if (!item.select) {
        setList([...list, item]);
      } else {
        console.log('🚀 ~ file: index.tsx ~ line 17 ~ drop ~ item', item);
        setSelectItem(item);
      }
    },
    hover(item, monitor) {},
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });
  const handleUrlTextChange = (e) => {
    setUrlIpt(e.target.value);
  };
  const handleAddImgSrc = () => {
    setSrcString(urlIpt);
  };
  const handleClearImgSrc = () => {
    setSrcString('');
    setList([]);
  };
  const handleEnd = (e) => {
    console.log(selectItem);

    console.log('🚀 ~ file: index.tsx ~ line 38 ~ handleEnd ~ e', e);
  };
  useEffect(() => {
    window.addEventListener('mouseup', () => {
      console.log(22221);
    });

    return () => {};
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles['img-url']}>
        <Input
          value={urlIpt}
          className={styles['url-card']}
          onInput={handleUrlTextChange}
          placeholder="请输入图片URL"
        />
        <Button className={styles['add-btn']} type="primary" onClick={handleAddImgSrc}>
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
              <div key={l.label + i} onDragEnd={handleEnd}>
                <DordCardItem>
                  <div className={styles['list-item']}>{l.label}</div>
                </DordCardItem>
              </div>
            ))}
          </div>
        </div>
        <BaseSeting />
      </div>
    </div>
  );
};

export default LowWarp;
