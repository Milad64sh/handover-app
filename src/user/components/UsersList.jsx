import React from 'react';

import UserItem from './UserItem';
import Card from '../../shared/components/UIElements/Card';
import styles from './users-list.module.scss';

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className={styles.noContent}>
        <div className={styles.noContent__content}>
          <Card>
            <h2>No users found.</h2>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <ul className={styles.usersList}>
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user._id}
          image={user.image}
          name={user.name}
          roles={user.roles}
          active={user.active}
          formCount={user.forms.length}
          onDelete={props.onDeleteUser}
        />
      ))}
    </ul>
  );
};

export default UsersList;
