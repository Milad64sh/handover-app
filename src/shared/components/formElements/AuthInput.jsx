import React, { useEffect, useReducer } from 'react';

import { validate } from '../../util/validators';
import styles from './authInput.module.scss';

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

const AuthInput = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || '',
    isValid: props.initialValid || false,
    isTouched: props.valid || false,
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

  const touchHandler = () => {
    dispatch({
      type: 'TOUCH',
    });
  };
  const element = props.element === 'input' && (
    <input
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      onChange={changeHandler}
      onBlur={touchHandler}
      value={inputState.value}
    />
  );
  return (
    <div className={styles.container}>
      <label htmlFor={props.id}>{props.label}</label>
      <div
        className={`${styles.container__content}  ${
          !inputState.isValid && inputState.isTouched && styles.invalid
        }`}
      >
        {element}
        {!inputState.isValid && inputState.isTouched && (
          <p>{props.errorText}</p>
        )}
      </div>
    </div>
  );
};

export default AuthInput;
