import React from 'react';

import Modal from './Modal';
import styles from './errorModal.module.scss';

const ErrorModal = (props) => {
  return (
    <Modal
      onCancel={props.onClear}
      header='An Error Occurred!'
      show={!!props.error}
      className={styles.errorModal}
      footer={
        <button className={styles.errorModal__okBtn} onClick={props.onClear}>
          OKAY
        </button>
      }
    >
      <p className={styles.errorModal__btns}>{props.error}</p>
      <button className={styles.errorModal__closeBtn} onClick={props.onClear}>
        X
      </button>
    </Modal>
  );
};

export default ErrorModal;
