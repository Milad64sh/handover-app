import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../shared/context/auth-context';

import Card from '../../shared/components/UIElements/Card';
import Modal from '../../shared/components/UIElements/Modal';

import styles from './formItem.module.scss';

const FormItem = (props) => {
  const auth = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);

  const showDeleteWarningHandler = () => {
    setShowModal(true);
  };
  const cancelDeleteHandler = () => {
    setShowModal(false);
  };
  const confirmDeleteHandler = () => {
    setShowModal(false);
    console.log('DELETING...');
  };
  // const openModalHandler = () => setShowModal(true);
  // const closeModalHandler = () => setShowModal(false);
  return (
    <>
      <Modal
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
      </Modal>
      <li className={styles.formItem}>
        <Card className={styles.formItem__card}>
          <div className={styles.formItem__card__content}>
            <div className={styles.formItem__card__content__service}>
              <span>service name:</span>
              <p>{props.service}</p>
            </div>
            <div className={styles.formItem__card__content__date}>
              <span>week:</span>
              <p>{props.date}</p>
            </div>
          </div>
          <div className={styles.formItem__card__actions}>
            <button>VIEW FORM</button>
            {auth.isLoggedIn && (
              <>
                <button>
                  <Link to={`/weekly-handover/${props.id}`}>EDIT</Link>
                </button>
                <button onClick={showDeleteWarningHandler}>DELETE</button>
              </>
            )}
          </div>
        </Card>
      </li>
    </>
  );
};

export default FormItem;
