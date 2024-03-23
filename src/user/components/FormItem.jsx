import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../shared/context/auth-context';
import { useHttpClient } from '../../shared/hooks/Http-hook';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import Card from '../../shared/components/UIElements/Card';
import Modal from '../../shared/components/UIElements/Modal';

import styles from './formItem.module.scss';

const FormItem = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };
  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };
  const confirmDeleteHandler = async () => {
    setShowConfirmModal(false);
    try {
      await sendRequest(
        `http://localhost:5000/api/weekly-handovers/${props.id}`,

        'DELETE',
        null,
        {
          Authorization: 'Bearer ' + auth.token,
        }
      );
      props.onDelete(props.id);
    } catch (err) {
      console.log(auth.token);
      console.log(err);
    }
  };
  // const openModalHandler = () => setShowConfirmModal(true);
  // const closeModalHandler = () => setShowConfirmModal(false);
  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header='Are you sure?'
        contentClass={styles.formItem__modalContent}
        footerClass={styles.formItem__modalActions}
        footer={
          <>
            <div className={styles.formItem__modalActions__modalBtns}>
              <button
                className={styles.formItem__modalActions__modalBtns__btn}
                inverse
                onClick={cancelDeleteHandler}
              >
                CANCEL
              </button>
              <button
                className={styles.formItem__modalActions__modalBtns__btn}
                danger
                onClick={confirmDeleteHandler}
              >
                DELETE
              </button>
            </div>
          </>
        }
      >
        <p className={styles.formItem__modalActions__p}>
          Do you want to delete this form?
        </p>
      </Modal>
      <li className={styles.formItem}>
        <Card className={styles.formItem__card}>
          {isLoading && <LoadingSpinner asOverlay />}
          <div className={styles.formItem__card__content}>
            <div className={styles.formItem__card__content__service}>
              <span>service name:</span>
              <p>{props.service}</p>
            </div>
            <div className={styles.formItem__card__content__date}>
              <span>week:</span>
              <p>{props.week}</p>
            </div>
          </div>
          <div className={styles.formItem__card__actions}>
            <div className={styles.formItem__card__actions__action}>
              <Link
                className={styles.formItem__card__actions__action__link}
                to={`/weekly-handovers/${props.id}/view-form`}
              >
                <button className={styles.formItem__card__actions__action__btn}>
                  READ
                </button>
              </Link>
            </div>
            {auth.isLoggedIn &&
              (auth.userId === props.creatorId || auth.isManager) && (
                <>
                  <div className={styles.formItem__card__actions__action}>
                    <Link
                      className={styles.formItem__card__actions__action__link}
                      to={`/weekly-handovers/${props.id}`}
                    >
                      <button
                        className={styles.formItem__card__actions__action__btn}
                      >
                        EDIT
                      </button>
                    </Link>
                  </div>
                  {auth.isLoggedIn &&
                    (auth.userId === props.creatorId || auth.isManager) && (
                      <div className={styles.formItem__card__actions__action}>
                        <button
                          className={
                            styles.formItem__card__actions__action__deleteBtn
                          }
                          onClick={showDeleteWarningHandler}
                        >
                          DELETE
                        </button>
                      </div>
                    )}
                </>
              )}
          </div>
        </Card>
      </li>
    </>
  );
};

export default FormItem;
