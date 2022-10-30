import React from 'react';
import css from 'components/Statistics/Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p className={css.description}>Good: {good}</p>
      <p className={css.description}>Neutral: {neutral}</p>
      <p className={css.description}>Bad: {bad}</p>
      <p className={css.description}>Total: {total}</p>
      <p className={css.description}>Positive feedback: {positivePercentage}%</p>
    </>
  );
};
