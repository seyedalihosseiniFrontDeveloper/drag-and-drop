import React from 'react';
import styles from '../styles/Content.module.css';
import ParentBox from './ParentBox.jsx';
import ParentDraggable from './ParentDraggable.jsx';


function Content() {
  return (
    <div className={styles.content}>
      <ParentBox title='اگه می تونی منوجا به جا کن'>
        <ParentDraggable />
      </ParentBox>
    </div>
  );
}

export default Content;
