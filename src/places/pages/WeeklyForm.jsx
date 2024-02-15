import React from 'react';
import styles from './weeklyForm.module.scss';

const WeeklyForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__title}>
        <h2>weekly checks</h2>
      </div>
      <form action='' className={styles.container__form}>
        <div className={styles.container__form__general}>
          <div className={styles.container__form__general__item}>
            <label
              htmlFor='service'
              className={styles.container__form__general__item__label}
            >
              Service
            </label>
            <input
              type='text'
              name='service'
              className={styles.container__form__general__item__input}
            />
          </div>
          <div className={styles.container__form__general__item}>
            <label
              htmlFor='date'
              className={styles.container__form__general__item__label}
            >
              Week
            </label>
            <input
              type='date'
              className={styles.container__form__general__item__input}
            />
          </div>
          <div className={styles.container__form__general__item}>
            <label
              htmlFor='staff'
              className={styles.container__form__general__item__label}
            >
              staff
            </label>
            <input
              type='text'
              className={styles.container__form__general__item__input}
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
              <div
                className={
                  styles.container__form__sectionMain__questions__section__question
                }
              >
                <label
                  className={
                    styles.container__form__sectionMain__questions__section__question__label
                  }
                  htmlFor='q1'
                >
                  Is there evedience that staff are completing weekly
                  maintenance reports?
                </label>
                <textarea
                  className={
                    styles.container__form__sectionMain__questions__section__question__textarea
                  }
                  name='q1'
                  id=''
                  cols='30'
                  rows='5'
                ></textarea>
              </div>
              <div
                className={
                  styles.container__form__sectionMain__questions__section__question
                }
              >
                <label
                  className={
                    styles.container__form__sectionMain__questions__section__question__label
                  }
                  htmlFor='q1'
                >
                  Is there any outstanding maintenace issues for the service?
                </label>
                <textarea
                  className={
                    styles.container__form__sectionMain__questions__section__question__textarea
                  }
                  name='q1'
                  id=''
                  cols='30'
                  rows='5'
                ></textarea>
              </div>
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
              <div
                className={
                  styles.container__form__sectionMain__questions__section__question
                }
              >
                <label
                  className={
                    styles.container__form__sectionMain__questions__section__question__label
                  }
                  htmlFor='q1'
                >
                  Is the exterior of the property in good order?
                </label>
                <textarea
                  className={
                    styles.container__form__sectionMain__questions__section__question__textarea
                  }
                  name='q1'
                  id=''
                  cols='30'
                  rows='5'
                ></textarea>
              </div>
              <div
                className={
                  styles.container__form__sectionMain__questions__section__question
                }
              >
                <label
                  className={
                    styles.container__form__sectionMain__questions__section__question__label
                  }
                  htmlFor='q1'
                >
                  Are the gardens neat and tidy?
                </label>
                <textarea
                  className={
                    styles.container__form__sectionMain__questions__section__question__textarea
                  }
                  name='q1'
                  id=''
                  cols='30'
                  rows='5'
                ></textarea>
              </div>
              <div
                className={
                  styles.container__form__sectionMain__questions__section__question
                }
              >
                <label
                  className={
                    styles.container__form__sectionMain__questions__section__question__label
                  }
                  htmlFor='q1'
                >
                  Are there any health and safety issues in regards to the house
                  and garden? Have these been reported?
                </label>
                <textarea
                  className={
                    styles.container__form__sectionMain__questions__section__question__textarea
                  }
                  name='q1'
                  id=''
                  cols='30'
                  rows='5'
                ></textarea>
              </div>
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
              <div
                className={
                  styles.container__form__sectionMain__questions__section__question
                }
              >
                <label
                  className={
                    styles.container__form__sectionMain__questions__section__question__label
                  }
                  htmlFor='q1'
                >
                  Have receipts been scanned for the previous week?
                </label>
                <textarea
                  className={
                    styles.container__form__sectionMain__questions__section__question__textarea
                  }
                  name='q1'
                  id=''
                  cols='30'
                  rows='5'
                ></textarea>
              </div>
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
              <div
                className={
                  styles.container__form__sectionMain__questions__section__question
                }
              >
                <label
                  className={
                    styles.container__form__sectionMain__questions__section__question__label
                  }
                  htmlFor='q1'
                >
                  Is there sufficient arrangements in place and appropriate
                  plastic bags to deal appropriately with household waste and
                  recycling? when was this checked and by who?
                </label>
                <textarea
                  className={
                    styles.container__form__sectionMain__questions__section__question__textarea
                  }
                  name='q1'
                  id=''
                  cols='30'
                  rows='5'
                ></textarea>
              </div>
              <div
                className={
                  styles.container__form__sectionMain__questions__section__question
                }
              >
                <label
                  className={
                    styles.container__form__sectionMain__questions__section__question__label
                  }
                  htmlFor='q1'
                >
                  Are there adequate stock supplies of hand wash and hand
                  sanitiser?
                </label>
                <textarea
                  className={
                    styles.container__form__sectionMain__questions__section__question__textarea
                  }
                  name='q1'
                  id=''
                  cols='30'
                  rows='5'
                ></textarea>
              </div>
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
              <div
                className={
                  styles.container__form__sectionMain__questions__section__question
                }
              >
                <label
                  className={
                    styles.container__form__sectionMain__questions__section__question__label
                  }
                  htmlFor='q1'
                >
                  First aid box checked?
                </label>
                <textarea
                  className={
                    styles.container__form__sectionMain__questions__section__question__textarea
                  }
                  name='q1'
                  id=''
                  cols='30'
                  rows='5'
                ></textarea>
              </div>
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
              <div
                className={
                  styles.container__form__sectionMain__questions__section__question
                }
              >
                <label
                  className={
                    styles.container__form__sectionMain__questions__section__question__label
                  }
                  htmlFor='q1'
                >
                  Fire alarms and carbon monoxide alarms checked?
                </label>
                <textarea
                  className={
                    styles.container__form__sectionMain__questions__section__question__textarea
                  }
                  name='q1'
                  id=''
                  cols='30'
                  rows='5'
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default WeeklyForm;
