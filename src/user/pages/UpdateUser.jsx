import React, { useEffect, useState, useRef, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
import Select from '../../shared/components/formElements/Select';
import { ROLES } from '../../shared/components/formElements/Select';

const UpdateUser = () => {
  const [loadedUser, setLoadedUser] = useState();
  const auth = useContext(AuthContext);
  const { isLoading, sendRequest } = useHttpClient();
  const navigate = useNavigate();
  const userId = useParams().userId;
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
      active: {
        value: true,
        isValid: false,
      },
      roles: {
        value: 'Employee',
        isValid: false,
      },
    },
    false
  );
  const isCreateMode = !userId; // Assuming userId is falsy for new user creation

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/users/${userId}`
        );
        setLoadedUser(responseData.user);
        console.log(responseData.user);
        setFormData({
          name: {
            value: responseData.user.name,
            isValid: true,
          },
          email: {
            value: responseData.user.email,
            isValid: true,
          },
          active: {
            value: responseData.user.active,
            isValid: true,
          },
          roles: {
            value: responseData.user.roles,
            isValid: true,
          },
        });
      } catch (err) {
        console.log(err);
      }
    };

    fetchUser();
  }, [sendRequest, userId, setFormData, isCreateMode]);

  const updateUserSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await sendRequest(
        `http://localhost:5000/api/users/${userId}`,
        'POST', // Assuming POST is used for both creating and updating
        JSON.stringify({
          name: formState.inputs.name.value,
          email: formState.inputs.email.value,
          active: formState.inputs.active.value,
          roles: formState.inputs.roles.value,
        }),
        {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + auth.token,
        }
      );
    } catch (err) {
      console.log(err);
    }
    navigate('/users');
  };

  const options = Object.values(ROLES).map((role) => (
    <option key={role} value={role}>
      {role}
    </option>
  ));

  if (isLoading) {
    return <LoadingSpinner asOverlay />;
  }

  return (
    <Card className={styles.auth}>
      <div className={styles.auth__heading}>
        <h2>{isCreateMode ? 'Create New User' : 'Edit User'}</h2>
      </div>
      {!isLoading && loadedUser && (
        <form onSubmit={updateUserSubmitHandler} className={styles.auth__form}>
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
              initialValue={loadedUser.name}
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
              initialValue={loadedUser.email}
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
              errorText='Please enter a valid password with at least 8 characters.'
              onInput={inputHandler}
              initialValue={loadedUser.value}
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
              initialValue={loadedUser.roles}
            />
          </div>
          <button
            className={styles.auth__form__btn}
            type='submit'
            // disabled={!formState.isValid}
          >
            {isCreateMode ? 'CREATE USER' : 'EDIT USER'}
          </button>
        </form>
      )}
    </Card>
  );
};

export default UpdateUser;
