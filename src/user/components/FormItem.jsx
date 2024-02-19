import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Card from '../../shared/components/UIElements/Card';
import Modal from '../../shared/components/UIElements/Modal';

import styles from './formItem.module.scss';

const FormItem = (props) => {
  const [showModal, setShowModal] = useState(false);

  const openModalHandler = () => setShowModal(true);
  const closeModalHandler = () => setShowModal(false);
  return (
    <>
      <Modal
        show={showModal}
        onCancel={closeModalHandler}
        header={props.staff}
        contentClass={styles.formItem__modalContent}
        footerClass={styles.formItem__modalActions}
        footer={<button onClick={closeModalHandler}>CLOSE</button>}
      >
        <div></div>
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
            <button>
              <Link to={`/weekly-handover/${props.id}`}>EDIT</Link>
            </button>
            <button>DELETE</button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default FormItem;
