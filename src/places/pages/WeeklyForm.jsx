import React from 'react';

import Input from '../../shared/components/formElements/Input';
import styles from './weeklyForm.module.scss';
import Textarea from '../../shared/components/formElements/Textarea';

const WeeklyForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__title}>
        <h2>weekly checks</h2>
      </div>
      <form action='' className={styles.container__form}>
        <div className={styles.container__form__general}>
          <div className={styles.container__form__general__item}>
            <Input
              element='input'
              type='text'
              label='Service'
              validators={[]}
              errorText='Please enter a valid service'
            />
          </div>
          <div className={styles.container__form__general__item}>
            <Input
              element='input'
              type='date'
              label='Week'
              validators={[]}
              errorText='Please enter a valid date'
            />
          </div>
          <div className={styles.container__form__general__item}>
            <Input
              element='input'
              type='text'
              label='Staff'
              validators={[]}
              errorText='Please enter a valid name'
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
                element='textarea'
                type='text'
                label='Is there evedience that staff are completing weekly
                  maintenance reports?'
              />

              <Textarea
                element='textarea'
                type='text'
                label='Is there any outstanding maintenace issues for the service?'
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
                element='textarea'
                type='text'
                label='Is the exterior of the property in good order?'
              />

              <Textarea
                element='textarea'
                type='text'
                label='Is the exterior of the property in good order?'
              />
              <Textarea
                element='textarea'
                type='text'
                label='Are there any health and safety issues in regards to the house
                  and garden? Have these been reported?'
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
                element='textarea'
                type='text'
                label='Have receipts been scanned for the previous week?'
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
                element='textarea'
                type='text'
                label='Is there sufficient arrangements in place and appropriate
                  plastic bags to deal appropriately with household waste and
                  recycling? when was this checked and by who?'
              />
              <Textarea
                element='textarea'
                type='text'
                label='Are there adequate stock supplies of hand wash and hand
                  sanitiser?'
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
                element='textarea'
                type='text'
                label='First aid box checked?'
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
                element='textarea'
                type='text'
                label='Fire alarms and carbon monoxide alarms checked?'
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default WeeklyForm;
