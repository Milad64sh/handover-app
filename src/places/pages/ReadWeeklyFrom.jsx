import React, { useEffect, useState, useContext } from 'react';

import html2pdf from 'html2pdf.js';
import { useParams } from 'react-router-dom';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/Http-hook';
import { AuthContext } from '../../shared/context/auth-context';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import styles from './readWeeklyForm.module.scss';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

const ReadWeeklyForm = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [loadedForm, setLoadedForm] = useState();
  const weeklyFormId = useParams().formId;
  const [formState, setFormData] = useForm(
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
    },
    false
  );

  useEffect(() => {
    const fetchForm = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/weekly-handovers/${weeklyFormId}`
        );
        setLoadedForm(responseData.form);
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
          },
          true
        );
      } catch (err) {
        console.log(err);
      }
    };
    fetchForm();
  }, [sendRequest, weeklyFormId, setFormData, auth.name]);

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
      margin: 1,
      filename: 'weekly_form.pdf',
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
  };
  const sectionMainSectionQuesitonLabel = {
    padding: '10px 0',
  };
  return (
    <div className={styles.wrapper}>
      <ErrorModal error={error} onClear={clearError} />
      <div style={containerStyle} className={styles.container}>
        <div style={containerTitleStyle} className={styles.container__title}>
          <h2>weekly checks Form</h2>
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
                  {loadedForm.week}
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
                  {auth.name}
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
                      Reg 9 Person-centred care, Reg 12 Safe care and treatment,
                      Reg 13 Safeguarding service users
                    </h3>
                  </div>
                  <div
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Is there evedience that staff are completing weekly
                      maintenance reports?
                    </div>
                    <div
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_1}
                    </div>
                  </div>
                  <div
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Is there any outstanding maintenace issues for the
                      service?
                    </div>
                    <div
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_2}
                    </div>
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
                    <h3>Exterior Property</h3>
                  </div>
                  <div
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Is the exterior of the property in good order?
                    </div>
                    <div
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_3}
                    </div>
                  </div>
                  <div
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Is the exterior of the property in good order?
                    </div>
                    <div
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_4}
                    </div>
                  </div>
                  <div
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Are there any health and safety issues in regards to the
                      house and garden? Have these been reported?
                    </div>
                    <div
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
                    <div
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Have receipts been scanned for the previous week?
                    </div>
                    <div
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
                    <div
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Is there sufficient arrangements in place and appropriate
                      plastic bags to deal appropriately with household waste
                      and recycling? when was this checked and by who?
                    </div>
                    <div
                      className={
                        styles.container__form__sectionMain__questions__section__question__textarea
                      }
                    >
                      {loadedForm.question_7}
                    </div>
                  </div>
                  <div
                    className={
                      styles.container__form__sectionMain__questions__section__question
                    }
                  >
                    <div
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Are there adequate stock supplies of hand wash and hand
                      sanitiser?
                    </div>
                    <div
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
                    <div
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      First aid box checked?
                    </div>
                    <div
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
                    <div
                      className={
                        styles.container__form__sectionMain__questions__section__question__label
                      }
                    >
                      Fire alarms and carbon monoxide alarms checked?
                    </div>
                    <div
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

export default ReadWeeklyForm;
