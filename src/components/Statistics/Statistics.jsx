import css from  './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <ul className={css.list_fidbeck}>
        <li className={css.item}>
          <p className={css.text}>Good</p>:<span>{good}</span>
        </li>
        <li className={css.item}>
          <p className={css.text}>Neutral</p>:<span>{neutral}</span>
        </li>
        <li className={css.item}>
          <p className={css.text}>Bad</p>:<span>{bad}</span>
        </li>
        <li className={css.item}>
          <p className={css.text}>Total</p>:<span>{total()}</span>
        </li>
        <li className={css.item}>
          <p className={css.text}>Positive feedback</p>:
          <span>{positivePercentage()}%</span>
        </li>
      </ul>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
};