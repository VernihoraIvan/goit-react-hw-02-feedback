import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <ul className={css.list}>
      <li className={css.list_item_good}>Good: {good}</li>
      <li className={css.list_item_neutral}>Neutral: {neutral}</li>
      <li className={css.list_item_bad}>Bad: {bad}</li>
      <li className={css.list_item_total}>Total: {total}</li>
      {positivePercentage ? (
        <li className={css.list_item_perc}>
          Total positive: {positivePercentage} %
        </li>
      ) : (
        ''
      )}
    </ul>
  </div>
);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
