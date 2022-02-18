import React from 'react';

import styles from './Messages.module.css';

function Message({ message, deleteHandler }) {
  const { text, date, id } = message;
  return (
    <li
      className={styles.message}
      onClick={() => {
        deleteHandler(id);
      }}
    >
      <p className={styles.text}>{text}</p>
      <p className={styles.time}>
        <time>
          {date.toLocaleString('ua-ua', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
          })}
        </time>
      </p>
    </li>
  );
}

export default Message;
