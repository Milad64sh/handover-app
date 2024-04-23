import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/formElements/Input';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/Http-hook';
import { AuthContext } from '../../shared/context/auth-context';

import styles from './auth.module.scss';

const API =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_BACKEND_URL
    : 'http://localhost:5000';
const Auth = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

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

  const authSubmitHandler = async (event) => {
    event.preventDefault();

    if (isLoginMode) {
      try {
        const responseData = await sendRequest(
          `${API}/auth`,
          'POST',
          JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          }),
          { 'Content-Type': 'application/json' }
        );
        auth.login(
          responseData.userId,
          responseData.token,
          responseData.isManager,
          responseData.isAdmin,
          responseData.status,
          responseData.name
        );
        console.log('responseData:', responseData);
      } catch (err) {
        console.log('error is:', err);
      }
    } else {
      try {
        const responseData = await sendRequest(
          `${API}/users/signup`,
          'POST',
          JSON.stringify({
            name: formState.inputs.name.value,
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
            isManager: false,
            isAdmin: false,
            status: 'Employee',
          }),
          {
            'Content-Type': 'application/json',
          }
        );
        auth.login(
          responseData.userId,
          responseData.token,
          false,
          false,
          'Employee',
          responseData.name
        );
      } catch (err) {
        console.log('formState:', formState);
        console.log(err);
      }
    }
  };

  return (
    <>
      {/* CREATE AN ERROR MODAL video 150 */}
      <ErrorModal error={error} onClear={clearError} />

      <Card className={styles.auth}>
        {isLoading && <LoadingSpinner asOverlay />}
        <div className={styles.auth__heading}>
          <h2>Login Required</h2>
        </div>
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
          <button
            className={styles.auth__form__btn}
            type='submit'
            disabled={!formState.isValid}
          >
            {isLoginMode ? 'LOGIN' : 'SIGNUP'}
          </button>
        </form>
        <div className={styles.auth__form__access}>
          <div className={styles.auth__form__access__forgetPass}>
            <NavLink className={styles.link} to={'/forget-password'}>
              Forgot Password?
            </NavLink>
          </div>
          <div className={styles.auth__form__access__signup}>
            <span>New User?</span>
            <button
              className={styles.auth__form__access__signup__btn}
              reverse
              onClick={switchModeHandler}
            >
              &nbsp;Create Account
            </button>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Auth;
