import React, { useState, useContext } from 'react';

import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/formElements/Input';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators';

import { useHttpClient } from '../../shared/hooks/Http-hook';
import { AuthContext } from '../../shared/context/auth-context';
import { useForm } from '../../shared/hooks/form-hook';
import styles from './forgetPassword.module.scss';

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
  const API =
    process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_BACKEND_URL
      : 'http://localhost:5000';
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const responseData = await sendRequest(
        `${API}/auth/send-email`,
        'POST',
        JSON.stringify({
          email: formState.inputs.email.value,
        }),
        {
          'Content-Type': 'application/json',
        }
      );
      console.log(responseData);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {/* CREATE AN ERROR MODAL video 150 */}
      <ErrorModal error={error} onClear={clearError} />

      <Card className={styles.auth}>
        {isLoading && <LoadingSpinner asOverlay />}
        <div className={styles.auth__heading}>
          <h2>Forget Password</h2>
        </div>
        <form className={styles.auth__form} onSubmit={handleSubmit}>
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
              validators={[VALIDATOR_EMAIL(), VALIDATOR_REQUIRE()]}
              errorText={[
                'Please enter a valid email address.',
                'Please enter a valid email.',
              ]}
              onInput={inputHandler}
              isWeeklyForm={false}
            />
          </div>
          <div className={styles.auth__form__btns}>
            <button
              className={styles.auth__form__btns__btn}
              type='submit'
              disabled={!formState.isValid}
            >
              SEND
            </button>
            <button
              className={styles.auth__form__btns__btn}
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
