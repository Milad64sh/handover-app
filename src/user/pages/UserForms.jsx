import React from 'react';
import UserListOfForms from '../components/UserListOfForms';

const DUMMY_FORMS = [
  {
    id: 'p1',
    service: 'JS',
    date: '2024-02-18',
    staff: 'MS',
    question_1: 'test answer1',
    question_2: 'test answer2',
    question_3: 'test answer3',
    question_4: 'test answer4',
    question_5: 'test answer5',
    question_6: 'test answer6',
    question_7: 'test answer7',
    question_8: 'test answer8',
    question_9: 'test answer9',
    question_10: 'test answer10',
  },
  {
    id: 'p2',
    service: 'JB',
    date: '2024-02-18',
    staff: 'AA',
    question_1: 'test-2 answer1',
    question_2: 'test-2 answer2',
    question_3: 'test-2 answer3',
    question_4: 'test-2 answer4',
    question_5: 'test-2 answer5',
    question_6: 'test-2 answer6',
    question_7: 'test-2 answer7',
    question_8: 'test-2 answer8',
    question_9: 'test-2 answer9',
    question_10: 'test-2 answer10',
  },
];

const UserForms = () => {
  return <UserListOfForms forms={DUMMY_FORMS} />;
};

export default UserForms;
