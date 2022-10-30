import css from 'components/FeedbackOptions/FeedbackOptions.module.css';
// import React from 'react';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((option, index) => (
    <button
      key={index}
      id={option}
      className={css.button}
      type="button"
      onClick={onLeaveFeedback}
    >
      {option}
    </button>
  ));
};
