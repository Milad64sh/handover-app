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

import { useHttpClient } from '../../shared/hooks/Http-hook';
import { AuthContext } from '../../shared/context/auth-context';
import { useForm } from '../../shared/hooks/form-hook';
import styles from '../../user/pages/auth.module.scss';

const ForgetPassword = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
    },
    false
  );
  return (
    <>
      {/* CREATE AN ERROR MODAL video 150 */}
      <ErrorModal error={error} onClear={clearError} />

      <Card className={styles.auth}>
        {isLoading && <LoadingSpinner asOverlay />}
        <div className={styles.auth__heading}>
          <h2>Forget Password</h2>
        </div>
        <form className={styles.auth__form}>
          <div className={styles.auth__form__text}>
            <span>
              Please enter your email address and follow the procedure sent to
              your email.
            </span>
          </div>
          <div className={styles.auth__form__item}>
            <Input
              id='email'
              element='input'
              type='email'
              label='Enter Your E-mail'
              validators={[VALIDATOR_EMAIL]}
              errorText='Please enter a valid email address.'
              onInput={inputHandler}
              isWeeklyForm={false}
            />
          </div>
          <div className={styles.auth__form__btns}>
            <button
              className={styles.auth__form__btn}
              type='submit'
              disabled={!formState.isValid}
            >
              SEND
            </button>
            <button
              className={styles.auth__form__btn}
              type='submit'
              disabled={!formState.isValid}
            >
              CANCEL
            </button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default ForgetPassword;
