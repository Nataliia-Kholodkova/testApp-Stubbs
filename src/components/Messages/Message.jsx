import React from 'react';

function Message({ message, deleteHandler }) {
  const { text, date, id } = message;
  return (
    <div
      onClick={() => {
        deleteHandler(id);
      }}
    >
      <p>{text}</p>
      <time>{date.toLocaleString('eu-ua', { hour: '2-digit', minute: '2-digit' })}</time>
    </div>
  );
}

export default Message;
