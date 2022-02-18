import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Message from './Message';
import { DELETE_MESSAGE } from '../../redux/constants'

const Messages = () => {
  const dispatch = useDispatch();
  const { messages } = useSelector((state) => state);
  const deleteMessageHandler = (id) => {
    dispatch({ type: DELETE_MESSAGE, payload: id });
  };

  return (
    <section>
      {messages.map((message) => (
        <Message message={message} deleteHandler={deleteMessageHandler} key={message.id} />
      ))}
    </section>
  );
};

export default Messages;
