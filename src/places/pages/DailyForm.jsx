import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../../shared/components/formElements/Input';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators';
import Textarea from '../../shared/components/formElements/Textarea';
import { AuthContext } from '../../shared/context/auth-context';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/Http-hook';
import styles from './dailyForm.module.scss';

const DailyForm = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler] = useForm({
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
  });
  const navigate = useNavigate();
  const formSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      await sendRequest(
        `http://localhost:5000/daily-handovers`,
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
          creator: auth.userId,
        }),
        {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + auth.token,
        }
      );

      // redirect user to a different page
      navigate('/home');
    } catch (err) {
      console.log('error is:', err);
    }
  };
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
          onSubmit={formSubmitHandler}
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
                  />
                  <Textarea
                    id='question_2'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Money Checks completed? Cash tin counted and balances, ensure all receipts in the cashbook.'
                    errorText='Please explain in more detail'
                  />
                  <Textarea
                    id='question_3'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='All paperwork is s red in the sleep room securely and staff aware of GDPR'
                    errorText='Please explain in more detail'
                  />
                  <Textarea
                    id='question_4'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Medication Checks completed? (Including PRN) booking in and reordering, daily stock control checks. Any special instructions such as a break in administering medication.'
                    errorText='Please explain in more detail'
                  />
                  <Textarea
                    id='question_5'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Personal care- Medication administered, hand and  e nail care, bathing/showering and skin care. Carry out service users weight as required. Prescribed ointments or other interventions carried out. Shaving and or menstrual cycle care. Ironing of clothes.'
                    errorText='Please explain in more detail'
                  />
                  <Textarea
                    id='question_6'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Fridge, Freezer and water Temperature checked and within safe recommended limits? Fridge- at for below 4° C Freezer- 18° C Water- 38 ° C   44° C'
                    errorText='Please explain in more detail'
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
                  />
                  <Textarea
                    id='question_8'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Test bed sensor is working and is wiped down.'
                    errorText='Please explain in more detail'
                  />
                  <Textarea
                    id='question_9'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Fitbit is present and working.'
                    errorText='Please explain in more detail'
                  />
                  <Textarea
                    id='question_10'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Check all door sensors are working.'
                    errorText='Please explain in more detail'
                  />
                  <Textarea
                    id='question_11'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Assistive Technology is in full working order?'
                    errorText='Please explain in more detail'
                  />
                  <Textarea
                    id='question_12'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='All devices are in full working order? (Log My Care devices, laptops, computers) If they are not working, have you reported this to resolved any non-working equipment.'
                    errorText='Please explain in more detail'
                  />
                  <Textarea
                    id='question_13'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Is the RING doorbell in situ outside the main front door and back door? Is it charged?'
                    errorText='Please explain in more detail'
                  />
                  <Textarea
                    id='question_14'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Do staff understand the purpose of the RING doorbell, Canary and door sensors?'
                    errorText='Please explain in more detail'
                  />
                  <Textarea
                    id='question_15'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Have staff carried put a walk-through risk assessment? Example spot any hazard and ensure they made safe and reported if required.'
                    errorText='Please explain in more detail'
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
                  />

                  <Textarea
                    id='question_17'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Have medication cabinet temperatures been recorded?'
                    errorText='Please explain in more detail'
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
                  />
                  <Textarea
                    id='question_19'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Are all transactions supported by a viable receipt and numbered correctly?'
                    errorText='Please explain in more detail'
                  />
                  <Textarea
                    id='question_20'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Have receipts been scanned for the previous week?'
                    errorText='Please explain in more detail'
                  />
                  <Textarea
                    id='question_21'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Have any loyalty cards, travel cards or access/discount cards been moni red and recorded?'
                    errorText='Please explain in more detail'
                  />
                  <Textarea
                    id='question_22'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Have any cashcards been accounted for and daily balance logged?'
                    errorText='Please explain in more detail'
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
                  />
                  <Textarea
                    id='question_24'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Have medication cabinet temperatures been recorded?'
                    errorText='Please explain in more detail'
                  />
                  <Textarea
                    id='question_25'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Where required paper hand towels, in situ, rather than cloth towels that carry a risk regarding infection control?'
                    errorText='Please explain in more detail'
                  />
                  <Textarea
                    id='question_26'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Are the beds being changed according   the frequency required in the service? If there is incontinence in the service is the bedding being changed daily. In the respite unit, the record would show that beds are changed as and when required and   clean bedding that each new stay is clearly documented.'
                    errorText='Please explain in more detail'
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
                  />
                  <Textarea
                    id='question_28'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='What has been cleaned in the bedroom?'
                    errorText='Please explain in more detail'
                  />
                  <Textarea
                    id='question_29'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='List, wardrobes or cupboards or drawers that were sorted out this shift.'
                    errorText='Please explain in more detail'
                  />
                  <Textarea
                    id='question_30'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Please specify any other cleaning tasks this shift.'
                    errorText='Please explain in more detail'
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
                  />
                  <Textarea
                    id='question_32'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Have you posted Day Plan/Schedules on LMC (Long My Care) and WhatsApp?'
                    errorText='Please explain in more detail'
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
                  />
                  <Textarea
                    id='question_34'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Money Checks completed? Cash tin counted and balances, ensure all receipts in the cashbook.'
                    errorText='Please explain in more detail'
                  />
                  <Textarea
                    id='question_35'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Any Appointments? (Check diary)'
                    errorText='Please explain in more detail'
                  />
                  <Textarea
                    id='question_36'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Previous Handover checked?'
                    errorText='Please explain in more detail'
                  />
                  <Textarea
                    id='question_37'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='All paperwork is stored in the sleep room securely and staff aware of GDPR'
                    errorText='Please explain in more detail'
                  />
                  <Textarea
                    id='question_38'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Medication Checks completed? (Including PRN) booking in and reordering, daily s ck control checks. Any special instructions such as a break in administering medication. Make a note of medication cabinet temperatures.'
                    errorText='Please explain in more detail'
                  />
                  <Textarea
                    id='question_39'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Personal care- Medication administered, hand and  e nail care, bathing/showering and skin care. Carry out service users weight as required. Prescribed ointments or other interventions carried out. Shaving and or menstrual cycle care. Ironing of clothes.'
                    errorText='Please explain in more detail'
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
                  />
                  <Textarea
                    id='question_41'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Body Map completed?'
                    errorText='Please explain in more detail'
                  />
                  <Textarea
                    id='question_42'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Behaviour reports or behaviour explorers completed'
                    errorText='Please explain in more detail'
                  />
                  <Textarea
                    id='question_43'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='File note (family, friends, professionals phone calls, visits, contact) completed?'
                    errorText='Please explain in more detail'
                  />
                  <Textarea
                    id='question_44'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Mileage Book completed?'
                    errorText='Please explain in more detail'
                  />
                  <Textarea
                    id='question_45'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Wake Night report completed if appropriate?'
                    errorText='Please explain in more detail'
                  />
                  <Textarea
                    id='question_46'
                    element='textarea'
                    type='text'
                    validators={[VALIDATOR_MINLENGTH(10)]}
                    onInput={inputHandler}
                    label='Other.'
                    errorText='Please explain in more detail'
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

export default DailyForm;
