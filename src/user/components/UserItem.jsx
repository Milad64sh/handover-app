import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../shared/components/UIElements/Card';
import styles from './UserItem.module.scss';

const UserItem = (props) => {
  return (
    <>
      <li className={styles.userItem}>
        <Card className={styles.userItem__content}>
          <Link to={`/${props.id}/forms`}>
            <div className={styles.userItem__info}>
              <h2>{props.name}</h2>

              <h3>
                {props.formCount} {props.formCount === 1 ? 'Form' : 'Forms'}
              </h3>
              <h3>{props.roles}</h3>
              <h3>{props.active ? 'Active' : 'Inactive'}</h3>
            </div>
          </Link>
        </Card>
      </li>
    </>
  );
};

export default UserItem;
