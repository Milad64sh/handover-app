import React, { useEffect, useReducer } from 'react';

import { validate } from '../../util/validators';
import styles from './input.module.scss';

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

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || '',
    isValid: props.initialValid || false,
    isTouched: props.valid || false,
  });

  const { id, onInput, disabled } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    props.onInput(id, value, isValid);
  }, [id, value, isValid, onInput, disabled]);

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
      isWeeklyForm={props.isWeeklyForm}
      isResetPassword={props.isResetPassword}
      disabled={disabled}
    />
  );
  return (
    <div className={styles.container}>
      {/* {props.isWeeklyForm ? (
        <label className={styles.container__weeklyFormLabel} htmlFor={props.id}>
          {props.label}
        </label>
      ) : (
        <label className={styles.container__authLabel} htmlFor={props.id}>
          {props.label}
        </label>
      )}
      {props.isResetPassword && (
        <label className={styles.container__resetPassLabel} htmlFor={props.id}>
          {props.label}
        </label>
      )} */}
      <label
        className={`${
          props.isWeeklyForm
            ? styles.container__weeklyFormLabel
            : props.isResetPassword
            ? styles.container__resetPassLabel
            : styles.container__authLabel
        }`}
        htmlFor={props.id}
      >
        {props.label}
      </label>

      <div
        className={`${styles.container__content}  ${
          !inputState.isValid && inputState.isTouched && styles.invalid
        }`}
      >
        {element}
        {!inputState.isValid && inputState.isTouched && (
          <ul className={styles.container__content__ul}>
            {props.validators.map((validator, index) => {
              if (!validate(inputState.value, [validator])) {
                return (
                  <li className={styles.container__content__ul__li} key={index}>
                    {props.errorTexts[index]}
                  </li>
                );
              }
              return null;
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Input;
