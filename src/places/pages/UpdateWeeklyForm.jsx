import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/Http-hook';
import { AuthContext } from '../../shared/context/auth-context';
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators';
import Input from '../../shared/components/formElements/Input';
import Textarea from '../../shared/components/formElements/Textarea';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import styles from './weeklyForm.module.scss';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

const UpdateWeeklyForm = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedForm, setLoadedForm] = useState();
  const weeklyFormId = useParams().formId;

  const navigate = useNavigate();
  const [formState, inputHandler, setFormData] = useForm(
    {
      service: {
        value: '',
        isValid: false,
      },
      week: {
        value: '',
        isValid: false,
      },
      staff: {
        value: auth.name,
        isValid: true,
      },
      question_1: {
        value: '',
        isValid: false,
      },
      question_2: {
        value: '',
        isValid: false,
      },
      question_3: {
        value: '',
        isValid: false,
      },
      question_4: {
        value: '',
        isValid: false,
      },
      question_5: {
        value: '',
        isValid: false,
      },
      question_6: {
        value: '',
        isValid: false,
      },
      question_7: {
        value: '',
        isValid: false,
      },
      question_8: {
        value: '',
        isValid: false,
      },
      question_9: {
        value: '',
        isValid: false,
      },
      question_10: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    const fetchForm = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/weekly-handovers/${weeklyFormId}`
        );
        setLoadedForm(responseData.form);
        setFormData(
          {
            service: {
              value: responseData.form.service,
              isValid: true,
            },
            week: {
              value: responseData.form.week,
              isValid: true,
            },
            staff: {
              value: auth.name,
              isValid: true,
            },
            question_1: {
              value: responseData.form.question_1,
              isValid: true,
            },
            question_2: {
              value: responseData.form.question_2,
              isValid: true,
            },
            question_3: {
              value: responseData.form.question_3,
              isValid: true,
            },
            question_4: {
              value: responseData.form.question_4,
              isValid: true,
            },
            question_5: {
              value: responseData.form.question_5,
              isValid: true,
            },
            question_6: {
              value: responseData.form.question_6,
              isValid: true,
            },
            question_7: {
              value: responseData.form.question_7,
              isValid: true,
            },
            question_8: {
              value: responseData.form.question_8,
              isValid: true,
            },
            question_9: {
              value: responseData.form.question_9,
              isValid: true,
            },
            question_10: {
              value: responseData.form.question_10,
              isValid: true,
            },
          },
          true
        );
      } catch (err) {
        console.log(err);
      }
    };
    fetchForm();
  }, [sendRequest, weeklyFormId, setFormData, auth.name]);

  const updatedFormSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await sendRequest(
        `http://localhost:5000/api/weekly-handovers/${weeklyFormId}`,
        'POST',
        JSON.stringify({
          service: formState.inputs.service.value,
          week: formState.inputs.week.value,
          staff: auth.name,
          question_1: formState.inputs.question_1.value,
          question_2: formState.inputs.question_2.value,
          question_3: formState.inputs.question_3.value,
          question_4: formState.inputs.question_4.value,
          question_5: formState.inputs.question_5.value,
          question_6: formState.inputs.question_6.value,
          question_7: formState.inputs.question_7.value,
          question_8: formState.inputs.question_8.value,
          question_9: formState.inputs.question_9.value,
          question_10: formState.inputs.question_10.value,
        }),
        {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + auth.token,
        }
      );
    } catch (err) {
      console.error('Error sending PATCH request:', err);
    }
    navigate(`/${auth.userId}/forms`);
  };

  if (isLoading) {
    return <LoadingSpinner asOverlay />;
  }
  if (!loadedForm && !error) {
    return <h2>Could not find form!</h2>;
  }

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      <div className={styles.container}>
        <div className={styles.container__title}>
          <h2>weekly checks</h2>
        </div>
        {!isLoading && loadedForm && (
          <form
            className={styles.container__form}
            onSubmit={updatedFormSubmitHandler}
          >
            <div className={styles.container__form__general}>
              <div className={styles.container__form__general__item}>
                <Input
                  id='service'
                  element='input'
                  type='text'
                  label='Service'
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText='Please enter a valid service'
                  onInput={inputHandler}
                  initialValue={loadedForm.service}
                  initialValid={true}
                />
              </div>
              <div className={styles.container__form__general__item}>
                <Input
                  id='week'
                  element='input'
                  type='date'
                  label='Week'
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText='Please enter a valid date'
                  onInput={inputHandler}
                  initialValue={loadedForm.week}
                  initialValid={true}
                />
              </div>
              {/* <div className={styles.container__form__general__item}>
                <Input
                  id='staff'
                  element='input'
                  type='text'
                  label='Staff'
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText='Please enter a valid name'
                  onInput={inputHandler}
                  initialValue={auth.name}
                  disabled={true}
                  initialValid={true}
                />
              </div> */}
            </div>
            {/* MAINTENANCE */}
            <div className={styles.container__form__sectionMain}>
              <div className={styles.container__form__sectionMain__title}>
                <h3>maintenance reports</h3>
              </div>
              <div className={styles.container__form__sectionMain__questions}>
                <div
                  className={
                    styles.container__form__sectionMain__questions__section
                  }
                >
                  <div
                    className={
                      styles.container__form__sectionMain__questions__section__title
                    }
                  >
                    <h3>
                      Reg 9 Person-centred care, Reg 12 Safe care and treatment,
                      Reg 13 Safeguarding service users
                    </h3>
                  </div>

                  <Textarea
                    id='question_1'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Is there evedience that staff are completing weekly
                  maintenance reports?'
                    errorText='Please explain in more detail'
                    initialValue={loadedForm.question_1}
                    initialValid={true}
                  />

                  <Textarea
                    id='question_2'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Is there any outstanding maintenace issues for the service?'
                    errorText='Please explain in more detail'
                    initialValue={loadedForm.question_2}
                    initialValid={true}
                  />
                </div>
                <div
                  className={
                    styles.container__form__sectionMain__questions__section
                  }
                >
                  <div
                    className={
                      styles.container__form__sectionMain__questions__section__title
                    }
                  >
                    <h3>Eterior Property</h3>
                  </div>

                  <Textarea
                    id='question_3'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Is the exterior of the property in good order?'
                    errorText='Please explain in more detail'
                    initialValue={loadedForm.question_3}
                    initialValid={true}
                  />

                  <Textarea
                    id='question_4'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Is the exterior of the property in good order?'
                    errorText='Please explain in more detail'
                    initialValue={loadedForm.question_4}
                    initialValid={true}
                  />
                  <Textarea
                    id='question_5'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Are there any health and safety issues in regards to the house
                  and garden? Have these been reported?'
                    errorText='Please explain in more detail'
                    initialValue={loadedForm.question_5}
                    initialValid={true}
                  />
                </div>
              </div>
            </div>

            {/* FINANCE */}
            <div className={styles.container__form__sectionMain}>
              <div className={styles.container__form__sectionMain__title}>
                <h3>finance checks</h3>
              </div>
              <div className={styles.container__form__sectionMain__questions}>
                <div
                  className={
                    styles.container__form__sectionMain__questions__section
                  }
                >
                  <div
                    className={
                      styles.container__form__sectionMain__questions__section__title
                    }
                  >
                    <h3>Reg 13 Safeguarding</h3>
                  </div>
                  <Textarea
                    id='question_6'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Have receipts been scanned for the previous week?'
                    errorText='Please explain in more detail'
                    initialValue={loadedForm.question_6}
                    initialValid={true}
                  />
                </div>
              </div>
            </div>

            {/* INFECTION */}
            <div className={styles.container__form__sectionMain}>
              <div className={styles.container__form__sectionMain__title}>
                <h3>infection control</h3>
              </div>
              <div className={styles.container__form__sectionMain__questions}>
                <div
                  className={
                    styles.container__form__sectionMain__questions__section
                  }
                >
                  <div
                    className={
                      styles.container__form__sectionMain__questions__section__title
                    }
                  >
                    <h3>Reg 15 premises and equipment</h3>
                  </div>
                  <Textarea
                    id='question_7'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Is there sufficient arrangements in place and appropriate
                  plastic bags to deal appropriately with household waste and
                  recycling? when was this checked and by who?'
                    errorText='Please explain in more detail'
                    initialValue={loadedForm.question_7}
                    initialValid={true}
                  />
                  <Textarea
                    id='question_8'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Are there adequate stock supplies of hand wash and hand
                  sanitiser?'
                    errorText='Please explain in more detail'
                    initialValue={loadedForm.question_8}
                    initialValid={true}
                  />
                </div>
              </div>
            </div>

            {/* TASK */}
            <div className={styles.container__form__sectionMain}>
              <div className={styles.container__form__sectionMain__title}>
                <h3>task</h3>
              </div>
              <div className={styles.container__form__sectionMain__questions}>
                <div
                  className={
                    styles.container__form__sectionMain__questions__section
                  }
                >
                  <div
                    className={
                      styles.container__form__sectionMain__questions__section__title
                    }
                  >
                    <h3>Reg 12 Safeguarding</h3>
                  </div>
                  <Textarea
                    id='question_9'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='First aid box checked?'
                    errorText='Please explain in more detail'
                    initialValue={loadedForm.question_9}
                    initialValid={true}
                  />
                </div>
              </div>
            </div>

            {/* TASK */}
            <div className={styles.container__form__sectionMain}>
              <div className={styles.container__form__sectionMain__title}>
                <h3>task</h3>
              </div>
              <div className={styles.container__form__sectionMain__questions}>
                <div
                  className={
                    styles.container__form__sectionMain__questions__section
                  }
                >
                  <div
                    className={
                      styles.container__form__sectionMain__questions__section__title
                    }
                  >
                    <h3>Reg 15 Premises and equipment</h3>
                  </div>
                  <Textarea
                    id='question_10'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Fire alarms and carbon monoxide alarms checked?'
                    errorText='Please explain in more detail'
                    initialValue={loadedForm.question_10}
                    initialValid={true}
                  />
                </div>
              </div>
            </div>
            <button
              className={styles.container__form__btnWeekly}
              type='submit'
              disabled={!formState.isValid}
            >
              UPDATE FORM
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default UpdateWeeklyForm;
