const express = require('express');

const router = express.Router();

const DUMMY_FORMS = [
  {
    id: 'f1',
    service: 'JS',
    week: '19-02-24',
    staff: 'MS',
    question_1: 'Q1',
    question_2: 'Q2',
    question_3: 'Q3',
    question_4: 'Q4',
    question_5: 'Q5',
    question_6: 'Q6',
    question_7: 'Q7',
    question_8: 'Q8',
    question_9: 'Q9',
    question_10: 'Q10',
  },
];

router.get('/:formid', (req, res, next) => {
  const formId = req.params.formid;
  const form = DUMMY_FORMS.find((f) => {
    return f.id === formId;
  });

  res.json({ form });
});

router.get('/user/:uid', (req, res, next) => {
  const userId = req.params.uid;
  const form = DUMMY_FORMS.find((f) => {
    return f.staff === userId;
  });
  return res.json({ form });
});

module.exports = router;
