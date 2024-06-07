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
import Card from '../../shared/components/UIElements/Card';
import styles from './monthlyForm.module.scss';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

const UpdateMonthlyForm = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedForm, setLoadedForm] = useState();
  const monthlyFormId = useParams().formId;

  const navigate = useNavigate();
  const [formState, inputHandler, setFormData] = useForm(
    {
      service: {
        value: '',
        isValid: false,
      },
      month: {
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
      question_11: {
        value: '',
        isValid: false,
      },
      question_12: {
        value: '',
        isValid: false,
      },
      question_13: {
        value: '',
        isValid: false,
      },
      question_14: {
        value: '',
        isValid: false,
      },
      question_15: {
        value: '',
        isValid: false,
      },
      question_16: {
        value: '',
        isValid: false,
      },
      question_17: {
        value: '',
        isValid: false,
      },
      question_18: {
        value: '',
        isValid: false,
      },
      question_19: {
        value: '',
        isValid: false,
      },
      question_20: {
        value: '',
        isValid: false,
      },
      question_21: {
        value: '',
        isValid: false,
      },
      question_22: {
        value: '',
        isValid: false,
      },
      question_23: {
        value: '',
        isValid: false,
      },
      question_24: {
        value: '',
        isValid: false,
      },
      question_25: {
        value: '',
        isValid: false,
      },
      question_26: {
        value: '',
        isValid: false,
      },
      question_27: {
        value: '',
        isValid: false,
      },
      question_28: {
        value: '',
        isValid: false,
      },
      question_29: {
        value: '',
        isValid: false,
      },
      question_30: {
        value: '',
        isValid: false,
      },
      question_31: {
        value: '',
        isValid: false,
      },
      question_32: {
        value: '',
        isValid: false,
      },
      question_33: {
        value: '',
        isValid: false,
      },
      question_34: {
        value: '',
        isValid: false,
      },
      question_35: {
        value: '',
        isValid: false,
      },
      question_36: {
        value: '',
        isValid: false,
      },
      question_37: {
        value: '',
        isValid: false,
      },
      question_38: {
        value: '',
        isValid: false,
      },
      question_39: {
        value: '',
        isValid: false,
      },
      question_40: {
        value: '',
        isValid: false,
      },
      question_41: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    const fetchForm = async () => {
      try {
        // const responseData = await sendRequest(
        //   `${process.env.REACT_APP_BACKEND_URL}/monthly-handovers/${monthlyFormId}`
        // );
        const responseData = await sendRequest(
          `http://localhost:5000/monthly-handovers/${monthlyFormId}`
        );

        setLoadedForm(responseData.form);
        setFormData(
          {
            service: {
              value: responseData.form.service,
              isValid: true,
            },
            month: {
              value: responseData.form.month,
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
            question_11: {
              value: responseData.form.question_11,
              isValid: true,
            },
            question_12: {
              value: responseData.form.question_12,
              isValid: true,
            },
            question_13: {
              value: responseData.form.question_13,
              isValid: true,
            },
            question_14: {
              value: responseData.form.question_14,
              isValid: true,
            },
            question_15: {
              value: responseData.form.question_15,
              isValid: true,
            },
            question_16: {
              value: responseData.form.question_16,
              isValid: true,
            },
            question_17: {
              value: responseData.form.question_17,
              isValid: true,
            },
            question_18: {
              value: responseData.form.question_18,
              isValid: true,
            },
            question_19: {
              value: responseData.form.question_19,
              isValid: true,
            },
            question_20: {
              value: responseData.form.question_20,
              isValid: true,
            },
            question_21: {
              value: responseData.form.question_21,
              isValid: true,
            },
            question_22: {
              value: responseData.form.question_22,
              isValid: true,
            },
            question_23: {
              value: responseData.form.question_23,
              isValid: true,
            },
            question_24: {
              value: responseData.form.question_24,
              isValid: true,
            },
            question_25: {
              value: responseData.form.question_25,
              isValid: true,
            },
            question_26: {
              value: responseData.form.question_26,
              isValid: true,
            },
            question_27: {
              value: responseData.form.question_27,
              isValid: true,
            },
            question_28: {
              value: responseData.form.question_28,
              isValid: true,
            },
            question_29: {
              value: responseData.form.question_29,
              isValid: true,
            },
            question_30: {
              value: responseData.form.question_30,
              isValid: true,
            },
            question_31: {
              value: responseData.form.question_31,
              isValid: true,
            },
            question_32: {
              value: responseData.form.question_32,
              isValid: true,
            },
            question_33: {
              value: responseData.form.question_33,
              isValid: true,
            },
            question_34: {
              value: responseData.form.question_34,
              isValid: true,
            },
            question_35: {
              value: responseData.form.question_35,
              isValid: true,
            },
            question_36: {
              value: responseData.form.question_36,
              isValid: true,
            },
            question_37: {
              value: responseData.form.question_37,
              isValid: true,
            },
            question_38: {
              value: responseData.form.question_38,
              isValid: true,
            },
            question_39: {
              value: responseData.form.question_39,
              isValid: true,
            },
            question_40: {
              value: responseData.form.question_40,
              isValid: true,
            },
            question_41: {
              value: responseData.form.question_41,
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
  }, [sendRequest, monthlyFormId, setFormData, auth.name]);

  const updatedFormSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await sendRequest(
        // `${process.env.REACT_APP_BACKEND_URL}/monthly-handovers/${dailyFormId}`,
        `http://localhost:5000/monthly-handovers/${monthlyFormId}`,
        'POST',
        JSON.stringify({
          service: formState.inputs.service.value,
          month: formState.inputs.month.value,
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
          question_11: formState.inputs.question_11.value,
          question_12: formState.inputs.question_12.value,
          question_13: formState.inputs.question_13.value,
          question_14: formState.inputs.question_14.value,
          question_15: formState.inputs.question_15.value,
          question_16: formState.inputs.question_16.value,
          question_17: formState.inputs.question_17.value,
          question_18: formState.inputs.question_18.value,
          question_19: formState.inputs.question_19.value,
          question_20: formState.inputs.question_20.value,
          question_21: formState.inputs.question_21.value,
          question_22: formState.inputs.question_22.value,
          question_23: formState.inputs.question_23.value,
          question_24: formState.inputs.question_24.value,
          question_25: formState.inputs.question_25.value,
          question_26: formState.inputs.question_26.value,
          question_27: formState.inputs.question_27.value,
          question_28: formState.inputs.question_28.value,
          question_29: formState.inputs.question_29.value,
          question_30: formState.inputs.question_30.value,
          question_31: formState.inputs.question_31.value,
          question_32: formState.inputs.question_32.value,
          question_33: formState.inputs.question_33.value,
          question_34: formState.inputs.question_34.value,
          question_35: formState.inputs.question_35.value,
          question_36: formState.inputs.question_36.value,
          question_37: formState.inputs.question_37.value,
          question_38: formState.inputs.question_38.value,
          question_39: formState.inputs.question_39.value,
          question_40: formState.inputs.question_40.value,
          question_41: formState.inputs.question_41.value,
        }),
        {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + auth.token,
        }
      );
    } catch (err) {
      console.error('Error sending request to EDIT:', err);
    }
    navigate('/monthly-uploaded-forms');
  };

  if (isLoading) {
    return <LoadingSpinner asOverlay />;
  }
  if (!loadedForm && !error) {
    return (
      <>
        <div className={styles.noContent}>
          <div className={styles.noContent__content}>
            <Card>
              <h2>Could not find form!</h2>
            </Card>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && <LoadingSpinner asOverlay />}
      <div className={styles.container}>
        <div className={styles.container__title}>
          <h2>monthly checks</h2>
        </div>
        <form
          action=''
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
                isWeeklyForm={true}
                initialValid={true}
              />
            </div>
            <div className={styles.container__form__general__item}>
              <Input
                id='month'
                element='input'
                type='date'
                label='month'
                validators={[VALIDATOR_REQUIRE()]}
                errorText='Please select a month'
                onInput={inputHandler}
                initialValue={loadedForm.month}
                isWeeklyForm={true}
                initialValid={true}
              />
            </div>
          </div>
          {/* MAINTENANCE */}
          <div className={styles.container__form__sectionMain}>
            <div className={styles.container__form__sectionMain__title}>
              <h3>Household Checks (Reg 9, 12 and 15)</h3>
            </div>
            <div className={styles.container__form__sectionMain__questions}>
              <div
                className={
                  styles.container__form__sectionMain__questions__section
                }
              >
                <Textarea
                  id='question_1'
                  element='textarea'
                  type='text'
                  validators={[VALIDATOR_MINLENGTH(10)]}
                  onInput={inputHandler}
                  label='Is all furniture fit for purpose is it cleaned and well maintained. If there is fabric furniture, are they safety approved?'
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
                  label='Does the crockery reflect the risk assessments in place at the service?'
                  errorText='Please explain in more detail'
                  initialValue={loadedForm.question_2}
                  initialValid={true}
                />
                <Textarea
                  id='question_3'
                  element='textarea'
                  type='text'
                  validators={[VALIDATOR_MINLENGTH(10)]}
                  onInput={inputHandler}
                  label='Do any rooms need decorating or maintenance?'
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
                  label='Does any carpet need replacing or cleaning within the property?'
                  errorText='Please explain in more detail'
                  initialValue={loadedForm.question_4}
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
                  <h3>Medication (Reg 9, 12 and 15)</h3>
                </div>

                <Textarea
                  id='question_5'
                  element='textarea'
                  type='text'
                  validators={[VALIDATOR_MINLENGTH(10)]}
                  onInput={inputHandler}
                  label='Are all medication stock checks completed and the weekly Managers checks completed?'
                  errorText='Please explain in more detail'
                  initialValue={loadedForm.question_5}
                  initialValid={true}
                />

                <Textarea
                  id='question_6'
                  element='textarea'
                  type='text'
                  validators={[VALIDATOR_MINLENGTH(10)]}
                  onInput={inputHandler}
                  label='Has medication been ordered?'
                  errorText='Please explain in more detail'
                  initialValue={loadedForm.question_6}
                  initialValid={true}
                />
                <Textarea
                  id='question_7'
                  element='textarea'
                  type='text'
                  validators={[VALIDATOR_MINLENGTH(10)]}
                  onInput={inputHandler}
                  label='Has medication been booked in and out in the appropriate book?'
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
                  label='Have MAR charts been competed correctly, are there any gaps?'
                  errorText='Please explain in more detail'
                  initialValue={loadedForm.question_8}
                  initialValid={true}
                />
              </div>
            </div>
          </div>

          {/* INFECTION CONTROL */}
          <div className={styles.container__form__sectionMain}>
            <div className={styles.container__form__sectionMain__title}>
              <h3>Infection Control (Reg 15)</h3>
            </div>
            <div className={styles.container__form__sectionMain__questions}>
              <div
                className={
                  styles.container__form__sectionMain__questions__section
                }
              >
                <Textarea
                  id='question_9'
                  element='textarea'
                  type='text'
                  validators={[VALIDATOR_MINLENGTH(10)]}
                  onInput={inputHandler}
                  label='That adequate arrangements in place for dealing with clinical waste? What are these arrangements is that equipment in place or clinical waste bins collected and is there a contract in place for this?'
                  errorText='Please explain in more detail'
                  initialValue={loadedForm.question_9}
                  initialValid={true}
                />
                <Textarea
                  id='question_10'
                  element='textarea'
                  type='text'
                  validators={[VALIDATOR_MINLENGTH(10)]}
                  onInput={inputHandler}
                  label='Was the mattress turned and aired this month what date did this happen and who was involved? Is the mattress and bedding in good condition?'
                  errorText='Please explain in more detail'
                  initialValue={loadedForm.question_10}
                  initialValid={true}
                />
              </div>
            </div>
          </div>

          {/* INFECTION */}
          <div className={styles.container__form__sectionMain}>
            <div className={styles.container__form__sectionMain__title}>
              <h3>Room Cleaning (Reg 15)</h3>
            </div>
            <div className={styles.container__form__sectionMain__questions}>
              <div
                className={
                  styles.container__form__sectionMain__questions__section
                }
              >
                <Textarea
                  id='question_11'
                  element='textarea'
                  type='text'
                  validators={[VALIDATOR_MINLENGTH(10)]}
                  onInput={inputHandler}
                  label='Were the skirting boards cleaned this month? If so, what day and by who?'
                  errorText='Please explain in more detail'
                  initialValue={loadedForm.question_11}
                  initialValid={true}
                />
                <Textarea
                  id='question_12'
                  element='textarea'
                  type='text'
                  validators={[VALIDATOR_MINLENGTH(10)]}
                  onInput={inputHandler}
                  label='Have cobwebs been removed?'
                  errorText='Please explain in more detail'
                  initialValue={loadedForm.question_12}
                  initialValid={true}
                />
                <Textarea
                  id='question_13'
                  element='textarea'
                  type='text'
                  validators={[VALIDATOR_MINLENGTH(10)]}
                  onInput={inputHandler}
                  label='Is paintwork clean?'
                  errorText='Please explain in more detail'
                  initialValue={loadedForm.question_13}
                  initialValid={true}
                />
                <Textarea
                  id='question_14'
                  element='textarea'
                  type='text'
                  validators={[VALIDATOR_MINLENGTH(10)]}
                  onInput={inputHandler}
                  label='Are there any marks on the wall and if so what has been done to address this?'
                  errorText='Please explain in more detail'
                  initialValue={loadedForm.question_14}
                  initialValid={true}
                />
                <Textarea
                  id='question_15'
                  element='textarea'
                  type='text'
                  validators={[VALIDATOR_MINLENGTH(10)]}
                  onInput={inputHandler}
                  label='Do radiators have covers, and if no are they needed? Are these clean?'
                  errorText='Please explain in more detail'
                  initialValue={loadedForm.question_15}
                  initialValid={true}
                />
                <Textarea
                  id='question_16'
                  element='textarea'
                  type='text'
                  validators={[VALIDATOR_MINLENGTH(10)]}
                  onInput={inputHandler}
                  label='Is flooring clean then satisfactory condition?'
                  errorText='Please explain in more detail'
                  initialValue={loadedForm.question_16}
                  initialValid={true}
                />
                <Textarea
                  id='question_17'
                  element='textarea'
                  type='text'
                  validators={[VALIDATOR_MINLENGTH(10)]}
                  onInput={inputHandler}
                  label='Does the room need redecoration or repair and if so, what has been done about this and by Who?'
                  errorText='Please explain in more detail'
                  initialValue={loadedForm.question_17}
                  initialValid={true}
                />
                <Textarea
                  id='question_18'
                  element='textarea'
                  type='text'
                  validators={[VALIDATOR_MINLENGTH(10)]}
                  onInput={inputHandler}
                  label='Have lamp shades been cleaned, dusted, light switched been cleaned, windowsills, door handles and are the rooms free of odours?'
                  errorText='Please explain in more detail'
                  initialValue={loadedForm.question_18}
                  initialValid={true}
                />
              </div>
            </div>
          </div>

          {/* TASK */}
          <div className={styles.container__form__sectionMain}>
            <div className={styles.container__form__sectionMain__title}>
              <h3>Fire Safety and Health & Safety </h3>
            </div>
            <div className={styles.container__form__sectionMain__questions}>
              <div
                className={
                  styles.container__form__sectionMain__questions__section
                }
              >
                <Textarea
                  id='question_19'
                  element='textarea'
                  type='text'
                  validators={[VALIDATOR_MINLENGTH(10)]}
                  onInput={inputHandler}
                  label='What date did the most recent fire drill take place?'
                  errorText='Please explain in more detail'
                  initialValue={loadedForm.question_19}
                  initialValid={true}
                />
                <Textarea
                  id='question_20'
                  element='textarea'
                  type='text'
                  validators={[VALIDATOR_MINLENGTH(10)]}
                  onInput={inputHandler}
                  label='Who took part in the fire drill?'
                  errorText='Please explain in more detail'
                  initialValue={loadedForm.question_20}
                  initialValid={true}
                />
                <Textarea
                  id='question_21'
                  element='textarea'
                  type='text'
                  validators={[VALIDATOR_MINLENGTH(10)]}
                  onInput={inputHandler}
                  label='How long did it take to evacuate?'
                  errorText='Please explain in more detail'
                  initialValue={loadedForm.question_21}
                  initialValid={true}
                />
                <Textarea
                  id='question_22'
                  element='textarea'
                  type='text'
                  validators={[VALIDATOR_MINLENGTH(10)]}
                  onInput={inputHandler}
                  label='Did anyone refuse to evacuate?'
                  errorText='Please explain in more detail'
                  initialValue={loadedForm.question_22}
                  initialValid={true}
                />
                <Textarea
                  id='question_23'
                  element='textarea'
                  type='text'
                  validators={[VALIDATOR_MINLENGTH(10)]}
                  onInput={inputHandler}
                  label='Were they able to take their work mobiles with them when they evacuated. Please discuss the importance of this because Work mobiles contain important phone numbers and all care planning information.'
                  errorText='Please explain in more detail'
                  initialValue={loadedForm.question_23}
                  initialValid={true}
                />
                <Textarea
                  id='question_24'
                  element='textarea'
                  type='text'
                  validators={[VALIDATOR_MINLENGTH(10)]}
                  onInput={inputHandler}
                  label='Any matters arising or concerns highlighted following the fire drill?'
                  errorText='Please explain in more detail'
                  initialValue={loadedForm.question_24}
                  initialValid={true}
                />
                <Textarea
                  id='question_25'
                  element='textarea'
                  type='text'
                  validators={[VALIDATOR_MINLENGTH(10)]}
                  onInput={inputHandler}
                  label='Any health and safety concerns arising from the fire drill.'
                  errorText='Please explain in more detail'
                  initialValue={loadedForm.question_25}
                  initialValid={true}
                />
                <Textarea
                  id='question_26'
                  element='textarea'
                  type='text'
                  validators={[VALIDATOR_MINLENGTH(10)]}
                  onInput={inputHandler}
                  label='Was the grab bag accessible and taken with Staff during evacuation?'
                  errorText='Please explain in more detail'
                  initialValue={loadedForm.question_26}
                  initialValid={true}
                />
                <Textarea
                  id='question_27'
                  element='textarea'
                  type='text'
                  validators={[VALIDATOR_MINLENGTH(10)]}
                  onInput={inputHandler}
                  label='Are there any barriers to take the grab bag with you?'
                  errorText='Please explain in more detail'
                  initialValue={loadedForm.question_27}
                  initialValid={true}
                />
                <Textarea
                  id='question_28'
                  element='textarea'
                  type='text'
                  validators={[VALIDATOR_MINLENGTH(10)]}
                  onInput={inputHandler}
                  label='Any health and safety discussions or education, taking place this month with the people we support. If so, what was covered?'
                  errorText='Please explain in more detail'
                  initialValue={loadedForm.question_28}
                  initialValid={true}
                />
                <Textarea
                  id='question_29'
                  element='textarea'
                  type='text'
                  validators={[VALIDATOR_MINLENGTH(10)]}
                  onInput={inputHandler}
                  label='If there is an alarm system, when was this last serviced; The requirement is annually, is this in date?'
                  errorText='Please explain in more detail'
                  initialValue={loadedForm.question_29}
                  initialValid={true}
                />
                <Textarea
                  id='question_30'
                  element='textarea'
                  type='text'
                  validators={[VALIDATOR_MINLENGTH(10)]}
                  onInput={inputHandler}
                  label='There are fire extinguishers. When; the requirement annually is this in date?'
                  errorText='Please explain in more detail'
                  initialValue={loadedForm.question_30}
                  initialValid={true}
                />
                <Textarea
                  id='question_31'
                  element='textarea'
                  type='text'
                  validators={[VALIDATOR_MINLENGTH(10)]}
                  onInput={inputHandler}
                  label='Were the smoke alarms tested weekly can you see evidence of this in the handover book?'
                  errorText='Please explain in more detail'
                  initialValue={loadedForm.question_31}
                  initialValid={true}
                />
                <Textarea
                  id='question_32'
                  element='textarea'
                  type='text'
                  validators={[VALIDATOR_MINLENGTH(10)]}
                  onInput={inputHandler}
                  label='Were there any service or repair requirements from the testing of the smoke alarms and if so, has this been arranged?'
                  errorText='Please explain in more detail'
                  initialValue={loadedForm.question_32}
                  initialValid={true}
                />
                <Textarea
                  id='question_33'
                  element='textarea'
                  type='text'
                  validators={[VALIDATOR_MINLENGTH(10)]}
                  onInput={inputHandler}
                  label='Were there any service or repair requirements from the testing of the smoke alarms and if so, has this been arranged?'
                  errorText='Please explain in more detail'
                  initialValue={loadedForm.question_33}
                  initialValid={true}
                />
                <Textarea
                  id='question_34'
                  element='textarea'
                  type='text'
                  validators={[VALIDATOR_MINLENGTH(10)]}
                  onInput={inputHandler}
                  label='If there is emergency lighting, has this been checked and what date there should be checked at least annually.'
                  errorText='Please explain in more detail'
                  initialValue={loadedForm.question_34}
                  initialValid={true}
                />
                <Textarea
                  id='question_35'
                  element='textarea'
                  type='text'
                  validators={[VALIDATOR_MINLENGTH(10)]}
                  onInput={inputHandler}
                  label='If there is a fire blanket in the kitchen, Is this in date?'
                  errorText='Please explain in more detail'
                  initialValue={loadedForm.question_35}
                  initialValid={true}
                />
                <Textarea
                  id='question_36'
                  element='textarea'
                  type='text'
                  validators={[VALIDATOR_MINLENGTH(10)]}
                  onInput={inputHandler}
                  label='Is the property clean and tidy and free of clutter?'
                  errorText='Please explain in more detail'
                  initialValue={loadedForm.question_36}
                  initialValid={true}
                />
                <Textarea
                  id='question_37'
                  element='textarea'
                  type='text'
                  validators={[VALIDATOR_MINLENGTH(10)]}
                  onInput={inputHandler}
                  label='Are the fire exits clear of any obstructions?'
                  errorText='Please explain in more detail'
                  initialValue={loadedForm.question_37}
                  initialValid={true}
                />
                <Textarea
                  id='question_38'
                  element='textarea'
                  type='text'
                  validators={[VALIDATOR_MINLENGTH(10)]}
                  onInput={inputHandler}
                  label='Has all electrical equipment had PAT testing and have you checked the date on the label on the item?'
                  errorText='Please explain in more detail'
                  initialValue={loadedForm.question_38}
                  initialValid={true}
                />
                <Textarea
                  id='question_39'
                  element='textarea'
                  type='text'
                  validators={[VALIDATOR_MINLENGTH(10)]}
                  onInput={inputHandler}
                  label='Plug sockets- To confirm that they are not overloaded and causing a fire or trip hazard.'
                  errorText='Please explain in more detail'
                  initialValue={loadedForm.question_39}
                  initialValid={true}
                />
                <Textarea
                  id='question_40'
                  element='textarea'
                  type='text'
                  validators={[VALIDATOR_MINLENGTH(10)]}
                  onInput={inputHandler}
                  label='Is there an inventory of all items in the house and have new items been added to the inventory?'
                  errorText='Please explain in more detail'
                  initialValue={loadedForm.question_40}
                  initialValid={true}
                />
                <Textarea
                  id='question_41'
                  element='textarea'
                  type='text'
                  validators={[VALIDATOR_MINLENGTH(10)]}
                  onInput={inputHandler}
                  label='Have the Grab bags been checked to see if they contain the following items? What date were these checked? What were the findings? Do any items below need replacing?'
                  errorText='Please explain in more detail'
                  initialValue={loadedForm.question_41}
                  initialValid={true}
                />
              </div>
            </div>
          </div>
          <button
            className={styles.container__form__btnMonthly}
            type='submit'
            disabled={!formState.isValid}
          >
            submit
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateMonthlyForm;
