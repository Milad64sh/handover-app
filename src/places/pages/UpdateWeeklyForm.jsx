import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from '../../shared/hooks/form-hook';
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/util/validators';
import Input from '../../shared/components/formElements/Input';
import Textarea from '../../shared/components/formElements/Textarea';
import styles from './weeklyForm.module.scss';

// For using useForm hook in this component check video 66;

const DUMMY_FORMS = [
  {
    id: 'p1',
    service: 'JS',
    date: '2024-02-18',
    staff: 'MS',
    question_1: 'test answer1',
    question_2: 'test answer2',
    question_3: 'test answer3',
    question_4: 'test answer4',
    question_5: 'test answer5',
    question_6: 'test answer6',
    question_7: 'test answer7',
    question_8: 'test answer8',
    question_9: 'test answer9',
    question_10: 'test answer10',
  },
  {
    id: 'p2',
    service: 'JB',
    date: '2024-02-18',
    staff: 'AA',
    question_1: 'test-2 answer1',
    question_2: 'test-2 answer2',
    question_3: 'test-2 answer3',
    question_4: 'test-2 answer4',
    question_5: 'test-2 answer5',
    question_6: 'test-2 answer6',
    question_7: 'test-2 answer7',
    question_8: 'test-2 answer8',
    question_9: 'test-2 answer9',
    question_10: 'test-2 answer10',
  },
];

const UpdateWeeklyForm = () => {
  const [isLoading, setIsLoading] = useState(true);
  const weeklyFormId = useParams().formId;

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
    },
    false
  );

  const identifiedForm = DUMMY_FORMS.find((p) => p.id === weeklyFormId);

  useEffect(() => {
    if (identifiedForm) {
      setFormData(
        {
          service: {
            value: identifiedForm.service,
            isValid: true,
          },
          week: {
            value: identifiedForm.date,
            isValid: true,
          },
          staff: {
            value: identifiedForm.staff,
            isValid: true,
          },
          question_1: {
            value: identifiedForm.question_1,
            isValid: true,
          },
          question_2: {
            value: identifiedForm.question_2,
            isValid: true,
          },
          question_3: {
            value: identifiedForm.question_3,
            isValid: true,
          },
          question_4: {
            value: identifiedForm.question_4,
            isValid: true,
          },
          question_5: {
            value: identifiedForm.question_5,
            isValid: true,
          },
          question_6: {
            value: identifiedForm.question_6,
            isValid: true,
          },
          question_7: {
            value: identifiedForm.question_7,
            isValid: true,
          },
          question_8: {
            value: identifiedForm.question_8,
            isValid: true,
          },
          question_9: {
            value: identifiedForm.question_9,
            isValid: true,
          },
          question_10: {
            value: identifiedForm.question_10,
            isValid: true,
          },
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedForm]);

  const updateWeeklyForm = (event) => {};
  const weeklyHandoverId = useParams().formId;
  const updatedFormSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedForm) {
    return <h2>Could not find form!</h2>;
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.container__title}>
        <h2>weekly checks</h2>
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
              initialValue={formState.inputs.service.value}
              initialValid={formState.inputs.service.isValid}
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
              initialValue={formState.inputs.week.value}
              initialValid={formState.inputs.week.isValid}
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
              initialValue={formState.inputs.staff.value}
              initialValid={formState.inputs.staff.isValid}
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
                initialValue={formState.inputs.question_1.value}
                initialValid={formState.inputs.question_1}
              />

              <Textarea
                id='question_2'
                element='textarea'
                type='text'
                validators={[VALIDATOR_MINLENGTH(10)]}
                onInput={inputHandler}
                label='Is there any outstanding maintenace issues for the service?'
                errorText='Please explain in more detail'
                initialValue={formState.inputs.question_2.value}
                initialValid={formState.inputs.question_2}
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
                initialValue={formState.inputs.question_3.value}
                initialValid={formState.inputs.question_3}
              />

              <Textarea
                id='question_4'
                element='textarea'
                type='text'
                validators={[VALIDATOR_MINLENGTH(10)]}
                onInput={inputHandler}
                label='Is the exterior of the property in good order?'
                errorText='Please explain in more detail'
                initialValue={formState.inputs.question_4.value}
                initialValid={formState.inputs.question_4}
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
                initialValue={formState.inputs.question_5.value}
                initialValid={formState.inputs.question_5}
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
                initialValue={formState.inputs.question_6.value}
                initialValid={formState.inputs.question_6}
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
                initialValue={formState.inputs.question_7.value}
                initialValid={formState.inputs.question_7}
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
                initialValue={formState.inputs.question_8.value}
                initialValid={formState.inputs.question_8}
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
                initialValue={formState.inputs.question_9.value}
                initialValid={formState.inputs.question_9}
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
                initialValue={formState.inputs.question_10.value}
                initialValid={formState.inputs.question_10}
              />
            </div>
          </div>
        </div>
        <button type='submit' disabled={!formState.isValid}>
          update form
        </button>
      </form>
    </div>
  );
};

export default UpdateWeeklyForm;
