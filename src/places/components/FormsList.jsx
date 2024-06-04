import React from 'react';
import FormItem from '../../user/components/FormItem';
import Card from '../../shared/components/UIElements/Card';
import styles from './formsList.module.scss';

const FormsList = (props) => {
  if (props.forms.length === 0) {
    return (
      <div className={styles.card}>
        <Card>
          <h2>No Form found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <>
      <div className={styles.container}>
        <ul className={styles.container__contentList}>
          {props.forms.map((form) => (
            <FormItem
              key={form.id}
              id={form.id}
              creator={form.creator}
              service={form.service}
              week={form.week}
              day={form.day}
              month={form.month}
              staff={form.staff}
              onDelete={props.onDeleteForm}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default FormsList;
