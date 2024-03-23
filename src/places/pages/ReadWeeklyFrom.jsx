import React, { useEffect, useState, useContext } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
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

  const generateAndDownloadPDF = () => {
    const container = document.querySelector(`.${styles.container}`);
    const dpi = 300;
    html2canvas(container, { dpi: dpi }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const componentWidth = pdf.internal.pageSize.getWidth();
      const componentHeight = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      const fileName = 'weekly_form.pdf';
      pdf.save(fileName);
    });
  };

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      <div className={styles.container}>
        <div className={styles.container__title}>
          <h2>weekly checks Form</h2>
        </div>
        {!isLoading && loadedForm && (
          <div className={styles.container__form}>
            <div className={styles.container__form__general}>
              <div className={styles.container__form__general__item}>
                <div className={styles.container__form__general__item__label}>
                  Service:
                </div>
                <div className={styles.container__form__general__item__input}>
                  {loadedForm.service}
                </div>
              </div>
              <div className={styles.container__form__general__item}>
                <div className={styles.container__form__general__item__label}>
                  Date:
                </div>
                <div className={styles.container__form__general__item__input}>
                  {loadedForm.week}
                </div>
              </div>
              <div className={styles.container__form__general__item}>
                <div className={styles.container__form__general__item__label}>
                  Staff:
                </div>
                <div className={styles.container__form__general__item__input}>
                  {auth.name}
                </div>
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
    </>
  );
};

export default ReadWeeklyForm;
