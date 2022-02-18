import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { CREATE_MESSAGE } from '../../redux/constants';

import { ReactComponent as Icon } from '../../assets/Icon Send.svg';

import styles from './Input.module.css';

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
    setCurrentValue('');
  };

  const handleChange = ({ target: { value } }) => {
    setCurrentValue(value);
  };

  return (
    <section className={styles.section}>
      <input
        type="text"
        onChange={(event) => handleChange(event)}
        placeholder={'Text me'}
        className={styles.input}
        value={currentValue}
      />
      <button
        type="button"
        onClick={handleSumbit}
        value="Send"
        className={styles.button}
      >
        <Icon />
      </button>
    </section>
  );
};

export default Input;
