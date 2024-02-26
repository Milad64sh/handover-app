import React from 'react';
import Card from '../../shared/components/UIElements/Card';
import styles from './userListOfForms.module.scss';
import FormItem from './FormItem';
import { Link } from 'react-router-dom';

const UserListOfForms = (props) => {
  if (props.forms.length === 0) {
    return (
      <div className={styles.noContent}>
        <Card>
          <h2>No form uploaded yet!</h2>
          <button>
            <Link to={'/weekly-handover'}>BACK TO HANDOVERS</Link>
          </button>
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
          creatorId={form.creator}
          question_1={form.question_1}
          question_2={form.question_2}
          question_3={form.question_3}
          question_4={form.question_4}
          question_5={form.question_5}
          question_6={form.question_6}
          question_7={form.question_7}
          question_8={form.question_8}
          question_9={form.question_9}
          question_10={form.question_10}
          onDelete={props.onDeleteForm}
        />
      ))}
    </ul>
  );
};

export default UserListOfForms;
