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
import styles from './dailyForm.module.scss';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

const UpdateDailyForm = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedForm, setLoadedForm] = useState();
  const dailyFormId = useParams().formId;

  const navigate = useNavigate();
  const [formState, inputHandler, setFormData] = useForm(
    {
      service: {
        value: '',
        isValid: false,
      },
      day: {
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
      question_42: {
        value: '',
        isValid: false,
      },
      question_43: {
        value: '',
        isValid: false,
      },
      question_44: {
        value: '',
        isValid: false,
      },
      question_45: {
        value: '',
        isValid: false,
      },
      question_46: {
        value: '',
        isValid: false,
      },
      question_47: {
        value: '',
        isValid: false,
      },
      question_48: {
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
        //   `${process.env.REACT_APP_BACKEND_URL}/daily-handovers/${dailyFormId}`
        // );
        const responseData = await sendRequest(
          `http://localhost:5000/daily-handovers/${dailyFormId}`
        );

        setLoadedForm(responseData);
        console.log('form:', responseData);
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
            question_42: {
              value: responseData.form.question_42,
              isValid: true,
            },
            question_43: {
              value: responseData.form.question_43,
              isValid: true,
            },
            question_44: {
              value: responseData.form.question_44,
              isValid: true,
            },
            question_45: {
              value: responseData.form.question_45,
              isValid: true,
            },
            question_46: {
              value: responseData.form.question_46,
              isValid: true,
            },
            question_47: {
              value: responseData.form.question_47,
              isValid: true,
            },
            question_48: {
              value: responseData.form.question_48,
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
  }, [sendRequest, dailyFormId, setFormData, auth.name]);

  const updatedFormSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      await sendRequest(
        // `${process.env.REACT_APP_BACKEND_URL}/weekly-handovers/${dailyFormId}`,
        `http://localhost:5000/weekly-handovers/${dailyFormId}`,
        'POST',
        JSON.stringify({
          service: formState.inputs.service.value,
          day: formState.inputs.day.value,
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
          question_42: formState.inputs.question_42.value,
          question_43: formState.inputs.question_43.value,
          question_44: formState.inputs.question_44.value,
          question_45: formState.inputs.question_45.value,
          question_46: formState.inputs.question_46.value,
          question_47: formState.inputs.question_47.value,
          question_48: formState.inputs.question_48.value,
        }),
        {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + auth.token,
        }
      );
    } catch (err) {
      console.error('Error sending request to EDIT:', err);
    }
    navigate(`/${auth.userId}/forms`);
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
          <h2>Daily checks</h2>
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
              />
            </div>
            <div className={styles.container__form__general__item}>
              <Input
                id='day'
                element='input'
                type='date'
                label='date'
                validators={[VALIDATOR_REQUIRE()]}
                errorText='Please select a date'
                onInput={inputHandler}
                initialValue={loadedForm.day}
                isWeeklyForm={true}
              />
            </div>
          </div>

          <div className={styles.container__form__sectionMain}>
            {/* AM TASK LIST */}
            <div className={styles.container__form__sectionMain__section}>
              <div
                className={styles.container__form__sectionMain__section__title}
              >
                <h3>AM Task List (Reg 9, Reg 12, Reg 13)</h3>
              </div>
              <div
                className={
                  styles.container__form__sectionMain__section__questions
                }
              >
                <div
                  className={
                    styles.container__form__sectionMain__section__questions__section
                  }
                >
                  <Textarea
                    id='question_1'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Verbal/Virtual Handover received? Communication book read and signed? Virtual communication book checked? Any Appointments? (Check diary)'
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
                    label='Money Checks completed? Cash tin counted and balances, ensure all receipts in the cashbook.'
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
                    label='All paperwork is s red in the sleep room securely and staff aware of GDPR'
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
                    label='Medication Checks completed? (Including PRN) booking in and reordering, daily stock control checks. Any special instructions such as a break in administering medication.'
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
                    label='Personal care- Medication administered, hand and  e nail care, bathing/showering and skin care. Carry out service users weight as required. Prescribed ointments or other interventions carried out. Shaving and or menstrual cycle care. Ironing of clothes.'
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
                    label='Fridge, Freezer and water Temperature checked and within safe recommended limits? Fridge- at for below 4° C Freezer- 18° C Water- 38 ° C   44° C'
                    errorText='Please explain in more detail'
                    initialValue={loadedForm.question_6}
                    initialValid={true}
                  />
                </div>
              </div>
            </div>
            {/* ASSISTIVE TECHNOLOGY */}
            <div className={styles.container__form__sectionMain__section}>
              <div
                className={styles.container__form__sectionMain__section__title}
              >
                <h3>Assistive Technology and Premises (Reg 15)</h3>
              </div>
              <div
                className={
                  styles.container__form__sectionMain__section__questions
                }
              >
                <div
                  className={
                    styles.container__form__sectionMain__section__questions__section
                  }
                >
                  <Textarea
                    id='question_7'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Check all Epilepsy monitors are working.'
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
                    label='Test bed sensor is working and is wiped down.'
                    errorText='Please explain in more detail'
                    initialValue={loadedForm.question_8}
                    initialValid={true}
                  />
                  <Textarea
                    id='question_9'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Fitbit is present and working.'
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
                    label='Check all door sensors are working.'
                    errorText='Please explain in more detail'
                    initialValue={loadedForm.question_10}
                    initialValid={true}
                  />
                  <Textarea
                    id='question_11'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Assistive Technology is in full working order?'
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
                    label='All devices are in full working order? (Log My Care devices, laptops, computers) If they are not working, have you reported this to resolved any non-working equipment.'
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
                    label='Is the RING doorbell in situ outside the main front door and back door? Is it charged?'
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
                    label='Do staff understand the purpose of the RING doorbell, Canary and door sensors?'
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
                    label='Have staff carried put a walk-through risk assessment? Example spot any hazard and ensure they made safe and reported if required.'
                    errorText='Please explain in more detail'
                    initialValue={loadedForm.question_15}
                    initialValid={true}
                  />
                </div>
              </div>
            </div>
            {/* MEDICATION */}
            <div className={styles.container__form__sectionMain__section}>
              <div
                className={styles.container__form__sectionMain__section__title}
              >
                <h3>Medication (Reg 9, 11, 12)</h3>
              </div>
              <div
                className={
                  styles.container__form__sectionMain__section__questions
                }
              >
                <div
                  className={
                    styles.container__form__sectionMain__section__questions__section
                  }
                >
                  <Textarea
                    id='question_16'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Have any medication errors been reported?'
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
                    label='Have medication cabinet temperatures been recorded?'
                    errorText='Please explain in more detail'
                    initialValue={loadedForm.question_17}
                    initialValid={true}
                  />
                </div>
              </div>
            </div>
            {/* FINANCE */}
            <div className={styles.container__form__sectionMain__section}>
              <div
                className={styles.container__form__sectionMain__section__title}
              >
                <h3>Finance Checks (Reg 13)</h3>
              </div>
              <div
                className={
                  styles.container__form__sectionMain__section__questions
                }
              >
                <div
                  className={
                    styles.container__form__sectionMain__section__questions__section
                  }
                >
                  <Textarea
                    id='question_18'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Are there any discrepancies recorded? If yes what action has been taken?'
                    errorText='Please explain in more detail'
                    initialValue={loadedForm.question_18}
                    initialValid={true}
                  />
                  <Textarea
                    id='question_19'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Are all transactions supported by a viable receipt and numbered correctly?'
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
                    label='Have receipts been scanned for the previous week?'
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
                    label='Have any loyalty cards, travel cards or access/discount cards been moni red and recorded?'
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
                    label='Have any cashcards been accounted for and daily balance logged?'
                    errorText='Please explain in more detail'
                    initialValue={loadedForm.question_22}
                    initialValid={true}
                  />
                </div>
              </div>
            </div>
            {/* INFECTION CONTROL */}
            <div className={styles.container__form__sectionMain__section}>
              <div
                className={styles.container__form__sectionMain__section__title}
              >
                <h3>Infection control (Reg 15)</h3>
              </div>
              <div
                className={
                  styles.container__form__sectionMain__section__questions
                }
              >
                <div
                  className={
                    styles.container__form__sectionMain__section__questions__section
                  }
                >
                  <Textarea
                    id='question_23'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Is all necessary PPE in place and what does this consist of? When was it checked by Who?'
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
                    label='Have medication cabinet temperatures been recorded?'
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
                    label='Where required paper hand towels, in situ, rather than cloth towels that carry a risk regarding infection control?'
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
                    label='Are the beds being changed according   the frequency required in the service? If there is incontinence in the service is the bedding being changed daily. In the respite unit, the record would show that beds are changed as and when required and   clean bedding that each new stay is clearly documented.'
                    errorText='Please explain in more detail'
                    initialValue={loadedForm.question_26}
                    initialValid={true}
                  />
                </div>
              </div>
            </div>
            {/* PREMISES AND EQUIPMENT */}
            <div className={styles.container__form__sectionMain__section}>
              <div
                className={styles.container__form__sectionMain__section__title}
              >
                <h3>Premises and equipment (Reg 15)</h3>
              </div>
              <div
                className={
                  styles.container__form__sectionMain__section__questions
                }
              >
                <div
                  className={
                    styles.container__form__sectionMain__section__questions__section
                  }
                >
                  <Textarea
                    id='question_27'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='List the furniture that was thoroughly cleaned this shift.'
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
                    label='What has been cleaned in the bedroom?'
                    errorText='Please explain in more detail'
                    initialValue={loadedForm.question_29}
                    initialValid={true}
                  />
                  <Textarea
                    id='question_29'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='List, wardrobes or cupboards or drawers that were sorted out this shift.'
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
                    label='Please specify any other cleaning tasks this shift.'
                    errorText='Please explain in more detail'
                    initialValue={loadedForm.question_30}
                    initialValid={true}
                  />
                </div>
              </div>
            </div>
            {/* RECORDS */}
            <div className={styles.container__form__sectionMain__section}>
              <div
                className={styles.container__form__sectionMain__section__title}
              >
                <h3>Records (Reg 14)</h3>
              </div>
              <div
                className={
                  styles.container__form__sectionMain__section__questions
                }
              >
                <div
                  className={
                    styles.container__form__sectionMain__section__questions__section
                  }
                >
                  <Textarea
                    id='question_31'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Are all meals and snacks entered on Log My Care and WhatsApp?'
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
                    label='Have you posted Day Plan/Schedules on LMC (Long My Care) and WhatsApp?'
                    errorText='Please explain in more detail'
                    initialValue={loadedForm.question_32}
                    initialValid={true}
                  />
                </div>
              </div>
            </div>
            {/* PM TASK LIST */}
            <div className={styles.container__form__sectionMain__section}>
              <div
                className={styles.container__form__sectionMain__section__title}
              >
                <h3>PM Task list (Reg 9, 12, 13)</h3>
              </div>
              <div
                className={
                  styles.container__form__sectionMain__section__questions
                }
              >
                <div
                  className={
                    styles.container__form__sectionMain__section__questions__section
                  }
                >
                  <Textarea
                    id='question_33'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Verbal/Virtual Handover received? Communication book read and signed? Virtual communication book checked?'
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
                    label='Money Checks completed? Cash tin counted and balances, ensure all receipts in the cashbook.'
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
                    label='Any Appointments? (Check diary)'
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
                    label='Previous Handover checked?'
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
                    label='All paperwork in s red in the sleep room securely and staff aware of GDPR'
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
                    label='Medication Checks completed? (Including PRN) booking in and reordering, daily s ck control checks. Any special instructions such as a break in administering medication. Make a note of medication cabinet temperatures.'
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
                    label='Personal care- Medication administered, hand and  e nail care, bathing/showering and skin care. Carry out service users weight as required. Prescribed ointments or other interventions carried out. Shaving and or menstrual cycle care. Ironing of clothes.'
                    errorText='Please explain in more detail'
                    initialValue={loadedForm.question_39}
                    initialValid={true}
                  />
                </div>
              </div>
            </div>
            {/* IF REQUIRED */}
            <div className={styles.container__form__sectionMain__section}>
              <div
                className={styles.container__form__sectionMain__section__title}
              >
                <h3>
                  If required, have any of the below forms been completed and
                  sent Head Office{' '}
                </h3>
              </div>
              <div
                className={
                  styles.container__form__sectionMain__section__questions
                }
              >
                <div
                  className={
                    styles.container__form__sectionMain__section__questions__section
                  }
                >
                  <Textarea
                    id='question_40'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Incident Reports (including PRN) completed?'
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
                    label='Body Map completed?'
                    errorText='Please explain in more detail'
                    initialValue={loadedForm.question_41}
                    initialValid={true}
                  />
                  <Textarea
                    id='question_42'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Behaviour reports or behaviour explorers completed'
                    errorText='Please explain in more detail'
                    initialValue={loadedForm.question_42}
                    initialValid={true}
                  />
                  <Textarea
                    id='question_43'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='File note (family, friends, professionals phone calls, visits, contact) completed?'
                    errorText='Please explain in more detail'
                    initialValue={loadedForm.question_43}
                    initialValid={true}
                  />
                  <Textarea
                    id='question_44'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Mileage Book completed?'
                    errorText='Please explain in more detail'
                    initialValue={loadedForm.question_44}
                    initialValid={true}
                  />
                  <Textarea
                    id='question_45'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Wake Night report completed if appropriate?'
                    errorText='Please explain in more detail'
                    initialValue={loadedForm.question_45}
                    initialValid={true}
                  />
                  <Textarea
                    id='question_46'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Other.'
                    errorText='Please explain in more detail'
                    initialValue={loadedForm.question_46}
                    initialValid={true}
                  />
                </div>
              </div>
            </div>
            {/* SLEEPING OR WAKING NIGHT */}
            <div className={styles.container__form__sectionMain__section}>
              <div
                className={styles.container__form__sectionMain__section__title}
              >
                <h3>
                  Sleeping or waking night report any matters arising from the
                  night
                </h3>
              </div>
              <div
                className={
                  styles.container__form__sectionMain__section__questions
                }
              >
                <div
                  className={
                    styles.container__form__sectionMain__section__questions__section
                  }
                >
                  <Textarea
                    id='question_47'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label=''
                    errorText='Please explain in more detail'
                    initialValue={loadedForm.question_47}
                    initialValid={true}
                  />
                </div>
              </div>
            </div>
            {/* SLEEPING OR WAKING NIGHT */}
            <div className={styles.container__form__sectionMain__section}>
              <div
                className={styles.container__form__sectionMain__section__title}
              >
                <h3>
                  Are there any other concerns report? Have any complaints been
                  received and reported the Manager?
                </h3>
              </div>
              <div
                className={
                  styles.container__form__sectionMain__section__questions
                }
              >
                <div
                  className={
                    styles.container__form__sectionMain__section__questions__section
                  }
                >
                  <Textarea
                    id='question_48'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label=''
                    errorText='Please explain in more detail'
                    initialValue={loadedForm.question_48}
                    initialValid={true}
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            className={styles.container__form__btnMonthly}
            type='submit'
            // disabled={!formState.isValid}
          >
            submit
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateDailyForm;
