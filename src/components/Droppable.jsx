import React from 'react';
import { useDrop } from 'react-dnd';
import styles from '../styles/Droppable.module.css';

function Droppable({ accept, handleDrop, text, children, state, big, style }) {
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept,
      drop: (item, monitor) => handleDrop(item, monitor, state),
      collect: (monitor) => ({
        isOver: !!monitor.isOver({ shallow: false }),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [state]
  );

  //const isActive = isOver && canDrop;

  return (
    <div
      className={`${styles.droppable} 
      } ${big && styles.big}`}
      style={style}
      ref={drop}
    >
      <div >{text}</div>
      {children}
    </div>
  );
}

export default Droppable;
