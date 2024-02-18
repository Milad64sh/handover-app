import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from '../../shared/hooks/form-hook';

// For using useForm hook in this component check video 66;

const UpdateWeeklyForm = () => {
  const weeklyFormId = useParams().weeklyFormId;
  const [formState, inputHandler, setFormData] = useForm(
    {
      service: {
        value: '',
        isValid: false,
      },
      week: {
        value: '',
        isValid: false,
      },
      staff: {
        value: '',
        isValid: false,
      },
      question_1: {
        value: '',
        isValid: false,
      },
      question_2: {
        value: '',
        isValid: false,
      },
      question_3: {
        value: '',
        isValid: false,
      },
      question_4: {
        value: '',
        isValid: false,
      },
      question_5: {
        value: '',
        isValid: false,
      },
      question_6: {
        value: '',
        isValid: false,
      },
      question_7: {
        value: '',
        isValid: false,
      },
      question_8: {
        value: '',
        isValid: false,
      },
      question_9: {
        value: '',
        isValid: false,
      },
      question_10: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  // HERE CALL SETFORMDATA AFTER GETTING DATA FROM DATABASE: value should be set to object accessed from database, so empty string should be changed after creating backend and accessing server.
  useEffect(() => {
    setFormData(
      {
        service: {
          value: '',
          isValid: true,
        },
        week: {
          value: '',
          isValid: true,
        },
        staff: {
          value: '',
          isValid: true,
        },
        question_1: {
          value: '',
          isValid: true,
        },
        question_2: {
          value: '',
          isValid: true,
        },
        question_3: {
          value: '',
          isValid: true,
        },
        question_4: {
          value: '',
          isValid: true,
        },
        question_5: {
          value: '',
          isValid: true,
        },
        question_6: {
          value: '',
          isValid: true,
        },
        question_7: {
          value: '',
          isValid: true,
        },
        question_8: {
          value: '',
          isValid: true,
        },
        question_9: {
          value: '',
          isValid: true,
        },
        question_10: {
          value: '',
          isValid: true,
        },
      },
      true
      //next dependecy should set after creating server and accessing database
    );
  }, [setFormData]);

  const updateWeeklyForm = (event) => {};
  const weeklyHandoverId = useParams().weeklyHandoverId;
  // to finish this component watch video 64 again after backend done;
  return <div></div>;
};

export default UpdateWeeklyForm;
