import React, { useReducer } from 'react';

import styles from './input.module.scss';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: '',
    isValid: false,
  });
  const changeHandler = (event) => {
    dispatch({ type: 'CHANGE', val: event.target.value });
  };
  const element = props.element === 'input' && (
    <input
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      onChange={changeHandler}
      value={inputState.value}
    />
  );
  return (
    <div
      className={`${styles.container} ${!inputState.isValid && styles.invalid}`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
