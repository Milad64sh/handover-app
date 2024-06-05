import React, { useEffect, useState, useContext } from 'react';

import html2pdf from 'html2pdf.js';
import { useParams } from 'react-router-dom';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/Http-hook';
import { AuthContext } from '../../shared/context/auth-context';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import styles from './readDailyForm.module.scss';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

const ReadDailyForm = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedForm, setLoadedForm] = useState();
  const dailyFormId = useParams().formId;
  const [formState, setFormData] = useForm(
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
        setLoadedForm(responseData.form);
        console.log(responseData);
        setFormData(
          {
            service: {
              value: responseData.form.service,
              isValid: true,
            },
            day: {
              value: responseData.form.day,
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

  if (isLoading) {
    return <LoadingSpinner asOverlay />;
  }
  if (!loadedForm && !error) {
    return <h2>Could not find form!</h2>;
  }

  const generateAndDownloadPDF = () => {
    const element = document.querySelector(`.${styles.container}`);
    const opt = {
      margin: 0.5,
      filename: 'daily_form.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 3 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['css', 'legacy'] },
    };

    html2pdf().set(opt).from(element).save();
  };
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  };

  const containerTitleStyle = {
    textAlign: 'center',
    fontFamily: 'inherit',
    textTransform: 'uppercase',
    padding: '10px 0 20px 0',
    color: '#1d1d79',
  };
  const form = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #aaa9a9',
    borderRadius: '10px',
    width: '90%',
    marginBottom: '3rem',
    breakInside: 'avoid',
    pageBreakInside: 'avoid',
  };
  // const general = {
  //   display: 'block',
  //   paddingLeft: '20px',
  //   paddingTop: '20px',
  //   paddingBottom: '20px',
  //   width: '100%',
  //   borderBottom: '1px solid #aaa9a9',
  //   backgroundColor: 'none',
  //   borderTopLeftRadius: '10px',
  //   borderTopRightRadius: '10px',
  //   breakInside: 'avoid',
  //   pageBreakInside: 'avoid',
  // };
  const item = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'start',
    width: '100%',
    marginLeft: '30px',
    padding: '5px 0',
  };
  const label = {
    flex: '0 0 15%',
    fontSize: '1.15rem',
    fontWeight: '400',
    textTransform: 'capitalize',
    letterSpacing: '1px',
    color: '#1d1d79',
  };
  const input = {
    padding: '10px 10px',
    flex: '0 0 80%',
    borderRadius: '4px',
    border: 'none',
    outline: 'none',
  };
  const sectionMain = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    breakInside: 'avoid',
    pageBreakInside: 'avoid',
    width: '90%',
    border: '1px solid #aaa9a9',
    borderRadius: '10px',
    margin: '20px 0',
  };
  const sectionMainQuestions = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  };
  const sectionMainSection = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  };
  const sectionMainSectionTitle = {
    borderBottom: '1px solid #aaa9a9',
    width: '70vw',
    padding: '5px 0',
    color: '#1d1d79',
    textTransform: 'capitalize',
  };
  const sectionMainSectionQuesiton = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '90%',
    marginBottom: '5px',
  };
  const sectionMainSectionQuesitonLabel = {
    display: 'flex',
    padding: '10px 0',
    width: '70vw',
  };
  const sectionMainTextarea = {
    borderRadius: '5px',
    padding: '20px 5px',
    border: '1px solid #aaa9a9',
    width: '70vw',
  };
  return (
    <div className={styles.wrapper}>
      <ErrorModal error={error} onClear={clearError} />
      <div style={containerStyle} className={styles.container}>
        <div style={containerTitleStyle} className={styles.container__title}>
          <h2>daily handover Form</h2>
        </div>
        {!isLoading && loadedForm && (
          <div style={form} className={styles.container__form}>
            {/* <div
              style={sectionMain}
              className={styles.container__form__general}
            ></div> */}
            {/* AM TASK LIST */}
            <div
              // style={sectionMain}
              className={styles.container__form__sectionMain}
            >
              <div
                style={item}
                className={styles.container__form__sectionMain__item}
              >
                <div
                  style={label}
                  className={styles.container__form__general__item__label}
                >
                  Service:
                </div>
                <div
                  style={input}
                  className={styles.container__form__general__item__input}
                >
                  {loadedForm.service}
                </div>
              </div>
              <div
                style={item}
                className={styles.container__form__sectionMain__item}
              >
                <div
                  style={label}
                  className={styles.container__form__general__item__label}
                >
                  Date:
                </div>
                <div
                  style={input}
                  className={styles.container__form__general__item__input}
                >
                  {loadedForm.day}
                </div>
              </div>
              <div
                style={item}
                className={styles.container__form__sectionMain__item}
              >
                <div
                  style={label}
                  className={styles.container__form__general__item__label}
                >
                  Staff:
                </div>
                <div
                  style={input}
                  className={styles.container__form__general__item__input}
                >
                  {loadedForm.staff}
                </div>
              </div>
              <div
                style={sectionMainQuestions}
                className={styles.container__form__sectionMain__questions}
              >
                <div
                  style={sectionMainSection}
                  className={
                    styles.container__form__sectionMain__questions__section
                  }
                >
                  <div
                    style={sectionMainSectionTitle}
                    className={
                      styles.container__form__sectionMain__questions__section__title
                    }
                  >
                    <h3>AM Task List (Reg 9, Reg 12, Reg 13)</h3>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Verbal/Virtual Handover received? Communication book read
                      and signed? Virtual communication book checked? Any
                      Appointments? (Check diary)
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_1}
                    </div>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Money Checks completed? Cash tin counted and balances,
                      ensure all receipts in the cashbook.
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_2}
                    </div>
                  </div>
                </div>
                <div
                  style={sectionMainSection}
                  className={
                    styles.container__form__sectionMain__questions__section
                  }
                >
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      All paperwork is s red in the sleep room securely and
                      staff aware of GDPR
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_3}
                    </div>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Medication Checks completed? (Including PRN) booking in
                      and reordering, daily stock control checks. Any special
                      instructions such as a break in administering medication.
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_4}
                    </div>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Personal care- Medication administered, hand and e nail
                      care, bathing/showering and skin care. Carry out service
                      users weight as required. Prescribed ointments or other
                      interventions carried out. Shaving and or menstrual cycle
                      care. Ironing of clothes.
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_5}
                    </div>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Fridge, Freezer and water Temperature checked and within
                      safe recommended limits? Fridge- at for below 4° C
                      Freezer- 18° C Water- 38 ° C 44° C
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_6}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ASSISTIVE TECHNOLOGY */}
            <div
              // style={sectionMain}
              className={styles.container__form__sectionMain}
            >
              <div
                style={sectionMainQuestions}
                className={styles.container__form__sectionMain__questions}
              >
                <div
                  style={sectionMainSection}
                  className={
                    styles.container__form__sectionMain__questions__section
                  }
                >
                  <div
                    style={sectionMainSectionTitle}
                    className={
                      styles.container__form__sectionMain__questions__section__title
                    }
                  >
                    <h3>Assistive Technology and Premises (Reg 15)</h3>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Check all Epilepsy monitors are working.
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_7}
                    </div>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Test bed sensor is working and is wiped down.
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_8}
                    </div>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Fitbit is present and working.
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_9}
                    </div>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Check all door sensors are working.
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_10}
                    </div>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Assistive Technology is in full working order?
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_11}
                    </div>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      All devices are in full working order? (Log My Care
                      devices, laptops, computers) If they are not working, have
                      you reported this to resolved any non-working equipment.
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_12}
                    </div>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Is the RING doorbell in situ outside the main front door
                      and back door? Is it charged?
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_13}
                    </div>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Do staff understand the purpose of the RING doorbell,
                      Canary and door sensors?
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_14}
                    </div>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Have staff carried put a walk-through risk assessment?
                      Example spot any hazard and ensure they made safe and
                      reported if required.
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_15}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* MEDICATION */}
            <div
              // style={sectionMain}
              className={styles.container__form__sectionMain}
            >
              <div
                style={sectionMainQuestions}
                className={styles.container__form__sectionMain__questions}
              >
                <div
                  style={sectionMainSection}
                  className={
                    styles.container__form__sectionMain__questions__section
                  }
                >
                  <div
                    style={sectionMainSectionTitle}
                    className={
                      styles.container__form__sectionMain__questions__section__title
                    }
                  >
                    <h3>Medication (Reg 9, 11, 12)</h3>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Have any medication errors been reported?
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_16}
                    </div>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Have medication cabinet temperatures been recorded?
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_17}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* FINANCE */}
            <div
              // style={sectionMain}
              className={styles.container__form__sectionMain}
            >
              <div
                style={sectionMainQuestions}
                className={styles.container__form__sectionMain__questions}
              >
                <div
                  style={sectionMainSection}
                  className={
                    styles.container__form__sectionMain__questions__section
                  }
                >
                  <div
                    style={sectionMainSectionTitle}
                    className={
                      styles.container__form__sectionMain__questions__section__title
                    }
                  >
                    <h3>Finance Checks (Reg 13)</h3>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Are there any discrepancies recorded? If yes what action
                      has been taken?
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_18}
                    </div>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Are all transactions supported by a viable receipt and
                      numbered correctly?
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_19}
                    </div>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Have receipts been scanned for the previous week?
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_20}
                    </div>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Have any loyalty cards, travel cards or access/discount
                      cards been moni red and recorded?
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_21}
                    </div>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Have any cashcards been accounted for and daily balance
                      logged?
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_22}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* INFECTION CONTROL */}
            <div
              // style={sectionMain}
              className={styles.container__form__sectionMain}
            >
              <div
                style={sectionMainQuestions}
                className={styles.container__form__sectionMain__questions}
              >
                <div
                  style={sectionMainSection}
                  className={
                    styles.container__form__sectionMain__questions__section
                  }
                >
                  <div
                    style={sectionMainSectionTitle}
                    className={
                      styles.container__form__sectionMain__questions__section__title
                    }
                  >
                    <h3>Infection control (Reg 15)</h3>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Is all necessary PPE in place and what does this consist
                      of? When was it checked by Who?
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_23}
                    </div>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Have medication cabinet temperatures been recorded?
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_24}
                    </div>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Where required paper hand towels, in situ, rather than
                      cloth towels that carry a risk regarding infection
                      control?
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_25}
                    </div>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Are the beds being changed according the frequency
                      required in the service? If there is incontinence in the
                      service is the bedding being changed daily. In the respite
                      unit, the record would show that beds are changed as and
                      when required and clean bedding that each new stay is
                      clearly documented.
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_26}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* PREMISES AND EQUIPMENT */}
            <div
              // style={sectionMain}
              className={styles.container__form__sectionMain}
            >
              <div
                style={sectionMainQuestions}
                className={styles.container__form__sectionMain__questions}
              >
                <div
                  style={sectionMainSection}
                  className={
                    styles.container__form__sectionMain__questions__section
                  }
                >
                  <div
                    style={sectionMainSectionTitle}
                    className={
                      styles.container__form__sectionMain__questions__section__title
                    }
                  >
                    <h3>Premises and equipment (Reg 15)</h3>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      List the furniture that was thoroughly cleaned this shift.
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_27}
                    </div>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      What has been cleaned in the bedroom?
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_28}
                    </div>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      List, wardrobes or cupboards or drawers that were sorted
                      out this shift.
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_29}
                    </div>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Please specify any other cleaning tasks this shift.
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_30}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* RECORDS */}
            <div
              // style={sectionMain}
              className={styles.container__form__sectionMain}
            >
              <div
                style={sectionMainQuestions}
                className={styles.container__form__sectionMain__questions}
              >
                <div
                  style={sectionMainSection}
                  className={
                    styles.container__form__sectionMain__questions__section
                  }
                >
                  <div
                    style={sectionMainSectionTitle}
                    className={
                      styles.container__form__sectionMain__questions__section__title
                    }
                  >
                    <h3>Records (Reg 14)</h3>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Are all meals and snacks entered on Log My Care and
                      WhatsApp?
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_31}
                    </div>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Have you posted Day Plan/Schedules on LMC (Long My Care)
                      and WhatsApp?
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_32}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* PM TASK LIST */}
            <div
              // style={sectionMain}
              className={styles.container__form__sectionMain}
            >
              <div
                style={sectionMainQuestions}
                className={styles.container__form__sectionMain__questions}
              >
                <div
                  style={sectionMainSection}
                  className={
                    styles.container__form__sectionMain__questions__section
                  }
                >
                  <div
                    style={sectionMainSectionTitle}
                    className={
                      styles.container__form__sectionMain__questions__section__title
                    }
                  >
                    <h3>PM Task list (Reg 9, 12, 13)</h3>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Verbal/Virtual Handover received? Communication book read
                      and signed? Virtual communication book checked?
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_33}
                    </div>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Money Checks completed? Cash tin counted and balances,
                      ensure all receipts in the cashbook.
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_34}
                    </div>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Any Appointments? (Check diary)
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_35}
                    </div>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Previous Handover checked?
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_36}
                    </div>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      All paperwork in s red in the sleep room securely and
                      staff aware of GDPR
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_37}
                    </div>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Medication Checks completed? (Including PRN) booking in
                      and reordering, daily s ck control checks. Any special
                      instructions such as a break in administering medication.
                      Make a note of medication cabinet temperatures.
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_38}
                    </div>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Personal care- Medication administered, hand and e nail
                      care, bathing/showering and skin care. Carry out service
                      users weight as required. Prescribed ointments or other
                      interventions carried out. Shaving and or menstrual cycle
                      care. Ironing of clothes.
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_39}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* IF REQUIRED */}
            <div
              // style={sectionMain}
              className={styles.container__form__sectionMain}
            >
              <div
                style={sectionMainQuestions}
                className={styles.container__form__sectionMain__questions}
              >
                <div
                  style={sectionMainSection}
                  className={
                    styles.container__form__sectionMain__questions__section
                  }
                >
                  <div
                    style={sectionMainSectionTitle}
                    className={
                      styles.container__form__sectionMain__questions__section__title
                    }
                  >
                    <h3>
                      If required, have any of the below forms been completed
                      and sent Head Office{' '}
                    </h3>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Incident Reports (including PRN) completed?
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_40}
                    </div>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Body Map completed?
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_41}
                    </div>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Behaviour reports or behaviour explorers completed
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_42}
                    </div>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      File note (family, friends, professionals phone calls,
                      visits, contact) completed?
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_43}
                    </div>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Mileage Book completed?
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_44}
                    </div>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Wake Night report completed if appropriate?
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_45}
                    </div>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Other.
                    </div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_46}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* SLEEPING OR WAKING NIGHT */}
            <div
              // style={sectionMain}
              className={styles.container__form__sectionMain}
            >
              <div
                style={sectionMainQuestions}
                className={styles.container__form__sectionMain__questions}
              >
                <div
                  style={sectionMainSection}
                  className={
                    styles.container__form__sectionMain__questions__section
                  }
                >
                  <div
                    style={sectionMainSectionTitle}
                    className={
                      styles.container__form__sectionMain__questions__section__title
                    }
                  >
                    <h3>
                      Sleeping or waking night report any matters arising from
                      the night
                    </h3>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    ></div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_47}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* SLEEPING OR WAKING NIGHT */}
            <div
              // style={sectionMain}
              className={styles.container__form__sectionMain}
            >
              <div
                style={sectionMainQuestions}
                className={styles.container__form__sectionMain__questions}
              >
                <div
                  style={sectionMainSection}
                  className={
                    styles.container__form__sectionMain__questions__section
                  }
                >
                  <div
                    style={sectionMainSectionTitle}
                    className={
                      styles.container__form__sectionMain__questions__section__title
                    }
                  >
                    <h3>
                      Are there any other concerns report? Have any complaints
                      been received and reported the Manager?
                    </h3>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      style={sectionMainSectionQuesitonLabel}
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    ></div>
                    <div
                      style={sectionMainTextarea}
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_48}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={styles.btnContainer}>
        <button
          type='primary'
          onClick={generateAndDownloadPDF}
          className={styles.btnContainer__downloadBtn}
        >
          DOWNLOAD FORM
        </button>
      </div>
    </div>
  );
};

export default ReadDailyForm;
