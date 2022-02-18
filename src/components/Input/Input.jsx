import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { CREATE_MESSAGE } from '../../redux/constants';

const Input = () => {
  const dispatch = useDispatch();
  const [currentValue, setCurrentValue] = useState('');
  const handleSumbit = () => {
    const date = new Date();
    const id = date.getTime() + Math.round(Math.random() * 10);
    dispatch({
      type: CREATE_MESSAGE,
      payload: { date, id, text: currentValue },
    });
    setCurrentValue("");
  };

  const handleChange = ({ target: { value } }) => {
    setCurrentValue(value);
  };

  return (
    <section>
      <input type='text' onChange={(event) => handleChange(event)} />
      <button type='button' onClick={handleSumbit}>
        Send
      </button>
    </section>
  );
};

export default Input;
