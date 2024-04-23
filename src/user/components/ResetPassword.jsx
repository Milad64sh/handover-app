import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Card from '../../shared/components/UIElements/Card';
import Input from '../../shared/components/formElements/Input';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
  VALIDATOR_EQUAL,
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/Http-hook';

import styles from './resetPassword.module.scss';

const API =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_BACKEND_URL
    : 'http://localhost:5000';
const ResetPassword = () => {
  // const auth = useContext(AuthContext);
  const token = useParams().token;
  const navigate = useNavigate();

  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [formState, inputHandler, setFormData] = useForm(
    {
      password: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const resetSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const responseData = await sendRequest(
        `${API}/auth/reset-password/`,
        'POST',
        JSON.stringify({
          token: token,
          password: formState.inputs.password.value,
        }),
        {
          'Content-Type': 'application/json',
        }
      );

      console.log(responseData); // Handle response data as needed
      navigate('/auth');
    } catch (error) {
      console.log(error);
    }
  };
  console.log(token);

  return (
    <>
      {/* CREATE AN ERROR MODAL video 150 */}
      <ErrorModal error={error} onClear={clearError} />

      <Card className={styles.auth}>
        {isLoading && <LoadingSpinner asOverlay />}
        <div className={styles.auth__heading}>
          <h2>Reset Password</h2>
        </div>
        <form onSubmit={resetSubmitHandler} className={styles.auth__form}>
          <div className={styles.auth__form__item}>
            <Input
              id='password'
              element='input'
              type='password'
              // label='Password'
              placeholder='Password'
              validators={[VALIDATOR_MINLENGTH(8), VALIDATOR_REQUIRE()]}
              errorTexts={[
                '* Please enter a valid password with at least 8 characters.',
                '* This field is required.',
              ]}
              onInput={inputHandler}
              isResetPassword={true}
            />
          </div>
          <div className={styles.auth__form__item}>
            <Input
              id='confirmPassword'
              element='input'
              type='password'
              // label='Confirm Password'
              placeholder='Confirm Password'
              validators={[
                VALIDATOR_MINLENGTH(8),
                VALIDATOR_REQUIRE(),
                VALIDATOR_EQUAL(formState.inputs.password.value),
              ]}
              errorTexts={[
                '* Please enter a valid password with at least 8 characters.',
                '* This field is required.',
                '* Passwords do not match.',
              ]}
              isResetPassword={true}
              onInput={inputHandler}
            />
          </div>
          <button
            className={styles.auth__form__btn}
            type='submit'
            // disabled={!formState.isValid}
          >
            SUBMIT
          </button>
        </form>
      </Card>
    </>
  );
};

export default ResetPassword;
