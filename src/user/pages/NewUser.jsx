import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHttpClient } from '../../shared/hooks/Http-hook';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators';
import Input from '../../shared/components/formElements/Input';
import styles from './auth.module.scss';
import Card from '../../shared/components/UIElements/Card';
import { useForm } from '../../shared/hooks/form-hook';
import { AuthContext } from '../../shared/context/auth-context';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import Select from '../../shared/components/formElements/Select';
import {
  ROLES,
  ACTIVE_OPTIONS,
} from '../../shared/components/formElements/Select';

const NewUser = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [formState, inputHandler, setFormData] = useForm(
    {
      name: {
        value: '',
        isValid: false,
      },
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
      active: {
        value: '',
        isValid: false,
      },
      roles: {
        value: '',
        isValid: false,
      },
    },
    false
  );
  const [isCreateMode, setIsCreateMode] = useState(true);

  const switchModeHandler = () => {
    if (!isCreateMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false,
          },
        },
        false
      );
    }
    setIsCreateMode((prevMode) => !prevMode);
  };
  const createNewUserHandler = async (event) => {
    event.preventDefault();
    try {
      const responseData = await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/users',
        'POST`,
        JSON.stringify({
          name: formState.inputs.name.value,
          email: formState.inputs.email.value,
          password: formState.inputs.password.value,
          active: formState.inputs.active.value,
          roles: formState.inputs.roles.value,
        }),
        {
          'Content-Type': 'application/json',
        }
      );
      console.log('Response Data:', responseData);

      navigate('/home');
    } catch (err) {
      console.log('error message:', err);
    }
  };
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
    <>
      <ErrorModal error={error} onClear={clearError} />
      <Card className={styles.auth}>
        {isLoading && <LoadingSpinner asOverlay />}
        <div className={styles.auth__heading}>
          <h2>create new user</h2>
        </div>
        <form onSubmit={createNewUserHandler} className={styles.auth__form}>
          <div className={styles.auth__form__item}>
            <Input
              element='input'
              id='name'
              type='text'
              label='Full Name'
              validators={[VALIDATOR_REQUIRE()]}
              isWeeklyForm={false}
              errorText='Please enter your name.'
              onInput={inputHandler}
            />
          </div>
          <div className={styles.auth__form__item}>
            <Input
              id='email'
              element='input'
              type='email'
              label='E-mail'
              validators={[VALIDATOR_EMAIL, VALIDATOR_REQUIRE]}
              errorText='Please enter a valid email address.'
              onInput={inputHandler}
              isWeeklyForm={false}
            />
          </div>
          <div className={styles.auth__form__item}>
            <Input
              id='password'
              element='input'
              type='password'
              label='Password'
              validators={[VALIDATOR_MINLENGTH(8), VALIDATOR_REQUIRE]}
              errorText='Please enter a valid password with at least 8 character.'
              onInput={inputHandler}
            />
          </div>
          <div className={styles.auth__form__selectContainer}>
            <Select
              id='roles'
              element='select'
              type='select'
              label='Assigned Roles'
              errorText='Please select a role.'
              onInput={inputHandler}
              options={options}
              initialValue={formState.inputs.roles.value}
            />
          </div>
          <div className={styles.auth__form__selectContainer}>
            <Select
              id='active'
              element='select'
              type='select'
              label='Active'
              errorText='Please select a status.'
              onInput={inputHandler}
              options={activeOptions}
              initialValue={formState.inputs.active.value}
            />
          </div>
          <button
            className={styles.auth__form__btn}
            type='submit'
            disabled={!formState.isValid}
          >
            {isCreateMode ? 'CREATE USER' : 'EDIT USER'}
          </button>
        </form>
      </Card>
    </>
  );
};

export default NewUser;
