import React, { useReducer, useEffect } from 'react';

import { validate } from '../../util/validators';
import styles from './select.module.scss';

const selectReducer = (state, action) => {
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
const Select = (props) => {
  const [selectState, dispatch] = useReducer(selectReducer, {
    value: props.initialValue || '',
    isValid: props.initialValid || false,
    isTouched: false,
  });

  const { id, onSelect } = props;
  const { value, isValid } = selectState;

  useEffect(() => {
    props.onSelect(id, value, isValid);
  }, [id, value, isValid, onSelect]);

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

  const select = props.select === 'select' && (
    <textarea
      id={props.id}
      rows={props.rows || 5}
      columns={props.column || 30}
      onChange={changeHandler}
      onBlur={touchHandler}
      value={selectState.value}
    />
  );
  return <div></div>;
};

export default Select;
