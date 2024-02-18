import React, { useCallback, useReducer } from 'react';

import Input from '../../shared/components/formElements/Input';
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators';
import Textarea from '../../shared/components/formElements/Textarea';
import { useForm } from '../../shared/hooks/form-hook';
import styles from './weeklyForm.module.scss';

const WeeklyForm = () => {
  const [formState, inputHandler] = useForm({
    service: {
      value: '',
      isValid: false,
    },
    week: {
      value: '',
      isValid: false,
    },
    staff: {
      value: '',
      isValid: false,
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
  });

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__title}>
        <h2>weekly checks</h2>
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
            />
          </div>
          <div className={styles.container__form__general__item}>
            <Input
              id='staff'
              element='input'
              type='text'
              label='Staff'
              validators={[VALIDATOR_REQUIRE()]}
              errorText='Please enter a valid name'
              onInput={inputHandler}
            />
          </div>
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
                  Reg 9 Person-centred care, Reg 12 Safe care and treatment, Reg
                  13 Safeguarding service users
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
              />

              <Textarea
                id='question_2'
                element='textarea'
                type='text'
                validators={[VALIDATOR_MINLENGTH(10)]}
                onInput={inputHandler}
                label='Is there any outstanding maintenace issues for the service?'
                errorText='Please explain in more detail'
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
              />

              <Textarea
                id='question_4'
                element='textarea'
                type='text'
                validators={[VALIDATOR_MINLENGTH(10)]}
                onInput={inputHandler}
                label='Is the exterior of the property in good order?'
                errorText='Please explain in more detail'
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
              />
              <Textarea
                id='question_8'
                element='textarea'
                type='text'
                validators={[VALIDATOR_MINLENGTH(10)]}
                onInput={inputHandler}
                label='Are there adequate stock supplies of hand wash and hand
                  sanitiser?'
                // errorText='Please explain in more detail'
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
              />
            </div>
          </div>
        </div>
        <button type='submit' disabled={!formState.isValid}>
          submit
        </button>
      </form>
    </div>
  );
};

export default WeeklyForm;
