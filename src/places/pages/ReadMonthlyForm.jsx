import React, { useEffect, useState, useContext } from 'react';

import html2pdf from 'html2pdf.js';
import { useParams } from 'react-router-dom';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/Http-hook';
import { AuthContext } from '../../shared/context/auth-context';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import styles from './readWeeklyForm.module.scss';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

const ReadMonthlyForm = () => {
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

  // const generateAndDownloadPDF = () => {
  //   const container = document.querySelector(`.${styles.container}`);
  //   const pdfWidth = 210;
  //   const pdfHeight = 297;

  //   html2canvas(container).then((canvas) => {
  //     const imgData = canvas.toDataURL('image/png');
  //     const pdf = new jsPDF({
  //       orientation: 'portrait',
  //       unit: 'mm',
  //       format: 'a4',
  //     });
  //     const imgProps = pdf.getImageProperties(imgData);
  //     const scaleX = pdfWidth / imgProps.width;
  //     const scaleY = pdfHeight / imgProps.height;
  //     const scale = Math.min(scaleX, scaleY);
  //     let yPos = 0;
  //     let remainingHeight = imgProps.height * scale;
  //     while (remainingHeight > 0) {
  //       const pageHeight = Math.min(remainingHeight, pdfHeight);
  //       pdf.addImage(imgData, 'PNG', 0, yPos, pdfWidth, pageHeight);
  //       yPos -= pdfHeight;
  //       if (remainingHeight > pdfHeight) {
  //         pdf.addPage();
  //       }
  //       remainingHeight -= pdfHeight;
  //     }
  //     const fileName = 'weekly_form.pdf';
  //     pdf.save(fileName);
  //   });
  // };

  const generateAndDownloadPDF = () => {
    const element = document.querySelector(`.${styles.container}`);
    const opt = {
      margin: 0.5,
      filename: 'daily_form.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
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
    padding: '10px 0',
  };
  const sectionMainTextarea = {
    borderRadius: '5px',
    padding: '20px 5px',
    border: '1px solid #aaa9a9',
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
            <div style={general} className={styles.container__form__general}>
              <div
                style={item}
                className={styles.container__form__general__item}
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
                className={styles.container__form__general__item}
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
                className={styles.container__form__general__item}
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
            </div>
            {/* MAINTENANCE */}
            <div
              style={sectionMain}
              className={styles.container__form__sectionMain}
            >
              <div
                style={sectionMainTitle}
                className={styles.container__form__sectionMain__title}
              >
                <h3>Household Checks (Reg 9, 12 and 15)</h3>
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
                      Is there evedience that staff are completing weekly
                      maintenance reports?
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
                      Is there any outstanding maintenace issues for the
                      service?
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
                    style={sectionMainSectionTitle}
                    className={
                      styles.container__form__sectionMain__questions__section__title
                    }
                  >
                    <h3>Exterior Property</h3>
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
                      Is the exterior of the property in good order?
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
                      Is the exterior of the property in good order?
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
                      Are there any health and safety issues in regards to the
                      house and garden? Have these been reported?
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
                </div>
              </div>
            </div>

            {/* FINANCE */}
            <div
              style={sectionMain}
              className={styles.container__form__sectionMain}
            >
              <div
                style={sectionMainTitle}
                className={styles.container__form__sectionMain__title}
              >
                <h3>finance checks</h3>
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
                    <h3>Reg 13 Safeguarding</h3>
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
                      {loadedForm.question_6}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* INFECTION */}
            <div
              style={sectionMain}
              className={styles.container__form__sectionMain}
            >
              <div
                style={sectionMainTitle}
                className={styles.container__form__sectionMain__title}
              >
                <h3>infection control</h3>
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
                    <h3>Reg 15 premises and equipment</h3>
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
                      Is there sufficient arrangements in place and appropriate
                      plastic bags to deal appropriately with household waste
                      and recycling? when was this checked and by who?
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
                      Are there adequate stock supplies of hand wash and hand
                      sanitiser?
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

            {/* TASK */}
            <div
              style={sectionMain}
              className={styles.container__form__sectionMain}
            >
              <div
                style={sectionMainTitle}
                className={styles.container__form__sectionMain__title}
              >
                <h3>task</h3>
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
                    <h3>Reg 12 Safeguarding</h3>
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
                      First aid box checked?
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
                </div>
              </div>
            </div>

            {/* TASK */}
            <div
              style={sectionMain}
              className={styles.container__form__sectionMain}
            >
              <div
                style={sectionMainTitle}
                className={styles.container__form__sectionMain__title}
              >
                <h3>task</h3>
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
                    sectionMainSectionTitle
                    className={
                      styles.container__form__sectionMain__questions__section__title
                    }
                  >
                    <h3>Reg 15 Premises and equipment</h3>
                  </div>
                  <div
                    style={sectionMainSectionQuesiton}
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      sectionMainSectionQuesitonLabel
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Fire alarms and carbon monoxide alarms checked?
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
