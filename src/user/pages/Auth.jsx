import React, { useState, useContext } from 'react';
import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/formElements/Input';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { AuthContext } from '../../shared/context/auth-context';

import styles from './auth.module.scss';

const Auth = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
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
  const switchModeHandler = () => {
    if (!isLoginMode) {
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
    setIsLoginMode((prevMode) => !prevMode);
  };

  const authSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
    auth.login();
  };
  return (
    <Card className={styles.auth}>
      <h2>Login Required</h2>
      <form onSubmit={authSubmitHandler} className={styles.auth__form}>
        <div className={styles.auth__form__item}>
          {!isLoginMode && (
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
          )}
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
        <button type='submit' disabled={!formState.isValid}>
          {isLoginMode ? 'LOGIN' : 'SIGNUP'}
        </button>
      </form>
      <button reverse onClick={switchModeHandler}>
        {isLoginMode ? 'SIGNUP' : 'LOGIN'}
      </button>
    </Card>
  );
};

export default Auth;
