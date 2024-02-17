import React, { useReducer } from 'react';
import styles from './textarea.module.scss';

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

const Textarea = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: '',
    isValid: false,
  });
  const changeHandler = (event) => {
    dispatch({ type: 'CHANGE', val: event.target.value });
  };
  const element = props.element === 'textarea' && (
    <textarea
      id={props.id}
      rows={props.rows || 5}
      columns={props.column || 30}
      onChange={changeHandler}
      value={inputState.value}
    />
  );

  return (
    <div className={`${styles.container}`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
    </div>
  );
};

export default Textarea;
