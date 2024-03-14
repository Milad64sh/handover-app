import React from 'react';
import FormItem from '../../user/components/FormItem';
import Card from '../../shared/components/UIElements/Card';
import styles from './formsList.module.scss';

const FormsList = (props) => {
  if (props.forms.length === 0) {
    return (
      <div className={styles.card}>
        <Card>
          <h2>No users found.</h2>
        </Card>
      </div>
    );
  }
  return (
    <ul className={styles.contentList}>
      {props.forms.map((form) => (
        <FormItem
          key={form.id}
          id={form.id}
          service={form.service}
          week={form.week}
          staff={form.staff}
          onDelete={props.onDeleteForm}
        />
      ))}
    </ul>
  );
};

export default FormsList;
