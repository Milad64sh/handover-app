import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../shared/components/UIElements/Card';
import { useHttpClient } from '../../shared/hooks/Http-hook';
import { AuthContext } from '../../shared/context/auth-context';
import Modal from '../../shared/components/UIElements/Modal';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import styles from './UserItem.module.scss';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { RiEditLine } from 'react-icons/ri';

const UserItem = (props) => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const showDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };
  const cancelDeleteUser = () => {
    setShowConfirmModal(false);
  };

  const confirmDeleteUser = async () => {
    setShowConfirmModal(false);
    try {
      await sendRequest(
        `${process.env.REACT_APP_BACKEND_URL}/api/users/${props.id}`,
        'DELETE',
        null,
        {
          Authorization: 'Bearer ' + auth.token,
        }
      );
      props.onDelete(props.id);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {isLoading && <LoadingSpinner asOverlay />}
      <ErrorModal error={error} onClear={clearError} />
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteUser}
        header='Are you sure?'
        contentClass={styles.userItem__modalContent}
        footerClass={styles.userItem__modalActions}
        footer={
          <>
            <div className={styles.userItem__modalActions__modalBtns}>
              <button
                className={styles.userItem__modalActions__modalBtns__btn}
                inverse
                onClick={cancelDeleteUser}
              >
                CANCEL
              </button>
              <button
                className={styles.userItem__modalActions__modalBtns__btn}
                danger
                onClick={confirmDeleteUser}
              >
                DELETE
              </button>
            </div>
          </>
        }
      >
        <p className={styles.userItem__modalActions__p}>
          Do you want to delete this form?
        </p>
      </Modal>
      <li className={styles.userItem}>
        <Card className={styles.userItem__content}>
          <div className={styles.userItem__content__info}>
            <h3 className={styles.userItem__content__info__name}>
              {props.name}
            </h3>

            <Link
              className={styles.userItem__content__info__link}
              to={`/${props.id}/forms`}
            >
              <h3 className={styles.userItem__content__info__forms}>
                {props.formCount} {props.formCount === 1 ? 'Form' : 'Forms'}
              </h3>
            </Link>
            <h3 className={styles.userItem__content__info__roles}>
              {props.roles}
            </h3>
            <h3 className={styles.userItem__content__info__active}>
              {props.active ? 'Active' : 'Inactive'}
            </h3>
          </div>
          <div className={styles.userItem__content__actions}>
            <button
              onClick={showDeleteWarningHandler}
              className={styles.userItem__content__actions__link}
            >
              <RiDeleteBin6Line />
            </button>
            <Link
              className={styles.userItem__content__actions__link}
              to={`/users/${props.id}`}
            >
              <RiEditLine />
            </Link>
          </div>
        </Card>
      </li>
    </>
  );
};

export default UserItem;
