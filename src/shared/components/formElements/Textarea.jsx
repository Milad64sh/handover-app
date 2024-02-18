import React, { useReducer, useEffect } from 'react';

import { validate } from '../../util/validators';
import styles from './textarea.module.scss';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case 'TOUCH': {
      return {
        ...state,
        isTouched: true,
      };
    }

    default:
      return state;
  }
};

const Textarea = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: '',
    isValid: false,
    isTouched: false,
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    props.onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = (event) => {
    dispatch({
      type: 'CHANGE',
      val: event.target.value,
      validators: props.validators,
    });
  };
  // VALIDATE INPUT ON SUBMIT
  const touchHandler = () => {
    dispatch({
      type: 'TOUCH',
    });
  };

  const element = props.element === 'textarea' && (
    <textarea
      id={props.id}
      rows={props.rows || 5}
      columns={props.column || 30}
      onChange={changeHandler}
      onBlur={touchHandler}
      value={inputState.value}
    />
  );

  return (
    <div
      className={`${styles.container} ${
        !inputState.isValid && inputState.isTouched && styles.inValid
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};

export default Textarea;
