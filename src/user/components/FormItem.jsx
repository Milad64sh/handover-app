import React from 'react';

import Card from '../../shared/components/UIElements/Card';

import styles from './formItem.module.scss';

const FormItem = (props) => {
  return (
    <li className={styles.formItem}>
      <Card className={styles.formItem}>
        <div className={styles.formItem__content}>
          <div className={styles.formItem__content__service}>
            {props.service}
          </div>
          <div className={styles.formItem__content__service}>{props.date}</div>
        </div>
        <div className={styles.formItem__actions}>
          <button>VIEW FORM</button>
          <button>EDIT</button>
          <button>DELETE</button>
        </div>
      </Card>
    </li>
  );
};

export default FormItem;
