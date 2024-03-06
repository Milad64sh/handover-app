import React, { useState, useEffect, useContext } from 'react';
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

const NewUser = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    false
  );
  const [isCreateMode, setIsCreateMode] = useState(true);
  const [username, setUsername] = useState('');
  const [validUsername, setValidUsername] = useState(false);
  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [roles, setRoles] = useState(['Employee']);

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
        'http://localhost:5000/api/users',
        'POST',
        JSON.stringify({
          name: formState.inputs.name.value,
          email: formState.inputs.email.value,
          password: formState.inputs.password.value,
        }),
        {
          'Content-Type': 'application/json',
        }
      );
      auth.login(
        responseData.userId,
        responseData.token,
        responseData.isManager,
        responseData.isAdmin,
        responseData.status
      );
    } catch (err) {
      console.log('formState:', formState);
      console.log(err);
    }
  };

  return (
    <>
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
              validators={[VALIDATOR_EMAIL]}
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
              validators={[VALIDATOR_MINLENGTH(8)]}
              errorText='Please enter a valid password with at least 8 character.'
              onInput={inputHandler}
            />
          </div>
          <div className={styles.auth__form__item}>
            <Input
              id='password'
              element='input'
              type='password'
              label='Password'
              validators={[VALIDATOR_MINLENGTH(8)]}
              errorText='Please enter a valid password with at least 8 character.'
              onInput={inputHandler}
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
