import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../shared/context/auth-context';
import { useHttpClient } from '../../shared/hooks/Http-hook';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

import Card from '../../shared/components/UIElements/Card';
import Modal from '../../shared/components/UIElements/Modal';

import styles from './formItem.module.scss';

const FormItem = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);

  const showDeleteWarningHandler = () => {
    setShowModal(true);
  };
  const cancelDeleteHandler = () => {
    setShowModal(false);
  };
  const confirmDeleteHandler = async () => {
    setShowModal(false);
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
    } catch (err) {}
  };
  // const openModalHandler = () => setShowModal(true);
  // const closeModalHandler = () => setShowModal(false);
  return (
    <>
      {/* <Modal
        show={showModal}
        onCancel={cancelDeleteHandler}
        header='Are you sure?'
        contentClass={styles.formItem__modalContent}
        footerClass={styles.formItem__modalActions}
        footer={
          <React.Fragment>
            <button inverse onClick={cancelDeleteHandler}>
              CANCEL
            </button>
            <button danger onClick={confirmDeleteHandler}>
              DELETE
            </button>
          </React.Fragment>
        }
      >
        <p>Do you want to delete this form?</p>
      </Modal> */}
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
            <button className={styles.formItem__card__actions__action}>
              VIEW FORM
            </button>
            {auth.isLoggedIn && auth.userId === props.creatorId && (
              <>
                <Link
                  className={styles.formItem__card__actions__link}
                  to={`/weekly-handovers/${props.id}`}
                >
                  <button className={styles.formItem__card__actions__action}>
                    EDIT
                  </button>
                </Link>
                <button
                  className={styles.formItem__card__actions__action}
                  onClick={confirmDeleteHandler}
                >
                  DELETE
                </button>
              </>
            )}
          </div>
        </Card>
      </li>
    </>
  );
};

export default FormItem;
