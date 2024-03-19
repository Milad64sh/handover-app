import React, { useReducer, useEffect } from 'react';

import { validate } from '../../util/validators';
import styles from './select.module.scss';

const selectReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: [action.val],
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
export const ROLES = {
  Employee: 'Employee',
  Manager: 'Manager',
  Admin: 'Admin',
};
export const ACTIVE_OPTIONS = {
  active: 'Active',
  inactive: 'Inactive',
};
const Select = (props) => {
  const [selectState, dispatch] = useReducer(selectReducer, {
    value: props.initialValue || '',
    isValid: props.initialValid || false,
    isTouched: false,
  });

  const handleChange = (event) => {
    const selectedValue = event.target.value;

    dispatch({
      type: 'CHANGE',
      val: selectedValue,
      validators: props.validators || [],
    });
    props.onInput(props.id, selectedValue, true);
  };

  const handleBlur = () => {
    dispatch({ type: 'TOUCH' });
  };

  useEffect(() => {
    // When the initial value changes, update the state
    dispatch({
      type: 'CHANGE',
      val: props.initialValue || '',
      validators: props.validators || [],
    });
  }, [props.initialValue, props.validators]);

  const options = Object.values(ROLES).map((role) => {
    return (
      <option key={role} value={role}>
        {' '}
        {role}
      </option>
    );
  });
  const activeOptions = Object.values(ACTIVE_OPTIONS).map((active) => {
    return (
      <option key={active} value={active}>
        {' '}
        {active}
      </option>
    );
  });

  return (
    <div className={styles.container}>
      <label className={styles.container__authLabel} htmlFor={props.id}>
        {props.label}
      </label>
      <div
        className={`${styles.container__content}  ${
          !selectState.isValid && selectState.isTouched && styles.invalid
        }`}
      >
        <select
          id={props.id}
          value={selectState.value}
          onChange={handleChange}
          onBlur={handleBlur}
          className={styles.container__content__select}
        >
          <option value='' disabled hidden>
            Select an option
          </option>
          {props.label === 'Assigned Roles' ? options : activeOptions}
        </select>
        {!selectState.isValid && selectState.isTouched && (
          <p>{props.errorText}</p>
        )}
      </div>
    </div>
  );
};

export default Select;
