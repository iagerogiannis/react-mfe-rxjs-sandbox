import React from 'react';
import styles from './handlers.module.css';

const Handlers = ({ countStore }) => {
  return (
    <div className={styles.handlers}>
      <button onClick={countStore.decrement}>-1</button>
      <button onClick={countStore.increment}>+1</button>
    </div>
  );
};

export default Handlers;
