import React, { useEffect, useState, useContext } from 'react';

import html2pdf from 'html2pdf.js';
import { useParams } from 'react-router-dom';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/Http-hook';
import { AuthContext } from '../../shared/context/auth-context';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import styles from './readMonthlyForm.module.scss';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

const ReadMonthlyForm = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedForm, setLoadedForm] = useState();
  const monthlyFormId = useParams().formId;
  const [formState, setFormData] = useForm(
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
          },
          true
        );
      } catch (err) {
        console.log(err);
      }
    };
    fetchForm();
  }, [sendRequest, monthlyFormId, setFormData, auth.name]);

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
      filename: 'monthly_form.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
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
    color: '#ffd965',
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
  };
  const general = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    paddingLeft: '20px',
    paddingTop: '20px',
    paddingBottom: '20px',
    width: '100%',
    borderBottom: '1px solid #aaa9a9',
    backgroundColor: 'none',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
  };
  const item = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'start',
    width: '100%',
    padding: '5px 0',
  };
  const label = {
    flex: '0 0 15%',
    fontSize: '1.15rem',
    fontWeight: '400',
    textTransform: 'capitalize',
    letterSpacing: '1px',
    color: '#1d1d79',
    marginLeft: '40px',
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
    width: '90%',
    border: '1px solid #aaa9a9',
    borderRadius: '10px',
    margin: '20px 0',
  };
  const sectionMainTitle = {
    textTransform: 'uppercase',
    color: '#1d1d79',
    padding: '10px 0',
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
    width: '90%',
    padding: '5px 0',
    color: '#ffd965',
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
    padding: '10px 0',
    pageBreakInside: 'avoid',
  };
  const sectionMainTextarea = {
    borderRadius: '5px',
    padding: '20px 5px',
    border: '1px solid #aaa9a9',
    pageBreakInside: 'avoid',
  };
  return (
    <div className={styles.wrapper}>
      <ErrorModal error={error} onClear={clearError} />
      <div style={containerStyle} className={styles.container}>
        <div style={containerTitleStyle} className={styles.container__title}>
          <h2>monthly handover Form</h2>
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
                  {loadedForm.month}
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
                    <h3>Household Checks (Reg 9, 12 and 15)</h3>
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
                      Is all furniture fit for purpose is it cleaned and well
                      maintained. If there is fabric furniture, are they safety
                      approved?
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
                      Does the crockery reflect the risk assessments in place at
                      the service?
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
                      Do any rooms need decorating or maintenance?
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
                      Does any carpet need replacing or cleaning within the
                      property?
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
                    <h3>Medication (Reg 9, 12 and 15)</h3>
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
                      Are all medication stock checks completed and the weekly
                      Managers checks completed?
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
                      Has medication been ordered?
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
                      Has medication been booked in and out in the appropriate
                      book?
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
                      Have MAR charts been competed correctly, are there any
                      gaps?
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
                    <h3>Infection Control (Reg 15)</h3>
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
                      That adequate arrangements in place for dealing with
                      clinical waste? What are these arrangements is that
                      equipment in place or clinical waste bins collected and is
                      there a contract in place for this?
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
                      Was the mattress turned and aired this month what date did
                      this happen and who was involved? Is the mattress and
                      bedding in good condition?
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
                </div>
              </div>
            </div>
            {/* INFECTION */}
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
                    <h3>Room Cleaning (Reg 15)</h3>
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
                      Were the skirting boards cleaned this month? If so, what
                      day and by who?
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
                      Have cobwebs been removed?
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
                      Is paintwork clean?
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
                      Are there any marks on the wall and if so what has been
                      done to address this?
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
                      Do radiators have covers, and if no are they needed? Are
                      these clean?
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
                      Is flooring clean then satisfactory condition?
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
                      Does the room need redecoration or repair and if so, what
                      has been done about this and by Who?
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
                      Have lamp shades been cleaned, dusted, light switched been
                      cleaned, windowsills, door handles and are the rooms free
                      of odours?
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
                </div>
              </div>
            </div>
            {/* TASK */}
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
                    <h3>Fire Safety and Health & Safety</h3>
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
                      What date did the most recent fire drill take place?
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
                      Who took part in the fire drill?
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
                      How long did it take to evacuate?
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
                      Did anyone refuse to evacuate?
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
                      Were they able to take their work mobiles with them when
                      they evacuated. Please discuss the importance of this
                      because Work mobiles contain important phone numbers and
                      all care planning information.
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
                      Any matters arising or concerns highlighted following the
                      fire drill?
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
                      Any health and safety concerns arising from the fire
                      drill.
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
                      Was the grab bag accessible and taken with Staff during
                      evacuation?
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
                      Are there any barriers to take the grab bag with you?
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
                      Any health and safety discussions or education, taking
                      place this month with the people we support. If so, what
                      was covered?
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
                      If there is an alarm system, when was this last serviced;
                      The requirement is annually, is this in date?
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
                      There are fire extinguishers. When; the requirement
                      annually is this in date?
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
                      Were the smoke alarms tested weekly can you see evidence
                      of this in the handover book?
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
                      Were there any service or repair requirements from the
                      testing of the smoke alarms and if so, has this been
                      arranged?
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
                      Were there any service or repair requirements from the
                      testing of the smoke alarms and if so, has this been
                      arranged?
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
                      If there is emergency lighting, has this been checked and
                      what date there should be checked at least annually.
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
                      If there is a fire blanket in the kitchen, Is this in
                      date?
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
                      Is the property clean and tidy and free of clutter?
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
                      Are the fire exits clear of any obstructions?
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
                      Has all electrical equipment had PAT testing and have you
                      checked the date on the label on the item?
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
                      Plug sockets- To confirm that they are not overloaded and
                      causing a fire or trip hazard.
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
                      Is there an inventory of all items in the house and have
                      new items been added to the inventory?
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
                      Have the Grab bags been checked to see if they contain the
                      following items? What date were these checked? What were
                      the findings? Do any items below need replacing?
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

export default ReadMonthlyForm;
