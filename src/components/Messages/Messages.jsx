import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Message from './Message';
import { DELETE_MESSAGE } from '../../redux/constants';

import styles from './Messages.module.css';

const Messages = () => {
  const dispatch = useDispatch();
  const { messages } = useSelector((state) => state);
  const deleteMessageHandler = (id) => {
    dispatch({ type: DELETE_MESSAGE, payload: id });
  };

  return (
    <section className={styles.messages}>
      <ul className={styles.list}>
        {messages.map((message) => (
          <Message
            message={message}
            deleteHandler={deleteMessageHandler}
            key={message.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Messages;
